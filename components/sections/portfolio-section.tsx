import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      name: "Octupus.ai",
      image: "/octupus.png",
      industry: "Telecom",
      description: "AI-powered social media automation platform",
      roi: "56%",
      value: "$25K",
    },
    {
      name: "AC Graphics CRM",
      image: "/AC-Graphics.jpg",
      industry: "Manufacturing",
      description: "Custom CRM with intelligent workflows",
      roi: "226%",
      value: "$7.5K",
    },
    {
      name: "MyVKard",
      image: "/myvkard_nfc1.png",
      industry: "SaaS",
      description: "NFC-enabled identity verification platform",
      roi: "422%",
      value: "$12K",
    },
    {
      name: "Wellenpuls Health App",
      image: "/Wellenpuls_App.png",
      industry: "HealthTech",
      description: "AI health coaching mobile application",
      roi: "669%",
      value: "$10K",
    },
  ]

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-8 bg-black scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Real Projects, Real Results</h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto text-balance">Proven ROI across industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a] rounded-xl border border-[#1a1a1a] hover:border-[#6366f1]/30 transition-all overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#10b981] rounded-md">
                  <span className="text-white text-xs font-bold">{project.roi}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-[#71717a] mb-2">{project.industry}</div>
                <h3 className="text-lg font-bold text-white mb-2 text-balance">{project.name}</h3>
                <p className="text-sm text-[#a1a1aa] mb-4 leading-relaxed">{project.description}</p>

                <div className="text-[#10b981] font-semibold text-sm mb-4">{project.value} value delivered</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-lg font-semibold transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
