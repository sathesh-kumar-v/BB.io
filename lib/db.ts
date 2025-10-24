import { Pool, type PoolClient } from "pg"

let pool: Pool | null = null
let tableSetupPromise: Promise<void> | null = null

function shouldUseSSL(connectionString: string): boolean {
  if (process.env.PGSSL === "disable") {
    return false
  }

  if (process.env.NODE_ENV === "production") {
    return true
  }

  try {
    const { searchParams } = new URL(connectionString)
    const sslMode = searchParams.get("sslmode")?.toLowerCase()

    if (sslMode && ["require", "prefer"].includes(sslMode)) {
      return true
    }
  } catch (error) {
    console.warn("Failed to parse database connection string", error)
  }

  return false
}

function createPool() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  return new Pool({
    connectionString,
    max: Number.parseInt(process.env.PG_POOL_MAX ?? "5", 10),
    idleTimeoutMillis: Number.parseInt(process.env.PG_IDLE_TIMEOUT ?? "30000", 10),
    ssl: shouldUseSSL(connectionString) ? { rejectUnauthorized: false } : undefined,
  })
}

export function getPool(): Pool {
  if (!pool) {
    pool = createPool()

    pool.on("error", (error) => {
      console.error("Unexpected Postgres client error", error)
    })
  }

  return pool
}

async function ensureTables(client: PoolClient) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS consultations (
      id UUID PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT NOT NULL,
      industry TEXT NOT NULL,
      industry_other TEXT,
      company_size TEXT NOT NULL,
      revenue TEXT,
      bottleneck TEXT NOT NULL,
      challenges TEXT[] NOT NULL,
      challenges_other TEXT,
      time_consumers TEXT,
      automation_experience TEXT NOT NULL,
      timeline TEXT NOT NULL,
      driving_factors TEXT[] NOT NULL,
      driving_factors_other TEXT,
      consultation_format TEXT NOT NULL,
      best_times TEXT[] NOT NULL,
      additional_info TEXT,
      hear_about TEXT,
      referral_name TEXT,
      email_updates BOOLEAN NOT NULL,
      weekly_insights BOOLEAN NOT NULL,
      event_notifications BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await client.query(`
    CREATE TABLE IF NOT EXISTS footer_leads (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company_name TEXT NOT NULL,
      industry TEXT NOT NULL,
      preferred_call_time TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}

export async function ensureLeadTables(): Promise<void> {
  if (!tableSetupPromise) {
    tableSetupPromise = (async () => {
      const pool = getPool()
      const client = await pool.connect()

      try {
        await ensureTables(client)
      } finally {
        client.release()
      }
    })()
  }

  return tableSetupPromise
}
