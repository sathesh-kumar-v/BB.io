import { NextResponse } from "next/server"
import { fetchFormSubmissions } from "@/lib/storage"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const { submissions, groupedByType, source } = await fetchFormSubmissions()

    return NextResponse.json({ submissions, groupedByType, source })
  } catch (error) {
    console.error("Failed to load form submissions", error)
    return NextResponse.json(
      { error: "Unable to load form submissions" },
      { status: 500 },
    )
  }
}
