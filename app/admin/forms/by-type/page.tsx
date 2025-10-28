"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, RefreshCcw } from "lucide-react"
import { useFormSubmissions } from "@/components/admin/forms/use-form-submissions"
import { getTypeBadgeColor } from "@/components/admin/forms/utils"
import { FORM_SUBMISSION_TYPES, type FormSubmission, type FormSubmissionType } from "@/types/forms"

function formatSubmissionCount(count: number): string {
  if (count === 0) {
    return "No submissions yet"
  }

  return count === 1 ? "1 submission" : `${count} submissions`
}

function renderTableBody(
  entries: FormSubmission[],
  type: FormSubmissionType,
  loading: boolean,
  error: string | null,
) {
  if (loading) {
    return (
      <TableRow>
        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
          Loading {type.toLowerCase()} submissions...
        </TableCell>
      </TableRow>
    )
  }

  if (error) {
    return (
      <TableRow>
        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
          Unable to load {type.toLowerCase()} submissions.
        </TableCell>
      </TableRow>
    )
  }

  if (entries.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
          No {type.toLowerCase()} submissions yet.
        </TableCell>
      </TableRow>
    )
  }

  return entries.map((submission) => (
    <TableRow key={submission.id} className="border-border hover:bg-muted/5">
      <TableCell className="font-medium text-foreground">{submission.name}</TableCell>
      <TableCell className="text-foreground">{submission.email}</TableCell>
      <TableCell className="text-foreground">{submission.phone ?? "—"}</TableCell>
      <TableCell className="text-foreground">{submission.company ?? "—"}</TableCell>
      <TableCell className="max-w-md truncate text-foreground">{submission.details ?? "—"}</TableCell>
      <TableCell className="text-muted-foreground">{submission.source}</TableCell>
      <TableCell className="text-sm text-muted-foreground">
        {new Date(submission.createdAt).toLocaleString()}
      </TableCell>
    </TableRow>
  ))
}

export default function FormSubmissionsByTypePage() {
  const { submissions, groupedByType, loading, error, isFallbackData, reload } = useFormSubmissions()

  const totalSubmissions = submissions.length
  const activeTypeCount = useMemo(() => {
    return FORM_SUBMISSION_TYPES.filter((type) => groupedByType[type].length > 0).length
  }, [groupedByType])

  const summaryText = useMemo(() => {
    if (loading) {
      return "Loading grouped submissions..."
    }

    if (error) {
      return "Unable to display grouped submissions."
    }

    if (totalSubmissions === 0) {
      return "No submissions available yet."
    }

    return `${totalSubmissions} submissions across ${activeTypeCount || 0} form types`
  }, [loading, error, totalSubmissions, activeTypeCount])

  const handleRefresh = () => {
    void reload()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Submissions by Type</h1>
          <p className="text-muted-foreground mt-1">
            Review each submission funnel independently to compare performance and follow-up needs.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/admin/forms">
              <ArrowLeft className="w-4 h-4" />
              Back to all submissions
            </Link>
          </Button>
          <Button onClick={handleRefresh} className="flex items-center gap-2" disabled={loading}>
            <RefreshCcw className="w-4 h-4" />
            Refresh data
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{summaryText}</span>
        {isFallbackData && !loading && !error ? (
          <Badge className="border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300">
            Fallback data
          </Badge>
        ) : null}
      </div>

      {error ? (
        <Card className="border-destructive/20 bg-destructive/10 text-destructive-foreground p-4">
          {error}
        </Card>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-2">
        {FORM_SUBMISSION_TYPES.map((type) => {
          const entries = groupedByType[type]
          const countLabel = formatSubmissionCount(entries.length)

          return (
            <Card key={type} className="border-border bg-card">
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                <div className="space-y-1">
                  <Badge className={getTypeBadgeColor(type)}>{type}</Badge>
                  <div className="text-xs text-muted-foreground">{countLabel}</div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">Name</TableHead>
                    <TableHead className="text-muted-foreground">Email</TableHead>
                    <TableHead className="text-muted-foreground">Phone</TableHead>
                    <TableHead className="text-muted-foreground">Company</TableHead>
                    <TableHead className="text-muted-foreground">Details</TableHead>
                    <TableHead className="text-muted-foreground">Source</TableHead>
                    <TableHead className="text-muted-foreground">Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>{renderTableBody(entries, type, loading, error)}</TableBody>
              </Table>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
