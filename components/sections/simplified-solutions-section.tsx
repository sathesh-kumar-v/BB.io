import Link from "next/link"
import { Cog, Database, Smartphone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Cog,
    headline: "AI Automation",
    description:
      "Streamline your operations with intelligent automation that eliminates repetitive tasks and improves efficiency across teams.",
    examples: [
      "Workflow and process automation",
      "Data processing and reporting",
      "Communication and follow-up automation",
      "Business intelligence and optimization",
    ],
    benefit: "Save 20+ hours weekly",
    link: "/services/ai-automation",
  },
  {
    icon: Database,
    headline: "AI-Powered CRM",
    description:
      "Transform customer management with an AI-driven CRM that adapts to your workflows, predicts trends, and enhances decision-making.",
    examples: [
      "Lead scoring and conversion insights",
      "Sales and customer journey tracking",
      "Automated follow-ups and notifications",
      "Performance analytics with predictive insights",
    ],
    benefit: "Never miss an opportunity again",
    link: "/services/custom-crm",
  },
  {
    icon: Smartphone,
    headline: "AI-Powered Mobile & Web Apps",
    description:
      "Build powerful mobile and web applications infused with AI capabilities for smarter user experiences and real-time adaptability.",
    examples: [
      "Predictive analytics and personalization",
      "Voice and chatbot integration",
      "Smart dashboards and data visualization",
      "Scalable cloud-based performance",
    ],
    benefit: "Turn ideas into intelligent apps",
    link: "/services/mobile-apps",
  },
  {
    icon: MessageSquare,
    headline: "AI Assistants & Chatbots",
    description:
      "Empower your business with virtual AI assistants that engage, qualify, and support your customers 24/7.",
    examples: [
      "Customer inquiry and lead automation",
      "Appointment booking and scheduling",
      "FAQ and support automation",
      "Multilingual conversational intelligence",
    ],
    benefit: "24/7 intelligent support",
    link: "/services/ai-chatbots",
  },
]

export function SimplifiedSolutionsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Four Core AI Solutions That Transform Your Business
          </h2>
          <p className="text-lg text-[#71717a] max-w-2xl mx-auto">
            Smart, scalable, and future-ready innovations powered by AI.
          </p>
        </div>

        {/* Four-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-[#e5e5e5] rounded-xl p-6 hover:shadow-xl hover:border-[#6366f1]/50 transition-all flex flex-col"
            >
              <div className="flex-grow">
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#6366f1]" />
                </div>

                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{solution.headline}</h3>

                <p className="text-[#71717a] text-sm mb-4 leading-relaxed">{solution.description}</p>

                <div className="space-y-2 mb-4">
                  {solution.examples.map((example, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#6366f1] text-xs mt-1">•</span>
                      <span className="text-[#52525b] text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-lg px-3 py-2 mt-4 mb-4">
                <span className="text-[#10b981] text-sm font-semibold">{solution.benefit}</span>
              </div>

              <div className="flex justify-end mt-auto">
                <Link href={solution.link}>
                  <Button className="bg-[#6366f1] hover:bg-[#6366f1]/90 text-white px-6 py-2">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
