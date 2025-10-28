"use client"

import { useState } from "react"
import { ArrowRight, Users, Mail, Check } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export function LeadMagnetsSection() {
  const [communityEmail, setCommunityEmail] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [communityStatus, setCommunityStatus] = useState<FormState>("idle")
  const [newsletterStatus, setNewsletterStatus] = useState<FormState>("idle")
  const [communityError, setCommunityError] = useState<string | null>(null)
  const [newsletterError, setNewsletterError] = useState<string | null>(null)

  const submitCommunity = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCommunityStatus("submitting")
    setCommunityError(null)

    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "community", email: communityEmail }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Unable to save your request right now.")
      }

      setCommunityStatus("success")
      setCommunityEmail("")
    } catch (error) {
      setCommunityStatus("error")
      setCommunityError(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  const submitNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewsletterStatus("submitting")
    setNewsletterError(null)

    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: newsletterEmail }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Unable to subscribe you right now.")
      }

      setNewsletterStatus("success")
      setNewsletterEmail("")
    } catch (error) {
      setNewsletterStatus("error")
      setNewsletterError(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="community" className="py-32 px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Join 500+ Business Owners Building AI Advantage
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto text-balance">
            Get exclusive access to real project breakdowns, cost analyses, and proven AI implementation strategies.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Access */}
          <div className="p-8 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-6">
              <Users size={24} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">Exclusive AI Implementation Community</h3>

            <ul className="space-y-3 mb-8">
              {[
                "Real project breakdowns with code samples",
                "Direct access to our development team",
                "Monthly live technical Q&A sessions",
                "AI implementation playbooks and templates",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <Check size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {communityStatus === "success" ? (
              <div className="rounded-lg bg-white/10 p-4 text-sm text-white">
                You're on the list! We'll send an email with your invite once the next cohort opens.
                <button
                  type="button"
                  onClick={() => setCommunityStatus("idle")}
                  className="mt-3 inline-flex text-xs font-medium text-white/80 underline"
                >
                  Submit another email
                </button>
              </div>
            ) : (
              <form onSubmit={submitCommunity} className="space-y-4">
                <input
                  type="email"
                  value={communityEmail}
                  onChange={(e) => setCommunityEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                {communityStatus === "error" && communityError ? (
                  <p className="text-sm text-red-200">{communityError}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={communityStatus === "submitting"}
                  className="w-full px-6 py-3 bg-white text-[#6366f1] rounded-lg font-semibold hover:bg-[#e5e5e5] transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {communityStatus === "submitting" ? "Sending..." : "Get Community Access"}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Newsletter */}
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6366f1]/20 rounded-xl mb-6">
              <Mail size={24} className="text-[#6366f1]" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">Weekly AI Business Intelligence</h3>

            <ul className="space-y-3 mb-8">
              {[
                "Every Tuesday: Real project case study",
                "Cost breakdowns and lessons learned",
                "ROI analysis with actual numbers",
                "No theory, just proven implementations",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-[#a1a1aa]">
                  <Check size={20} className="flex-shrink-0 mt-0.5 text-[#10b981]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {newsletterStatus === "success" ? (
              <div className="rounded-lg border border-[#262626] bg-black p-4 text-sm text-[#a1a1aa]">
                You're subscribed! Check your inbox for a welcome email and this Tuesday's breakdown.
                <button
                  type="button"
                  onClick={() => setNewsletterStatus("idle")}
                  className="mt-3 inline-flex text-xs font-medium text-white underline"
                >
                  Subscribe a different email
                </button>
              </div>
            ) : (
              <form onSubmit={submitNewsletter} className="space-y-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black border border-[#262626] rounded-lg text-white placeholder:text-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  required
                />
                {newsletterStatus === "error" && newsletterError ? (
                  <p className="text-sm text-red-400">{newsletterError}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="w-full px-6 py-3 bg-[#6366f1] text-white rounded-lg font-semibold hover:bg-[#5558e3] transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {newsletterStatus === "submitting" ? "Subscribing..." : "Get Weekly Intelligence"}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
