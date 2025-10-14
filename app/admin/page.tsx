import { StatCard } from "@/components/admin/stat-card"
import { FileText, Calendar, Users, Mail, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Form Submissions",
      value: "1,234",
      change: "+12% from last month",
      changeType: "positive" as const,
      icon: FileText,
    },
    {
      title: "Consultation Requests",
      value: "89",
      change: "+8% from last month",
      changeType: "positive" as const,
      icon: Calendar,
    },
    {
      title: "Community Applications",
      value: "156",
      change: "+23% from last month",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Newsletter Subscribers",
      value: "3,421",
      change: "+15% from last month",
      changeType: "positive" as const,
      icon: Mail,
    },
  ]

  const recentActivity = [
    { type: "form", message: "New contact form submission from John Doe", time: "5 minutes ago" },
    { type: "consultation", message: "Consultation booked by Sarah Smith", time: "12 minutes ago" },
    { type: "community", message: "New community application from Mike Johnson", time: "1 hour ago" },
    { type: "newsletter", message: "5 new newsletter subscribers", time: "2 hours ago" },
    { type: "form", message: "New contact form submission from Jane Wilson", time: "3 hours ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6 border-border bg-card">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-sm text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
