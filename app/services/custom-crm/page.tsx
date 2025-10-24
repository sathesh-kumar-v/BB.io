"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Target,
  Brain,
  TrendingUp,
  LinkIcon,
  Users,
  FileText,
  BarChart3,
  Zap,
  Smartphone,
  PuzzleIcon,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  DollarSign,
  Clock,
  Star,
} from "lucide-react"

export default function CustomCRMPage() {
  const [activeTab, setActiveTab] = useState("lead-management")
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Copy */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
                  Stop Losing Leads to Spreadsheet Chaos
                </h1>
                <p className="text-lg text-muted-foreground lg:text-xl">
                  We build intelligent CRM systems that grow with your business - starting small, proving value, then
                  scaling smart. No $50K+ enterprise nightmares, no vendor lock-in, just CRM that actually helps you
                  close more deals.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Start Small, Scale Smart</h3>
                    <p className="text-sm text-muted-foreground">
                      Phase-based development from $2.3K to full enterprise
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI-Powered Intelligence</h3>
                    <p className="text-sm text-muted-foreground">
                      Predictive lead scoring, automated workflows, smart insights
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Proven ROI Track Record</h3>
                    <p className="text-sm text-muted-foreground">
                      AC Graphics: $2.3K investment → $7.5K value → 226% ROI
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <LinkIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Integrate Everything</h3>
                    <p className="text-sm text-muted-foreground">
                      Salesforce, HubSpot, QuickBooks, email, and custom systems
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="gap-2">
                  See CRM in Action
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Calculate CRM ROI
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side - CRM Dashboard Preview */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
                <div className="absolute right-4 top-4 z-10 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
                  Built in 2 months for $2.3K
                </div>
                <img
                  src="/modern-crm-dashboard-with-pipeline-and-sales-track.jpg"
                  alt="AC Graphics CRM Dashboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                  <div className="flex gap-4">
                    <div className="rounded-lg bg-primary/10 px-3 py-2">
                      <div className="text-2xl font-bold text-primary">226%</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                    <div className="rounded-lg bg-primary/10 px-3 py-2">
                      <div className="text-2xl font-bold text-primary">50%</div>
                      <div className="text-xs text-muted-foreground">Faster Quotes</div>
                    </div>
                    <div className="rounded-lg bg-primary/10 px-3 py-2">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Lead Capture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Problems Section */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              The Real Cost of CRM Chaos
            </h2>
            <p className="text-lg text-muted-foreground">(And Why Most Solutions Make It Worse)</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Problem 1 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <FileText className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">The Spreadsheet Nightmare</h3>
              <p className="mb-4 text-muted-foreground">
                It's 9 PM. You're still updating your 'customer database' - three different spreadsheets that don't talk
                to each other. A hot lead from last week? Lost somewhere in the mess. Your biggest client's renewal
                date? You think it's next month, but honestly, you're not sure.
              </p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 15 hours/week on manual data entry</li>
                  <li>• 20% of leads lost to poor follow-up</li>
                  <li>• 30% revenue loss from missed opportunities</li>
                  <li>• Stress, mistakes, and sleepless nights</li>
                </ul>
              </div>
            </Card>

            {/* Problem 2 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <DollarSign className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">The Enterprise Trap</h3>
              <p className="mb-4 text-muted-foreground">
                You tried the 'big name' CRM. $300/month per user, took 6 months to implement, requires a manual to use.
                Your team hates it, you're paying for features you don't need, and it still doesn't do what you actually
                want.
              </p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• $50K+ annual costs for enterprise solutions</li>
                  <li>• 6-12 month implementation timelines</li>
                  <li>• Complex training and change management</li>
                  <li>• Vendor lock-in with no flexibility</li>
                </ul>
              </div>
            </Card>

            {/* Problem 3 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <LinkIcon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">The Integration Hell</h3>
              <p className="mb-4 text-muted-foreground">
                Your CRM doesn't talk to QuickBooks. Your email system is separate. Your website leads go nowhere.
                You're manually copying data between 5 different systems, and something always gets missed.
              </p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Data silos preventing clear business view</li>
                  <li>• Manual integration errors and delays</li>
                  <li>• Duplicate data entry across systems</li>
                  <li>• Decision-making based on incomplete information</li>
                </ul>
              </div>
            </Card>

            {/* Problem 4 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <TrendingUp className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">The Growth Ceiling</h3>
              <p className="mb-4 text-muted-foreground">
                You're growing fast, but your systems can't keep up. New hires spend weeks learning your 'process'
                (which changes daily). Customers are frustrated by inconsistent communication. You're working harder but
                feeling less in control.
              </p>
              <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Growth limited by operational chaos</li>
                  <li>• New hire training costs and delays</li>
                  <li>• Customer satisfaction decline</li>
                  <li>• Founder burnout from manual oversight</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-foreground">
              What if your CRM actually helped you grow instead of holding you back?
            </p>
          </div>
        </div>
      </section>

      {/* Phased Approach Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              Our Smart Phase-Based CRM Development
            </h2>
            <p className="text-lg text-muted-foreground">
              Start small, prove value, scale systematically - never pay for what you don't need yet
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {/* Phase 1 */}
            <Card className="border-border bg-card">
              <button
                onClick={() => setExpandedPhase(expandedPhase === "phase1" ? null : "phase1")}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <Badge variant="secondary">Phase 1</Badge>
                      <h3 className="text-2xl font-bold text-foreground">Foundation CRM</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        2-4 weeks
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $2,300-$5,000
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Perfect for 5-25 employees
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform ${
                      expandedPhase === "phase1" ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedPhase === "phase1" && (
                <div className="border-t border-border p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">What You Get:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Core contact and lead management
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Sales pipeline tracking with stages
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Quote and proposal generation (PDF automation)
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Basic reporting and analytics dashboard
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Email integration and automated follow-ups
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Website lead capture and auto-import
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Success Metrics:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          50% faster quote generation
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Zero missed follow-ups
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          100% lead capture accuracy
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Clear pipeline visibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Phase 2 */}
            <Card className="border-border bg-card">
              <button
                onClick={() => setExpandedPhase(expandedPhase === "phase2" ? null : "phase2")}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <Badge variant="secondary">Phase 2</Badge>
                      <h3 className="text-2xl font-bold text-foreground">Intelligent Automation</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        4-6 weeks
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $5,000-$12,000
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Perfect for 25-75 employees
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform ${
                      expandedPhase === "phase2" ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedPhase === "phase2" && (
                <div className="border-t border-border p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Builds on Phase 1:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          AI-powered lead scoring and prioritization
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Automated workflow triggers and actions
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Advanced reporting with predictive insights
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Multi-stage nurturing campaigns
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Integration with accounting/business systems
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Mobile app for field teams
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Success Metrics:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          35% improvement in conversion rates
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          60% reduction in manual tasks
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Predictive pipeline accuracy
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Team productivity gains
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Phase 3 */}
            <Card className="border-border bg-card">
              <button
                onClick={() => setExpandedPhase(expandedPhase === "phase3" ? null : "phase3")}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <Badge variant="secondary">Phase 3</Badge>
                      <h3 className="text-2xl font-bold text-foreground">Enterprise Intelligence</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        6-12 weeks
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        $10,000-$25,000
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Perfect for 50+ employees
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform ${
                      expandedPhase === "phase3" ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedPhase === "phase3" && (
                <div className="border-t border-border p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Builds on Phase 1 & 2:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Advanced AI and machine learning models
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Custom business intelligence dashboards
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Multi-department integration and workflows
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Advanced automation and optimization
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          Custom mobile applications
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          White-label client portals
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Success Metrics:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Complete business process automation
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Industry-leading efficiency metrics
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Custom competitive advantages
                        </li>
                        <li className="flex gap-2">
                          <Star className="h-5 w-5 shrink-0 text-primary" />
                          Measurable market differentiation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Phase Benefits */}
          <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
            <h4 className="mb-4 text-center font-semibold text-foreground">Phase-Based Benefits:</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Lower initial investment and risk
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Faster time to value and ROI
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                User adoption through gradual change
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Proven success before expansion
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Budget-friendly scaling approach
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                No vendor lock-in or forced upgrades
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AC Graphics Case Study */}
      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4">Case Study Spotlight</Badge>
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              AC Graphics CRM Success Story
            </h2>
            <p className="text-lg text-muted-foreground">
              How we built a $7,500 value CRM system for $2,300 in 2 months
            </p>
          </div>

          <div className="mt-16">
            <Accordion type="single" collapsible className="space-y-4">
              {/* The Challenge */}
              <AccordionItem value="challenge" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">The Challenge</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <p>
                    AC Graphics was expanding into the cardboard box manufacturing industry but their sales process was
                    chaos:
                  </p>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Business Reality:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Leads scattered across email, sticky notes, and memory</li>
                      <li>• Quotes taking 3-5 days to generate manually</li>
                      <li>• No visibility into pipeline or conversion rates</li>
                      <li>• Customer information lost between team members</li>
                      <li>• Growth limited by operational bottlenecks</li>
                      <li>• Missed follow-ups costing deals</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                    <p className="italic text-foreground">
                      "We lost a $15K deal because we forgot to follow up. That's when we knew we needed help."
                    </p>
                    <p className="mt-2 text-sm">- AC Graphics Owner</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Our Solution */}
              <AccordionItem value="solution" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Our Phase 1 Solution
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Core Features Built:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <strong>Contact & Lead Management</strong>
                            <p className="text-muted-foreground">
                              Centralized customer database with lead source tracking
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <strong>Sales Pipeline Tracking</strong>
                            <p className="text-muted-foreground">Visual pipeline with stage-based forecasting</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <strong>Quote Generation System</strong>
                            <p className="text-muted-foreground">Automated PDF generation and email delivery</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Technical Architecture:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Web-based CRM dashboard (React + Node.js)</li>
                        <li>• PostgreSQL database with optimized queries</li>
                        <li>• Automated PDF generation for quotes</li>
                        <li>• Email integration (Gmail/Outlook APIs)</li>
                        <li>• Website form integration with auto-capture</li>
                        <li>• Role-based access (Admin, Sales, Support)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Development Timeline:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Week 1: Requirements gathering and architecture</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Week 2-4: Core development and integration</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Week 5-6: Testing, training, and deployment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Week 7-8: Optimization and fine-tuning</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Results & ROI */}
              <AccordionItem value="results" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">Results & ROI</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h4 className="mb-3 font-semibold text-foreground">Investment Breakdown:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Development Cost:</span>
                          <span className="font-semibold text-foreground">$2,300</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Value Comparison:</span>
                          <span className="font-semibold text-foreground">$12,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Client Savings:</span>
                          <span className="font-semibold text-primary">$9,700</span>
                        </div>
                        <div className="flex justify-between border-t border-border pt-2">
                          <span className="font-semibold">ROI Calculation:</span>
                          <span className="text-xl font-bold text-primary">226%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-foreground">Immediate Results (30 days):</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                          Quote generation: 3-5 days → 30 minutes (90% reduction)
                        </li>
                        <li className="flex gap-2">
                          <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                          Lead follow-up rate: 60% → 100%
                        </li>
                        <li className="flex gap-2">
                          <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                          Pipeline visibility: None → Complete real-time view
                        </li>
                        <li className="flex gap-2">
                          <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                          Team efficiency: 40% improvement
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                    <p className="italic text-foreground">
                      "The ROI was immediate. We saw efficiency gains within the first week, and by month two, we had
                      already saved more time than the system cost. Best business investment we've made."
                    </p>
                    <p className="mt-2 text-sm">- AC Graphics Owner</p>
                  </div>
                  <div className="text-center">
                    <Button size="lg" className="gap-2">
                      Build Similar for My Business
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CRM Features Grid */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              Every CRM We Build Includes These Intelligent Features
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Smart Contact Management</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Centralized contact database with AI-powered duplicate detection, relationship mapping, and interaction
                history.
              </p>
              <p className="text-xs text-muted-foreground">
                Advanced search, custom fields, contact scoring, relationship hierarchies
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Visual Sales Pipeline</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Drag-and-drop pipeline management with stage-based probability, forecasting, and bottleneck analysis.
              </p>
              <p className="text-xs text-muted-foreground">
                Customizable stages, automated progression, deal scoring, team views
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Automated Quote Generation</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Template-based quote creation with automated PDF generation, email delivery, and follow-up scheduling.
              </p>
              <p className="text-xs text-muted-foreground">
                Custom branding, approval workflows, version control, e-signature integration
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Lead Scoring & Routing</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                AI-powered lead scoring based on behavior, demographics, and engagement. Automatic routing to best team
                member.
              </p>
              <p className="text-xs text-muted-foreground">
                Machine learning models, behavioral tracking, team availability, skill matching
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Workflow Automation</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Custom workflow builder with triggers, actions, and conditions. Automate repetitive tasks.
              </p>
              <p className="text-xs text-muted-foreground">
                Visual workflow builder, conditional logic, multi-step sequences, approval processes
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Mobile-First Design</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Native mobile apps for iOS and Android with offline capability and real-time sync.
              </p>
              <p className="text-xs text-muted-foreground">
                React Native, offline data, push notifications, camera integration
              </p>
            </Card>

            {/* Feature 7 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Advanced Reporting</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Real-time dashboards, custom reports, automated delivery, and predictive analytics.
              </p>
              <p className="text-xs text-muted-foreground">
                Interactive charts, scheduled reports, KPI tracking, forecasting models
              </p>
            </Card>

            {/* Feature 8 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <PuzzleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Integration Hub</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Pre-built integrations with accounting, email, marketing, and business systems.
              </p>
              <p className="text-xs text-muted-foreground">
                API connections, real-time sync, data mapping, webhook support
              </p>
            </Card>

            {/* Feature 9 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">AI Intelligence</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Machine learning models for predictive analytics, optimal timing recommendations, and smart insights.
              </p>
              <p className="text-xs text-muted-foreground">
                Predictive scoring, behavioral analysis, pattern recognition, optimization
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              Transparent CRM Pricing - Choose Your Starting Point
            </h2>
            <p className="text-lg text-muted-foreground">
              Every option includes source code ownership and no monthly fees
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Tier 1 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Foundation CRM</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">$2,300</span>
                  <span className="text-muted-foreground"> - $5,000</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Timeline: 2-4 weeks</p>
                  <p>Team: 2-3 specialists</p>
                  <p>Perfect For: 5-25 employees</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <h4 className="font-semibold text-foreground">What's Included:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Core contact and lead management
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Visual sales pipeline with stages
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Automated quote/proposal generation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Email integration and basic automation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Website lead capture integration
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Basic reporting dashboard
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    User training and documentation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    30-day optimization period
                  </li>
                </ul>
              </div>

              <div className="mb-6 rounded-lg bg-primary/5 p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">Example Success:</p>
                <p className="text-sm text-muted-foreground">
                  AC Graphics: $2,300 investment → $7,500 market value → 226% ROI
                </p>
              </div>

              <Button className="w-full gap-2">
                Start with Foundation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Tier 2 */}
            <Card className="border-2 border-primary bg-card p-6">
              <div className="mb-2">
                <Badge className="mb-4">Most Popular</Badge>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Intelligent CRM</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">$5,000</span>
                  <span className="text-muted-foreground"> - $12,000</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Timeline: 4-8 weeks</p>
                  <p>Team: 3-4 specialists</p>
                  <p>Perfect For: 25-75 employees</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <h4 className="font-semibold text-foreground">Everything in Foundation Plus:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    AI-powered lead scoring and routing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Advanced workflow automation
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Predictive analytics and forecasting
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Multi-stage nurturing campaigns
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Business system integrations
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Mobile apps (iOS & Android)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Advanced reporting and dashboards
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    60-day optimization period
                  </li>
                </ul>
              </div>

              <div className="mb-6 rounded-lg bg-primary/5 p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">Business Impact:</p>
                <p className="text-sm text-muted-foreground">
                  35% improvement in conversion rates, 50% reduction in manual tasks
                </p>
              </div>

              <Button className="w-full gap-2">
                Build Intelligent CRM
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            {/* Tier 3 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">Enterprise CRM Platform</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">$10,000</span>
                  <span className="text-muted-foreground"> - $25,000</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Timeline: 8-16 weeks</p>
                  <p>Team: 4-6 specialists</p>
                  <p>Perfect For: 50+ employees</p>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <h4 className="font-semibold text-foreground">Everything in Intelligent Plus:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Custom AI and machine learning models
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Advanced business intelligence platform
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Multi-department workflow integration
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Custom mobile applications
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    White-label client portals
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Advanced security and compliance
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    Priority support and maintenance
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    90-day optimization period
                  </li>
                </ul>
              </div>

              <div className="mb-6 rounded-lg bg-primary/5 p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">Enterprise Features:</p>
                <p className="text-sm text-muted-foreground">
                  Industry-specific customizations, advanced security, multi-location support
                </p>
              </div>

              <Button className="w-full gap-2 bg-transparent" variant="outline">
                Discuss Enterprise Solution
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* What's Always Included */}
          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h4 className="mb-4 text-center font-semibold text-foreground">What's Always Included:</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Complete source code ownership
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Detailed technical documentation
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Comprehensive user training
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Security implementation
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Performance optimization
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Ongoing support options
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                No monthly licensing fees
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Unlimited users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center font-sans text-3xl font-bold text-foreground lg:text-4xl">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq1" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How is your CRM different from Salesforce, HubSpot, or other big names?
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <p>Great question - here's the honest comparison:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h4 className="mb-2 font-semibold text-foreground">Big CRM Platforms:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Monthly fees: $50-300+ per user forever</li>
                        <li>• Implementation: 3-6 months with consultants</li>
                        <li>• Customization: Limited or extremely expensive</li>
                        <li>• Integration: Complex and often requires additional tools</li>
                        <li>• Total Cost: $50K+ over 3 years for small teams</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h4 className="mb-2 font-semibold text-foreground">Our Custom CRM:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• One-time cost: $2,300-$25,000 depending on needs</li>
                        <li>• Implementation: 2-16 weeks with direct developer access</li>
                        <li>• Customization: Built specifically for your business</li>
                        <li>• Integration: Designed around your existing tools</li>
                        <li>• Total Cost: Often less than 1 year of enterprise CRM fees</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">
                    The key difference: We build FOR you, not for everyone. Your CRM fits your process, not the other
                    way around.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq2" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What happens if we outgrow the CRM or need changes?
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <p>This is exactly why we use the phase-based approach:</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Built for Growth:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Scalable architecture from day one</li>
                        <li>• Easy to add features and users</li>
                        <li>• No artificial limits or upgrade fees</li>
                        <li>• Source code ownership means no vendor lock-in</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Change Management:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Phase 2 and 3 add capabilities without rebuilding</li>
                        <li>• Modifications included during optimization periods</li>
                        <li>• Clear upgrade paths with transparent pricing</li>
                        <li>• Your CRM evolves as your business evolves</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm">
                    <strong>Real Example:</strong> AC Graphics started with Foundation CRM ($2,300). As they grew, we
                    added advanced automation and analytics for Phase 2. Total investment still less than 1 year of
                    enterprise CRM fees.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq3" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How do you handle data migration from our current system?
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <p>Data migration is included in every CRM project:</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Our Process:</h4>
                      <ol className="space-y-1 text-sm">
                        <li>1. Data audit: We analyze your current data (Excel, old CRM, scattered files)</li>
                        <li>2. Cleanup plan: Identify duplicates, missing info, formatting issues</li>
                        <li>3. Migration testing: Run migration on sample data first</li>
                        <li>4. Full migration: Complete transfer with verification</li>
                        <li>5. Validation: You review and approve all migrated data</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">What We Migrate:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Contact information and history</li>
                        <li>• Deal/opportunity data</li>
                        <li>• Communication logs</li>
                        <li>• Documents and files</li>
                        <li>• Custom fields and notes</li>
                        <li>• Historical reporting data</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Safety First:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Always keep backups of original data</li>
                        <li>• Parallel running during transition period</li>
                        <li>• Rollback capability if needed</li>
                        <li>• Your data, your control, always</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq4" className="rounded-lg border border-border bg-card px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you provide ongoing support and maintenance?
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4 text-muted-foreground">
                  <p>Yes, with multiple options to fit your needs:</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Included in Every Project:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 30-90 day optimization period (varies by project size)</li>
                        <li>• Unlimited bug fixes during optimization</li>
                        <li>• User training and retraining</li>
                        <li>• Performance monitoring and basic maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">Optional Ongoing Support:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Monthly maintenance: $200-500/month (basic to advanced)</li>
                        <li>• Priority support: Faster response times</li>
                        <li>• Feature additions: New capabilities as needed</li>
                        <li>• Business growth consultation: Planning next phases</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">
                    What's Different: No forced upgrades or subscription fees. You own the code - no vendor lock-in.
                    Optional support means you choose what you need.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground lg:text-4xl">
              Ready to Stop Losing Deals to CRM Chaos?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join companies like AC Graphics who chose intelligent CRM over enterprise complexity
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Path 1 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4">
                <Badge className="mb-4">I'm Ready to Build</Badge>
                <h3 className="mb-2 text-xl font-bold text-foreground">Schedule Your CRM Strategy Session</h3>
                <p className="text-sm text-muted-foreground">
                  60-minute deep-dive where we analyze your current sales process, identify automation opportunities,
                  and design your custom CRM solution with transparent pricing.
                </p>
              </div>

              <div className="mb-6 space-y-2">
                <h4 className="text-sm font-semibold text-foreground">What You'll Get:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Sales process audit and bottleneck identification
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Custom CRM architecture recommendations
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Phase-based implementation plan with timelines
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Detailed cost breakdown and ROI projections
                  </li>
                </ul>
              </div>

              <div className="mb-4 rounded-lg bg-primary/5 p-3 text-center">
                <p className="text-sm font-semibold text-foreground">$1,500 strategy consultation</p>
                <p className="text-xs text-muted-foreground">Free for qualified prospects</p>
              </div>

              <Button className="w-full gap-2">
                Book My CRM Strategy Session
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">Usually scheduled within 24 hours</p>
            </Card>

            {/* Path 2 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4">
                <Badge className="mb-4" variant="secondary">
                  I Want to See What's Possible
                </Badge>
                <h3 className="mb-2 text-xl font-bold text-foreground">Calculate Your CRM ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive calculator shows time savings, cost reductions, and ROI potential for your specific
                  business size and sales process.
                </p>
              </div>

              <div className="mb-6 space-y-2">
                <h4 className="text-sm font-semibold text-foreground">What You'll Discover:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Estimated time savings per week
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Lead conversion improvement projections
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Annual productivity gains
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Custom vs enterprise CRM cost comparison
                  </li>
                </ul>
              </div>

              <Button className="w-full gap-2 bg-transparent" variant="outline">
                Calculate My CRM ROI
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Get personalized results in under 5 minutes
              </p>
            </Card>

            {/* Path 3 */}
            <Card className="border-border bg-card p-6">
              <div className="mb-4">
                <Badge className="mb-4" variant="secondary">
                  I'm Still Learning
                </Badge>
                <h3 className="mb-2 text-xl font-bold text-foreground">Join Our AI Business Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with 500+ business owners who have implemented custom CRM solutions. See real case studies,
                  get implementation guides, and learn from others' experiences.
                </p>
              </div>

              <div className="mb-6 space-y-2">
                <h4 className="text-sm font-semibold text-foreground">What You'll Access:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    CRM implementation case studies and breakdowns
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Template library for CRM requirements
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Monthly Q&A with CRM development experts
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    Industry-specific CRM examples and best practices
                  </li>
                </ul>
              </div>

              <Button className="w-full gap-2 bg-transparent" variant="outline" asChild>
                <Link href="/community">
                  Request Community Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Exclusive membership - application required
              </p>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg font-semibold text-foreground">
              AC Graphics chose custom CRM over Salesforce and got 226% ROI in 2 months. What could your business
              achieve?
            </p>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="mb-4 font-semibold text-foreground">Our Success Guarantee:</p>
              <p className="text-sm text-muted-foreground">
                If your team isn't more efficient within 60 days, we'll optimize the system until they are - at no
                additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
