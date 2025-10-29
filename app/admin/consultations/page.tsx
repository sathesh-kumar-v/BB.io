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

type Consultation = {
  id: string
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
  createdAt: string
}

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [formatFilter, setFormatFilter] = useState("all")
  const [timelineFilter, setTimelineFilter] = useState("all")
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)

  const loadConsultations = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/consultations", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as { consultations?: Consultation[] }
      setConsultations(data.consultations ?? [])
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load consultations", fetchError)
      setError("We couldn't load the latest consultations. Please try again later.")
      setConsultations([])
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void loadConsultations(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadConsultations])

  const formats = useMemo(() => {
    const unique = new Set<string>()

    for (const consultation of consultations) {
      if (consultation.consultationFormat) {
        unique.add(consultation.consultationFormat)
      }
    }

    return Array.from(unique).sort((a, b) => a.localeCompare(b))
  }, [consultations])

  const timelines = useMemo(() => {
    const unique = new Set<string>()

    for (const consultation of consultations) {
      if (consultation.timeline) {
        unique.add(consultation.timeline)
      }
    }

    return Array.from(unique).sort((a, b) => a.localeCompare(b))
  }, [consultations])

  const filteredConsultations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return consultations.filter((consultation) => {
      const matchesFormat = formatFilter === "all" || consultation.consultationFormat === formatFilter
      const matchesTimeline = timelineFilter === "all" || consultation.timeline === timelineFilter

      if (!matchesFormat || !matchesTimeline) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [
        `${consultation.firstName} ${consultation.lastName}`,
        consultation.email,
        consultation.phone,
        consultation.company,
        consultation.industry,
        consultation.industryOther,
        consultation.bottleneck,
        consultation.additionalInfo,
        consultation.hearAbout,
        consultation.timeline,
        consultation.consultationFormat,
        consultation.referralName,
        consultation.revenue,
        consultation.companySize,
        ...consultation.challenges,
        consultation.challengesOther,
        consultation.timeConsumers,
        consultation.automationExperience,
        ...consultation.drivingFactors,
        consultation.drivingFactorsOther,
        ...consultation.bestTimes,
      ]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.toLowerCase())

      return haystack.some((value) => value.includes(normalizedQuery))
    })
  }, [consultations, formatFilter, timelineFilter, searchQuery])

  const resultsSummary = loading
    ? "Loading consultations..."
    : error
      ? "Unable to display consultations."
      : `Showing ${filteredConsultations.length} of ${consultations.length} consultations`

  const latestConsultationDate = consultations[0]?.createdAt ? new Date(consultations[0].createdAt) : null
  const emailOptIns = consultations.filter((consultation) => consultation.emailUpdates).length
  const insightOptIns = consultations.filter((consultation) => consultation.weeklyInsights).length

  const handleExportCSV = () => {
    if (filteredConsultations.length === 0) {
      return
    }

    const headers = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Industry",
      "Format",
      "Timeline",
      "Bottleneck",
      "Automation Experience",
      "Challenges",
      "Driving Factors",
      "Best Times",
      "Submitted At",
    ]

    const csvData = filteredConsultations.map((consultation) => [
      `${consultation.firstName} ${consultation.lastName}`.trim(),
      consultation.email,
      consultation.phone,
      consultation.company,
      consultation.industry,
      consultation.consultationFormat,
      consultation.timeline,
      consultation.bottleneck,
      consultation.automationExperience,
      consultation.challenges.join("; "),
      consultation.drivingFactors.join("; "),
      consultation.bestTimes.join("; "),
      new Date(consultation.createdAt).toLocaleString(),
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
    anchor.download = `consultations-${new Date().toISOString().split("T")[0]}.csv`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }

  const handleRefresh = () => {
    void loadConsultations()
  }

  const closeDialog = () => {
    setSelectedConsultation(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Consultation Requests</h1>
        <p className="text-muted-foreground mt-1">
          Review detailed consultation submissions captured from the scheduling form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Total Consultations</div>
          <div className="text-3xl font-bold text-foreground mt-2">{consultations.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Email Opt-ins</div>
          <div className="text-3xl font-bold text-foreground mt-2">{emailOptIns}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Weekly Insights Opt-ins</div>
          <div className="text-3xl font-bold text-foreground mt-2">{insightOptIns}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Most Recent Submission</div>
          <div className="text-lg font-semibold text-foreground mt-2">
            {latestConsultationDate ? latestConsultationDate.toLocaleString() : "—"}
          </div>
        </Card>
      </div>

      {error ? (
        <Card className="p-4 border-destructive/40 bg-destructive/10 text-destructive">{error}</Card>
      ) : null}

      <Card className="p-4 border-border bg-card">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, company, challenge, or keyword..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={formatFilter} onValueChange={setFormatFilter} disabled={formats.length === 0}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Formats</SelectItem>
              {formats.map((format) => (
                <SelectItem key={format} value={format}>
                  {format}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={timelineFilter} onValueChange={setTimelineFilter} disabled={timelines.length === 0}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Timelines</SelectItem>
              {timelines.map((timeline) => (
                <SelectItem key={timeline} value={timeline}>
                  {timeline}
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
              disabled={filteredConsultations.length === 0 || loading}
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
              <TableHead className="text-muted-foreground">Format</TableHead>
              <TableHead className="text-muted-foreground">Timeline</TableHead>
              <TableHead className="text-muted-foreground">Primary Need</TableHead>
              <TableHead className="text-muted-foreground">Submitted</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  Loading consultations...
                </TableCell>
              </TableRow>
            ) : filteredConsultations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  No consultations found
                </TableCell>
              </TableRow>
            ) : (
              filteredConsultations.map((consultation) => {
                const name = `${consultation.firstName} ${consultation.lastName}`.trim() || consultation.email

                return (
                  <TableRow key={consultation.id} className="border-border hover:bg-muted/5">
                    <TableCell className="font-medium text-foreground">{name}</TableCell>
                    <TableCell className="text-foreground">{consultation.email}</TableCell>
                    <TableCell className="text-foreground">{consultation.company}</TableCell>
                    <TableCell className="text-foreground">{consultation.industry}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{consultation.consultationFormat}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{consultation.timeline}</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate text-foreground">{consultation.bottleneck}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(consultation.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => setSelectedConsultation(consultation)}>
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

      <Dialog open={Boolean(selectedConsultation)} onOpenChange={(open) => { if (!open) closeDialog() }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Consultation details</DialogTitle>
            <DialogDescription>
              {selectedConsultation
                ? `${selectedConsultation.firstName} ${selectedConsultation.lastName}`.trim()
                : ""}
            </DialogDescription>
          </DialogHeader>
          {selectedConsultation ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedConsultation.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">{selectedConsultation.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Company</p>
                  <p className="font-medium">{selectedConsultation.company}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Industry</p>
                  <p className="font-medium">{selectedConsultation.industry}</p>
                </div>
                {selectedConsultation.industryOther ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Industry (Other)</p>
                    <p className="font-medium">{selectedConsultation.industryOther}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-xs text-muted-foreground">Company size</p>
                  <p className="font-medium">{selectedConsultation.companySize}</p>
                </div>
                {selectedConsultation.revenue ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="font-medium">{selectedConsultation.revenue}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-xs text-muted-foreground">Consultation format</p>
                  <p className="font-medium">{selectedConsultation.consultationFormat}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Timeline</p>
                  <p className="font-medium">{selectedConsultation.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Automation experience</p>
                  <p className="font-medium">{selectedConsultation.automationExperience}</p>
                </div>
                {selectedConsultation.timeConsumers ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Biggest time consumers</p>
                    <p className="font-medium">{selectedConsultation.timeConsumers}</p>
                  </div>
                ) : null}
                {selectedConsultation.hearAbout ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Heard about us from</p>
                    <p className="font-medium">{selectedConsultation.hearAbout}</p>
                  </div>
                ) : null}
                {selectedConsultation.referralName ? (
                  <div>
                    <p className="text-xs text-muted-foreground">Referral name</p>
                    <p className="font-medium">{selectedConsultation.referralName}</p>
                  </div>
                ) : null}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Primary bottleneck</p>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{selectedConsultation.bottleneck}</p>
                </div>
                {selectedConsultation.additionalInfo ? (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Additional information</p>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{selectedConsultation.additionalInfo}</p>
                  </div>
                ) : null}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Top challenges</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultation.challenges.map((challenge) => (
                      <Badge key={challenge} variant="outline">
                        {challenge}
                      </Badge>
                    ))}
                    {selectedConsultation.challengesOther ? (
                      <Badge variant="outline">{selectedConsultation.challengesOther}</Badge>
                    ) : null}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Driving factors</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultation.drivingFactors.map((factor) => (
                      <Badge key={factor} variant="outline">
                        {factor}
                      </Badge>
                    ))}
                    {selectedConsultation.drivingFactorsOther ? (
                      <Badge variant="outline">{selectedConsultation.drivingFactorsOther}</Badge>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">Best times</p>
                <div className="flex flex-wrap gap-2">
                  {selectedConsultation.bestTimes.map((time) => (
                    <Badge key={time} variant="secondary">
                      {time}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant={selectedConsultation.emailUpdates ? "default" : "outline"}>
                    Email updates
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={selectedConsultation.weeklyInsights ? "default" : "outline"}>
                    Weekly insights
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={selectedConsultation.eventNotifications ? "default" : "outline"}>
                    Event notifications
                  </Badge>
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
