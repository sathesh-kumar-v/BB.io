"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface CaseStudyCardProps {
  title: string
  industry: string
  badge: string
  investment: string
  totalValue: string
  roi: string
  description: string
  features: string[]
  techStack: string[]
  timeline: string
  image: string
}

export function CaseStudyCard({
  title,
  industry,
  badge,
  investment,
  totalValue,
  roi,
  description,
  features,
  techStack,
  timeline,
  image,
}: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-background">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{industry}</Badge>
          <Badge variant="secondary">{badge}</Badge>
        </div>

        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-lg font-bold text-primary">{investment}</div>
            <div className="text-xs text-muted-foreground">Investment</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{totalValue}</div>
            <div className="text-xs text-muted-foreground">Value</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{roi}%</div>
            <div className="text-xs text-muted-foreground">ROI</div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Expandable Details */}
        <Button variant="ghost" size="sm" className="w-full justify-between" onClick={() => setIsExpanded(!isExpanded)}>
          <span>View Full Case Study</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {isExpanded && (
          <div className="mt-4 space-y-4 pt-4 border-t border-border">
            {/* Features */}
            <div>
              <div className="font-semibold mb-2">Key Features</div>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="font-semibold mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="font-semibold mb-2">Timeline</div>
              <p className="text-sm text-muted-foreground">{timeline}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
