import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import { storeHeroLead, type HeroLeadPayload } from "@/lib/storage"

const heroLeadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  phone: z.string().optional(),
  projectFocus: z.string().min(1),
  goals: z.string().optional(),
})

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = heroLeadSchema.parse(body) as HeroLeadPayload

    const storedLead = await storeHeroLead(payload)

    try {
      await Promise.all([
        sendConfirmationEmail({
          to: payload.email,
          name: payload.name,
          template: "hero-lead",
        }),
        sendNotificationEmail({
          subject: "New hero lead captured",
          details: [
            { label: "Name", value: payload.name },
            { label: "Email", value: payload.email },
            { label: "Company", value: payload.company },
            payload.phone ? { label: "Phone", value: payload.phone } : null,
            { label: "Project focus", value: payload.projectFocus },
            payload.goals ? { label: "Goals", value: payload.goals } : null,
          ].filter(Boolean) as { label: string; value: string }[],
        }),
      ])
    } catch (emailError) {
      console.error("Hero lead email delivery failed", emailError)
    }

    return NextResponse.json({ success: true, id: storedLead.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid submission", details: error.flatten() }, { status: 400 })
    }

    console.error("Failed to submit hero contact form", error)
    return NextResponse.json({ error: "Unable to submit your details right now." }, { status: 500 })
  }
}
