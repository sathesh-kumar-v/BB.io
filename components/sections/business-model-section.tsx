import { Users, Zap, Brain } from "lucide-react"

export function BusinessModelSection() {
  const models = [
    {
      icon: Users,
      title: "Lean Team Structure",
      description: "We use small, specialized teams focused on core functionality first",
      example: "Octupus.ai: 5 people, 6 months → $25K value delivered",
      comparison: "Our 3-5 vs Traditional 15-20",
    },
    {
      icon: Zap,
      title: "Phase-Based Delivery",
      description: "Start small, prove value, scale systematically",
      example: "AC Graphics: $2.3K Phase 1 → immediate ROI → $7.5K total value",
      comparison: "Phase 1 → ROI → Phase 2 expansion",
    },
    {
      icon: Brain,
      title: "AI-First Expertise",
      description: "We're not generalists learning AI - we're AI specialists who understand business",
      example: "Custom GPT-4 integrations, not ChatGPT wrappers",
      comparison: "GPT-4, TensorFlow, Custom ML",
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#111111] scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Bringing the Power of Enterprise AI to Every Business
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto text-balance">
            Our lean methodology isn't about cutting corners—it's about cutting waste while maintaining enterprise
            quality.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="p-8 bg-black rounded-2xl border border-[#262626] hover:border-[#6366f1]/50 transition-all"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl mb-6">
                <model.icon size={24} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>

              {/* Comparison Visual */}
              <div className="p-4 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-lg mb-4">
                <div className="text-[#6366f1] text-sm font-mono">{model.comparison}</div>
              </div>

              {/* Description */}
              <p className="text-[#a1a1aa] leading-relaxed mb-4">{model.description}</p>

              {/* Example */}
              <div className="p-4 bg-[#111111] border border-[#262626] rounded-lg">
                <div className="text-[#71717a] text-xs uppercase tracking-wide mb-2">Real Example</div>
                <div className="text-white text-sm font-medium">{model.example}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
