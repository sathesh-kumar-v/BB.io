"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const mockConsultations = [
  {
    id: 1,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 234 567 8901",
    preferredDate: "2025-01-20",
    preferredTime: "10:00 AM",
    message: "Need consultation for property management CRM",
    status: "New",
    createdAt: "2025-01-15T09:15:00",
  },
  {
    id: 2,
    name: "Robert Brown",
    email: "robert@example.com",
    phone: "+1 234 567 8904",
    preferredDate: "2025-01-22",
    preferredTime: "2:00 PM",
    message: "Interested in AI automation for construction business",
    status: "Contacted",
    createdAt: "2025-01-14T11:30:00",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 234 567 8905",
    preferredDate: "2025-01-18",
    preferredTime: "3:00 PM",
    message: "Want to discuss mobile app development",
    status: "Done",
    createdAt: "2025-01-13T14:20:00",
  },
]

export default function ConsultationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [consultations, setConsultations] = useState(mockConsultations)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"table" | "calendar">("table")

  const filteredConsultations = consultations.filter((consultation) => {
    const matchesSearch =
      consultation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = filterStatus === "all" || consultation.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const handleStatusChange = (id: number, newStatus: string) => {
    setConsultations((prev) =>
      prev.map((consultation) => (consultation.id === id ? { ...consultation, status: newStatus } : consultation)),
    )
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700"
      case "Contacted":
        return "bg-amber-100 text-amber-700"
      case "Done":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const getConsultationsForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0]
    return consultations.filter((c) => c.preferredDate === dateStr)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Consultation Requests</h1>
        <p className="text-gray-600 mt-1">Manage and track all consultation bookings</p>
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
                placeholder="Search consultations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50"
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
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Contacted">Contacted</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant={view === "table" ? "default" : "outline"}
              onClick={() => setView("table")}
              className={view === "table" ? "bg-amber-500 hover:bg-amber-600" : ""}
            >
              Table View
            </Button>
            <Button
              variant={view === "calendar" ? "default" : "outline"}
              onClick={() => setView("calendar")}
              className={view === "calendar" ? "bg-amber-500 hover:bg-amber-600" : ""}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              Calendar View
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredConsultations.length} of {consultations.length} consultations
      </div>

      {view === "table" ? (
        <Card className="bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-700">Name</TableHead>
                <TableHead className="text-gray-700">Email</TableHead>
                <TableHead className="text-gray-700">Phone</TableHead>
                <TableHead className="text-gray-700">Preferred Date/Time</TableHead>
                <TableHead className="text-gray-700">Message</TableHead>
                <TableHead className="text-gray-700">Status</TableHead>
                <TableHead className="text-gray-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConsultations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                    No consultations found
                  </TableCell>
                </TableRow>
              ) : (
                filteredConsultations.map((consultation) => (
                  <TableRow key={consultation.id}>
                    <TableCell className="font-medium text-gray-900">{consultation.name}</TableCell>
                    <TableCell className="text-gray-700">{consultation.email}</TableCell>
                    <TableCell className="text-gray-700">{consultation.phone}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="text-gray-900">{new Date(consultation.preferredDate).toLocaleDateString()}</div>
                        <div className="text-gray-500">{consultation.preferredTime}</div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate text-gray-700">{consultation.message}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(consultation.status)}>{consultation.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={consultation.status}
                        onValueChange={(value) => handleStatusChange(consultation.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Done">Done</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <Card className="p-6 bg-white shadow-sm">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">{monthName}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => navigateMonth("next")}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-gray-700 py-2">
                {day}
              </div>
            ))}

            {/* Empty cells for days before month starts */}
            {Array.from({ length: startingDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {/* Calendar Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
              const dayConsultations = getConsultationsForDate(date)
              const isToday = date.toDateString() === new Date().toDateString()

              return (
                <div
                  key={day}
                  className={`aspect-square border rounded-lg p-2 ${
                    isToday ? "border-amber-500 bg-amber-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className={`text-sm font-medium mb-1 ${isToday ? "text-amber-700" : "text-gray-900"}`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayConsultations.map((consultation) => (
                      <div
                        key={consultation.id}
                        className={`text-xs p-1 rounded truncate ${
                          consultation.status === "New"
                            ? "bg-blue-100 text-blue-700"
                            : consultation.status === "Contacted"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                        }`}
                        title={`${consultation.name} - ${consultation.preferredTime}`}
                      >
                        {consultation.preferredTime} - {consultation.name}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-100" />
              <span className="text-sm text-gray-700">New</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-amber-100" />
              <span className="text-sm text-gray-700">Contacted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-100" />
              <span className="text-sm text-gray-700">Done</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
