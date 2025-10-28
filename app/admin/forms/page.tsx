"use client"

import { useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type FormSubmission = {
  id: string
  type: string
  name: string
  email: string
  phone?: string
  company?: string
  details?: string
  source: string
  createdAt: string
}

export default function FormsPage() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadSubmissions() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/forms", { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = (await response.json()) as { submissions?: FormSubmission[] }
        setSubmissions(data.submissions ?? [])
      } catch (fetchError) {
        if ((fetchError as Error).name === "AbortError") {
          return
        }

        console.error("Unable to load submissions", fetchError)
        setError("We couldn't load the latest submissions. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    loadSubmissions()

    return () => {
      controller.abort()
    }
  }, [])

  const submissionTypes = useMemo(() => {
    const types = new Set<string>()
    for (const submission of submissions) {
      if (submission.type) {
        types.add(submission.type)
      }
    }
    return Array.from(types).sort((a, b) => a.localeCompare(b))
  }, [submissions])

  const filteredSubmissions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return submissions.filter((submission) => {
      const matchesFilter = filterType === "all" || submission.type === filterType

      if (!matchesFilter) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [
        submission.name,
        submission.email,
        submission.phone,
        submission.company,
        submission.details,
        submission.source,
      ]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.toLowerCase())

      return haystack.some((value) => value.includes(normalizedQuery))
    })
  }, [submissions, filterType, searchQuery])

  const handleExportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Details", "Source", "Type", "Submitted"]

    const csvData = filteredSubmissions.map((submission) => [
      submission.name,
      submission.email,
      submission.phone ?? "",
      submission.company ?? "",
      submission.details ?? "",
      submission.source,
      submission.type,
      new Date(submission.createdAt).toLocaleString(),
    ])

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) =>
        row
          .map((cell) => {
            const normalized = cell.replace(/"/g, '""')
            return `"${normalized}"`
          })
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `form-submissions-${new Date().toISOString().split("T")[0]}.csv`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Consultation":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20"
      case "Footer Lead":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "Hero Lead":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20"
      case "Quick Session":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      case "Community Application":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20"
      case "AI Readiness Assessment":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20"
      case "Newsletter Subscription":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
      case "Community Waitlist":
        return "bg-teal-500/10 text-teal-400 border-teal-500/20"
      default:
        return "bg-muted/10 text-muted-foreground border-border"
    }
  }

  const resultsSummary = loading
    ? "Loading submissions..."
    : error
      ? "Unable to display submissions."
      : `Showing ${filteredSubmissions.length} of ${submissions.length} submissions`

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Form Submissions</h1>
        <p className="text-muted-foreground mt-1">
          Manage all website form submissions collected from your lead capture flows
        </p>
      </div>

      <Card className="p-4 border-border bg-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by name, email, company, or keyword..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={filterType} onValueChange={setFilterType} disabled={loading && submissions.length === 0}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {submissionTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={handleExportCSV} variant="outline" disabled={filteredSubmissions.length === 0}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </Card>

      <div className="text-sm text-muted-foreground">{resultsSummary}</div>

      {error ? (
        <Card className="border-destructive/20 bg-destructive/10 text-destructive-foreground p-4">
          {error}
        </Card>
      ) : null}

      <Card className="border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Phone</TableHead>
              <TableHead className="text-muted-foreground">Company</TableHead>
              <TableHead className="text-muted-foreground">Details</TableHead>
              <TableHead className="text-muted-foreground">Source</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  Loading submissions...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  {"There was a problem loading submissions."}
                </TableCell>
              </TableRow>
            ) : filteredSubmissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No submissions found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubmissions.map((submission) => (
                <TableRow key={submission.id} className="border-border hover:bg-muted/5">
                  <TableCell className="font-medium text-foreground">{submission.name}</TableCell>
                  <TableCell className="text-foreground">{submission.email}</TableCell>
                  <TableCell className="text-foreground">{submission.phone ?? "—"}</TableCell>
                  <TableCell className="text-foreground">{submission.company ?? "—"}</TableCell>
                  <TableCell className="max-w-md truncate text-foreground">
                    {submission.details ?? "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{submission.source}</TableCell>
                  <TableCell>
                    <Badge className={getTypeBadgeColor(submission.type)}>{submission.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(submission.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
