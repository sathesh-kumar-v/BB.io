import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"

const sessionSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(3),
  company: z.string().min(1),
  industry: z.string().min(1),
  biggestChallenge: z.string().min(1),
  meetingFormat: z.enum(["video", "phone"]),
  preferredTime: z.string().min(1),
  notes: z.string().optional(),
})

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = sessionSchema.parse(body)

    await Promise.all([
      sendConfirmationEmail({
        to: payload.email,
        name: `${payload.firstName} ${payload.lastName}`.trim(),
        template: "quick-session",
      }),
      sendNotificationEmail({
        subject: "New quick session request",
        details: [
          { label: "Name", value: `${payload.firstName} ${payload.lastName}`.trim() },
          { label: "Email", value: payload.email },
          { label: "Phone", value: payload.phone },
          { label: "Company", value: payload.company },
          { label: "Industry", value: payload.industry },
          { label: "Challenge", value: payload.biggestChallenge },
          { label: "Meeting format", value: payload.meetingFormat === "video" ? "Video" : "Phone" },
          { label: "Preferred time", value: payload.preferredTime },
          payload.notes ? { label: "Additional notes", value: payload.notes } : null,
        ].filter(Boolean) as { label: string; value: string }[],
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid session request", details: error.flatten() }, { status: 400 })
    }

    console.error("Failed to submit quick session request", error)
    return NextResponse.json({ error: "Unable to submit your request right now." }, { status: 500 })
  }
}
