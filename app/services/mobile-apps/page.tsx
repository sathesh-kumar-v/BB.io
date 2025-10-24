"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Brain,
  Zap,
  Bluetooth,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Users,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Wifi,
} from "lucide-react"

export default function MobileAppsPage() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Copy */}
            <div className="flex flex-col justify-center">
              <h1 className="font-sans text-5xl font-bold leading-tight text-foreground lg:text-6xl">
                Your Customers Live on Their Phones. <span className="text-primary">Shouldn't Your Business?</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                We don't just build mobile apps - we build intelligent mobile experiences with AI at their core. Your
                customers get personalized recommendations, predictive insights, and seamless hardware integration that
                makes your app indispensable.
              </p>

              {/* Value Props */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI-Native Architecture</h3>
                    <p className="text-sm text-muted-foreground">Built with AI from day one, not bolted on later</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">True Native Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      React Native for native performance on both platforms
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Bluetooth className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hardware Integration Experts</h3>
                    <p className="text-sm text-muted-foreground">Connect to any hardware seamlessly</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Real-Time Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Predictive analytics and behavioral intelligence</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  See Wellenpuls App Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Calculate App ROI
                </Button>
              </div>
            </div>

            {/* Right Side - App Demo */}
            <div className="flex items-center justify-center">
              <Card className="relative overflow-hidden border-2 border-primary/20 bg-card p-8">
                <div className="text-center">
                  <Badge className="mb-4 bg-primary/10 text-primary">Wellenpuls Health App</Badge>
                  <div className="mx-auto mb-6 flex h-64 w-32 items-center justify-center rounded-3xl border-4 border-foreground/20 bg-gradient-to-b from-primary/20 to-primary/5">
                    <div className="space-y-2 p-4">
                      <div className="h-2 w-20 rounded bg-primary/40" />
                      <div className="h-2 w-16 rounded bg-primary/30" />
                      <div className="h-2 w-20 rounded bg-primary/40" />
                      <div className="mt-4 h-16 w-20 rounded bg-primary/20" />
                      <div className="h-2 w-12 rounded bg-primary/30" />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-foreground">Built in 6 weeks for $1,300 → $10,000 value</p>
                    <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        669% ROI
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Hardware Integration
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        AI Coaching
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Problems Section */}
      <section className="border-b border-border bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground">
              The Mobile App Mistakes That Kill User Engagement
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Problem 1 */}
            <Card className="border-destructive/20 bg-card p-8">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">The Generic App Trap</h3>
                  <Badge variant="outline" className="mt-2">
                    No Differentiation
                  </Badge>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                You spent $50K on a mobile app that looks and feels like every other business app. No personality, no
                intelligence, no reason for customers to choose it over your website. After 3 months, you have 200
                downloads and 12 active users.
              </p>
              <div className="space-y-2 rounded-lg bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• $50K+ development with no differentiation</li>
                  <li>• &lt;5% user retention after first month</li>
                  <li>• Ongoing hosting and maintenance costs</li>
                  <li>• No competitive advantage or customer loyalty</li>
                </ul>
              </div>
            </Card>

            {/* Problem 2 */}
            <Card className="border-destructive/20 bg-card p-8">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">The Feature Factory Disaster</h3>
                  <Badge variant="outline" className="mt-2">
                    Feature Bloat
                  </Badge>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                Your development team kept adding features: photo sharing, messaging, e-commerce, social features. Now
                you have a Frankenstein app that does everything poorly instead of one thing brilliantly. Users are
                confused and performance is slow.
              </p>
              <div className="space-y-2 rounded-lg bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 70% of features never used by customers</li>
                  <li>• Slow performance from feature bloat</li>
                  <li>• Complex codebase = expensive maintenance</li>
                  <li>• User confusion and poor ratings</li>
                </ul>
              </div>
            </Card>

            {/* Problem 3 */}
            <Card className="border-destructive/20 bg-card p-8">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">The Platform Nightmare</h3>
                  <Badge variant="outline" className="mt-2">
                    Double Costs
                  </Badge>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                You built for iOS first, then spent another $40K 'porting' to Android. But it looks different, acts
                different, and has different bugs. Your Android users feel like second-class citizens. Meanwhile, you're
                maintaining two completely separate codebases.
              </p>
              <div className="space-y-2 rounded-lg bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 2x development costs for separate platforms</li>
                  <li>• Inconsistent user experience across devices</li>
                  <li>• Double maintenance and update complexity</li>
                  <li>• Feature parity challenges between platforms</li>
                </ul>
              </div>
            </Card>

            {/* Problem 4 */}
            <Card className="border-destructive/20 bg-card p-8">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">The Integration Impossible</h3>
                  <Badge variant="outline" className="mt-2">
                    Data Silos
                  </Badge>
                </div>
              </div>
              <p className="mb-6 text-muted-foreground">
                Your beautiful app exists in its own universe. It can't talk to your CRM, doesn't sync with your
                inventory, and provides no business intelligence. Customers love it, but it creates more work for your
                team who manually sync data between systems.
              </p>
              <div className="space-y-2 rounded-lg bg-destructive/5 p-4 text-sm">
                <p className="font-semibold text-foreground">Cost Reality:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Manual data entry between app and business systems</li>
                  <li>• No actionable business intelligence from app usage</li>
                  <li>• Customer data scattered across platforms</li>
                  <li>• App becomes operational burden instead of asset</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-primary">
              What if your mobile app was your most intelligent employee - learning from every interaction, optimizing
              performance automatically, and driving real business results?
            </p>
          </div>
        </div>
      </section>

      {/* AI vs Traditional Comparison */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground">
              Why AI-Native Apps Dominate Traditional Mobile Apps
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              The difference between apps users tolerate and apps they can't live without
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Traditional Apps */}
            <Card className="border-muted bg-muted/20 p-8">
              <h3 className="mb-6 text-2xl font-bold text-muted-foreground">Traditional Mobile Apps</h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">One-size-fits-all user experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">No learning or personalization</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">Manual processes and data entry</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">No predictive capabilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">Generic content and recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">❌</span>
                  <span className="text-muted-foreground">Limited hardware integration</span>
                </div>
              </div>
              <div className="rounded-lg bg-destructive/10 p-4">
                <p className="font-semibold text-foreground">User Journey:</p>
                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <p>Day 1: "This seems helpful"</p>
                  <p>Week 1: "It's okay, but kind of basic"</p>
                  <p>Month 1: "I forgot I had this app"</p>
                  <p className="font-semibold text-destructive">Month 3: Deleted from phone</p>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-destructive">
                85% of users stop using within 3 months
              </p>
            </Card>

            {/* AI-Native Apps */}
            <Card className="border-primary bg-primary/5 p-8">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Our AI-Native Mobile Apps</h3>
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">AI-powered personalization for each user</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">Machine learning from user behavior patterns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">Predictive analytics and proactive recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">Intelligent hardware integration and automation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">Real-time optimization and A/B testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-foreground">Natural language AI assistant integration</span>
                </div>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <p className="font-semibold text-foreground">User Journey:</p>
                <div className="mt-2 space-y-1 text-sm text-foreground">
                  <p>Day 1: "This understands me specifically"</p>
                  <p>Week 1: "It's getting smarter about my patterns"</p>
                  <p>Month 1: "I depend on its insights for decisions"</p>
                  <p className="font-semibold text-primary">Month 3: Essential daily tool, recommending to friends</p>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-primary">
                94% user retention after 6 months, 4.8-star ratings
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Wellenpuls Case Study - Keeping this section concise due to token limits */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Case Study Spotlight</Badge>
            <h2 className="font-sans text-4xl font-bold text-foreground">
              Wellenpuls Health App: $10,000 Value for $1,300 in 6 Weeks
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <Card className="bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">The Challenge</h3>
              <p className="mb-4 text-muted-foreground">
                Wellenpuls had innovative back-pain relief hardware but needed a mobile app that could integrate
                seamlessly with their device, provide AI-powered health coaching, and support both iOS and Android with
                identical experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 font-semibold text-foreground">Market Context:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Health-tech quotes: $25K-$75K</li>
                    <li>• Typical timeline: 4-9 months</li>
                    <li>• Complex regulatory requirements</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 font-semibold text-foreground">Technical Challenges:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Bluetooth hardware integration</li>
                    <li>• AI health coaching</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Results & Business Impact</h3>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">669%</div>
                  <p className="text-sm text-muted-foreground">ROI Value Return</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">85%</div>
                  <p className="text-sm text-muted-foreground">User Retention (3 months)</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">4.7/5</div>
                  <p className="text-sm text-muted-foreground">App Store Rating</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Capabilities - Condensed due to token limits */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground">AI-Powered Mobile Capabilities</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Beyond basic apps - mobile experiences that learn, adapt, and optimize
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Intelligent User Personalization",
                description:
                  "Machine learning algorithms analyze usage patterns to optimize interface and content for maximum engagement.",
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics & Insights",
                description: "Proactive recommendations and competitive intelligence from user behavior patterns.",
              },
              {
                icon: Bluetooth,
                title: "Advanced Hardware Integration",
                description: "Seamless connection with IoT devices, medical equipment, sensors, and smart hardware.",
              },
              {
                icon: MessageSquare,
                title: "Natural Language AI Integration",
                description: "Built-in AI assistants that understand context and help users accomplish goals.",
              },
              {
                icon: Wifi,
                title: "Real-Time Collaborative Features",
                description: "Multi-user collaboration, real-time data sharing, and synchronized experiences.",
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                description: "Comprehensive analytics and insights that drive data-informed decisions.",
              },
            ].map((capability, index) => (
              <Card key={index} className="bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b border-border bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground">Transparent Mobile App Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Cross-platform development, AI integration, no hidden costs
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Tier 1 */}
            <Card className="bg-card p-8">
              <h3 className="mb-2 text-2xl font-bold text-foreground">Smart Mobile App</h3>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">$3K-$8K</span>
                <span className="text-muted-foreground">/ 4-8 weeks</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">Perfect for 10-50 employees</p>
              <ul className="mb-8 space-y-3">
                {[
                  "React Native cross-platform",
                  "Professional UI/UX design",
                  "Basic AI features",
                  "Push notifications",
                  "Backend API development",
                  "App store submission",
                  "Source code ownership",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Build Smart Mobile App</Button>
            </Card>

            {/* Tier 2 */}
            <Card className="border-primary bg-primary/5 p-8">
              <Badge className="mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Intelligent Business App</h3>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">$8K-$18K</span>
                <span className="text-muted-foreground">/ 8-12 weeks</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">Perfect for 50-150 employees</p>
              <ul className="mb-8 space-y-3">
                {[
                  "Everything in Smart App",
                  "Advanced AI & ML features",
                  "Hardware integration (Bluetooth, IoT)",
                  "Real-time collaboration",
                  "Advanced analytics",
                  "Third-party integrations",
                  "PWA capabilities",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Build Intelligent Business App</Button>
            </Card>

            {/* Tier 3 */}
            <Card className="bg-card p-8">
              <h3 className="mb-2 text-2xl font-bold text-foreground">Enterprise AI Platform</h3>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">$18K-$45K</span>
                <span className="text-muted-foreground">/ 12-20 weeks</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">Perfect for 150+ employees</p>
              <ul className="mb-8 space-y-3">
                {[
                  "Everything in Intelligent",
                  "Custom AI model development",
                  "Advanced IoT ecosystem",
                  "Multi-tenant architecture",
                  "White-label solutions",
                  "HIPAA/SOC 2 compliance",
                  "Dedicated success manager",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-transparent" variant="outline">
                Discuss Enterprise Solution
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Condensed */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-12 text-center font-sans text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Why React Native instead of separate iOS/Android development?",
                a: "React Native gives you native performance with cross-platform efficiency - single codebase means 50% faster development, identical user experience, and lower maintenance costs. Perfect for business applications where speed and consistency matter.",
              },
              {
                q: "How do you handle app store approval?",
                a: "App store approval is included with a 94% first-submission success rate. We handle all communication with review teams and fix any issues at no additional cost.",
              },
              {
                q: "What happens if we need changes after launch?",
                a: "You get 30-90 days of optimization included. After that, choose monthly maintenance ($1K-3K/month) or project-based development. You own all source code with no vendor lock-in.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-card p-6">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {expandedFaq === index && <p className="mt-4 text-muted-foreground">{faq.a}</p>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground">
              Ready to Build a Mobile App That Actually Drives Business Results?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Join companies like Wellenpuls who chose intelligent mobile experiences
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="bg-card p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">See Mobile AI in Action</h3>
              <p className="mb-6 text-muted-foreground">
                Experience AI-powered mobile health coaching and hardware integration
              </p>
              <Button className="w-full">Experience Demo</Button>
            </Card>

            <Card className="border-primary bg-primary/5 p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Build Your Mobile App</h3>
              <p className="mb-6 text-muted-foreground">
                60-minute strategy session with detailed roadmap and transparent pricing
              </p>
              <Button className="w-full">Schedule Strategy Session</Button>
            </Card>

            <Card className="bg-card p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Learn More About Mobile AI</h3>
              <p className="mb-6 text-muted-foreground">
                Join 500+ business owners building intelligent mobile experiences
              </p>
              <Button className="w-full bg-transparent" variant="outline">
                Request Community Access
              </Button>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Performance Guarantee: If your app doesn't achieve 4+ star ratings and strong user engagement within 90
              days, we'll optimize until it does - at no additional cost.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
