import { Zap, Users, Rocket, BarChart } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Zap,
      title: "Lean Discovery",
      description: "Quick scoping session to understand your AI needs and define clear success metrics.",
    },
    {
      icon: Users,
      title: "Small Team Assembly",
      description: "Dedicated 2-3 person team with specialized AI expertise for your project.",
    },
    {
      icon: Rocket,
      title: "Rapid Development",
      description: "2-7 week sprints delivering working AI solutions, not endless planning.",
    },
    {
      icon: BarChart,
      title: "Proven ROI",
      description: "Measurable business impact from day one with ongoing optimization support.",
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">How we deliver enterprise AI</h2>
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto text-balance">
            Our lean methodology cuts costs without cutting quality. Here's how we make enterprise AI accessible.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+1rem)] w-8 h-px bg-gradient-to-r from-[#6366f1] to-transparent"></div>
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl mb-6">
                  <step.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#a1a1aa] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
