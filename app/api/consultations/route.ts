import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail } from "@/lib/email"
import { storeConsultation, type ConsultationPayload } from "@/lib/storage"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const consultationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(3),
  company: z.string().min(1),
  industry: z.string().min(1),
  industryOther: z.string().optional(),
  companySize: z.string().min(1),
  revenue: z.string().optional(),
  bottleneck: z.string().min(1),
  challenges: z.array(z.string()),
  challengesOther: z.string().optional(),
  timeConsumers: z.string().optional(),
  automationExperience: z.string().min(1),
  timeline: z.string().min(1),
  drivingFactors: z.array(z.string()),
  drivingFactorsOther: z.string().optional(),
  consultationFormat: z.string().min(1),
  bestTimes: z.array(z.string()),
  additionalInfo: z.string().optional(),
  hearAbout: z.string().optional(),
  referralName: z.string().optional(),
  emailUpdates: z.boolean(),
  weeklyInsights: z.boolean(),
  eventNotifications: z.boolean(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = consultationSchema.parse(body) as ConsultationPayload

    const storedRecord = await storeConsultation(payload)

    if (payload.emailUpdates) {
      try {
        await sendConfirmationEmail({
          to: payload.email,
          name: `${payload.firstName} ${payload.lastName}`.trim(),
          template: "consultation",
        })
      } catch (emailError) {
        console.error("Consultation confirmation email failed", emailError)
      }
    }

    return NextResponse.json({ success: true, id: storedRecord.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid consultation request", details: error.flatten() },
        { status: 400 },
      )
    }

    console.error("Consultation submission failed", error)
    return NextResponse.json({ error: "Unable to submit consultation request" }, { status: 500 })
  }
}
