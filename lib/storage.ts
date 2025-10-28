import { randomUUID } from "crypto"
import { readFile } from "fs/promises"
import path from "path"
import {
  FORM_SUBMISSION_TYPES,
  createEmptySubmissionGroups,
  type FormSubmission,
  type FormSubmissionType,
  type FormSubmissionsResponse,
  type GroupedFormSubmissions,
} from "@/types/forms"
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

export type HeroLeadPayload = {
  name: string
  email: string
  company: string
  phone?: string
  projectFocus: string
  goals?: string
}

export type QuickSessionPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  biggestChallenge: string
  meetingFormat: "video" | "phone"
  preferredTime: string
  notes?: string
}

export type CommunityApplicationPayload = {
  firstName: string
  lastName: string
  email: string
  company: string
  industry: string
  teamSize: string
  challenge: string
  hasAutomation: string
  outcome: string
  referral?: string
  linkedin?: string
}

export type AiReadinessPayload = {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  teamSize: string
  currentSystems: string
  dataSources: string
  aiExperience: string[]
  topGoals: string
  successMetrics: string
  timeline: string
  budgetRange: string
  complianceNeeds?: string
  notes?: string
}

export type SubscriptionPayload = {
  email: string
  type: "newsletter" | "community"
}

export type StoredConsultation = ConsultationPayload & {
  id: string
  createdAt: string
}

export type StoredFooterLead = FooterLeadPayload & {
  id: string
  createdAt: string
}

export type StoredHeroLead = HeroLeadPayload & {
  id: string
  createdAt: string
}

export type StoredQuickSession = QuickSessionPayload & {
  id: string
  createdAt: string
}

export type StoredCommunityApplication = CommunityApplicationPayload & {
  id: string
  createdAt: string
}

export type StoredAiReadinessAssessment = AiReadinessPayload & {
  id: string
  createdAt: string
}

export type StoredSubscription = SubscriptionPayload & {
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

type HeroLeadRow = {
  id: string
  name: string
  email: string
  company: string
  phone: string | null
  project_focus: string
  goals: string | null
  created_at: string
}

type QuickSessionRow = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  industry: string
  biggest_challenge: string
  meeting_format: string
  preferred_time: string
  notes: string | null
  created_at: string
}

type CommunityApplicationRow = {
  id: string
  first_name: string
  last_name: string
  email: string
  company: string
  industry: string
  team_size: string
  challenge: string
  has_automation: string
  outcome: string
  referral: string | null
  linkedin: string | null
  created_at: string
}

type AiReadinessRow = {
  id: string
  first_name: string
  last_name: string
  email: string
  company: string
  role: string
  team_size: string
  current_systems: string
  data_sources: string
  ai_experience: string[]
  top_goals: string
  success_metrics: string
  timeline: string
  budget_range: string
  compliance_needs: string | null
  notes: string | null
  created_at: string
}

type SubscriptionRow = {
  id: string
  email: string
  subscription_type: string
  created_at: string
}

function normalizeString(value: string | null | undefined): string | null {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

function joinDetails(parts: Array<string | null | undefined>): string | undefined {
  const filtered = parts
    .map((part) => normalizeString(part ?? undefined))
    .filter((part): part is string => Boolean(part))

  if (filtered.length === 0) {
    return undefined
  }

  return filtered.join(" • ")
}

function sortByCreatedAtDesc(entries: FormSubmission[]): FormSubmission[] {
  return [...entries].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

function sortGroupedSubmissions(groups: GroupedFormSubmissions): FormSubmission[] {
  const combined = FORM_SUBMISSION_TYPES.flatMap((type) => groups[type])
  return sortByCreatedAtDesc(combined)
}

function mapConsultationRow(row: ConsultationRow): FormSubmission {
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
}

function mapFooterLeadRow(row: FooterLeadRow): FormSubmission {
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
}

function mapHeroLeadRow(row: HeroLeadRow): FormSubmission {
  const createdAt = toIsoTimestamp(row.created_at)
  const phone = normalizeString(row.phone ?? undefined)
  const company = normalizeString(row.company)
  const name = normalizeString(row.name) ?? row.name
  const details = joinDetails([
    `Project focus: ${row.project_focus}`,
    row.goals ? `Goals: ${row.goals}` : null,
  ])

  return {
    id: row.id,
    type: "Hero Lead",
    name,
    email: row.email,
    phone: phone ?? undefined,
    company: company ?? undefined,
    details,
    source: "Hero Contact Form",
    createdAt,
  }
}

function mapQuickSessionRow(row: QuickSessionRow): FormSubmission {
  const createdAt = toIsoTimestamp(row.created_at)
  const fullName = `${normalizeString(row.first_name) ?? ""} ${normalizeString(row.last_name) ?? ""}`.trim()
  const formattedMeeting = normalizeString(row.meeting_format)?.toLowerCase() === "phone" ? "Phone" : "Video"
  const details = joinDetails([
    `Challenge: ${row.biggest_challenge}`,
    formattedMeeting ? `Format: ${formattedMeeting}` : null,
    `Preferred time: ${row.preferred_time}`,
    row.notes ? `Notes: ${row.notes}` : null,
  ])

  return {
    id: row.id,
    type: "Quick Session",
    name: fullName || row.first_name || row.last_name,
    email: row.email,
    phone: normalizeString(row.phone) ?? undefined,
    company: normalizeString(row.company) ?? undefined,
    details,
    source: "Quick Session Form",
    createdAt,
  }
}

function mapCommunityApplicationRow(row: CommunityApplicationRow): FormSubmission {
  const createdAt = toIsoTimestamp(row.created_at)
  const fullName = `${normalizeString(row.first_name) ?? ""} ${normalizeString(row.last_name) ?? ""}`.trim()
  const details = joinDetails([
    `Industry: ${row.industry}`,
    `Team size: ${row.team_size}`,
    `Challenge: ${row.challenge}`,
    `Current automation: ${row.has_automation}`,
    `Desired outcome: ${row.outcome}`,
    row.referral ? `Referral: ${row.referral}` : null,
    row.linkedin ? `LinkedIn: ${row.linkedin}` : null,
  ])

  return {
    id: row.id,
    type: "Community Application",
    name: fullName || row.first_name || row.last_name,
    email: row.email,
    company: normalizeString(row.company) ?? undefined,
    details,
    source: "Community Application Form",
    createdAt,
  }
}

function mapAiReadinessRow(row: AiReadinessRow): FormSubmission {
  const createdAt = toIsoTimestamp(row.created_at)
  const fullName = `${normalizeString(row.first_name) ?? ""} ${normalizeString(row.last_name) ?? ""}`.trim()
  const aiExperience = Array.isArray(row.ai_experience) && row.ai_experience.length > 0 ? row.ai_experience.join(", ") : null
  const details = joinDetails([
    `Role: ${row.role}`,
    `Team size: ${row.team_size}`,
    `Systems: ${row.current_systems}`,
    `Data sources: ${row.data_sources}`,
    aiExperience ? `AI experience: ${aiExperience}` : null,
    `Goals: ${row.top_goals}`,
    `Success metrics: ${row.success_metrics}`,
    `Timeline: ${row.timeline}`,
    `Budget: ${row.budget_range}`,
    row.compliance_needs ? `Compliance needs: ${row.compliance_needs}` : null,
    row.notes ? `Notes: ${row.notes}` : null,
  ])

  return {
    id: row.id,
    type: "AI Readiness Assessment",
    name: fullName || row.first_name || row.last_name,
    email: row.email,
    company: normalizeString(row.company) ?? undefined,
    details,
    source: "AI Readiness Assessment",
    createdAt,
  }
}

function mapSubscriptionRow(row: SubscriptionRow): FormSubmission {
  const createdAt = toIsoTimestamp(row.created_at)
  const normalizedType = normalizeString(row.subscription_type)?.toLowerCase()
  const isCommunity = normalizedType === "community"
  const typeLabel: FormSubmissionType = isCommunity ? "Community Waitlist" : "Newsletter Subscription"
  const source = isCommunity ? "Community Waitlist Form" : "Newsletter Signup Form"

  return {
    id: row.id,
    type: typeLabel,
    name: row.email,
    email: row.email,
    details: joinDetails([`Type: ${typeLabel}`]),
    source,
    createdAt,
  }
}

function toConsultationRowFromStored(record: StoredConsultation): ConsultationRow {
  return {
    id: record.id,
    first_name: record.firstName,
    last_name: record.lastName,
    email: record.email,
    phone: record.phone,
    company: record.company,
    bottleneck: record.bottleneck,
    additional_info: record.additionalInfo ?? null,
    hear_about: record.hearAbout ?? null,
    created_at: record.createdAt,
  }
}

function toFooterLeadRowFromStored(record: StoredFooterLead): FooterLeadRow {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    company_name: record.companyName,
    industry: record.industry,
    preferred_call_time: record.preferredCallTime,
    created_at: record.createdAt,
  }
}

function toHeroLeadRowFromStored(record: StoredHeroLead): HeroLeadRow {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    company: record.company,
    phone: record.phone ?? null,
    project_focus: record.projectFocus,
    goals: record.goals ?? null,
    created_at: record.createdAt,
  }
}

function toQuickSessionRowFromStored(record: StoredQuickSession): QuickSessionRow {
  return {
    id: record.id,
    first_name: record.firstName,
    last_name: record.lastName,
    email: record.email,
    phone: record.phone,
    company: record.company,
    industry: record.industry,
    biggest_challenge: record.biggestChallenge,
    meeting_format: record.meetingFormat,
    preferred_time: record.preferredTime,
    notes: record.notes ?? null,
    created_at: record.createdAt,
  }
}

function toCommunityApplicationRowFromStored(record: StoredCommunityApplication): CommunityApplicationRow {
  return {
    id: record.id,
    first_name: record.firstName,
    last_name: record.lastName,
    email: record.email,
    company: record.company,
    industry: record.industry,
    team_size: record.teamSize,
    challenge: record.challenge,
    has_automation: record.hasAutomation,
    outcome: record.outcome,
    referral: record.referral ?? null,
    linkedin: record.linkedin ?? null,
    created_at: record.createdAt,
  }
}

function toAiReadinessRowFromStored(record: StoredAiReadinessAssessment): AiReadinessRow {
  return {
    id: record.id,
    first_name: record.firstName,
    last_name: record.lastName,
    email: record.email,
    company: record.company,
    role: record.role,
    team_size: record.teamSize,
    current_systems: record.currentSystems,
    data_sources: record.dataSources,
    ai_experience: record.aiExperience,
    top_goals: record.topGoals,
    success_metrics: record.successMetrics,
    timeline: record.timeline,
    budget_range: record.budgetRange,
    compliance_needs: record.complianceNeeds ?? null,
    notes: record.notes ?? null,
    created_at: record.createdAt,
  }
}

function toSubscriptionRowFromStored(record: StoredSubscription): SubscriptionRow {
  return {
    id: record.id,
    email: record.email,
    subscription_type: record.type,
    created_at: record.createdAt,
  }
}

async function fetchFormSubmissionsFromDatabase(): Promise<FormSubmissionsResponse> {
  await ensureLeadTables()

  const pool = getPool()

  const [
    consultationResult,
    footerLeadResult,
    heroLeadResult,
    quickSessionResult,
    communityApplicationsResult,
    aiReadinessResult,
    subscriptionResult,
  ] = await Promise.all([
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
    pool.query<HeroLeadRow>(
      `
        SELECT
          id,
          name,
          email,
          company,
          phone,
          project_focus,
          goals,
          created_at
        FROM hero_leads
      `,
    ),
    pool.query<QuickSessionRow>(
      `
        SELECT
          id,
          first_name,
          last_name,
          email,
          phone,
          company,
          industry,
          biggest_challenge,
          meeting_format,
          preferred_time,
          notes,
          created_at
        FROM quick_sessions
      `,
    ),
    pool.query<CommunityApplicationRow>(
      `
        SELECT
          id,
          first_name,
          last_name,
          email,
          company,
          industry,
          team_size,
          challenge,
          has_automation,
          outcome,
          referral,
          linkedin,
          created_at
        FROM community_applications
      `,
    ),
    pool.query<AiReadinessRow>(
      `
        SELECT
          id,
          first_name,
          last_name,
          email,
          company,
          role,
          team_size,
          current_systems,
          data_sources,
          ai_experience,
          top_goals,
          success_metrics,
          timeline,
          budget_range,
          compliance_needs,
          notes,
          created_at
        FROM ai_readiness_assessments
      `,
    ),
    pool.query<SubscriptionRow>(
      `
        SELECT
          id,
          email,
          subscription_type,
          created_at
        FROM subscriptions
      `,
    ),
  ])

  const grouped = createEmptySubmissionGroups()
  grouped["Consultation"] = sortByCreatedAtDesc(consultationResult.rows.map(mapConsultationRow))
  grouped["Footer Lead"] = sortByCreatedAtDesc(footerLeadResult.rows.map(mapFooterLeadRow))
  grouped["Hero Lead"] = sortByCreatedAtDesc(heroLeadResult.rows.map(mapHeroLeadRow))
  grouped["Quick Session"] = sortByCreatedAtDesc(quickSessionResult.rows.map(mapQuickSessionRow))
  grouped["Community Application"] = sortByCreatedAtDesc(
    communityApplicationsResult.rows.map(mapCommunityApplicationRow),
  )
  grouped["AI Readiness Assessment"] = sortByCreatedAtDesc(
    aiReadinessResult.rows.map(mapAiReadinessRow),
  )

  const subscriptionSubmissions = subscriptionResult.rows.map(mapSubscriptionRow)
  grouped["Newsletter Subscription"] = sortByCreatedAtDesc(
    subscriptionSubmissions.filter((submission) => submission.type === "Newsletter Subscription"),
  )
  grouped["Community Waitlist"] = sortByCreatedAtDesc(
    subscriptionSubmissions.filter((submission) => submission.type === "Community Waitlist"),
  )

  return {
    submissions: sortGroupedSubmissions(grouped),
    groupedByType: grouped,
    source: "database",
  }
}

type LeadsFileContents = Partial<{
  consultations: StoredConsultation[]
  footerLeads: StoredFooterLead[]
  heroLeads: StoredHeroLead[]
  quickSessions: StoredQuickSession[]
  communityApplications: StoredCommunityApplication[]
  aiReadinessAssessments: StoredAiReadinessAssessment[]
  aiReadiness: StoredAiReadinessAssessment[]
  subscriptions: StoredSubscription[]
}>

async function fetchFormSubmissionsFromFile(): Promise<FormSubmissionsResponse> {
  const fallbackPath = path.join(process.cwd(), "data", "leads.json")
  const grouped = createEmptySubmissionGroups()

  try {
    const fileContents = await readFile(fallbackPath, "utf8")
    const parsed = JSON.parse(fileContents) as LeadsFileContents

    const consultations = Array.isArray(parsed.consultations) ? parsed.consultations : []
    grouped["Consultation"] = sortByCreatedAtDesc(
      consultations.map((record) => mapConsultationRow(toConsultationRowFromStored(record))),
    )

    const footerLeads = Array.isArray(parsed.footerLeads) ? parsed.footerLeads : []
    grouped["Footer Lead"] = sortByCreatedAtDesc(
      footerLeads.map((record) => mapFooterLeadRow(toFooterLeadRowFromStored(record))),
    )

    const heroLeads = Array.isArray(parsed.heroLeads) ? parsed.heroLeads : []
    grouped["Hero Lead"] = sortByCreatedAtDesc(
      heroLeads.map((record) => mapHeroLeadRow(toHeroLeadRowFromStored(record))),
    )

    const quickSessions = Array.isArray(parsed.quickSessions) ? parsed.quickSessions : []
    grouped["Quick Session"] = sortByCreatedAtDesc(
      quickSessions.map((record) => mapQuickSessionRow(toQuickSessionRowFromStored(record))),
    )

    const communityApplications = Array.isArray(parsed.communityApplications)
      ? parsed.communityApplications
      : []
    grouped["Community Application"] = sortByCreatedAtDesc(
      communityApplications.map((record) =>
        mapCommunityApplicationRow(toCommunityApplicationRowFromStored(record)),
      ),
    )

    const aiReadinessRecords = Array.isArray(parsed.aiReadinessAssessments)
      ? parsed.aiReadinessAssessments
      : Array.isArray(parsed.aiReadiness)
        ? parsed.aiReadiness
        : []
    grouped["AI Readiness Assessment"] = sortByCreatedAtDesc(
      aiReadinessRecords.map((record) => mapAiReadinessRow(toAiReadinessRowFromStored(record))),
    )

    const subscriptionRecords = Array.isArray(parsed.subscriptions) ? parsed.subscriptions : []
    const subscriptionSubmissions = subscriptionRecords.map((record) =>
      mapSubscriptionRow(toSubscriptionRowFromStored(record)),
    )
    grouped["Newsletter Subscription"] = sortByCreatedAtDesc(
      subscriptionSubmissions.filter((submission) => submission.type === "Newsletter Subscription"),
    )
    grouped["Community Waitlist"] = sortByCreatedAtDesc(
      subscriptionSubmissions.filter((submission) => submission.type === "Community Waitlist"),
    )
  } catch (error) {
    console.warn("Unable to read fallback submissions from data/leads.json", error)
  }

  return {
    submissions: sortGroupedSubmissions(grouped),
    groupedByType: grouped,
    source: "fallback",
  }
}

export async function fetchFormSubmissions(): Promise<FormSubmissionsResponse> {
  try {
    return await fetchFormSubmissionsFromDatabase()
  } catch (databaseError) {
    console.error("Failed to load form submissions from database", databaseError)

    try {
      return await fetchFormSubmissionsFromFile()
    } catch (fallbackError) {
      console.error("Failed to load form submissions from fallback file", fallbackError)
      throw new Error("Unable to load form submissions from database or fallback file")
    }
  }
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

export async function storeHeroLead(payload: HeroLeadPayload): Promise<StoredHeroLead> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO hero_leads (
        id,
        name,
        email,
        company,
        phone,
        project_focus,
        goals
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING created_at
    `,
    [
      id,
      payload.name,
      payload.email,
      payload.company,
      payload.phone ?? null,
      payload.projectFocus,
      payload.goals ?? null,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}

export async function storeQuickSession(payload: QuickSessionPayload): Promise<StoredQuickSession> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO quick_sessions (
        id,
        first_name,
        last_name,
        email,
        phone,
        company,
        industry,
        biggest_challenge,
        meeting_format,
        preferred_time,
        notes
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
      payload.biggestChallenge,
      payload.meetingFormat,
      payload.preferredTime,
      payload.notes ?? null,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}

export async function storeCommunityApplication(
  payload: CommunityApplicationPayload,
): Promise<StoredCommunityApplication> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO community_applications (
        id,
        first_name,
        last_name,
        email,
        company,
        industry,
        team_size,
        challenge,
        has_automation,
        outcome,
        referral,
        linkedin
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING created_at
    `,
    [
      id,
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.company,
      payload.industry,
      payload.teamSize,
      payload.challenge,
      payload.hasAutomation,
      payload.outcome,
      payload.referral ?? null,
      payload.linkedin ?? null,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}

export async function storeAiReadinessAssessment(
  payload: AiReadinessPayload,
): Promise<StoredAiReadinessAssessment> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO ai_readiness_assessments (
        id,
        first_name,
        last_name,
        email,
        company,
        role,
        team_size,
        current_systems,
        data_sources,
        ai_experience,
        top_goals,
        success_metrics,
        timeline,
        budget_range,
        compliance_needs,
        notes
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
        $16
      )
      RETURNING created_at
    `,
    [
      id,
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.company,
      payload.role,
      payload.teamSize,
      payload.currentSystems,
      payload.dataSources,
      payload.aiExperience,
      payload.topGoals,
      payload.successMetrics,
      payload.timeline,
      payload.budgetRange,
      payload.complianceNeeds ?? null,
      payload.notes ?? null,
    ],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}

export async function storeSubscription(payload: SubscriptionPayload): Promise<StoredSubscription> {
  await ensureLeadTables()

  const pool = getPool()
  const id = randomUUID()

  const result = await pool.query<{ created_at: string }>(
    `
      INSERT INTO subscriptions (
        id,
        email,
        subscription_type
      )
      VALUES ($1, $2, $3)
      RETURNING created_at
    `,
    [id, payload.email, payload.type],
  )

  const createdAt = toIsoTimestamp(result.rows[0]?.created_at)

  return {
    ...payload,
    id,
    createdAt,
  }
}
