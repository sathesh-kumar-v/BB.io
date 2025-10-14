import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

export function PortfolioPreview() {
  const projects = [
    {
      name: "Octupus.ai",
      description: "AI social media automation platform for UK telecommunications",
      investment: "$16K",
      value: "$25K",
      roi: "156%",
      tags: ["GPT-4", "Automation", "Social Media"],
    },
    {
      name: "AC Graphics CRM",
      description: "Phased CRM implementation with custom workflows",
      investment: "$2.3K",
      value: "$7.5K",
      roi: "326%",
      tags: ["CRM", "Workflows", "Integration"],
    },
    {
      name: "Digital Identity Platform",
      description: "NFC-enabled web platform MVP for secure identity verification",
      investment: "$2.3K",
      value: "$12K",
      roi: "522%",
      tags: ["NFC", "Security", "MVP"],
    },
    {
      name: "Wellenpuls Health",
      description: "AI-powered mobile health application with predictive analytics",
      investment: "$1.3K",
      value: "$10K",
      roi: "769%",
      tags: ["AI", "Healthcare", "Mobile"],
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Proven results, real ROI</h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto text-balance">
            Every project delivers measurable business value. Here's how we've helped SMBs achieve enterprise AI
            capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-[#111111] rounded-2xl border border-[#262626] hover:border-[#6366f1]/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full">
                  <TrendingUp size={14} className="text-[#10b981]" />
                  <span className="text-[#10b981] text-sm font-semibold">{project.roi}</span>
                </div>
              </div>

              <p className="text-[#a1a1aa] mb-6 leading-relaxed">{project.description}</p>

              <div className="flex items-center gap-6 mb-6 text-sm">
                <div>
                  <div className="text-[#71717a] mb-1">Investment</div>
                  <div className="text-white font-semibold">{project.investment}</div>
                </div>
                <div className="w-px h-10 bg-[#262626]"></div>
                <div>
                  <div className="text-[#71717a] mb-1">Market Value</div>
                  <div className="text-white font-semibold">{project.value}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full text-[#6366f1] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white hover:text-[#6366f1] transition-colors group"
          >
            <span className="font-semibold">View all case studies</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
