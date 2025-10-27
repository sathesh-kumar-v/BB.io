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

export type FormSubmission = {
  id: string
  type: "Consultation" | "Footer Lead"
  name: string
  email: string
  phone?: string | null
  company?: string | null
  details?: string | null
  source: string
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

type ConsultationRow = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  bottleneck: string
  additional_info: string | null
  hear_about: string | null
  created_at: string
}

type FooterLeadRow = {
  id: string
  name: string
  email: string
  company_name: string
  industry: string
  preferred_call_time: string
  created_at: string
}

function normalizeString(value: string | null | undefined): string | null {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

export async function fetchFormSubmissions(): Promise<FormSubmission[]> {
  await ensureLeadTables()

  const pool = getPool()

  const [consultationResult, footerLeadResult] = await Promise.all([
    pool.query<ConsultationRow>(
      `
        SELECT
          id,
          first_name,
          last_name,
          email,
          phone,
          company,
          bottleneck,
          additional_info,
          hear_about,
          created_at
        FROM consultations
      `,
    ),
    pool.query<FooterLeadRow>(
      `
        SELECT
          id,
          name,
          email,
          company_name,
          industry,
          preferred_call_time,
          created_at
        FROM footer_leads
      `,
    ),
  ])

  const consultationSubmissions: FormSubmission[] = consultationResult.rows.map((row) => {
    const createdAt = toIsoTimestamp(row.created_at)
    const details = normalizeString(row.additional_info) ?? normalizeString(row.bottleneck)
    const heardFrom = normalizeString(row.hear_about)
    const company = normalizeString(row.company)
    const phone = normalizeString(row.phone)
    const fullName = `${normalizeString(row.first_name) ?? ""} ${normalizeString(row.last_name) ?? ""}`.trim()

    return {
      id: row.id,
      type: "Consultation",
      name: fullName || row.first_name || row.last_name,
      email: row.email,
      phone: phone ?? undefined,
      company: company ?? undefined,
      details: details ?? undefined,
      source: heardFrom ? `Consultation Form (${heardFrom})` : "Consultation Form",
      createdAt,
    }
  })

  const footerLeadSubmissions: FormSubmission[] = footerLeadResult.rows.map((row) => {
    const createdAt = toIsoTimestamp(row.created_at)
    const industry = normalizeString(row.industry)
    const preferredCall = normalizeString(row.preferred_call_time)
    const infoParts = [
      industry ? `Industry: ${industry}` : null,
      preferredCall ? `Preferred call: ${preferredCall}` : null,
    ].filter(Boolean) as string[]
    const company = normalizeString(row.company_name)
    const name = normalizeString(row.name) ?? row.name

    return {
      id: row.id,
      type: "Footer Lead",
      name,
      email: row.email,
      company: company ?? undefined,
      details: infoParts.length > 0 ? infoParts.join(" • ") : undefined,
      source: "Footer Lead Form",
      createdAt,
    }
  })

  return [...consultationSubmissions, ...footerLeadSubmissions].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}


export async function fetchFooterLeads(): Promise<StoredFooterLead[]> {
  await ensureLeadTables()

  const pool = getPool()

  const result = await pool.query<FooterLeadRow>(
    `
      SELECT
        id,
        name,
        email,
        company_name,
        industry,
        preferred_call_time,
        created_at
      FROM footer_leads
      ORDER BY created_at DESC
    `,
  )

  return result.rows.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    companyName: row.company_name,
    industry: row.industry,
    preferredCallTime: row.preferred_call_time,
    createdAt: toIsoTimestamp(row.created_at),
  }))
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
