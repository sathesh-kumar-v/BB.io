import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Brain,
  Zap,
  RefreshCw,
  BarChart3,
  FileText,
  MessageSquare,
  TrendingUp,
  Database,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Custom AI Automation Development | GPT-4 Integration | BrandingBeez.io",
  description:
    "We build intelligent automation systems using GPT-4 and machine learning. Stop manual work, start smart automation. Real case studies, transparent pricing.",
}

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-sans text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                  Stop Doing Work That AI Can Do Better
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  We build custom AI automation that actually understands your business - not just keyword triggers and
                  basic rules. Your intelligent workforce that works 24/7, learns from data, and gets smarter over time.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">GPT-4 Powered Intelligence</p>
                    <p className="text-sm text-muted-foreground">Not basic chatbots</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Custom-Trained</p>
                    <p className="text-sm text-muted-foreground">On YOUR business data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Self-Improving</p>
                    <p className="text-sm text-muted-foreground">Through machine learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Full Transparency</p>
                    <p className="text-sm text-muted-foreground">Costs, timelines, ROI</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" asChild>
                  <Link href="#case-study">
                    See AI Automation in Action
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                  <Link href="#pricing">Calculate My ROI</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Octupus.ai Demo</p>
                      <p className="text-sm text-muted-foreground">AI Content Automation</p>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Analyzing brand voice...</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Generating compliant content...</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Scheduling optimal posting times...</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary animate-pulse">
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Learning from engagement data...</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-green-500 font-semibold">25+ hours</span> saved weekly •{" "}
                      <span className="text-green-500 font-semibold">100%</span> compliance rate
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
              The Hidden Cost of Manual Processes (And What It's Really Costing You)
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 text-left">
              <Card className="p-6 space-y-3 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-destructive" />
                  <p className="font-semibold text-lg">Data Entry & Processing</p>
                </div>
                <p className="text-3xl font-bold text-destructive">$39,000/year</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• 25 hours/week on manual data entry</p>
                  <p>• × $30/hour average cost</p>
                  <p>• = $39,000/year in wasted labor</p>
                  <p className="text-destructive font-medium">Plus: Human error costs and delays</p>
                </div>
                <p className="text-sm font-semibold pt-2 border-t border-border">
                  Reality Check: Your team could be doing strategic work instead
                </p>
              </Card>

              <Card className="p-6 space-y-3 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-destructive" />
                  <p className="font-semibold text-lg">Customer Communication</p>
                </div>
                <p className="text-3xl font-bold text-destructive">$80,000+ lost</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• 40% of leads contact you after hours</p>
                  <p>• 20% conversion rate loss from delays</p>
                  <p>• = $80,000+ in lost revenue annually</p>
                  <p className="text-destructive font-medium">Plus: Customer frustration and churn</p>
                </div>
                <p className="text-sm font-semibold pt-2 border-t border-border">
                  Reality Check: AI never sleeps, never misses inquiries
                </p>
              </Card>

              <Card className="p-6 space-y-3 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-destructive" />
                  <p className="font-semibold text-lg">Report Generation</p>
                </div>
                <p className="text-3xl font-bold text-destructive">$39,000/year</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• 15 hours/week creating reports</p>
                  <p>• × $50/hour knowledge worker cost</p>
                  <p>• = $39,000/year on repetitive analysis</p>
                  <p className="text-destructive font-medium">Plus: Reports are outdated when finished</p>
                </div>
                <p className="text-sm font-semibold pt-2 border-t border-border">
                  Reality Check: AI creates real-time insights automatically
                </p>
              </Card>

              <Card className="p-6 space-y-3 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-destructive" />
                  <p className="font-semibold text-lg">Follow-up & Task Management</p>
                </div>
                <p className="text-3xl font-bold text-destructive">Immeasurable</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Forgotten follow-ups = 20% revenue loss</p>
                  <p>• Missed deadlines = client dissatisfaction</p>
                  <p>• = Immeasurable opportunity cost</p>
                  <p className="text-destructive font-medium">Plus: Stress and reputation damage</p>
                </div>
                <p className="text-sm font-semibold pt-2 border-t border-border">
                  Reality Check: AI never forgets, always follows up perfectly
                </p>
              </Card>
            </div>

            <p className="text-2xl font-semibold text-primary pt-8">
              What if all of this just... happened automatically, intelligently, perfectly? That's exactly what we
              build.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
              The AI Automation Systems We Build for You
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Not basic "if-this-then-that" automation. Intelligent systems that think, learn, and adapt.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Capability 1 */}
            <Card className="p-8 space-y-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Intelligent Document Processing</h3>
                  <p className="text-sm text-muted-foreground italic">
                    AI That Reads Like Humans (But Never Gets Tired)
                  </p>
                  <p className="text-muted-foreground">
                    Our AI reads, understands, and processes documents like invoices, contracts, intake forms -
                    extracting key data, understanding context, and triggering appropriate actions based on content
                    meaning, not just keywords.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenCV", "Tesseract OCR", "spaCy", "NLTK", "scikit-learn", "LayoutLM"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <p className="font-semibold text-sm">Real Implementation: Legal Firm Document Processor</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Processes 500+ client intake forms automatically</li>
                    <li>• Extracts case details, client information, urgency levels</li>
                    <li>• Routes to correct attorneys based on case type and complexity</li>
                    <li>• Identifies missing information and requests automatically</li>
                    <li>• Integrates with case management system</li>
                  </ul>
                  <div className="pt-2 border-t border-border space-y-1">
                    <p className="text-sm font-semibold text-green-500">Business Impact:</p>
                    <p className="text-sm text-muted-foreground">
                      87% reduction in manual processing time • 100% accuracy • 15 hours/week freed up
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">
                    Build This for My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Capability 2 */}
            <Card className="p-8 space-y-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Smart Customer Communication</h3>
                  <p className="text-sm text-muted-foreground italic">
                    Conversations That Feel Human (Because AI Understands Context)
                  </p>
                  <p className="text-muted-foreground">
                    Beyond chatbots - our AI handles customer inquiries with context awareness, emotion detection,
                    conversation memory, and intelligent escalation. It learns from every interaction.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["GPT-4 API", "Fine-tuning", "Sentiment Analysis", "Multi-platform", "Context Memory"].map(
                      (tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-xs rounded">
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <p className="font-semibold text-sm">Real Implementation: Octupus.ai (Telecom Communication)</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Generates regulation-compliant social media content</li>
                    <li>• Responds to customer inquiries with brand voice consistency</li>
                    <li>• Schedules posts for optimal engagement times</li>
                    <li>• Handles complaints with appropriate escalation</li>
                    <li>• Maintains OFCOM compliance automatically</li>
                  </ul>
                  <div className="pt-2 border-t border-border space-y-1">
                    <p className="text-sm font-semibold text-green-500">Business Impact:</p>
                    <p className="text-sm text-muted-foreground">
                      24/7 availability • 94% satisfaction • 40% better engagement • 25+ hours/week saved
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">
                    Build This for My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Capability 3 */}
            <Card className="p-8 space-y-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Predictive Process Optimization</h3>
                  <p className="text-sm text-muted-foreground italic">AI That Sees Problems Before They Happen</p>
                  <p className="text-muted-foreground">
                    Our machine learning models analyze patterns in your workflows, predict optimal actions, and
                    automatically adjust processes. Scheduling, resource allocation, inventory - all optimized by AI.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Prophet", "ARIMA", "XGBoost", "Random Forest", "Apache Kafka", "Stream Processing"].map(
                      (tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-xs rounded">
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <p className="font-semibold text-sm">Real Implementation: Manufacturing Predictive Maintenance</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analyzes equipment sensor data in real-time</li>
                    <li>• Predicts maintenance needs 3 weeks in advance</li>
                    <li>• Automatically schedules maintenance during optimal downtime</li>
                    <li>• Orders parts before they're needed</li>
                    <li>• Prevents costly equipment failures</li>
                  </ul>
                  <div className="pt-2 border-t border-border space-y-1">
                    <p className="text-sm font-semibold text-green-500">Business Impact:</p>
                    <p className="text-sm text-muted-foreground">
                      30% less downtime • 25% lower costs • $120K/year saved in emergency repairs
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">
                    Build This for My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Capability 4 */}
            <Card className="p-8 space-y-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Intelligent Data Analysis & Insights</h3>
                  <p className="text-sm text-muted-foreground italic">Turn Your Data Into Your Competitive Advantage</p>
                  <p className="text-muted-foreground">
                    AI transforms your scattered data into actionable intelligence. Trend detection, anomaly alerts,
                    performance optimization recommendations, and predictive insights.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "ML Clustering", "React", "D3.js", "ETL Pipelines"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                  <p className="font-semibold text-sm">Real Implementation: Healthcare Practice Optimization</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analyzes patient appointment patterns and no-show indicators</li>
                    <li>• Predicts optimal scheduling for maximum efficiency</li>
                    <li>• Identifies revenue optimization opportunities</li>
                    <li>• Tracks treatment outcome patterns</li>
                    <li>• Provides personalized patient communication recommendations</li>
                  </ul>
                  <div className="pt-2 border-t border-border space-y-1">
                    <p className="text-sm font-semibold text-green-500">Business Impact:</p>
                    <p className="text-sm text-muted-foreground">
                      45% fewer no-shows • 25% more capacity • $85K/year additional revenue
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">
                    Build This for My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section id="case-study" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Featured Case Study
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
                Octupus.ai: Telecom Social Media Automation
              </h2>
            </div>

            <Card className="p-8 lg:p-12 space-y-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                    <p className="text-muted-foreground">
                      Telecom company needed to maintain active social media presence across multiple platforms while
                      ensuring 100% compliance with industry regulations. Manual content creation was time-consuming and
                      error-prone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">The Solution</h3>
                    <p className="text-muted-foreground">
                      GPT-4 powered content generation system with automated scheduling, compliance checking, and
                      engagement optimization. The AI learns from brand voice, regulatory requirements, and audience
                      behavior.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {["OpenAI API", "Custom NLP", "Social Media APIs", "Compliance Database", "Analytics Engine"].map(
                        (tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Development Cost</p>
                      <p className="text-2xl font-bold">$16,000</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Client Investment</p>
                      <p className="text-2xl font-bold text-green-500">$25,000</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Market Rate</p>
                      <p className="text-2xl font-bold text-muted-foreground line-through">$40,000</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="text-2xl font-bold">6 months</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Results</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">25+ hours saved weekly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">100% compliance rate maintained</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">40% improvement in engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">5-person team collaboration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Build Similar for My Industry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
              Our AI Automation Stack
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Enterprise-grade technology, custom-configured for your business needs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Large Language Models</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>GPT-4 integration and fine-tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom prompt engineering for your business context</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Multi-modal processing (text, images, documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Conversation memory and context preservation</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Machine Learning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom model training on your business data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Predictive analytics and forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Pattern recognition and anomaly detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Integration Capabilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>CRM systems (Salesforce, HubSpot, custom)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Communication platforms (email, SMS, social media)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Business tools (accounting, project management, documentation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom APIs and database connections</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
              Pricing Transparency
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              No hidden costs. No surprises. Just honest pricing for intelligent automation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Basic */}
            <Card className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Basic AI Automation</h3>
                <p className="text-muted-foreground text-sm">2-4 weeks development</p>
              </div>
              <div>
                <p className="text-4xl font-bold">$3K - $8K</p>
                <p className="text-sm text-muted-foreground mt-2">One-time investment</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Simple document processing or basic customer communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>1-2 integration points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Standard GPT-4 implementation</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold mb-2">Example:</p>
                <p className="text-sm text-muted-foreground">Appointment scheduling automation</p>
              </div>
            </Card>

            {/* Advanced */}
            <Card className="p-8 space-y-6 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Advanced AI Automation</h3>
                <p className="text-muted-foreground text-sm">6-12 weeks development</p>
              </div>
              <div>
                <p className="text-4xl font-bold">$8K - $20K</p>
                <p className="text-sm text-muted-foreground mt-2">One-time investment</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Complex multi-step workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom ML model development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Multiple system integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom training data implementation</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold mb-2">Example:</p>
                <p className="text-sm text-muted-foreground">Complete customer service automation</p>
              </div>
            </Card>

            {/* Enterprise */}
            <Card className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Enterprise AI Platform</h3>
                <p className="text-muted-foreground text-sm">3-6 months development</p>
              </div>
              <div>
                <p className="text-4xl font-bold">$15K - $40K</p>
                <p className="text-sm text-muted-foreground mt-2">One-time investment</p>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Full business process automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Multi-department integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Ongoing optimization and learning</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold mb-2">Example:</p>
                <p className="text-sm text-muted-foreground">Octupus.ai-level platform</p>
              </div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">What's Included in Every Project</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Complete technical documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Staff training and onboarding</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">90-day optimization period</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Ongoing support and maintenance options</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Source code ownership</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Scalability planning</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              From discovery to deployment, we guide you through every step.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Discovery & Planning</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />1 week
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Business process audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Automation opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Technical requirements gathering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Custom solution architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Detailed project roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Development & Integration</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      2-16 weeks
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>AI model development and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>System integration and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>User interface development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Security implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Deployment & Optimization</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />2 weeks
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Production deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Staff training and adoption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Performance monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Continuous optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Success metrics tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold">
                  How do you ensure the AI makes accurate decisions and doesn't make costly mistakes?
                </h3>
                <p className="text-muted-foreground">
                  Excellent question - this is critical for business automation. We implement multiple safety layers:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>
                    <strong>1. Confidence Thresholds:</strong> AI only acts when it's highly confident (typically 85%+
                    certainty)
                  </li>
                  <li>
                    <strong>2. Human Oversight Triggers:</strong> Complex or unusual situations automatically escalate
                    to humans
                  </li>
                  <li>
                    <strong>3. Rollback Mechanisms:</strong> All AI actions are logged and can be reversed if needed
                  </li>
                  <li>
                    <strong>4. Testing Protocols:</strong> Extensive testing with sample data before production
                    deployment
                  </li>
                  <li>
                    <strong>5. Gradual Implementation:</strong> We start with low-risk processes and expand as
                    confidence builds
                  </li>
                  <li>
                    <strong>6. Continuous Monitoring:</strong> Real-time accuracy tracking with immediate alerts for
                    issues
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground pt-2">
                  Plus, we include a 30-90 day optimization period where we fine-tune based on real performance data.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold">
                  What happens if our business processes change after the AI is implemented?
                </h3>
                <p className="text-muted-foreground">
                  Great question - businesses evolve, and your AI should too. Our systems are designed for adaptability:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>
                    <strong>1. Flexible Architecture:</strong> Built to accommodate process changes without complete
                    rebuilds
                  </li>
                  <li>
                    <strong>2. Learning Capabilities:</strong> Many of our AI systems learn from new patterns
                    automatically
                  </li>
                  <li>
                    <strong>3. Easy Configuration:</strong> Business users can adjust rules and workflows through
                    intuitive interfaces
                  </li>
                  <li>
                    <strong>4. Version Control:</strong> All changes are tracked so we can roll back if needed
                  </li>
                  <li>
                    <strong>5. Ongoing Support:</strong> Our optimization periods include process change accommodation
                  </li>
                  <li>
                    <strong>6. Update Protocols:</strong> We provide clear procedures for implementing changes safely
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground pt-2">
                  The goal is AI that grows with your business, not AI that constrains it.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold">
                  How do you handle integration with our existing software and systems?
                </h3>
                <p className="text-muted-foreground">
                  Integration is one of our core specialties - we've connected AI systems to 50+ different platforms:
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Popular Integrations:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• CRM: Salesforce, HubSpot, Pipedrive, custom systems</li>
                      <li>• Communication: Email platforms, SMS services, social media APIs</li>
                      <li>• Business Tools: QuickBooks, Xero, Google Workspace, Microsoft 365</li>
                      <li>
                        • Industry-Specific: Legal practice management, healthcare EMRs, construction project management
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Our Approach:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• API-First Development: We build for integration from day one</li>
                      <li>• Standard Protocols: RESTful APIs, webhooks, OAuth authentication</li>
                      <li>• Custom Connectors: We build custom integrations when needed</li>
                      <li>• Data Security: All integrations maintain your existing security protocols</li>
                      <li>• Testing: Comprehensive integration testing before deployment</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  If you use it for business, we can probably integrate with it.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold">What kind of ongoing maintenance and support do you provide?</h3>
                <p className="text-muted-foreground">
                  We believe in long-term partnerships, not just project delivery:
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Included in Every Project:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• 30-90 day optimization period (varies by project size)</li>
                      <li>• Unlimited bug fixes during optimization period</li>
                      <li>• Performance monitoring and reporting</li>
                      <li>• Staff training and retraining as needed</li>
                      <li>• System health checks and maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Optional Ongoing Support:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Monthly system optimization and updates</li>
                      <li>• Priority technical support</li>
                      <li>• Feature additions and enhancements</li>
                      <li>• Business process consultation</li>
                      <li>• Scaling and expansion planning</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Your AI should get better over time, not worse. We're invested in your long-term success.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <h3 className="text-lg font-bold">
                  How do you protect our business data and ensure privacy compliance?
                </h3>
                <p className="text-muted-foreground">
                  Data security isn't an afterthought - it's built into our architecture from day one:
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Security Measures:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• End-to-end encryption for all data transmission and storage</li>
                      <li>• Role-based access controls with audit trails</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• GDPR and HIPAA compliance architecture</li>
                      <li>• SOC 2 Type II compliance procedures</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Data Handling:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Your data stays in your control - we don't own or sell it</li>
                      <li>• Clear data processing agreements and contracts</li>
                      <li>• Option for on-premise deployment for sensitive industries</li>
                      <li>• Data retention policies that match your business requirements</li>
                      <li>• Right to data deletion and portability</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  We take data protection as seriously as you do - because your trust is our business.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="font-sans text-3xl font-bold tracking-tight lg:text-5xl text-balance">
                Ready to Stop Doing Work That AI Can Do Better?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Choose your next step based on where you are in your automation journey
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-8 space-y-4 hover:border-primary/50 transition-colors text-left">
                <Users className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                    For: Serious Prospects
                  </p>
                  <h3 className="font-bold text-xl">Book Your Technical Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    45-minute deep-dive session where we analyze your specific processes and provide detailed
                    implementation recommendations with transparent pricing.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">What You'll Get:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Process audit and automation opportunity assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Custom solution architecture recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Detailed timeline and cost projections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>ROI calculations and business case</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contact">
                    Schedule My Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">Usually scheduled within 48 hours</p>
              </Card>

              <Card className="p-8 space-y-4 hover:border-primary/50 transition-colors text-left">
                <DollarSign className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                    For: Researching Options
                  </p>
                  <h3 className="font-bold text-xl">Calculate Your Automation ROI</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our interactive calculator to estimate time savings, cost reductions, and ROI potential for your
                    specific business size and industry.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">What You'll Discover:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Estimated hours saved per week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Annual cost savings projections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>ROI timeline and break-even analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Similar case study examples</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-transparent" size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Calculate My ROI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">Get results in under 3 minutes</p>
              </Card>

              <Card className="p-8 space-y-4 hover:border-primary/50 transition-colors text-left">
                <Shield className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                    For: Still Exploring
                  </p>
                  <h3 className="font-bold text-xl">Join Our AI Automation Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with 500+ business owners implementing AI automation. Get real case studies, implementation
                    guides, and direct access to our development team.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">What You'll Access:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Weekly automation case study breakdowns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Template library worth $25,000+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Monthly live Q&A with AI engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Industry-specific implementation guides</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-transparent" size="lg" variant="outline" asChild>
                  <Link href="/community">
                    Request Community Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground">Exclusive membership, application required</p>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div className="text-left space-y-2">
                  <p className="text-lg font-semibold">Risk Reversal Guarantee</p>
                  <p className="text-muted-foreground">
                    Every automation project includes our Performance Guarantee: If you're not seeing measurable
                    improvements within 60 days, we'll optimize the system until you do - at no additional cost.
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Join companies who have automated their way to competitive advantage
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
