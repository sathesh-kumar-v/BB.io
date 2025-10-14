"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  LinkIcon,
  DollarSign,
  Target,
  Brain,
  Workflow,
  Network,
  TrendingUp,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function AIIntegrationPage() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null)
  const [activeSystemTab, setActiveSystemTab] = useState("salesforce")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const capabilities = [
    {
      icon: Brain,
      title: "Intelligent Data Analysis & Routes",
      description:
        "AI layer that analyzes data patterns across all your systems, automatically routes information to the right people, and provides predictive insights you never had before.",
      examples: [
        {
          system: "CRM Enhancement",
          before: "Manual lead scoring and routing",
          after:
            "AI analyzes communication patterns, website behavior, and demographic data to automatically score and route leads to optimal team members",
          result: "45% improvement in conversion rates",
        },
        {
          system: "Email System Enhancement",
          before: "All emails require manual review and routing",
          after:
            "AI categorizes emails by urgency, topic, and required expertise, automatically routing to appropriate departments",
          result: "60% faster response times, zero missed inquiries",
        },
      ],
      impact: [
        "50% reduction in manual data analysis time",
        "35% improvement in decision-making speed",
        "90% accuracy in automated routing",
      ],
    },
    {
      icon: MessageSquare,
      title: "Natural Language Interfaces",
      description:
        "Ask your business systems questions in plain English and get intelligent answers. Search across all platforms, generate reports by talking, and access information naturally.",
      examples: [
        {
          system: "Salesforce Enhancement",
          before: "Complex searches require learning Salesforce query language",
          after: '"Show me all deals over $10K that haven\'t been touched in 2 weeks" returns exact results instantly',
          result: "70% faster data access, improved sales management",
        },
        {
          system: "Project Management Enhancement",
          before: "Finding project information requires navigating multiple screens",
          after: '"What projects are behind schedule and why?" provides complete analysis with recommendations',
          result: "40% improvement in project visibility",
        },
      ],
      impact: [
        "80% faster information retrieval",
        "60% improvement in data accessibility",
        "45% increase in system utilization",
      ],
    },
    {
      icon: Workflow,
      title: "Predictive Automation & Workflows",
      description:
        "AI that learns your business patterns and automatically triggers actions, sends notifications, and optimizes workflows based on predictive insights.",
      examples: [
        {
          system: "Customer Service Enhancement",
          before: "Support tickets handled reactively as they arrive",
          after: "AI predicts when customers are likely to have issues and proactively reaches out with solutions",
          result: "50% reduction in support tickets",
        },
        {
          system: "Inventory Management Enhancement",
          before: "Reordering based on manual monitoring and guesswork",
          after: "AI predicts demand patterns and automatically triggers orders at optimal timing and quantities",
          result: "30% reduction in carrying costs, zero stockouts",
        },
      ],
      impact: [
        "45% reduction in manual workflow management",
        "35% improvement in operational efficiency",
        "Proactive problem resolution",
      ],
    },
    {
      icon: Network,
      title: "Cross-System Intelligence & Coordination",
      description:
        "AI that connects the dots between all your systems, providing unified insights and coordinated actions that weren't possible before.",
      examples: [
        {
          system: "Sales & Marketing Coordination",
          before: "Marketing and sales systems work in isolation",
          after:
            "AI connects marketing campaign data with sales outcomes, automatically adjusting campaigns based on sales results",
          result: "40% improvement in marketing ROI",
        },
        {
          system: "Financial & Operational Coordination",
          before: "Financial and operational data analyzed separately",
          after:
            "AI correlates operational metrics with financial outcomes, providing real-time profitability insights",
          result: "20% improvement in operational profitability",
        },
      ],
      impact: [
        "Complete business visibility across all systems",
        "50% improvement in cross-departmental coordination",
        "30% better resource allocation",
      ],
    },
  ]

  const systemTabs = [
    {
      id: "salesforce",
      name: "Salesforce CRM",
      enhancements: [
        "GPT-4 powered lead qualification and scoring",
        "Predictive deal analysis and risk assessment",
        "Automated data enrichment from multiple sources",
        "Intelligent email content generation",
        "Natural language search and reporting",
        "Cross-system customer intelligence integration",
      ],
      example: {
        company: "Professional Services Firm",
        challenge: "70% of leads were unqualified, wasting sales time",
        solution: "AI analyzes website behavior, email engagement, and demographic data to score leads",
        timeline: "3 weeks development",
        results: "85% lead qualification accuracy, 40% more sales time for qualified prospects",
      },
      impact: [
        "60% improvement in lead qualification accuracy",
        "45% reduction in sales cycle length",
        "35% increase in deal closure rates",
      ],
    },
    {
      id: "hubspot",
      name: "HubSpot",
      enhancements: [
        "Personalized email content generation for each contact",
        "Behavioral pattern analysis and intelligent segmentation",
        "Automated A/B testing and optimization",
        "Predictive customer journey mapping",
        "Intelligent lead handoff from marketing to sales",
        "Real-time campaign optimization based on performance",
      ],
      example: {
        company: "E-commerce Company",
        challenge: "Email campaigns had low engagement, generic messaging",
        solution: "AI generates personalized email content based on purchase history and browsing behavior",
        timeline: "4 weeks development",
        results: "75% improvement in email open rates, 45% increase in click-through rates",
      },
      impact: [
        "70% improvement in email engagement rates",
        "50% better lead nurturing effectiveness",
        "40% increase in marketing qualified leads",
      ],
    },
    {
      id: "quickbooks",
      name: "QuickBooks",
      enhancements: [
        "Automated expense categorization and anomaly detection",
        "Predictive cash flow analysis and planning",
        "Intelligent financial insights and recommendations",
        "Cross-system profitability analysis",
        "Automated financial reporting and dashboard creation",
        "Natural language financial queries and analysis",
      ],
      example: {
        company: "Manufacturing Company",
        challenge: "Manual expense categorization took 8 hours monthly, no predictive insights",
        solution: "AI automatically categorizes expenses and provides cash flow predictions with 95% accuracy",
        timeline: "2 weeks development",
        results: "8 hours monthly saved, proactive financial management, 20% better cash flow optimization",
      },
      impact: [
        "85% reduction in manual bookkeeping time",
        "95% accuracy in automated expense categorization",
        "Predictive cash flow insights with 90%+ accuracy",
      ],
    },
    {
      id: "legacy",
      name: "Custom Legacy Systems",
      enhancements: [
        "Modern API layer for integration capabilities",
        "Mobile-responsive interface with AI features",
        "Intelligent data analysis and pattern recognition",
        "Automated workflow enhancements",
        "Real-time analytics and business intelligence",
        "Natural language interface for complex queries",
      ],
      example: {
        company: "Healthcare Practice",
        challenge: "15-year-old practice management system, no modern features",
        solution:
          "AI-powered patient scheduling optimization, automated insurance verification, predictive no-show prevention",
        timeline: "6 weeks development",
        results: "40% reduction in no-shows, 50% faster patient check-in, modern mobile access",
      },
      impact: [
        "Legacy systems become competitive advantages",
        "60% improvement in user experience",
        "Modern capabilities without replacement costs",
      ],
    },
  ]

  const faqs = [
    {
      question: "How do you ensure AI integration won't break our existing systems?",
      answer:
        "System safety is our top priority - we enhance, never disrupt. We use complete system backups, parallel testing environments, gradual rollout with immediate rollback options, and non-invasive integration that preserves existing functionality. Our safety record: Zero critical system failures in 200+ integrations, 99.9% uptime maintained during deployments, and 94% of integrations deployed with zero downtime.",
    },
    {
      question: "Will AI integration require our team to learn new systems or change workflows?",
      answer:
        "No - that's the beauty of integration vs replacement. Your team uses the same systems they know, with AI features appearing as natural extensions. No new logins, passwords, or extensive training required. We provide a 2-hour overview session for new AI capabilities, with hands-on training within your existing systems. Teams love the enhanced capabilities because their familiar tools just became much more powerful.",
    },
    {
      question: "How do you handle data security and privacy during AI integration?",
      answer:
        "Data security is built into every integration from day one. We use end-to-end encryption for all data transmission, zero data storage outside your controlled environment, role-based access controls, and compliance with industry regulations (HIPAA, GDPR, SOC 2). Your data stays in your systems - AI accesses, never stores. We use secure, private GPT-4 instances with no data sharing with third-party providers.",
    },
    {
      question: "What happens if we want to add more AI capabilities or integrate additional systems later?",
      answer:
        "We build integrations for growth and expansion. Our scalable architecture is designed for easy expansion, with modular AI capabilities that can be combined and extended. Adding new capabilities is typically 50% faster since we already understand your systems. Existing integration foundation reduces costs for additions, with bulk pricing available for multiple system enhancements.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b border-border py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                Don't Replace Your Systems. <span className="text-primary">Make Them Intelligent.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your current software works - it just needs AI superpowers. We integrate GPT-4, machine learning, and
                intelligent automation into your existing Salesforce, HubSpot, QuickBooks, and custom systems. Keep what
                works, enhance what doesn't.
              </p>

              {/* Value Props */}
              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-1">
                    <LinkIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Zero System Replacement</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep your current software, data, and workflows intact
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-1">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Rapid Intelligence Integration</h3>
                    <p className="text-sm text-muted-foreground">Add AI capabilities in weeks, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-1">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fraction of Rebuild Costs</h3>
                    <p className="text-sm text-muted-foreground">$3K-$15K vs $50K+ for complete system replacement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Strategic AI Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom AI strategy tailored to your specific business systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Get AI Integration Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  See Integration Examples
                </Button>
              </div>
            </div>

            {/* Right: System Integration Diagram */}
            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur border-border">
                <div className="text-center mb-6">
                  <p className="text-sm font-medium text-primary mb-2">Your Business Systems</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {["CRM", "Email", "Accounting", "Project Mgmt", "Marketing", "Support"].map((system) => (
                      <div
                        key={system}
                        className="rounded-lg bg-muted/50 p-3 text-xs font-medium text-muted-foreground border border-border"
                      >
                        {system}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <Zap className="h-5 w-5 text-primary" />
                    <div className="h-px flex-1 bg-gradient-to-r from-primary via-primary to-transparent" />
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4 mb-6">
                    <p className="text-sm font-semibold text-primary mb-1">AI Enhancement Layer</p>
                    <p className="text-xs text-muted-foreground">GPT-4 • Machine Learning • Automation</p>
                  </div>
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                      Intelligent Business Platform
                    </p>
                    <p className="text-xs text-muted-foreground">30% efficiency improvement typical</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Problems Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              The Hidden Inefficiencies Killing Your Current Systems
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "The Data Silo Nightmare",
                scenario:
                  "Your CRM has customer data, QuickBooks has financial data, email has communication history, and your project management tool has work data. They don't talk to each other, so you're making decisions with 25% of the information.",
                costs: [
                  "15 hours/week lost to manual data correlation",
                  "Decisions made with incomplete information",
                  "Customer insights scattered across platforms",
                  "Opportunities missed due to fragmented view",
                ],
                solution:
                  "AI layer connects all systems, providing unified insights and automated data correlation across platforms.",
              },
              {
                title: "The Manual Process Trap",
                scenario:
                  "Every sale requires updating 4 different systems. Customer service tickets need manual routing. Reports require pulling data from 6 different places and building spreadsheets.",
                costs: [
                  "20+ hours/week on manual data entry",
                  "High error rates from manual processes",
                  "Delayed responses and poor customer experience",
                  "Growth limited by manual bottlenecks",
                ],
                solution: "Intelligent automation handles routine tasks while humans focus on high-value activities.",
              },
              {
                title: "The Insight Drought",
                scenario:
                  "Your systems collect tons of data but provide zero intelligence. You know what happened but not why, when it might happen again, or what to do about it.",
                costs: [
                  "No predictive capabilities or early warnings",
                  "Reactive decision-making instead of proactive",
                  "Competitive disadvantage from delayed insights",
                  "Data rich but insight poor",
                ],
                solution:
                  "AI analyzes patterns across all systems to provide predictive insights and automated recommendations.",
              },
              {
                title: "The Innovation Paralysis",
                scenario:
                  'You see competitors using AI for customer service, sales optimization, and predictive analytics. But your systems are "too old" or "too integrated" to add these capabilities.',
                costs: [
                  "Competitive disadvantage from lack of AI capabilities",
                  "Customer expectations not met",
                  "Team demotivation from outdated tools",
                  "Market share loss to AI-enabled competitors",
                ],
                solution: "Modern AI capabilities integrated into existing systems without disruption or replacement.",
              },
            ].map((problem, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{problem.scenario}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-foreground">Cost Reality:</p>
                  {problem.costs.map((cost, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{cost}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                  <p className="text-sm font-semibold text-primary mb-1">Integration Solution:</p>
                  <p className="text-sm text-muted-foreground">{problem.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhance vs Replace Comparison */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Why Smart Businesses Enhance Instead of Replace
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The strategic difference between AI integration and system replacement
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* System Replacement */}
            <Card className="p-8 bg-red-500/5 border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-red-500" />
                <div>
                  <h3 className="font-sans text-2xl font-bold text-foreground">System Replacement</h3>
                  <p className="text-sm text-muted-foreground">The traditional approach</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                  <p className="font-semibold text-foreground">12-18 months</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Investment</p>
                  <p className="font-semibold text-foreground">$100K-$500K+</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Disruption</p>
                  <p className="font-semibold text-red-500">High</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Months of vendor selection and contract negotiation",
                  "6-12 months of data migration and system setup",
                  "3-6 months of team training and adoption",
                  "Lost productivity during transition period",
                  "Risk of data loss or corruption",
                  "Ongoing monthly licensing fees forever",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Success Rate: 60%</p>
                <p className="text-xs text-muted-foreground">Many projects fail or deliver limited value</p>
              </div>
            </Card>

            {/* AI Integration */}
            <Card className="p-8 bg-green-500/5 border-green-500/20">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-sans text-2xl font-bold text-foreground">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">Our enhancement approach</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">2-8 weeks</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Investment</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">$3K-$25K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Disruption</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">Minimal</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "1 week assessment and planning",
                  "2-6 weeks development and integration",
                  "Minimal training required (familiar systems)",
                  "No data migration needed",
                  "Enhanced workflows, not replaced workflows",
                  "One-time cost, no ongoing fees",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Success Rate: 94%</p>
                <p className="text-xs text-muted-foreground">Clear scope and predictable outcomes</p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-primary/5 border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">
                Integration builds on your investments and knowledge while replacement abandons them.
              </p>
              <p className="text-muted-foreground">
                Smart businesses enhance their competitive advantages rather than starting over.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              AI Intelligence We Add to Your Existing Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your current software into intelligent business platforms
            </p>
          </div>

          <div className="grid gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              const isExpanded = expandedCapability === index

              return (
                <Card key={index} className="overflow-hidden border-border hover:border-primary/50 transition-colors">
                  <button
                    onClick={() => setExpandedCapability(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="rounded-lg bg-primary/10 p-3 mt-1">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-sans text-xl font-bold text-foreground mb-2">{capability.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                      {capability.examples.map((example, i) => (
                        <div key={i} className="rounded-lg bg-muted/50 p-4">
                          <p className="font-semibold text-foreground mb-3">{example.system}</p>
                          <div className="grid gap-3 mb-3">
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-medium text-muted-foreground mt-0.5">Before:</span>
                              <p className="text-sm text-muted-foreground flex-1">{example.before}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-medium text-primary mt-0.5">After:</span>
                              <p className="text-sm text-foreground flex-1">{example.after}</p>
                            </div>
                          </div>
                          <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3">
                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">{example.result}</p>
                          </div>
                        </div>
                      ))}

                      <div className="grid gap-2">
                        <p className="text-sm font-semibold text-foreground">Business Impact:</p>
                        {capability.impact.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* System Showcase */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Popular Business Systems We Enhance with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your existing software, supercharged with intelligent capabilities
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {systemTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSystemTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSystemTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {systemTabs.map((tab) => {
            if (activeSystemTab !== tab.id) return null

            return (
              <div key={tab.id} className="space-y-8">
                <Card className="p-8 bg-card border-border">
                  <h3 className="font-sans text-2xl font-bold text-foreground mb-6">AI Enhancements We Add:</h3>
                  <div className="grid gap-3 mb-8">
                    {tab.enhancements.map((enhancement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{enhancement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
                    <p className="text-sm font-semibold text-primary mb-4">Real Implementation Example:</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-foreground">Company: </span>
                        <span className="text-sm text-muted-foreground">{tab.example.company}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">Challenge: </span>
                        <span className="text-sm text-muted-foreground">{tab.example.challenge}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">Solution: </span>
                        <span className="text-sm text-muted-foreground">{tab.example.solution}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">Timeline: </span>
                        <span className="text-sm text-muted-foreground">{tab.example.timeline}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">Results: </span>
                        <span className="text-sm text-muted-foreground">{tab.example.results}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid gap-3">
                  <p className="text-sm font-semibold text-foreground">Business Impact:</p>
                  {tab.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Transparent AI Integration Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              One-time integration cost vs ongoing system replacement expenses
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Smart System Enhancement",
                price: "$3,000 - $8,000",
                timeline: "2-6 weeks",
                team: "2-3 specialists",
                description: "Single system enhancement",
                features: [
                  "Strategic AI assessment and planning",
                  "Single system AI integration",
                  "Basic automation and intelligence features",
                  "GPT-4 integration for natural language",
                  "Custom dashboard and reporting",
                  "Team training and documentation",
                  "30-day optimization and support",
                  "Complete integration ownership",
                ],
                cta: "Enhance Single System",
              },
              {
                name: "Multi-System Intelligence Platform",
                price: "$8,000 - $18,000",
                timeline: "6-10 weeks",
                team: "3-4 specialists",
                description: "Multiple system coordination",
                features: [
                  "Everything in Smart Enhancement",
                  "Multi-system AI integration",
                  "Cross-platform data analysis",
                  "Advanced workflow automation",
                  "Predictive analytics and BI",
                  "Custom mobile interfaces",
                  "Integration with 3-5 systems",
                  "60-day optimization period",
                ],
                cta: "Build Multi-System Platform",
                popular: true,
              },
              {
                name: "Enterprise AI Transformation",
                price: "$15,000 - $35,000",
                timeline: "8-16 weeks",
                team: "4-6 specialists",
                description: "Complete business intelligence transformation",
                features: [
                  "Everything in Multi-System",
                  "Custom AI model development",
                  "Advanced machine learning",
                  "Enterprise-grade security",
                  "Custom mobile applications",
                  "Advanced BI platform",
                  "Unlimited system integration",
                  "90-day strategic consultation",
                ],
                cta: "Discuss Enterprise Transformation",
              },
            ].map((tier, index) => (
              <Card key={index} className={`p-8 ${tier.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {tier.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-sans text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{tier.price}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{tier.timeline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{tier.team}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Common Questions About AI Integration
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index

              return (
                <Card key={index} className="overflow-hidden border-border">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4"
                  >
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-border pt-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              Ready to Make Your Current Systems Intelligent?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get strategic AI consultation and see exactly how we'd enhance your specific business systems
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-3">Get Custom AI Integration Assessment</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive 2-hour consultation where we audit your current systems, identify specific AI enhancement
                opportunities, and create a detailed integration roadmap with transparent pricing and ROI projections.
              </p>
              <Button className="w-full">
                Book My Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Usually scheduled within 48 hours</p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-3">See Integration Examples</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                View real examples of AI integrations in your specific industry, see before/after system capabilities,
                and understand exactly what's possible with your current software.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                View Industry Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">Real examples from businesses like yours</p>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-3">Join AI Integration Community</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with 500+ business owners who have successfully integrated AI into their existing systems. Learn
                from real implementations and get strategic advice.
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                Request Community Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Exclusive membership - application required
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-primary/5 border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">Intelligence Guarantee</p>
              <p className="text-muted-foreground max-w-2xl">
                If your enhanced systems don't deliver measurable efficiency improvements within 90 days, we'll optimize
                the integration until they do - at no additional cost.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
