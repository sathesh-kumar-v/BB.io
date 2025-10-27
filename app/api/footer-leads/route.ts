import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail } from "@/lib/email"
import { fetchFooterLeads, storeFooterLead, type FooterLeadPayload } from "@/lib/storage"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const footerLeadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().min(1),
  industry: z.string().min(1),
  preferredCallTime: z.string().min(1),
})


export async function GET() {
  try {
    const leads = await fetchFooterLeads()

    return NextResponse.json({ leads })
  } catch (error) {
    console.error("Failed to load footer leads", error)
    return NextResponse.json({ error: "Unable to load footer leads" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = footerLeadSchema.parse(body) as FooterLeadPayload

    const storedRecord = await storeFooterLead(payload)

    try {
      await sendConfirmationEmail({
        to: payload.email,
        name: payload.name,
        template: "footer-lead",
      })
    } catch (emailError) {
      console.error("Footer confirmation email failed", emailError)
    }

    return NextResponse.json({ success: true, id: storedRecord.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid lead submission", details: error.flatten() }, { status: 400 })
    }

    console.error("Footer lead submission failed", error)
    return NextResponse.json({ error: "Unable to save lead" }, { status: 500 })
  }
}
