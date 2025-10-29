"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { StatCard } from "@/components/admin/stat-card"
import { FileText, Calendar, Users, Mail, Activity, AlertTriangle, RefreshCcw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { FormSubmission, FormSubmissionsResponse } from "@/types/forms"

const STAT_CARD_ICONS = {
  total: FileText,
  consultations: Calendar,
  community: Users,
  newsletter: Mail,
} as const

type RecentActivityItem = {
  id: string
  type: FormSubmission["type"]
  message: string
  timestamp: string
}

type StatDefinition = {
  key: keyof typeof STAT_CARD_ICONS
  title: string
  compute: (submissions: FormSubmission[]) => number
}

const STAT_DEFINITIONS: StatDefinition[] = [
  {
    key: "total",
    title: "Total Form Submissions",
    compute: (submissions) => submissions.length,
  },
  {
    key: "consultations",
    title: "Consultation Requests",
    compute: (submissions) => submissions.filter((submission) => submission.type === "Consultation").length,
  },
  {
    key: "community",
    title: "Community Applications",
    compute: (submissions) => submissions.filter((submission) => submission.type === "Community Application").length,
  },
  {
    key: "newsletter",
    title: "Newsletter Subscribers",
    compute: (submissions) => submissions.filter((submission) => submission.type === "Newsletter Subscription").length,
  },
]

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dataSource, setDataSource] = useState<FormSubmissionsResponse["source"] | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const loadDashboardData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/forms", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as Partial<FormSubmissionsResponse>
      const nextSubmissions = Array.isArray(data.submissions) ? data.submissions : []

      setSubmissions(nextSubmissions)
      setDataSource(data.source === "fallback" ? "fallback" : "database")
      setLastUpdated(new Date())
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load dashboard metrics", fetchError)
      setError("We couldn't load the latest dashboard data. Please try again later.")
      setSubmissions([])
      setDataSource(null)
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void loadDashboardData(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadDashboardData])

  const statCards = useMemo(() => {
    const updatedLabel = loading
      ? "Loading..."
      : dataSource === "fallback"
        ? "Showing fallback data"
        : lastUpdated
          ? `Updated ${lastUpdated.toLocaleTimeString()}`
          : undefined

    const changeType = dataSource === "fallback" ? "negative" : "neutral"

    return STAT_DEFINITIONS.map((definition) => {
      const value = loading ? "—" : definition.compute(submissions).toLocaleString()
      const icon = STAT_CARD_ICONS[definition.key]

      return {
        title: definition.title,
        value,
        change: updatedLabel,
        changeType,
        icon,
      }
    })
  }, [loading, dataSource, lastUpdated, submissions])

  const recentActivity = useMemo<RecentActivityItem[]>(() => {
    if (submissions.length === 0) {
      return []
    }

    const activity = submissions.slice(0, 6).map((submission) => {
      const name = submission.name || submission.email
      const formattedDate = new Date(submission.createdAt).toLocaleString()
      const typeLabel = submission.type

      return {
        id: submission.id,
        type: submission.type,
        message: `New ${typeLabel.toLowerCase()} from ${name}`,
        timestamp: formattedDate,
      }
    })

    return activity
  }, [submissions])

  const handleRefresh = () => {
    void loadDashboardData()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <Button variant="outline" onClick={handleRefresh} disabled={loading} className="flex items-center gap-2">
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      {error ? (
        <Card className="p-4 border-destructive/40 bg-destructive/10 text-destructive flex items-center gap-3">
          <AlertTriangle className="w-5 h-5" />
          <span>{error}</span>
        </Card>
      ) : null}

      {dataSource === "fallback" ? (
        <Badge variant="destructive">Showing fallback data from data/leads.json</Badge>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <StatCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      <Card className="p-6 border-border bg-card">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground">Loading activity...</p>
        ) : recentActivity.length === 0 ? (
          <p className="text-sm text-muted-foreground">No recent activity yet.</p>
        ) : (
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
