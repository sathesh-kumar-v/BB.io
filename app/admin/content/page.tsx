"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Briefcase, FolderOpen } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Mock data
const mockContent = {
  blogs: [
    {
      id: 1,
      title: "How AI is Transforming Property Management",
      slug: "ai-transforming-property-management",
      category: "AI Automation",
      status: "Published",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "5 Ways to Automate Your Law Firm",
      slug: "automate-law-firm",
      category: "Legal Tech",
      status: "Draft",
      date: "2025-01-12",
    },
  ],
  caseStudies: [
    {
      id: 1,
      title: "Octupus.ai: Telecom Customer Service Revolution",
      slug: "octupus-ai-case-study",
      category: "Telecommunications",
      status: "Published",
      date: "2025-01-08",
    },
    {
      id: 2,
      title: "Wellenpuls: Healthcare Appointment Automation",
      slug: "wellenpuls-case-study",
      category: "Healthcare",
      status: "Published",
      date: "2025-01-05",
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Property Management CRM System",
      slug: "property-management-crm",
      category: "Real Estate",
      status: "Published",
      date: "2025-01-15",
    },
    {
      id: 2,
      title: "Legal Document Automation Platform",
      slug: "legal-document-automation",
      category: "Legal",
      status: "Published",
      date: "2025-01-13",
    },
  ],
}

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState("blogs")

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-700"
      case "Draft":
        return "bg-amber-100 text-amber-700"
      case "Unpublished":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const renderContentTable = (content: any[], type: string) => (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {content.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                No {type} found
              </TableCell>
            </TableRow>
          ) : (
            content.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-sm text-gray-600">{item.slug}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeColor(item.status)}>{item.status}</Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600 mt-1">Manage blogs, case studies, and portfolio items</p>
        </div>
        <Link href="/admin/content/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="blogs" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Blogs
          </TabsTrigger>
          <TabsTrigger value="caseStudies" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Case Studies
          </TabsTrigger>
          <TabsTrigger value="portfolios" className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4" />
            Portfolios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="blogs" className="mt-6">
          {renderContentTable(mockContent.blogs, "blogs")}
        </TabsContent>

        <TabsContent value="caseStudies" className="mt-6">
          {renderContentTable(mockContent.caseStudies, "case studies")}
        </TabsContent>

        <TabsContent value="portfolios" className="mt-6">
          {renderContentTable(mockContent.portfolios, "portfolio items")}
        </TabsContent>
      </Tabs>
    </div>
  )
}
