"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Calendar, Users, Mail, FolderOpen, UserCog, Settings, PhoneCall } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Form Submissions", href: "/admin/forms", icon: FileText },
  { name: "Footer Leads", href: "/admin/footer-leads", icon: PhoneCall },
  { name: "Consultations", href: "/admin/consultations", icon: Calendar },
  { name: "Community", href: "/admin/community", icon: Users },
  { name: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { name: "Content", href: "/admin/content", icon: FolderOpen },
  { name: "Users", href: "/admin/users", icon: UserCog },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-sidebar-border">
        <Link href="/admin" className="flex items-center gap-3">
          <Image src="/Brandingbeez2-21.svg" alt="BrandingBeez.io" width={42} height={42} className="w-42 h-42" />
          <div>
            <div className="font-bold text-sidebar-foreground text-lg">BrandingBeez</div>
            <div className="text-xs text-muted-foreground">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground text-center">v1.0.0 • BrandingBeez Admin</div>
      </div>
    </aside>
  )
}
