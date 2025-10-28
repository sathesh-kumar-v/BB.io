import { Pool, type PoolClient } from "pg"

let pool: Pool | null = null
let tableSetupPromise: Promise<void> | null = null

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error
}

function isRecoverableConnectionError(error: unknown): error is NodeJS.ErrnoException {
  if (!isNodeError(error)) {
    return false
  }

  const code = error.code

  if (typeof code !== "string") {
    return false
  }

  return ["ECONNRESET", "ETIMEDOUT", "EPIPE"].includes(code)
}

async function resetPool(currentPool: Pool | null) {
  if (!currentPool) {
    return
  }

  try {
    await currentPool.end()
  } catch (error) {
    console.error("Failed to gracefully close Postgres pool", error)
  } finally {
    if (pool === currentPool) {
      pool = null
    }
  }
}

function isLocalDatabaseHost(hostname: string): boolean {
  const normalizedHost = hostname.toLowerCase()

  if (["localhost", "127.0.0.1", "::1"].includes(normalizedHost)) {
    return true
  }

  return normalizedHost.endsWith(".local")
}

function shouldUseSSL(connectionString: string): boolean {
  if (process.env.PGSSL === "disable") {
    return false
  }

  try {
    const parsedUrl = new URL(connectionString)
    const { hostname, searchParams } = parsedUrl

    const sslMode = searchParams.get("sslmode")?.toLowerCase()
    if (sslMode && ["require", "prefer"].includes(sslMode)) {
      return true
    }

    const sslEnabled = searchParams.get("ssl")?.toLowerCase()
    if (sslEnabled === "true" || sslEnabled === "1") {
      return true
    }

    if (!isLocalDatabaseHost(hostname)) {
      return true
    }
  } catch (error) {
    console.warn("Failed to parse database connection string", error)

    if (process.env.NODE_ENV === "production") {
      return true
    }
  }

  return process.env.NODE_ENV === "production"
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

  await client.query(`
    CREATE TABLE IF NOT EXISTS hero_leads (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      phone TEXT,
      project_focus TEXT NOT NULL,
      goals TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await client.query(`
    CREATE TABLE IF NOT EXISTS quick_sessions (
      id UUID PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT NOT NULL,
      industry TEXT NOT NULL,
      biggest_challenge TEXT NOT NULL,
      meeting_format TEXT NOT NULL,
      preferred_time TEXT NOT NULL,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await client.query(`
    CREATE TABLE IF NOT EXISTS community_applications (
      id UUID PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      industry TEXT NOT NULL,
      team_size TEXT NOT NULL,
      challenge TEXT NOT NULL,
      has_automation TEXT NOT NULL,
      outcome TEXT NOT NULL,
      referral TEXT,
      linkedin TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await client.query(`
    CREATE TABLE IF NOT EXISTS ai_readiness_assessments (
      id UUID PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL,
      role TEXT NOT NULL,
      team_size TEXT NOT NULL,
      current_systems TEXT NOT NULL,
      data_sources TEXT NOT NULL,
      ai_experience TEXT[] NOT NULL,
      top_goals TEXT NOT NULL,
      success_metrics TEXT NOT NULL,
      timeline TEXT NOT NULL,
      budget_range TEXT NOT NULL,
      compliance_needs TEXT,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  await client.query(`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id UUID PRIMARY KEY,
      email TEXT NOT NULL,
      subscription_type TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}

async function ensureTablesWithClient(attempt = 0): Promise<void> {
  const poolInstance = getPool()

  try {
    const client = await poolInstance.connect()

    try {
      await ensureTables(client)
    } finally {
      client.release()
    }
  } catch (error) {
    if (isRecoverableConnectionError(error) && attempt < 3) {
      console.warn(
        `Postgres connection failed with ${error.code}. Retrying (${attempt + 1}/3).`,
      )

      await resetPool(poolInstance)
      return ensureTablesWithClient(attempt + 1)
    }

    throw error
  }
}

export async function ensureLeadTables(): Promise<void> {
  if (!tableSetupPromise) {
    const setupPromise = ensureTablesWithClient()

    tableSetupPromise = setupPromise.catch((error) => {
      tableSetupPromise = null
      throw error
    })
  }

  return tableSetupPromise
}
