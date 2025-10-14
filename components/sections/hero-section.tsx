"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    name: "Octupus.ai",
    image: "/ai-social-media-automation-dashboard-with-analytic.jpg",
    cost: "$16K",
    value: "$25K",
    profit: "$9K ROI",
    tech: ["GPT-4", "Social APIs", "Compliance AI"],
  },
  {
    name: "AC Graphics CRM",
    image: "/modern-crm-pipeline-dashboard-with-sales-data.jpg",
    cost: "$2.3K",
    value: "$7.5K",
    profit: "$5.2K ROI",
    tech: ["Custom CRM", "Automation", "Integration"],
  },
  {
    name: "Digital Identity",
    image: "/nfc-card-and-mobile-app-interface-for-identity-ver.jpg",
    cost: "$2.3K",
    value: "$12K",
    profit: "$9.7K ROI",
    tech: ["NFC", "Payment APIs", "Web App"],
  },
  {
    name: "Wellenpuls Health",
    image: "/mobile-health-app-interface-with-ai-coaching-featu.jpg",
    cost: "$1.3K",
    value: "$10K",
    profit: "$8.7K ROI",
    tech: ["Mobile", "Bluetooth", "AI Coach"],
  },
]

export function HeroSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Messaging */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
              <span className="text-[#6366f1] text-sm font-medium">Lean AI Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              We Build Custom AI That Actually Pays for Itself
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#a1a1aa] mb-8 leading-relaxed text-balance">
              While agencies charge $50K+ for AI projects, we deliver the same results for $2K-$25K using lean
              development. Here's the proof:
            </p>

            {/* Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                <span className="text-white font-semibold">325% Average ROI</span>
                <span className="text-[#71717a] text-sm">(calculated from actual projects)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                <span className="text-white font-semibold">6-Week Average Delivery</span>
                <span className="text-[#71717a] text-sm">(based on real timelines)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                <span className="text-white font-semibold">50-70% Below Market Rates</span>
                <span className="text-[#71717a] text-sm">(proven cost advantage)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#e5e5e5] transition-all flex items-center justify-center gap-2 group"
              >
                See Real Project Breakdowns
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#community"
                className="px-8 py-4 bg-transparent border border-[#262626] text-white rounded-full font-semibold hover:border-[#6366f1] transition-all flex items-center justify-center gap-2"
              >
                Join AI Community
              </Link>
            </div>
          </div>

          {/* Right Side - Interactive Project Carousel */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#111111] group cursor-pointer"
              onMouseEnter={() => setShowDetails(true)}
              onMouseLeave={() => setShowDetails(false)}
            >
              <img
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].name}
                className="w-full h-[400px] object-cover"
              />

              {/* Hover Overlay with Details */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
                  showDetails ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{projects[activeProject].name}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-[#71717a] text-sm mb-1">Cost</div>
                      <div className="text-white font-semibold">{projects[activeProject].cost}</div>
                    </div>
                    <div>
                      <div className="text-[#71717a] text-sm mb-1">Value</div>
                      <div className="text-[#10b981] font-semibold">{projects[activeProject].value}</div>
                    </div>
                    <div>
                      <div className="text-[#71717a] text-sm mb-1">Profit</div>
                      <div className="text-[#10b981] font-semibold">{projects[activeProject].profit}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#6366f1]/20 border border-[#6366f1]/30 rounded-full text-[#6366f1] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Thumbnails */}
            <div className="flex gap-3 mt-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`flex-1 p-3 rounded-lg border transition-all ${
                    activeProject === index
                      ? "border-[#6366f1] bg-[#6366f1]/10"
                      : "border-[#262626] bg-[#111111] hover:border-[#6366f1]/50"
                  }`}
                >
                  <div className="text-white text-sm font-semibold mb-1">{project.name}</div>
                  <div className="text-[#10b981] text-xs font-medium">{project.profit}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
