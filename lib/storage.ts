import { promises as fs } from "fs"
import path from "path"
import { randomUUID } from "crypto"

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

type LeadDatabase = {
  consultations: StoredConsultation[]
  footerLeads: StoredFooterLead[]
}

const DATA_DIRECTORY = path.join(process.cwd(), "data")
const DATA_FILE = path.join(DATA_DIRECTORY, "leads.json")

const EMPTY_DATABASE: LeadDatabase = {
  consultations: [],
  footerLeads: [],
}

async function ensureDatabaseFile() {
  await fs.mkdir(DATA_DIRECTORY, { recursive: true })

  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(EMPTY_DATABASE, null, 2) + "\n", "utf8")
  }
}

async function readDatabase(): Promise<LeadDatabase> {
  await ensureDatabaseFile()

  try {
    const raw = await fs.readFile(DATA_FILE, "utf8")
    const parsed = JSON.parse(raw) as Partial<LeadDatabase>

    return {
      consultations: Array.isArray(parsed.consultations) ? parsed.consultations : [],
      footerLeads: Array.isArray(parsed.footerLeads) ? parsed.footerLeads : [],
    }
  } catch (error) {
    console.error("Failed to read local database", error)
    return { ...EMPTY_DATABASE }
  }
}

async function writeDatabase(payload: LeadDatabase) {
  await fs.writeFile(DATA_FILE, JSON.stringify(payload, null, 2) + "\n", "utf8")
}

export async function storeConsultation(payload: ConsultationPayload): Promise<StoredConsultation> {
  const database = await readDatabase()
  const record: StoredConsultation = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  database.consultations.push(record)
  await writeDatabase(database)

  return record
}

export async function storeFooterLead(payload: FooterLeadPayload): Promise<StoredFooterLead> {
  const database = await readDatabase()
  const record: StoredFooterLead = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  database.footerLeads.push(record)
  await writeDatabase(database)

  return record
}
