"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, RefreshCcw, Search } from "lucide-react"

type Subscription = {
  id: string
  email: string
  type: "newsletter" | "community"
  createdAt: string
}

export default function NewsletterPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const loadSubscriptions = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/subscriptions", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as { subscriptions?: Subscription[] }
      setSubscriptions(data.subscriptions ?? [])
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load subscriptions", fetchError)
      setError("We couldn't load the latest subscribers. Please try again later.")
      setSubscriptions([])
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void loadSubscriptions(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadSubscriptions])

  const filteredSubscriptions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return subscriptions.filter((subscription) => {
      const matchesType = selectedType === "all" || subscription.type === selectedType

      if (!matchesType) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      return subscription.email.toLowerCase().includes(normalizedQuery)
    })
  }, [subscriptions, searchQuery, selectedType])

  const newsletterCount = subscriptions.filter((subscription) => subscription.type === "newsletter").length
  const communityCount = subscriptions.filter((subscription) => subscription.type === "community").length

  const resultsSummary = loading
    ? "Loading subscribers..."
    : error
      ? "Unable to display subscribers."
      : `Showing ${filteredSubscriptions.length} of ${subscriptions.length} subscribers`

  const handleExportCSV = () => {
    if (filteredSubscriptions.length === 0) {
      return
    }

    const headers = ["Email", "Type", "Joined"]

    const csvData = filteredSubscriptions.map((subscription) => [
      subscription.email,
      subscription.type === "newsletter" ? "Newsletter" : "Community Waitlist",
      new Date(subscription.createdAt).toLocaleString(),
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
    anchor.download = `subscriptions-${new Date().toISOString().split("T")[0]}.csv`
    anchor.click()
    window.URL.revokeObjectURL(url)
  }

  const handleRefresh = () => {
    void loadSubscriptions()
  }

  const badgeForType = (type: Subscription["type"]) => {
    if (type === "community") {
      return "bg-purple-100 text-purple-700"
    }

    return "bg-emerald-100 text-emerald-700"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Subscribers</h1>
        <p className="text-muted-foreground mt-1">
          View newsletter subscribers and community waitlist signups captured across the site.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Total Subscribers</div>
          <div className="text-3xl font-bold text-foreground mt-2">{subscriptions.length}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Newsletter Subscribers</div>
          <div className="text-3xl font-bold text-foreground mt-2">{newsletterCount}</div>
        </Card>
        <Card className="p-6 border-border bg-card">
          <div className="text-sm font-medium text-muted-foreground">Community Waitlist</div>
          <div className="text-3xl font-bold text-foreground mt-2">{communityCount}</div>
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
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="newsletter">Newsletter</SelectItem>
              <SelectItem value="community">Community Waitlist</SelectItem>
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
              disabled={filteredSubscriptions.length === 0 || loading}
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
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                  Loading subscribers...
                </TableCell>
              </TableRow>
            ) : filteredSubscriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                  No subscribers found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscriptions.map((subscription) => (
                <TableRow key={subscription.id} className="border-border hover:bg-muted/5">
                  <TableCell className="font-medium text-foreground">{subscription.email}</TableCell>
                  <TableCell>
                    <Badge className={badgeForType(subscription.type)}>
                      {subscription.type === "newsletter" ? "Newsletter" : "Community Waitlist"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(subscription.createdAt).toLocaleString()}
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
