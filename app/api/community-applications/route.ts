import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import {
  fetchCommunityApplications,
  storeCommunityApplication,
  type CommunityApplicationPayload,
} from "@/lib/storage"

const applicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  industry: z.string().min(1),
  teamSize: z.string().min(1),
  challenge: z.string().min(1),
  hasAutomation: z.string().min(1),
  outcome: z.string().min(1),
  referral: z.string().optional(),
  linkedin: z.string().optional(),
})

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const applications = await fetchCommunityApplications()

    return NextResponse.json({ applications })
  } catch (error) {
    console.error("Failed to load community applications", error)
    return NextResponse.json({ error: "Unable to load community applications" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = applicationSchema.parse(body) as CommunityApplicationPayload

    const storedApplication = await storeCommunityApplication(payload)

    try {
      await Promise.all([
        sendConfirmationEmail({
          to: payload.email,
          name: `${payload.firstName} ${payload.lastName}`.trim(),
          template: "community-signup",
        }),
        sendNotificationEmail({
          subject: "New community application",
          details: [
            { label: "Name", value: `${payload.firstName} ${payload.lastName}`.trim() },
            { label: "Email", value: payload.email },
            { label: "Company", value: payload.company },
            { label: "Industry", value: payload.industry },
            { label: "Team size", value: payload.teamSize },
            { label: "Biggest challenge", value: payload.challenge },
            { label: "Current automation", value: payload.hasAutomation },
            { label: "Desired outcome", value: payload.outcome },
            payload.referral ? { label: "Referral", value: payload.referral } : null,
            payload.linkedin ? { label: "LinkedIn", value: payload.linkedin } : null,
          ].filter(Boolean) as { label: string; value: string }[],
        }),
      ])
    } catch (emailError) {
      console.error("Community application email delivery failed", emailError)
    }

    return NextResponse.json({ success: true, id: storedApplication.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid community application", details: error.flatten() }, { status: 400 })
    }

    console.error("Failed to submit community application", error)
    return NextResponse.json({ error: "Unable to submit your application right now." }, { status: 500 })
  }
}
