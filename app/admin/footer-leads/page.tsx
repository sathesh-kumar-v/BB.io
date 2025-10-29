"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, RefreshCcw, Search } from "lucide-react"

type FooterLead = {
  id: string
  name: string
  email: string
  companyName: string
  industry: string
  preferredCallTime: string
  createdAt: string
}

export default function FooterLeadsPage() {
  const [leads, setLeads] = useState<FooterLead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")

  const loadLeads = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/footer-leads", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as { leads?: FooterLead[] }
      setLeads(data.leads ?? [])
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load footer leads", fetchError)
      setError("We couldn't load the latest footer leads. Please try again later.")
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void loadLeads(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadLeads])

  const industries = useMemo(() => {
    const uniqueIndustries = new Set<string>()
    for (const lead of leads) {
      if (lead.industry) {
        uniqueIndustries.add(lead.industry)
      }
    }
    return Array.from(uniqueIndustries).sort((a, b) => a.localeCompare(b))
  }, [leads])

  const filteredLeads = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return leads.filter((lead) => {
      const matchesIndustry = selectedIndustry === "all" || lead.industry === selectedIndustry

      if (!matchesIndustry) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const haystack = [lead.name, lead.email, lead.companyName, lead.industry, lead.preferredCallTime]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.toLowerCase())

      return haystack.some((value) => value.includes(normalizedQuery))
    })
  }, [leads, selectedIndustry, searchQuery])

  const latestLeadDate = leads[0]?.createdAt ? new Date(leads[0].createdAt) : null

  const resultsSummary = loading
    ? "Loading footer leads..."
    : error
      ? "Unable to display footer leads."
      : `Showing ${filteredLeads.length} of ${leads.length} leads`

  const handleExportCSV = () => {
    if (filteredLeads.length === 0) {
      return
    }

    const headers = ["Name", "Email", "Company", "Industry", "Preferred Call Time", "Submitted At"]

    const csvData = filteredLeads.map((lead) => [
      lead.name,
      lead.email,
      lead.companyName,
      lead.industry,
      lead.preferredCallTime,
      new Date(lead.createdAt).toLocaleString(),
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
    anchor.download = `footer-leads-${new Date().toISOString().split("T")[0]}.csv`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }

  const handleRefresh = () => {
    void loadLeads()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quick Calls</h1>
        <p className="text-muted-foreground mt-1">
          Review all leads captured from the footer contact form across your site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Total Leads</div>
          <div className="text-3xl font-bold text-foreground mt-2">{leads.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Unique Industries</div>
          <div className="text-3xl font-bold text-foreground mt-2">{industries.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Most Recent Lead</div>
          <div className="text-lg font-semibold text-foreground mt-2">
            {latestLeadDate ? latestLeadDate.toLocaleString() : "—"}
          </div>
        </Card>
      </div>

      {error ? (
        <Card className="p-4 border-destructive/40 bg-destructive/10 text-destructive">
          {error}
        </Card>
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

          <div className="flex gap-2 w-full md:w-auto">
            <Button onClick={handleRefresh} variant="outline" className="flex-1 md:flex-none" disabled={loading}>
              <RefreshCcw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button
              onClick={handleExportCSV}
              variant="outline"
              className="flex-1 md:flex-none"
              disabled={filteredLeads.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </Card>

      <div className="text-sm text-muted-foreground">{resultsSummary}</div>

      <Card className="border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Company</TableHead>
              <TableHead className="text-muted-foreground">Industry</TableHead>
              <TableHead className="text-muted-foreground">Preferred Call Time</TableHead>
              <TableHead className="text-muted-foreground">Submitted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  Loading footer leads...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-destructive">
                  We couldn't load the latest footer leads.
                </TableCell>
              </TableRow>
            ) : filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  No footer leads match your current filters.
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium text-foreground">{lead.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <a href={`mailto:${lead.email}`} className="hover:underline">
                      {lead.email}
                    </a>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{lead.companyName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-border bg-muted/30 text-foreground">
                      {lead.industry}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{lead.preferredCallTime}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(lead.createdAt).toLocaleString()}
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
