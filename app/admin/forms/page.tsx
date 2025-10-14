"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data - replace with real data from your backend
const mockSubmissions = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    message: "Interested in AI automation for my law firm",
    source: "Contact Form",
    type: "Contact",
    date: "2025-01-15T10:30:00",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 234 567 8901",
    message: "Need consultation for property management CRM",
    source: "Consultation Form",
    type: "Consultation",
    date: "2025-01-15T09:15:00",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234 567 8902",
    message: "Want to join the community",
    source: "Community Page",
    type: "Community",
    date: "2025-01-14T16:45:00",
  },
  {
    id: 4,
    name: "Jane Wilson",
    email: "jane@example.com",
    phone: "+1 234 567 8903",
    message: "Subscribe to newsletter",
    source: "Newsletter Form",
    type: "Newsletter",
    date: "2025-01-14T14:20:00",
  },
]

export default function FormsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredSubmissions = mockSubmissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterType === "all" || submission.type === filterType

    return matchesSearch && matchesFilter
  })

  const handleExportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Message", "Source", "Type", "Date"]
    const csvData = filteredSubmissions.map((sub) => [
      sub.name,
      sub.email,
      sub.phone,
      sub.message,
      sub.source,
      sub.type,
      new Date(sub.date).toLocaleString(),
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `form-submissions-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Contact":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
      case "Consultation":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20"
      case "Community":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      case "Newsletter":
        return "bg-primary/10 text-primary border-primary/20"
      default:
        return "bg-muted/10 text-muted-foreground border-border"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Form Submissions</h1>
        <p className="text-muted-foreground mt-1">Manage all website form submissions in one place</p>
      </div>

      {/* Filters and Actions */}
      <Card className="p-4 border-border bg-card">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by name, email, or message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filter by Type */}
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Contact">Contact</SelectItem>
              <SelectItem value="Consultation">Consultation</SelectItem>
              <SelectItem value="Community">Community</SelectItem>
              <SelectItem value="Newsletter">Newsletter</SelectItem>
            </SelectContent>
          </Select>

          {/* Export Button */}
          <Button onClick={handleExportCSV} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredSubmissions.length} of {mockSubmissions.length} submissions
      </div>

      {/* Table */}
      <Card className="border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Phone</TableHead>
              <TableHead className="text-muted-foreground">Message</TableHead>
              <TableHead className="text-muted-foreground">Source</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubmissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No submissions found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubmissions.map((submission) => (
                <TableRow key={submission.id} className="border-border hover:bg-muted/5">
                  <TableCell className="font-medium text-foreground">{submission.name}</TableCell>
                  <TableCell className="text-foreground">{submission.email}</TableCell>
                  <TableCell className="text-foreground">{submission.phone}</TableCell>
                  <TableCell className="max-w-xs truncate text-foreground">{submission.message}</TableCell>
                  <TableCell className="text-muted-foreground">{submission.source}</TableCell>
                  <TableCell>
                    <Badge className={getTypeBadgeColor(submission.type)}>{submission.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(submission.date).toLocaleDateString()}
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
