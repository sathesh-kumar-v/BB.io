import { Check, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ComparisonSection() {
  const comparisons = [
    {
      category: "Timeline",
      traditional: "6-12 months",
      brandingbeez: "2-7 weeks",
      advantage: true,
    },
    {
      category: "Cost",
      traditional: "$50K-$200K",
      brandingbeez: "$2K-$25K",
      advantage: true,
    },
    {
      category: "Team Size",
      traditional: "15-20 people",
      brandingbeez: "3-5 specialists",
      advantage: true,
    },
    {
      category: "Approach",
      traditional: "Everything at once",
      brandingbeez: "Phase-based proof",
      advantage: true,
    },
    {
      category: "Risk",
      traditional: "High upfront investment",
      brandingbeez: "Low-risk validation",
      advantage: true,
    },
    {
      category: "Results",
      traditional: "Maybe",
      brandingbeez: "Proven ROI",
      advantage: true,
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Why SMBs Choose Us Over Traditional Agencies
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto text-balance">
            Same enterprise quality, dramatically different approach and pricing.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-black rounded-2xl border border-[#262626] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-[#262626] bg-[#111111]">
            <div className="text-[#71717a] text-sm font-semibold uppercase tracking-wide">Category</div>
            <div className="text-[#71717a] text-sm font-semibold uppercase tracking-wide text-center">
              Traditional Agencies
            </div>
            <div className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide text-center">
              BrandingBeez.io
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index !== comparisons.length - 1 ? "border-b border-[#262626]" : ""
              }`}
            >
              <div className="text-white font-semibold">{item.category}</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-[#a1a1aa]">
                  <X size={16} className="text-red-500" />
                  <span>{item.traditional}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-white font-semibold">
                  <Check size={16} className="text-[#10b981]" />
                  <span>{item.brandingbeez}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#a1a1aa] mb-6">Ready to experience the difference? Let's discuss your AI project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#e5e5e5] transition-all group"
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
