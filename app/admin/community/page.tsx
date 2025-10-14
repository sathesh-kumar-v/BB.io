"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data
const mockApplications = [
  {
    id: 1,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Software Developer",
    message: "Interested in joining the AI development community",
    status: "Pending",
    notes: "",
    createdAt: "2025-01-14T16:45:00",
  },
  {
    id: 2,
    name: "Lisa Anderson",
    email: "lisa@example.com",
    role: "Product Manager",
    message: "Want to connect with other tech professionals",
    status: "Approved",
    notes: "Great fit for the community",
    createdAt: "2025-01-13T10:20:00",
  },
  {
    id: 3,
    name: "Tom Wilson",
    email: "tom@example.com",
    role: "Marketing Specialist",
    message: "Looking to learn more about AI automation",
    status: "Rejected",
    notes: "Not aligned with community focus",
    createdAt: "2025-01-12T14:30:00",
  },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [applications, setApplications] = useState(mockApplications)
  const [selectedApp, setSelectedApp] = useState<(typeof mockApplications)[0] | null>(null)
  const [notes, setNotes] = useState("")

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.role.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterStatus === "all" || app.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const handleStatusChange = (id: number, newStatus: string) => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)))
  }

  const handleSaveNotes = () => {
    if (selectedApp) {
      setApplications((prev) => prev.map((app) => (app.id === selectedApp.id ? { ...app, notes } : app)))
      setSelectedApp(null)
      setNotes("")
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700"
      case "Approved":
        return "bg-green-100 text-green-700"
      case "Rejected":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Community Applications</h1>
        <p className="text-gray-600 mt-1">Review and manage community membership requests</p>
      </div>

      {/* Filters and Actions */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filter by Status */}
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredApplications.length} of {applications.length} applications
      </div>

      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role/Profession</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApplications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>{app.role}</TableCell>
                  <TableCell className="max-w-xs truncate">{app.message}</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(app.status)}>{app.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Select value={app.status} onValueChange={(value) => handleStatusChange(app.id, value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Approved">Approved</SelectItem>
                          <SelectItem value="Rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedApp(app)
                              setNotes(app.notes)
                            }}
                          >
                            Notes
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Admin Notes</DialogTitle>
                            <DialogDescription>Add notes for {app.name}'s application</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Textarea
                              placeholder="Add your notes here..."
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              rows={5}
                            />
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" onClick={() => setSelectedApp(null)}>
                                Cancel
                              </Button>
                              <Button onClick={handleSaveNotes}>Save Notes</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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
