"use client"

import { useState } from "react"
import { ArrowRight, Users, Mail, Check } from "lucide-react"

export function LeadMagnetsSection() {
  const [communityEmail, setCommunityEmail] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")

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

            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("[v0] Community signup:", communityEmail)
              }}
              className="space-y-4"
            >
              <input
                type="email"
                value={communityEmail}
                onChange={(e) => setCommunityEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-[#6366f1] rounded-lg font-semibold hover:bg-[#e5e5e5] transition-all flex items-center justify-center gap-2 group"
              >
                Get Community Access
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
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

            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("[v0] Newsletter signup:", newsletterEmail)
              }}
              className="space-y-4"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-black border border-[#262626] rounded-lg text-white placeholder:text-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#6366f1] text-white rounded-lg font-semibold hover:bg-[#5558e3] transition-all flex items-center justify-center gap-2 group"
              >
                Get Weekly Intelligence
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
