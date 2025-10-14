"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ArchitectureDiagram } from "./architecture-diagram"
import Image from "next/image"

export function FeaturedCaseStudy() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-primary/20 to-background">
        <Image
          src="/ai-social-media-automation-dashboard-with-analytic.jpg"
          alt="Octupus.ai Dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Telecom Industry</Badge>
            <Badge variant="secondary">Advanced AI Integration</Badge>
            <Badge className="bg-primary">Featured Project</Badge>
          </div>
          <h2 className="text-4xl font-bold mb-2">Octupus.ai</h2>
          <p className="text-lg text-muted-foreground">AI-Powered Social Media Automation for UK Telecom Businesses</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border-b border-border">
        <div>
          <div className="text-2xl font-bold text-primary">6 Months</div>
          <div className="text-sm text-muted-foreground">Development Timeline</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">5 People</div>
          <div className="text-sm text-muted-foreground">Team Size</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">$16K</div>
          <div className="text-sm text-muted-foreground">Client Investment</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">$25K</div>
          <div className="text-sm text-muted-foreground">Market Value</div>
        </div>
      </div>

      {/* Expandable Content */}
      <div className="p-8">
        <Button variant="ghost" className="w-full justify-between mb-6" onClick={() => setIsExpanded(!isExpanded)}>
          <span className="text-lg font-semibold">View Full Case Study Details</span>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {isExpanded && (
          <div className="space-y-8">
            {/* Business Context */}
            <div>
              <h3 className="text-xl font-bold mb-4">Business Context</h3>
              <p className="text-muted-foreground leading-relaxed">
                UK telecom businesses spend 25+ hours weekly creating social media content while ensuring OFCOM
                compliance. Manual processes were killing productivity and consistency.
              </p>
            </div>

            {/* Technical Solution */}
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Solution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">Custom GPT-4 Integration</div>
                  <p className="text-sm text-muted-foreground">
                    Telecom-specific training for industry-accurate content generation
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">NLP Processing</div>
                  <p className="text-sm text-muted-foreground">
                    Advanced natural language processing for content optimization
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">Brand Voice Matching</div>
                  <p className="text-sm text-muted-foreground">
                    Algorithms ensure consistent brand voice across all content
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">Compliance Checking</div>
                  <p className="text-sm text-muted-foreground">
                    Automated OFCOM regulation verification before publishing
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">Multi-Platform Scheduling</div>
                  <p className="text-sm text-muted-foreground">
                    Intelligent scheduling across LinkedIn, Facebook, Instagram
                  </p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="font-semibold mb-2">Regulation Database</div>
                  <p className="text-sm text-muted-foreground">
                    Integrated OFCOM regulation database for real-time compliance
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div>
              <h3 className="text-xl font-bold mb-4">System Architecture</h3>
              <ArchitectureDiagram />
            </div>

            {/* Development Breakdown */}
            <div>
              <h3 className="text-xl font-bold mb-4">Development Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                  <div>
                    <div className="font-semibold">AI Engineer</div>
                    <div className="text-sm text-muted-foreground">Custom model training</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">6 months, part-time</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                  <div>
                    <div className="font-semibold">Full-Stack Developer</div>
                    <div className="text-sm text-muted-foreground">Platform, APIs, integrations</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">6 months</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                  <div>
                    <div className="font-semibold">UI/UX Designer</div>
                    <div className="text-sm text-muted-foreground">Interface design</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">2 months</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                  <div>
                    <div className="font-semibold">Graphic Designer</div>
                    <div className="text-sm text-muted-foreground">Template systems</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">6 months</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                  <div>
                    <div className="font-semibold">Project Manager</div>
                    <div className="text-sm text-muted-foreground">Coordination</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">6 months, part-time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Transparency */}
            <div>
              <h3 className="text-xl font-bold mb-4">Cost Transparency</h3>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Development</span>
                        <span className="font-semibold">$12,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Design</span>
                        <span className="font-semibold">$2,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Project Management</span>
                        <span className="font-semibold">$1,000</span>
                      </div>
                      <div className="h-px bg-border my-2" />
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total Investment</span>
                        <span className="font-bold text-primary">$16,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Market Rate</span>
                        <span className="font-semibold line-through">$40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Client Paid</span>
                        <span className="font-semibold">$25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Savings</span>
                        <span className="font-semibold text-green-500">$15,000 (37.5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "OpenAI GPT-4",
                  "LinkedIn API",
                  "Facebook API",
                  "Instagram API",
                  "AWS",
                  "Docker",
                  "Redis",
                ].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Results & Metrics */}
            <div>
              <h3 className="text-xl font-bold mb-4">Results & Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">UK Telecom Companies Served</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Compliant Posts Weekly</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">94%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">Zero</div>
                  <div className="text-sm text-muted-foreground">Compliance Violations</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">40%</div>
                  <div className="text-sm text-muted-foreground">Engagement Improvement</div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
                </div>
              </div>
            </div>

            {/* Build Similar CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Build Similar for Your Industry</h3>
              <p className="text-muted-foreground mb-4">
                We can adapt this approach for any B2B industry requiring compliant content generation
              </p>
              <Button>Get Industry-Specific Demo</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
