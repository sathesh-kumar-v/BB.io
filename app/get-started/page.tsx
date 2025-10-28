"use client"

import { AiReadinessForm } from "@/components/forms/ai-readiness-form"
import { QuickSessionForm } from "@/components/forms/quick-session-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Map, Search, Target, TrendingUp } from "lucide-react"

const readinessHighlights = [
  {
    title: "Workflow Bottleneck Assessment",
    description: "We pinpoint where manual processes are creating drag across your team.",
    icon: Search,
  },
  {
    title: "Custom ROI Calculation",
    description: "See projected savings and revenue lifts based on your real numbers.",
    icon: TrendingUp,
  },
  {
    title: "Phased Automation Roadmap",
    description: "Get a prioritized plan that balances quick wins with long-term scale.",
    icon: Map,
  },
]

const expectationTimeline = [
  {
    time: "Minutes 1-5",
    title: "Understand your business",
    items: [
      "Team structure and responsibilities",
      "Current workflow blockers",
      "Compliance requirements",
      "Growth goals and KPIs",
    ],
  },
  {
    time: "Minutes 6-15",
    title: "Map the opportunity",
    items: [
      "Automation potential by department",
      "Integration requirements",
      "Data readiness and gaps",
      "Quick wins to target first",
    ],
  },
  {
    time: "Minutes 16-25",
    title: "Quantify ROI",
    items: [
      "Estimated time savings",
      "Cost reduction potential",
      "Revenue acceleration opportunities",
      "Investment range by phase",
    ],
  },
  {
    time: "Minutes 26-30",
    title: "Alignment & next steps",
    items: [
      "Delivery timelines and milestones",
      "Stakeholder roles",
      "Metrics we will track",
      "Follow-up materials you'll receive",
    ],
  },
]

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get Your Custom AI Automation Strategy
              <span className="block text-primary mt-2">Two ways to engage in under 30 minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
              Choose a fast readiness assessment or jump straight into a 1:1 strategy session. Either way, you'll walk away
              with clear numbers, timelines, and a roadmap to eliminate manual work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {readinessHighlights.map((highlight) => (
              <Card key={highlight.title} className="p-6 bg-card border-border text-left space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-0">
                  <highlight.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Trusted by 50+ SMBs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>325% average ROI delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>6-week average delivery time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Deep-dive assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Readiness Assessment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ideal if you want a holistic view of where AI fits. Share context across teams, data, compliance, and goals so we
              can send back a readiness scorecard with phased recommendations.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Technical review of your current tools, data, and integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Risk and compliance considerations baked into the roadmap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Prioritized automation opportunities with estimated ROI</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-border bg-card p-6">
              <AiReadinessForm />
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Rapid consult
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Request a Quick 1:1 Session</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Perfect when you have a specific process or tool in mind. Share the essentials and we'll align calendars for a
              focused call to outline the build, integration approach, and timeline.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>15-minute discovery with an automation strategist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Review of your most time-consuming workflow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Action plan delivered within 24 hours</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-border bg-card p-6">
              <QuickSessionForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What to Expect in Your Strategy Session
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {expectationTimeline.map((phase) => (
              <Card key={phase.time} className="p-6 bg-card border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{phase.time}</span>
                  <Clock className="w-5 h-5 text-primary/80" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Target className="w-4 h-4 mt-0.5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Not Ready to Commit?</h2>
          <p className="text-muted-foreground text-lg">
            Grab our AI operations checklist to benchmark your workflows against the top performers we work with.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base" asChild>
              <a href="/community">Join the community for weekly breakdowns</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <a href="#">Download the AI readiness checklist</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
