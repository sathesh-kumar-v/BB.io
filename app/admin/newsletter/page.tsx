"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data
const mockSubscribers = [
  {
    id: 1,
    email: "subscriber1@example.com",
    dateJoined: "2025-01-10T08:30:00",
    active: true,
  },
  {
    id: 2,
    email: "subscriber2@example.com",
    dateJoined: "2025-01-12T14:20:00",
    active: true,
  },
  {
    id: 3,
    email: "subscriber3@example.com",
    dateJoined: "2025-01-14T10:15:00",
    active: false,
  },
  {
    id: 4,
    email: "subscriber4@example.com",
    dateJoined: "2025-01-15T16:45:00",
    active: true,
  },
]

export default function NewsletterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [subscribers, setSubscribers] = useState(mockSubscribers)

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleExportCSV = () => {
    const headers = ["Email", "Date Joined", "Status"]
    const csvData = filteredSubscribers.map((sub) => [
      sub.email,
      new Date(sub.dateJoined).toLocaleString(),
      sub.active ? "Active" : "Unsubscribed",
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const handleToggleActive = (id: number) => {
    setSubscribers((prev) => prev.map((sub) => (sub.id === id ? { ...sub, active: !sub.active } : sub)))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Newsletter Subscribers</h1>
        <p className="text-gray-600 mt-1">View all email subscribers collected from your website</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white shadow-sm">
          <div className="text-sm font-medium text-gray-600">Total Subscribers</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{subscribers.length}</div>
        </Card>
        <Card className="p-6 bg-white shadow-sm">
          <div className="text-sm font-medium text-gray-600">Active Subscribers</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{subscribers.filter((s) => s.active).length}</div>
        </Card>
        <Card className="p-6 bg-white shadow-sm">
          <div className="text-sm font-medium text-gray-600">Unsubscribed</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{subscribers.filter((s) => !s.active).length}</div>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card className="p-4 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50"
              />
            </div>
          </div>

          {/* Export Button */}
          <Button onClick={handleExportCSV} className="bg-amber-500 hover:bg-amber-600">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredSubscribers.length} of {subscribers.length} subscribers
      </div>

      {/* Table */}
      <Card className="bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-700">Email</TableHead>
              <TableHead className="text-gray-700">Date Joined</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-8 text-gray-500">
                  No subscribers found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium text-gray-900">{subscriber.email}</TableCell>
                  <TableCell className="text-sm text-gray-700">
                    {new Date(subscriber.dateJoined).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={subscriber.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}>
                      {subscriber.active ? "Active" : "Unsubscribed"}
                    </Badge>
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
