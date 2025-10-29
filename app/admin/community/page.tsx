"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, Filter, RefreshCcw, Search } from "lucide-react"

type CommunityApplication = {
  id: string
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
  createdAt: string
}

export default function CommunityPage() {
  const [applications, setApplications] = useState<CommunityApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<CommunityApplication | null>(null)

  const loadApplications = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/community-applications", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as { applications?: CommunityApplication[] }
      setApplications(data.applications ?? [])
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load community applications", fetchError)
      setError("We couldn't load the latest community applications. Please try again later.")
      setApplications([])
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void loadApplications(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadApplications])

  const industries = useMemo(() => {
    const uniqueIndustries = new Set<string>()

    for (const application of applications) {
      if (application.industry) {
        uniqueIndustries.add(application.industry)
      }
    }

    return Array.from(uniqueIndustries).sort((a, b) => a.localeCompare(b))
  }, [applications])

  const filteredApplications = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return applications.filter((application) => {
      const matchesIndustry = selectedIndustry === "all" || application.industry === selectedIndustry

      if (!matchesIndustry) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [
        `${application.firstName} ${application.lastName}`,
        application.email,
        application.company,
        application.industry,
        application.challenge,
        application.outcome,
        application.hasAutomation,
        application.teamSize,
      ]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.toLowerCase())

      return haystack.some((value) => value.includes(normalizedQuery))
    })
  }, [applications, selectedIndustry, searchQuery])

  const resultsSummary = loading
    ? "Loading community applications..."
    : error
      ? "Unable to display community applications."
      : `Showing ${filteredApplications.length} of ${applications.length} applications`

  const latestApplicationDate = applications[0]?.createdAt ? new Date(applications[0].createdAt) : null

  const handleExportCSV = () => {
    if (filteredApplications.length === 0) {
      return
    }

    const headers = [
      "Name",
      "Email",
      "Company",
      "Industry",
      "Team Size",
      "Current Automation",
      "Challenge",
      "Desired Outcome",
      "Referral",
      "LinkedIn",
      "Submitted At",
    ]

    const csvData = filteredApplications.map((application) => [
      `${application.firstName} ${application.lastName}`.trim(),
      application.email,
      application.company,
      application.industry,
      application.teamSize,
      application.hasAutomation,
      application.challenge,
      application.outcome,
      application.referral ?? "",
      application.linkedin ?? "",
      new Date(application.createdAt).toLocaleString(),
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
    anchor.download = `community-applications-${new Date().toISOString().split("T")[0]}.csv`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }

  const handleRefresh = () => {
    void loadApplications()
  }

  const openDetailsDialog = (application: CommunityApplication) => {
    setSelectedApplication(application)
  }

  const closeDialog = () => {
    setSelectedApplication(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Community Applications</h1>
        <p className="text-muted-foreground mt-1">
          Review and manage applications submitted to join the BB.io community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Total Applications</div>
          <div className="text-3xl font-bold text-foreground mt-2">{applications.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Unique Industries</div>
          <div className="text-3xl font-bold text-foreground mt-2">{industries.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Most Recent Application</div>
          <div className="text-lg font-semibold text-foreground mt-2">
            {latestApplicationDate ? latestApplicationDate.toLocaleString() : "—"}
          </div>
        </Card>
      </div>

      {error ? (
        <Card className="p-4 border-destructive/40 bg-destructive/10 text-destructive">{error}</Card>
      ) : null}

      <Card className="p-4 border-border bg-card">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, email, company, or keyword..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={selectedIndustry} onValueChange={setSelectedIndustry} disabled={industries.length === 0}>
            <SelectTrigger className="w-full md:w-56">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleRefresh} disabled={loading} className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              onClick={handleExportCSV}
              variant="outline"
              disabled={filteredApplications.length === 0 || loading}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{resultsSummary}</span>
        {loading ? <Badge variant="secondary">Loading</Badge> : null}
      </div>

      <Card className="border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Company</TableHead>
              <TableHead className="text-muted-foreground">Industry</TableHead>
              <TableHead className="text-muted-foreground">Team Size</TableHead>
              <TableHead className="text-muted-foreground">Automation</TableHead>
              <TableHead className="text-muted-foreground">Challenge</TableHead>
              <TableHead className="text-muted-foreground">Submitted</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  Loading applications...
                </TableCell>
              </TableRow>
            ) : filteredApplications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              filteredApplications.map((application) => {
                const name = `${application.firstName} ${application.lastName}`.trim() || application.email

                return (
                  <TableRow key={application.id} className="border-border hover:bg-muted/5">
                    <TableCell className="font-medium text-foreground">{name}</TableCell>
                    <TableCell className="text-foreground">{application.email}</TableCell>
                    <TableCell className="text-foreground">{application.company}</TableCell>
                    <TableCell className="text-foreground">{application.industry}</TableCell>
                    <TableCell className="text-foreground">{application.teamSize}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{application.hasAutomation}</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate text-foreground">{application.challenge}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(application.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => openDetailsDialog(application)}>
                        View details
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={Boolean(selectedApplication)} onOpenChange={(open) => { if (!open) closeDialog() }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application details</DialogTitle>
            <DialogDescription>
              {selectedApplication
                ? `${selectedApplication.firstName} ${selectedApplication.lastName}`.trim()
                : ""}
            </DialogDescription>
          </DialogHeader>
          {selectedApplication ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedApplication.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Company</p>
                  <p className="font-medium">{selectedApplication.company || "—"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Industry</p>
                  <p className="font-medium">{selectedApplication.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Team size</p>
                  <p className="font-medium">{selectedApplication.teamSize}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Current automation</p>
                  <p className="font-medium">{selectedApplication.hasAutomation}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Desired outcome</p>
                  <p className="font-medium">{selectedApplication.outcome}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Referral</p>
                  <p className="font-medium">{selectedApplication.referral || "—"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">{selectedApplication.linkedin || "—"}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">Biggest challenge</p>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{selectedApplication.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Desired outcome</p>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{selectedApplication.outcome}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={closeDialog}>Close</Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}
