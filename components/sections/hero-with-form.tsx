"use client"

import { Building2, Scale, TrendingUp } from "lucide-react"
import { HeroContactForm } from "@/components/forms/hero-contact-form"

export function HeroWithForm() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 scroll-fade-in overflow-hidden">
      {/* Creative Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

        {/* Radial gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#4f46e5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid overlay for tech aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-7 gap-12 items-start">
          {/* Left Column - Copy (60%) */}
          <div className="lg:col-span-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Stop Losing Money on Manual Processes in Property & Legal Management
            </h1>

            <p className="text-lg text-[#a1a1aa] mb-8 leading-relaxed">
              We build intelligent AI systems specifically for property management companies and legal firms. Automate
              tenant screening, lease processing, case management, and client communication. Get measurable ROI in
              weeks, not months.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#6366f1] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Property Management Specialists</div>
                  <div className="text-[#71717a] text-sm">
                    Tenant screening, lease automation, maintenance coordination
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-[#6366f1] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Legal Practice Experts</div>
                  <div className="text-[#71717a] text-sm">Client intake, case management, document automation</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-semibold mb-1">Proven Results</div>
                  <div className="text-[#71717a] text-sm">
                    325% average ROI, 6-week delivery, 200+ successful projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form (40%) */}
          <div className="lg:col-span-3">
            <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Get Your Free AI Strategy Session</h3>
              <p className="text-[#71717a] text-sm mb-6">
                See exactly how AI can transform your property or legal business
              </p>

              <HeroContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
