import { randomUUID } from "crypto"
import { ensureLeadTables, getPool } from "./db"

export type ConsultationPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  industryOther?: string
  companySize: string
  revenue?: string
  bottleneck: string
  challenges: string[]
  challengesOther?: string
  timeConsumers?: string
  automationExperience: string
  timeline: string
  drivingFactors: string[]
  drivingFactorsOther?: string
  consultationFormat: string
  bestTimes: string[]
  additionalInfo?: string
  hearAbout?: string
  referralName?: string
  emailUpdates: boolean
  weeklyInsights: boolean
  eventNotifications: boolean
}

export type FooterLeadPayload = {
  name: string
  email: string
  companyName: string
  industry: string
  preferredCallTime: string
}

export type StoredConsultation = ConsultationPayload & {
  id: string
  createdAt: string
}

export type StoredFooterLead = FooterLeadPayload & {
  id: string
  createdAt: string
}

function toIsoTimestamp(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString()
  }

  if (typeof value === "string") {
    const date = new Date(value)
    if (!Number.isNaN(date.getTime())) {
      return date.toISOString()
    }
  }

  return new Date().toISOString()
}

export async function storeConsultation(payload: ConsultationPayload): Promise<StoredConsultation> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO consultations (
        id,
        first_name,
        last_name,
        email,
        phone,
        company,
        industry,
        industry_other,
        company_size,
        revenue,
        bottleneck,
        challenges,
        challenges_other,
        time_consumers,
        automation_experience,
        timeline,
        driving_factors,
        driving_factors_other,
        consultation_format,
        best_times,
        additional_info,
        hear_about,
        referral_name,
        email_updates,
        weekly_insights,
        event_notifications
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15,
        $16,
        $17,
        $18,
        $19,
        $20,
        $21,
        $22,
        $23,
        $24,
        $25,
        $26
      )
      RETURNING created_at
    `,
    [
      id,
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.phone,
      payload.company,
      payload.industry,
      payload.industryOther ?? null,
      payload.companySize,
      payload.revenue ?? null,
      payload.bottleneck,
      payload.challenges,
      payload.challengesOther ?? null,
      payload.timeConsumers ?? null,
      payload.automationExperience,
      payload.timeline,
      payload.drivingFactors,
      payload.drivingFactorsOther ?? null,
      payload.consultationFormat,
      payload.bestTimes,
      payload.additionalInfo ?? null,
      payload.hearAbout ?? null,
      payload.referralName ?? null,
      payload.emailUpdates,
      payload.weeklyInsights,
      payload.eventNotifications,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}

export async function storeFooterLead(payload: FooterLeadPayload): Promise<StoredFooterLead> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO footer_leads (
        id,
        name,
        email,
        company_name,
        industry,
        preferred_call_time
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING created_at
    `,
    [
      id,
      payload.name,
      payload.email,
      payload.companyName,
      payload.industry,
      payload.preferredCallTime,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}
