"use client"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  BarChart3,
  Target,
  Lightbulb,
  AlertTriangle,
  Clock,
  Database,
  AlertCircle,
  CheckCircle,
  XCircle,
  Brain,
  Zap,
  Shield,
  Users,
  DollarSign,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"

export default function BusinessIntelligencePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DataProblemsSection />
      <IntelligentAnalyticsSection />
      <BICapabilitiesSection />
      <AnalyticsShowcaseSection />
      <PredictivePowerSection />
      <BIPricingSection />
      <AnalyticsProcessSection />
      <BIFAQSection />
      <IntelligenceCTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-sans text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
                Stop Guessing. Start Knowing What Happens Next.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
                Your business generates valuable data every day. We transform that scattered information into predictive
                intelligence that tells you what's coming, what to do about it, and when to act. Make decisions based on
                AI-powered insights, not gut feelings.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Predictive Intelligence",
                  desc: "See problems and opportunities 3-6 months before they happen",
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Dashboards",
                  desc: "Executive insights updated every minute, not every month",
                },
                {
                  icon: Target,
                  title: "Automated Intelligence",
                  desc: "AI finds patterns and alerts you to what matters most",
                },
                {
                  icon: Lightbulb,
                  title: "Actionable Insights",
                  desc: "Not just data - specific recommendations for business action",
                },
              ].map((prop, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-card/50">
                  <prop.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">{prop.title}</div>
                    <div className="text-xs text-muted-foreground">{prop.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                See Predictive Analytics Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Calculate BI ROI
              </Button>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-xl border border-border bg-card p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="font-semibold">Executive Intelligence Dashboard</h3>
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Activity className="w-3 h-3" />
                    Live
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Revenue Forecast", value: "$2.4M", change: "+12%", trend: "up" },
                    { label: "Churn Risk", value: "8 customers", change: "-34%", trend: "down" },
                    { label: "Forecast Accuracy", value: "90%", change: "+5%", trend: "up" },
                    { label: "Decision Speed", value: "3x faster", change: "+200%", trend: "up" },
                  ].map((kpi, i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">{kpi.label}</div>
                      <div className="text-lg font-bold">{kpi.value}</div>
                      <div
                        className={`text-xs flex items-center gap-1 ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`}
                      >
                        {kpi.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {kpi.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 rounded-lg bg-muted/30 border border-border flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-muted-foreground" />
                </div>

                {/* AI Insights */}
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-semibold text-primary mb-1">AI Insight</div>
                      <div className="text-muted-foreground">
                        Revenue will increase 12% next quarter. Recommend expanding marketing in segments A and C.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground mb-1">Built with custom ML models</div>
                <div className="flex gap-3 text-xs font-semibold">
                  <span>90% accuracy</span>
                  <span>3x faster</span>
                  <span>40% cost ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DataProblemsSection() {
  const problems = [
    {
      title: "The Gut Decision Disaster",
      icon: AlertTriangle,
      scenario:
        "It's budget planning time. You stare at last quarter's reports trying to predict next year's performance. Sales says they need more staff. Operations wants new equipment. Marketing demands bigger budgets. You make decisions based on gut feeling and hope for the best. Six months later, you realize you hired too early, bought equipment you didn't need, and missed the real growth opportunity.",
      costs: [
        "$50K+ in premature hiring costs",
        "$100K+ in unnecessary equipment investments",
        "Missed revenue opportunities worth $200K+",
        "Competitive disadvantage from slow decision-making",
        "Stress and uncertainty affecting leadership quality",
      ],
    },
    {
      title: "The Report Generation Time Sink",
      icon: Clock,
      scenario:
        "Every month, your team spends 40+ hours creating reports. Sarah pulls sales data, Mike compiles operational metrics, Lisa aggregates financial numbers. By the time everything's ready, the data is 3 weeks old and the moment for action has passed. Your competitors with real-time analytics are already two moves ahead.",
      costs: [
        "40+ hours monthly on manual reporting",
        "$25,000+ annual cost in staff time for report generation",
        "Decisions based on outdated, backwards-looking information",
        "Missed opportunities due to slow insight generation",
        "Team frustration with repetitive, low-value work",
      ],
    },
    {
      title: "The Data Silo Nightmare",
      icon: Database,
      scenario:
        "Your sales data lives in the CRM. Financial information is in QuickBooks. Website analytics are in Google. Customer service metrics are in another system. Each tells part of the story, but you never see the complete picture. You're making decisions with 25% of the available intelligence.",
      costs: [
        "Fragmented view preventing strategic decision-making",
        "Multiple subscription costs for disconnected analytics tools",
        "Incomplete insights leading to suboptimal business decisions",
        "Management overhead coordinating multiple data sources",
        "Competitive disadvantage from incomplete business intelligence",
      ],
    },
    {
      title: "The Reactive Management Trap",
      icon: AlertCircle,
      scenario:
        "Problems only become visible after they've cost money. Customer churn spikes before you know why. Inventory runs out during peak season. Key employees quit without warning. Cash flow problems surprise you quarterly. You're always reacting to problems instead of preventing them.",
      costs: [
        "Crisis management consuming 60% of leadership time",
        "Lost revenue from problems that could have been prevented",
        "Emergency solutions costing 3-5x more than planned responses",
        "Team morale suffering from constant fire-fighting mode",
        "Strategic planning impossible when always in reactive mode",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            The Hidden Cost of Flying Blind in Your Own Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">{problem.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{problem.scenario}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-destructive">Cost Reality:</div>
                {problem.costs.map((cost, j) => (
                  <div key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <XCircle className="w-3 h-3 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What if you could see around corners, predict problems before they happen, and make decisions with
            confidence based on AI-powered intelligence?
          </p>
        </div>
      </div>
    </section>
  )
}

function IntelligentAnalyticsSection() {
  return (
    <section className="py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            Beyond Reporting - Intelligence That Predicts and Recommends
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference between looking backwards and seeing what's coming next
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Reports */}
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Traditional Business Reports</h3>
              <p className="text-sm text-muted-foreground">Static, backwards-looking data</p>
            </div>

            <div className="space-y-3">
              {[
                "Monthly/quarterly historical reports",
                "Static charts showing what happened",
                "Manual data compilation and analysis",
                "Backwards-looking metrics and KPIs",
                "Generic industry benchmarks",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-sm font-semibold mb-2">Result:</div>
              <p className="text-sm text-muted-foreground">You know what happened, but not what to do about it</p>
            </div>
          </div>

          {/* Predictive BI */}
          <div className="bg-card border-2 border-primary rounded-xl p-6 space-y-6 relative">
            <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Our Approach
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Predictive Business Intelligence</h3>
              <p className="text-sm text-muted-foreground">AI-powered, forward-looking insights</p>
            </div>

            <div className="space-y-3">
              {[
                "Real-time data processing and analysis",
                "Predictive modeling with confidence intervals",
                "Automated insight generation and recommendations",
                "Forward-looking forecasts and trend analysis",
                "Custom business intelligence specific to your industry",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <div className="text-sm font-semibold">Advanced Intelligence Features:</div>
              <div className="grid gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-primary" />
                  Customer churn prediction with intervention recommendations
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-primary" />
                  Revenue forecasting with scenario planning
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-primary" />
                  Inventory optimization with demand prediction
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-sm font-semibold mb-2">Result:</div>
              <p className="text-sm">You know what's coming and exactly what to do about it</p>
            </div>
          </div>
        </div>

        {/* Intelligence Difference Example */}
        <div className="mt-12 max-w-4xl mx-auto bg-card border border-border rounded-xl p-6">
          <div className="text-sm font-semibold mb-4">The Intelligence Difference:</div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Traditional BI:</div>
              <p className="text-sm">"Sales were down 15% last quarter"</p>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-primary font-semibold">Our Predictive BI:</div>
              <p className="text-sm">
                "Sales will decline 12% next quarter due to seasonal patterns and competitive pressure. Recommend
                launching retention campaign targeting high-value customers in segments A and C within 2 weeks to
                minimize impact and potentially turn decline into 3% growth."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BICapabilitiesSection() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null)

  const capabilities = [
    {
      title: "Revenue & Sales Intelligence",
      icon: DollarSign,
      prediction:
        "AI analyzes sales patterns, customer behavior, market trends, and seasonal factors to predict revenue performance 3-12 months in advance with 85-95% accuracy.",
      models: [
        "Revenue forecasting with confidence intervals and scenario planning",
        "Sales pipeline analysis with win probability optimization",
        "Customer lifetime value prediction and segmentation",
        "Seasonal demand forecasting and inventory planning",
        "Market opportunity identification and timing recommendations",
      ],
      example:
        "Professional Services Firm: Our AI predicted 23% revenue decline in Q4 due to client budget cycles and competitive pressure. Recommended accelerating Q3 sales activities and adjusting service packaging. Result: Q4 revenue actually grew 8% vs predicted decline.",
      impact: [
        "35% improvement in sales forecast accuracy",
        "28% increase in revenue through opportunity optimization",
        "50% reduction in sales cycle length through predictive insights",
        "40% improvement in customer retention through churn prediction",
      ],
    },
    {
      title: "Operational Excellence Intelligence",
      icon: Activity,
      prediction:
        "AI analyzes operational data to predict equipment failures, optimize resource allocation, and identify efficiency improvements before problems impact performance.",
      models: [
        "Equipment maintenance prediction and scheduling optimization",
        "Resource utilization forecasting and allocation planning",
        "Process bottleneck identification and resolution recommendations",
        "Quality control prediction and defect prevention",
        "Supply chain optimization and risk mitigation",
      ],
      example:
        "Manufacturing Company: AI predicted conveyor belt failure 3 weeks before occurrence, scheduled maintenance during planned downtime, and identified $150K in efficiency improvements through process optimization.",
      impact: [
        "45% reduction in unplanned equipment downtime",
        "30% improvement in resource utilization efficiency",
        "25% decrease in operational costs through optimization",
        "60% improvement in process quality and consistency",
      ],
    },
    {
      title: "Customer Intelligence & Retention",
      icon: Users,
      prediction:
        "AI analyzes customer behavior patterns to predict churn risk, identify upsell opportunities, and optimize customer experience for maximum lifetime value.",
      models: [
        "Customer churn prediction with intervention timing",
        "Lifetime value forecasting and segmentation optimization",
        "Upsell and cross-sell opportunity identification",
        "Customer satisfaction prediction and experience optimization",
        "Support ticket volume prediction and resource planning",
      ],
      example:
        "SaaS Company: AI identified 127 customers at high churn risk 60 days before typical cancellation patterns. Implemented targeted retention campaigns and reduced churn by 34% while increasing average customer value by 18%.",
      impact: [
        "40% reduction in customer churn through predictive intervention",
        "45% increase in customer lifetime value",
        "50% improvement in customer satisfaction scores",
        "35% more efficient resource allocation for customer success",
      ],
    },
    {
      title: "Financial Intelligence & Planning",
      icon: PieChart,
      prediction:
        "AI analyzes financial patterns to predict cash flow, identify cost optimization opportunities, and provide strategic financial planning intelligence.",
      models: [
        "Cash flow forecasting with scenario planning",
        "Expense optimization and cost reduction identification",
        "Investment ROI prediction and recommendation",
        "Budget planning with predictive accuracy",
        "Financial risk assessment and mitigation strategies",
      ],
      example:
        "Growing Services Company: AI predicted cash flow shortage 4 months in advance, recommended specific cost optimizations and revenue acceleration strategies. Result: avoided $75K credit line usage and improved cash position by 28%.",
      impact: [
        "50% improvement in cash flow prediction accuracy",
        "25% reduction in operational costs through optimization",
        "35% better investment decision-making through ROI analysis",
        "60% more efficient budget planning and resource allocation",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            Predictive Analytics Capabilities That Drive Business Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Turn every piece of business data into competitive intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCapability(expandedCapability === i ? null : i)}
                className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                      <p className="text-sm text-muted-foreground">{capability.prediction}</p>
                    </div>
                  </div>
                  {expandedCapability === i ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </button>

              {expandedCapability === i && (
                <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                  <div>
                    <div className="text-sm font-semibold mb-3">Predictive Models:</div>
                    <div className="space-y-2">
                      {capability.models.map((model, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{model}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm font-semibold mb-2">Real-World Application:</div>
                    <p className="text-sm text-muted-foreground">{capability.example}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3">Business Impact:</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {capability.impact.map((impact, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnalyticsShowcaseSection() {
  const showcases = [
    {
      industry: "Legal Practice Intelligence",
      challenge:
        "Mid-size law firm struggled with unpredictable revenue, inefficient case management, and resource allocation challenges.",
      solution: [
        "Case outcome prediction with 87% accuracy",
        "Revenue forecasting based on case pipeline and historical patterns",
        "Resource optimization for attorney and paralegal scheduling",
        "Client acquisition cost analysis and marketing optimization",
        "Practice area profitability analysis with growth recommendations",
      ],
      results: [
        "32% improvement in case win rate through predictive insights",
        "28% increase in attorney utilization efficiency",
        "45% better marketing ROI through channel optimization",
        "35% improvement in cash flow predictability",
        "$180K annual cost savings through resource optimization",
      ],
    },
    {
      industry: "Healthcare Practice Intelligence",
      challenge:
        "Multi-location healthcare practice needed better patient flow optimization, no-show reduction, and revenue cycle intelligence.",
      solution: [
        "Patient no-show prediction with optimal intervention timing",
        "Appointment scheduling optimization for maximum efficiency",
        "Revenue cycle analysis with collection optimization",
        "Patient satisfaction prediction and experience improvement",
        "Staff scheduling optimization based on demand patterns",
      ],
      results: [
        "47% reduction in patient no-shows through predictive intervention",
        "35% improvement in appointment scheduling efficiency",
        "28% faster revenue collection through cycle optimization",
        "40% increase in patient satisfaction scores",
        "$220K annual revenue increase through operational improvements",
      ],
    },
    {
      industry: "Manufacturing Intelligence",
      challenge:
        "Growing manufacturer needed production optimization, quality control improvement, and supply chain intelligence.",
      solution: [
        "Production demand forecasting with capacity planning",
        "Quality control prediction with defect prevention",
        "Equipment maintenance prediction and scheduling optimization",
        "Supply chain risk analysis with mitigation strategies",
        "Cost optimization with efficiency improvement recommendations",
      ],
      results: [
        "38% improvement in production planning accuracy",
        "52% reduction in quality defects through predictive control",
        "43% decrease in unplanned equipment downtime",
        "30% improvement in supply chain reliability",
        "$340K annual cost savings through operational optimization",
      ],
    },
    {
      industry: "E-commerce Intelligence",
      challenge:
        "Fast-growing e-commerce company needed inventory optimization, customer intelligence, and marketing effectiveness analysis.",
      solution: [
        "Inventory demand prediction with optimal stocking levels",
        "Customer lifetime value prediction and segmentation",
        "Marketing channel effectiveness with budget optimization",
        "Price optimization with competitive analysis",
        "Customer churn prediction with retention strategies",
      ],
      results: [
        "45% reduction in inventory carrying costs through optimization",
        "38% increase in customer lifetime value",
        "50% improvement in marketing ROI through channel optimization",
        "25% increase in average order value through pricing intelligence",
        "$450K annual profit increase through comprehensive optimization",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">Real Business Intelligence Transformations</h2>
          <p className="text-lg text-muted-foreground">See how predictive analytics drives competitive advantage</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {showcases.map((showcase, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">{showcase.industry}</h3>
                <p className="text-sm text-muted-foreground">{showcase.challenge}</p>
              </div>

              <div>
                <div className="text-sm font-semibold mb-3">AI Solution Built:</div>
                <div className="space-y-2">
                  {showcase.solution.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Brain className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-sm font-semibold mb-3">Results Achieved:</div>
                <div className="space-y-2">
                  {showcase.results.map((result, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PredictivePowerSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            The Predictive Technologies That Power Business Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced machine learning and AI technologies made accessible for SMBs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Machine Learning",
              items: [
                "Time Series Forecasting",
                "Classification & Regression",
                "Clustering & Segmentation",
                "Anomaly Detection",
                "Natural Language Processing",
              ],
            },
            {
              title: "Data Processing",
              items: [
                "Real-time data ingestion",
                "Automated data cleaning",
                "Feature engineering",
                "Model training & validation",
                "Automated retraining",
              ],
            },
            {
              title: "BI Framework",
              items: [
                "Executive dashboards",
                "Automated reporting",
                "Interactive exploration",
                "Mobile-responsive access",
                "Custom visualization",
              ],
            },
            {
              title: "Integrations",
              items: [
                "CRM systems",
                "Financial platforms",
                "Operational systems",
                "Marketing platforms",
                "Custom databases",
              ],
            },
          ].map((tech, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">{tech.title}</h3>
              <div className="space-y-2">
                {tech.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BIPricingSection() {
  const tiers = [
    {
      name: "Smart Analytics Dashboard",
      investment: "$6,000 - $12,000",
      timeline: "4-8 weeks",
      team: "2-3 specialists",
      perfectFor: "25-75 employees",
      features: [
        "Executive dashboard with key business metrics",
        "Basic predictive analytics (revenue, sales, operations)",
        "Automated reporting and alert systems",
        "Data integration from 3-5 business systems",
        "Mobile-responsive analytics access",
        "Team training and documentation",
        "30-day optimization and refinement",
        "Performance monitoring and support",
      ],
      cta: "Build Smart Analytics",
    },
    {
      name: "Predictive Business Intelligence",
      investment: "$12,000 - $25,000",
      timeline: "8-14 weeks",
      team: "3-4 specialists",
      perfectFor: "75-200 employees",
      popular: true,
      features: [
        "Advanced machine learning and predictive modeling",
        "Custom analytics for industry-specific requirements",
        "Advanced data visualization and storytelling",
        "Automated machine learning model training",
        "Advanced integration with unlimited data sources",
        "Custom reporting and dashboard development",
        "60-day optimization with strategic consulting",
        "Priority support and maintenance",
      ],
      cta: "Build Predictive Intelligence",
    },
    {
      name: "Enterprise Analytics Platform",
      investment: "$25,000 - $60,000",
      timeline: "14-24 weeks",
      team: "4-6 specialists",
      perfectFor: "200+ employees",
      features: [
        "Enterprise-scale analytics architecture",
        "Advanced AI and machine learning model development",
        "Multi-location and multi-department analytics",
        "Advanced security and compliance implementation",
        "Custom mobile applications for analytics access",
        "Advanced business intelligence and strategic planning",
        "Dedicated success manager and strategic consultation",
        "90-day optimization with ongoing partnership",
      ],
      cta: "Discuss Enterprise Analytics",
    },
  ]

  return (
    <section className="py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">Transparent Business Intelligence Pricing</h2>
          <p className="text-lg text-muted-foreground">Enterprise analytics for SMB budgets</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-card border rounded-xl p-6 space-y-6 ${tier.popular ? "border-primary shadow-lg" : "border-border"}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold text-xl">{tier.name}</h3>
                <div className="text-2xl font-bold">{tier.investment}</div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Timeline: {tier.timeline}</div>
                  <div>Team: {tier.team}</div>
                  <div>Perfect For: {tier.perfectFor}</div>
                </div>
              </div>

              <div className="space-y-3">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnalyticsProcessSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Data Discovery & Strategy",
      timeline: "Weeks 1-2",
      activities: [
        "Comprehensive data audit across all business systems",
        "Business intelligence requirements gathering",
        "Analytics strategy development with stakeholder alignment",
        "Data quality assessment and improvement planning",
        "Success metrics definition and measurement framework",
      ],
    },
    {
      phase: "Phase 2",
      title: "Data Integration & Pipeline",
      timeline: "Weeks 3-8",
      activities: [
        "Data pipeline development for real-time and batch processing",
        "Data cleaning, transformation, and quality assurance",
        "Machine learning model development and training",
        "Dashboard framework development and testing",
        "Security and compliance implementation",
      ],
    },
    {
      phase: "Phase 3",
      title: "Analytics Development",
      timeline: "Weeks 9-16",
      activities: [
        "Interactive dashboard development with advanced visualizations",
        "Predictive model integration and testing",
        "Automated reporting and alert system implementation",
        "Mobile-responsive interface development",
        "Performance testing and optimization",
      ],
    },
    {
      phase: "Phase 4",
      title: "Deployment & Optimization",
      timeline: "Weeks 17-24",
      activities: [
        "Production deployment with comprehensive monitoring",
        "Team training and user adoption support",
        "Performance monitoring and optimization",
        "Model accuracy validation and refinement",
        "Success metrics tracking and ROI validation",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            Our Proven Business Intelligence Development Process
          </h2>
          <p className="text-lg text-muted-foreground">From data chaos to predictive intelligence in 4-24 weeks</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-lg">{phase.title}</div>
                  <div className="text-sm text-muted-foreground">{phase.timeline}</div>
                </div>
              </div>

              <div className="space-y-2">
                {phase.activities.map((activity, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BIFAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How accurate are your predictive analytics and forecasts?",
      answer:
        "Accuracy depends on data quality and business patterns, but our results consistently exceed industry standards. Typical accuracy ranges: Revenue Forecasting (85-95% for 3-month predictions), Customer Churn Prediction (88-94% for 60-90 day predictions), Inventory Demand (80-92% depending on seasonality), Equipment Maintenance (90-96% for failure prediction 2-4 weeks in advance). Models automatically retrain with new data to maintain accuracy, and we provide accuracy metrics with continuous monitoring.",
    },
    {
      question: "What if our data is scattered across multiple systems?",
      answer:
        "Scattered data is exactly what we specialize in - most businesses have this challenge. We handle data from CRM systems, financial platforms, website analytics, marketing tools, operational systems, and even spreadsheets. Our integration approach includes complete data discovery, ETL pipeline development for all sources, automated data cleaning and standardization, and unified analytics providing a single source of truth. We have API connections to 200+ business platforms and can integrate custom databases and file processing.",
    },
    {
      question: "How do you ensure our business data stays secure and private?",
      answer:
        "Data security is fundamental to our analytics architecture. We implement end-to-end encryption for all data transmission and storage, role-based access controls with audit trails, SOC 2 Type II compliance procedures, and regular security audits. Your data remains in your control - we don't own or sell it. We offer on-premise deployment options for maximum security, clear data processing agreements, and compliance with GDPR, HIPAA, and industry-specific regulations. Infrastructure includes enterprise-grade cloud security, multi-factor authentication, regular backups with disaster recovery, and continuous monitoring.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                className="w-full p-6 text-left hover:bg-muted/50 transition-colors flex items-center justify-between gap-4"
              >
                <span className="font-semibold">{faq.question}</span>
                {expandedFAQ === i ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {expandedFAQ === i && (
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntelligenceCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Data Into Competitive Intelligence?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join businesses that make decisions based on AI-powered insights, not gut feelings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              title: "Experience Predictive Analytics",
              description:
                "Try our interactive demo with forecasting, automated insights, and predictive recommendations.",
              cta: "Experience Demo",
              icon: BarChart3,
            },
            {
              title: "Book Analytics Strategy Session",
              description:
                "60-minute consultation analyzing your data opportunities and designing your analytics architecture.",
              cta: "Schedule Session",
              icon: Target,
              highlight: true,
            },
            {
              title: "Join BI Community",
              description: "Connect with 500+ business owners using predictive analytics for competitive advantage.",
              cta: "Request Access",
              icon: Users,
            },
          ].map((path, i) => (
            <div
              key={i}
              className={`bg-card border rounded-xl p-6 space-y-4 ${path.highlight ? "border-primary shadow-lg" : "border-border"}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <path.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground">{path.description}</p>
              </div>
              <Button className="w-full" variant={path.highlight ? "default" : "outline"}>
                {path.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-sm font-semibold text-primary mb-2">
              Manufacturing Company Analytics Transformation
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { metric: "38%", label: "Production planning accuracy improvement" },
              { metric: "$340K", label: "Annual cost savings through optimization" },
              { metric: "52%", label: "Reduction in quality defects" },
              { metric: "43%", label: "Decrease in equipment downtime" },
              { metric: "4.2 months", label: "Complete ROI achievement" },
              { metric: "90%+", label: "Forecast accuracy achieved" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-primary mb-1">{stat.metric}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-primary" />
            <p className="text-sm">
              <span className="font-semibold">Intelligence Guarantee:</span> If you're not making better, faster
              decisions within 60 days, we'll optimize your analytics until you do - at no additional cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
