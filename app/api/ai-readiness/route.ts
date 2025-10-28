import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import { storeAiReadinessAssessment, type AiReadinessPayload } from "@/lib/storage"

const readinessSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  role: z.string().min(1),
  teamSize: z.string().min(1),
  currentSystems: z.string().min(1),
  dataSources: z.string().min(1),
  aiExperience: z.array(z.string()).min(1),
  topGoals: z.string().min(1),
  successMetrics: z.string().min(1),
  timeline: z.string().min(1),
  budgetRange: z.string().min(1),
  complianceNeeds: z.string().optional(),
  notes: z.string().optional(),
})

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = readinessSchema.parse(body) as AiReadinessPayload

    const storedAssessment = await storeAiReadinessAssessment(payload)

    try {
      await Promise.all([
        sendConfirmationEmail({
          to: payload.email,
          name: `${payload.firstName} ${payload.lastName}`.trim(),
          template: "ai-readiness",
        }),
        sendNotificationEmail({
          subject: "New AI readiness assessment",
          details: [
            { label: "Name", value: `${payload.firstName} ${payload.lastName}`.trim() },
            { label: "Email", value: payload.email },
            { label: "Company", value: payload.company },
            { label: "Role", value: payload.role },
            { label: "Team size", value: payload.teamSize },
            { label: "Systems", value: payload.currentSystems },
            { label: "Data sources", value: payload.dataSources },
            { label: "AI experience", value: payload.aiExperience.join(", ") },
            { label: "Top goals", value: payload.topGoals },
            { label: "Success metrics", value: payload.successMetrics },
            { label: "Timeline", value: payload.timeline },
            { label: "Budget", value: payload.budgetRange },
            payload.complianceNeeds ? { label: "Compliance needs", value: payload.complianceNeeds } : null,
            payload.notes ? { label: "Additional notes", value: payload.notes } : null,
          ].filter(Boolean) as { label: string; value: string }[],
        }),
      ])
    } catch (emailError) {
      console.error("AI readiness email delivery failed", emailError)
    }

    return NextResponse.json({ success: true, id: storedAssessment.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid assessment", details: error.flatten() }, { status: 400 })
    }

    console.error("Failed to submit AI readiness assessment", error)
    return NextResponse.json({ error: "Unable to submit your assessment right now." }, { status: 500 })
  }
}
