"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const filters = {
  industry: ["All", "Telecom", "Manufacturing", "HealthTech", "SaaS", "Retail"],
  technology: ["All", "AI/ML", "Mobile Apps", "Web Platforms", "CRM Systems"],
  investment: ["All", "Under $5K", "$5K-$15K", "$15K+"],
  timeline: ["All", "Under 8 Weeks", "8-16 Weeks", "16+ Weeks"],
}

export function FilterBar() {
  const [activeFilters, setActiveFilters] = useState({
    industry: "All",
    technology: "All",
    investment: "All",
    timeline: "All",
  })

  const handleFilterChange = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters((prev) => ({ ...prev, [category]: value }))
  }

  return (
    <section className="border-b border-border bg-card/30 sticky top-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* Industry Filter */}
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-2">Industry</div>
            <div className="flex flex-wrap gap-2">
              {filters.industry.map((item) => (
                <Button
                  key={item}
                  variant={activeFilters.industry === item ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("industry", item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-2">Technology</div>
            <div className="flex flex-wrap gap-2">
              {filters.technology.map((item) => (
                <Button
                  key={item}
                  variant={activeFilters.technology === item ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("technology", item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Investment & Timeline Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Investment Range</div>
              <div className="flex flex-wrap gap-2">
                {filters.investment.map((item) => (
                  <Button
                    key={item}
                    variant={activeFilters.investment === item ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange("investment", item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Timeline</div>
              <div className="flex flex-wrap gap-2">
                {filters.timeline.map((item) => (
                  <Button
                    key={item}
                    variant={activeFilters.timeline === item ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange("timeline", item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
