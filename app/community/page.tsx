"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  CheckCircle2,
  Users,
  TrendingUp,
  Code2,
  Zap,
  MessageSquare,
  Star,
  Clock,
  Award,
  Rocket,
  Shield,
} from "lucide-react"

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    teamSize: "",
    challenge: "",
    hasAutomation: "",
    outcome: "",
    referral: "",
    linkedin: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Copy */}
            <div className="flex flex-col justify-center">
              <h1 className="font-sans text-4xl font-bold leading-tight text-balance lg:text-5xl xl:text-6xl">
                Join 500+ Business Owners Who Refuse to Compete on Manual Labor
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty lg:text-xl">
                This isn't another Facebook group. It's an exclusive community where AI-forward business owners share
                real implementations, actual costs, and proven ROI. No theory, no fluff - just practical intelligence
                from people who've automated their way to freedom.
              </p>

              {/* Value Stack */}
              <div className="mt-8 space-y-3">
                {[
                  "Weekly case study breakdowns (with actual code samples)",
                  "Direct access to our AI development team",
                  "$25K+ template library (growing weekly)",
                  "Monthly live technical Q&A sessions",
                  "Industry-specific implementation guides",
                  "Member-only AI tool recommendations",
                  "Priority access to new AI solutions",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-base" asChild>
                  <a href="#application">Request Community Access</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                  <a href="#preview">See Sample Discussions</a>
                </Button>
              </div>
            </div>

            {/* Right Side - Social Proof */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Member Count */}
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">487</div>
                    <div className="text-sm text-muted-foreground">members and growing</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { name: "Sarah", action: "saved $12K with automated invoicing", time: "2h ago" },
                    { name: "Mike", action: "implemented CRM automation", time: "5h ago" },
                    { name: "David", action: "deployed chatbot template", time: "1d ago" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <div className="h-8 w-8 rounded-full bg-muted" />
                      <div className="flex-1">
                        <span className="font-medium">{activity.name}</span>
                        <span className="text-muted-foreground"> {activity.action}</span>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Member Grid Preview */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold">Active Members</h3>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-full bg-muted" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">What Current Members Are Saying</h2>

          {/* Testimonials */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "I've saved 25 hours a week since implementing the CRM automation shared in the community. The ROI calculations alone were worth joining.",
                name: "Mike Rodriguez",
                title: "Construction Company Owner",
              },
              {
                quote:
                  "Finally, a place where people share what actually works instead of just theory. Got my chatbot implemented in 2 weeks using their templates.",
                name: "Sarah Chen",
                title: "Legal Practice Owner",
              },
              {
                quote:
                  "The monthly Q&A sessions with their AI engineers are pure gold. I've gotten more actionable advice here than from $5K consultants.",
                name: "David Park",
                title: "Manufacturing Director",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-pretty">{testimonial.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Average time saved", value: "23 hrs/week", icon: Clock },
              { label: "Average ROI achieved", value: "340%", icon: TrendingUp },
              { label: "Implementation success", value: "94%", icon: CheckCircle2 },
              { label: "Member satisfaction", value: "4.9/5", icon: Star },
            ].map((metric, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                <metric.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Preview Section */}
      <section id="preview" className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">Get a Peek Inside the Community</h2>

          {/* Sample Discussions */}
          <div className="mt-12 space-y-4">
            {[
              {
                title: "AC Graphics CRM Implementation - Complete Cost Breakdown",
                comments: 47,
                likes: 156,
                emoji: "🔥",
              },
              { title: "Legal Chatbot Templates - Ready to Deploy", comments: 32, likes: 89, emoji: "💡" },
              { title: "ROI Tracking Dashboard - Free Download", comments: 28, likes: 112, emoji: "📊" },
              { title: "GPT-4 Integration - Step-by-Step Guide", comments: 51, likes: 203, emoji: "⚡" },
            ].map((discussion, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{discussion.emoji}</span>
                    <div>
                      <h3 className="font-semibold">{discussion.title}</h3>
                      <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                        <span>{discussion.comments} comments</span>
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Content Calendar */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-xl font-bold">Weekly Content Calendar</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { day: "Monday", content: "Member spotlight and success story" },
                { day: "Tuesday", content: "Technical deep-dive with code samples" },
                { day: "Wednesday", content: "Industry-specific implementation guide" },
                { day: "Thursday", content: "AI tool review and recommendation" },
                { day: "Friday", content: "Community Q&A and troubleshooting" },
                { day: "Saturday", content: "Template/resource sharing" },
                { day: "Sunday", content: "Week recap and upcoming previews" },
              ].map((item, index) => (
                <div key={index} className="rounded-lg border border-border bg-background p-4">
                  <div className="font-semibold text-primary">{item.day}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">
            Why This Community is Worth More Than Most Consultants
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Real Project Breakdowns",
                description:
                  "Every week, we dissect a real AI implementation - complete with costs, timelines, code samples, and lessons learned. No sanitized case studies, just raw reality.",
                value: "$2,500/month equivalent",
              },
              {
                icon: Users,
                title: "Direct Developer Access",
                description:
                  "Monthly office hours with our AI engineers. Ask technical questions, get implementation advice, troubleshoot issues. It's like having a CTO on retainer.",
                value: "$5,000/month equivalent",
              },
              {
                icon: Zap,
                title: "Template Library",
                description:
                  "$25K+ worth of proven AI solutions, code templates, and implementation guides. Download, customize, deploy. Why build from scratch?",
                value: "$25,000+ one-time",
              },
              {
                icon: MessageSquare,
                title: "Industry Masterminds",
                description:
                  "Connect with business owners facing your exact challenges. Legal, construction, healthcare - find your tribe and share solutions.",
                value: "Priceless networking",
              },
              {
                icon: Rocket,
                title: "Early Access",
                description:
                  "Be the first to test our new AI solutions. Beta access, feedback opportunities, and insider previews before public launch.",
                value: "$1,000+ monthly savings",
              },
              {
                icon: Shield,
                title: "Implementation Support",
                description:
                  "Stuck on an automation project? The community helps troubleshoot, optimize, and improve your AI implementations.",
                value: "$150/hour consulting equivalent",
              },
            ].map((benefit, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="mb-4 text-muted-foreground text-pretty">{benefit.description}</p>
                <div className="text-sm font-semibold text-primary">Value: {benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">Meet Some of Our Members</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Jennifer Martinez",
                business: "Family Law Practice",
                size: "8 employees",
                win: "Implemented chatbot using community templates - now handles 70% of initial client inquiries automatically",
                result: "15 hours/week saved, 40% more qualified leads",
              },
              {
                name: "Robert Chen",
                business: "Construction Management",
                size: "25 employees",
                win: "Deployed automated project tracking system shared by another member",
                result: "$18K saved annually, 30% faster project completion",
              },
              {
                name: "Lisa Thompson",
                business: "Healthcare Clinic",
                size: "12 employees",
                win: "Implemented AI appointment scheduling and patient follow-up automation",
                result: "20 hours/week saved, 95% patient satisfaction",
              },
              {
                name: "Marcus Johnson",
                business: "Manufacturing",
                size: "50 employees",
                win: "Built predictive maintenance system using community templates",
                result: "$45K saved in downtime, 85% fewer equipment failures",
              },
            ].map((member, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 h-20 w-20 rounded-full bg-muted" />
                <h3 className="font-bold">{member.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{member.business}</div>
                <div className="text-sm text-muted-foreground">{member.size}</div>
                <div className="mt-4 rounded-lg bg-primary/5 p-3 text-sm">
                  <div className="font-semibold text-primary">Biggest Win:</div>
                  <p className="mt-1 text-muted-foreground">{member.win}</p>
                </div>
                <div className="mt-3 rounded-lg bg-accent p-3 text-sm">
                  <div className="font-semibold">Result:</div>
                  <p className="mt-1 text-muted-foreground">{member.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">Common Questions About Joining</h2>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "Is this community actually exclusive or just marketing?",
                a: "We limit membership and require an application. We want serious business owners, not tire-kickers. Current approval rate is about 60%.",
              },
              {
                q: "How is this different from Facebook groups or forums?",
                a: "Three words: depth, access, results. We share actual code, real costs, and provide direct access to AI developers. Most groups share opinions - we share implementations.",
              },
              {
                q: "What if I'm not technical - will this help me?",
                a: "Perfect question. Most of our members aren't developers - they're business owners who want AI solutions. We translate technical into practical, always.",
              },
              {
                q: "How much time do I need to invest to get value?",
                a: "Members report 2-3 hours/week engagement gives them 20+ hours/week in time savings. Best ROI they've ever seen.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-bold">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency/Scarcity Section */}
      <section className="border-b border-border bg-accent/50 py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Award className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="font-sans text-3xl font-bold lg:text-4xl">Limited Spots Available This Month</h2>
          <p className="mt-4 text-lg text-muted-foreground">Currently reviewing applications for March cohort</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-2xl font-bold">50</div>
              <div className="text-sm text-muted-foreground">Max new members/month</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-2xl font-bold">418</div>
              <div className="text-sm text-muted-foreground">Applications received</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-2xl font-bold">247</div>
              <div className="text-sm text-muted-foreground">Approved this quarter</div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 font-bold">Why Limited?</h3>
            <p className="text-muted-foreground text-pretty">
              We limit membership because quality discussions require engaged participants. Too many members = too much
              noise. We'd rather have 500 active members than 5,000 lurkers.
            </p>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">Next review cycle: April 1st</div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="border-b border-border py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-center font-sans text-3xl font-bold lg:text-4xl">
            Ready to Transform How You Think About Business?
          </h2>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Input
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamSize">Current Team Size *</Label>
              <Input
                id="teamSize"
                required
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge">Biggest Operational Challenge Right Now *</Label>
              <Textarea
                id="challenge"
                required
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hasAutomation">Have you implemented any automation already? *</Label>
              <Textarea
                id="hasAutomation"
                required
                rows={2}
                placeholder="Yes/No and details..."
                value={formData.hasAutomation}
                onChange={(e) => setFormData({ ...formData, hasAutomation: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="outcome">What specific outcome are you hoping to achieve? *</Label>
              <Textarea
                id="outcome"
                required
                rows={3}
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referral">How did you hear about us? *</Label>
              <Input
                id="referral"
                required
                value={formData.referral}
                onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile (optional)</Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/..."
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base">
              Submit My Application
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Applications reviewed within 48 hours • No spam, ever
            </p>
          </form>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-sans text-3xl font-bold lg:text-4xl">Don't Wait - Your Competitors Aren't</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Every day you wait is another day your competitors implement AI solutions while you're still doing things
            manually. The business owners in our community are building unfair advantages right now.
          </p>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-2xl font-bold text-primary">$47K</div>
            <p className="text-muted-foreground">
              This week alone, members shared implementations worth $47K in consulting value. Next week brings even
              more.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base" asChild>
              <a href="#application">Join the AI Revolution</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              At Least Get Our Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
