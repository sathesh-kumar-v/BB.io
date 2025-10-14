"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Scale, Home, HardHat, Heart, Shield, Factory, ChevronDown, ChevronUp } from "lucide-react"

const industries = [
  {
    id: "legal",
    icon: Scale,
    color: "from-blue-500 to-indigo-600",
    headline: "Transform Your Legal Practice with AI",
    painPoint: "Tired of your best people drowning in intake forms and case prep?",
    solutions: [
      "AI Legal Assistant that handles 80%+ of client inquiries intelligently",
      "Smart case management that predicts timelines and flags deadlines",
      "Automated document review that spots issues before you do",
      "Client intake system that qualifies leads while you sleep",
      "Billing automation that captures every billable minute",
    ],
    reality:
      "Imagine walking into your office knowing that overnight inquiries are already qualified, documents are pre-reviewed, and your calendar is optimized. Your paralegals focus on complex work, not data entry.",
    intelligence: [
      "Trained on legal language and procedures",
      "Built-in compliance with attorney-client privilege",
      "Integration with court filing systems",
      "Automatic conflict checking",
      "Bar association regulation compliance",
    ],
    success:
      "3 months from now, you're handling 2x more cases with the same team, billing 15+ more hours weekly, and actually taking weekends off.",
    investment: "$4K - $15K (pays for itself in 2-3 months)",
    timeline: "4-8 weeks to transform your practice",
    cta: "Show Me My Legal AI Solution",
  },
  {
    id: "real-estate",
    icon: Home,
    color: "from-emerald-500 to-teal-600",
    headline: "Give Your Real Estate Business AI Superpowers",
    painPoint: "Losing deals because you can't respond fast enough to every lead?",
    solutions: [
      "Lead qualification system that works 24/7, even on Sundays",
      "Smart property matching that knows your clients better than they do",
      "Automated showing scheduling that fills your calendar optimally",
      "Market analysis AI that impresses clients with instant insights",
      "Transaction management that never misses a deadline",
    ],
    reality:
      "Picture this: Every website lead gets immediate, intelligent responses. Your phone buzzes with pre-qualified appointments. Clients get market reports that make you look like the expert you are.",
    intelligence: [
      "MLS integration and real-time data sync",
      "Commission tracking and deal pipeline management",
      "Market trend analysis and pricing predictions",
      "Open house and showing optimization",
      "Client preference learning and matching",
    ],
    success:
      "6 months from now, you're closing 40% more deals, spending less time on admin, and your clients rave about your responsiveness.",
    investment: "$3K - $12K (ROI typically seen in first month)",
    timeline: "3-7 weeks to supercharge your business",
    cta: "Build My Real Estate AI",
  },
  {
    id: "construction",
    icon: HardHat,
    color: "from-orange-500 to-red-600",
    headline: "Stop Project Chaos with AI Project Intelligence",
    painPoint: "Sick of projects running over budget and clients asking for constant updates?",
    solutions: [
      "Project timeline AI that predicts delays before they happen",
      "Cost tracking system that prevents budget overruns",
      "Client communication automation that keeps everyone informed",
      "Resource scheduling that maximizes your crew efficiency",
      "Quality control tracking that catches issues early",
    ],
    reality:
      "Envision this: Projects finish on time and on budget. Clients get real-time updates automatically. Your crew knows exactly where to be when. You spend time growing the business, not putting out fires.",
    intelligence: [
      "Weather impact prediction and scheduling",
      "Material cost tracking and ordering optimization",
      "Safety compliance automation and reporting",
      "Change order management and approval workflows",
      "Subcontractor coordination and performance tracking",
    ],
    success:
      "Within 4 months, your projects have 30% fewer delays, clients are happier, and you're bidding on bigger jobs with confidence.",
    investment: "$5K - $18K (saves 10x the cost in prevented delays)",
    timeline: "6-10 weeks to revolutionize your operations",
    cta: "Transform My Construction Business",
  },
  {
    id: "healthcare",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    headline: "Put Your Healthcare Practice on Autopilot",
    painPoint: "Spending more time on scheduling and paperwork than caring for patients?",
    solutions: [
      "Intelligent scheduling that reduces no-shows by 50%+",
      "Patient communication automation that feels personal",
      "Insurance verification system that prevents billing headaches",
      "Follow-up care coordination that improves outcomes",
      "Appointment optimization that maximizes your daily capacity",
    ],
    reality:
      "Picture this: Your schedule runs smoothly with minimal gaps. Patients get timely reminders and care instructions. Insurance issues are resolved before appointments. You focus on healing, not administration.",
    intelligence: [
      "HIPAA-compliant by design with encrypted communication",
      "EHR/EMR integration with major healthcare platforms",
      "Insurance database connectivity and verification",
      "Appointment type optimization and duration prediction",
      "Patient outcome tracking and improvement suggestions",
    ],
    success:
      "In 3 months, you're seeing 25% more patients, no-shows are rare, and your staff handles admin 60% faster.",
    investment: "$6K - $20K (saves 40+ hours weekly)",
    timeline: "8-12 weeks to optimize your practice",
    cta: "Automate My Healthcare Practice",
  },
  {
    id: "financial",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
    headline: "Scale Your Financial Practice with AI Compliance",
    painPoint: "Drowning in compliance requirements while trying to serve more clients?",
    solutions: [
      "Client onboarding automation that's 100% compliant",
      "Investment research AI that impresses clients with insights",
      "Risk assessment system that protects your practice",
      "Portfolio reporting automation that saves hours weekly",
      "Compliance monitoring that prevents costly mistakes",
    ],
    reality:
      "Imagine this: New clients onboard in days, not weeks. Your reports impress with personalized insights. Compliance happens automatically. You grow your book while regulators stay happy.",
    intelligence: [
      "SEC/FINRA compliance built into every workflow",
      "Integration with portfolio management and trading platforms",
      "Automated regulatory reporting and documentation",
      "Client risk profiling and suitability tracking",
      "Performance attribution and fee calculation automation",
    ],
    success:
      "Within 6 months, you're managing 50% more assets, compliance is effortless, and clients see you as their smartest advisor.",
    investment: "$8K - $25K (ROI from first 3 new clients)",
    timeline: "10-16 weeks to compliance-proof your growth",
    cta: "Scale My Financial Practice",
  },
  {
    id: "manufacturing",
    icon: Factory,
    color: "from-cyan-500 to-blue-600",
    headline: "Make Your Manufacturing Operations Intelligent",
    painPoint: "Manual processes bottlenecking your production and shipments?",
    solutions: [
      "Inventory AI that prevents stockouts and overstock",
      "Quality control automation that catches defects instantly",
      "Production scheduling that maximizes efficiency",
      "Supply chain intelligence that predicts disruptions",
      "Customer order processing that delights buyers",
    ],
    reality:
      "Visualize this: Your inventory runs lean but never runs out. Quality issues are caught before shipping. Production flows smoothly. Customers get accurate delivery dates they can count on.",
    intelligence: [
      "ERP system integration with major manufacturing platforms",
      "IoT sensor connectivity for real-time monitoring",
      "Demand forecasting with seasonal and market adjustments",
      "Vendor performance tracking and optimization",
      "Quality management integration and automation",
    ],
    success:
      "In 6 months, you've cut inventory costs by 25%, reduced defects by 60%, and customers rave about your reliability.",
    investment: "$10K - $30K (saves 100x in prevented stockouts)",
    timeline: "12-20 weeks to optimize your operations",
    cta: "Intelligentize My Manufacturing",
  },
]

export function IndustriesSection() {
  const [expandedCards, setExpandedCards] = useState<string[]>([])

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            We Build AI Solutions That Actually Fit Your Industry
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Stop settling for generic automation that doesn't understand your business. Here's what we can build
            specifically for your industry's unique challenges and opportunities.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isExpanded = expandedCards.includes(industry.id)

            return (
              <Card
                key={industry.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="p-6">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl font-bold mb-3 text-balance">{industry.headline}</h3>

                  {/* Pain Point Hook */}
                  <p className="text-lg font-semibold text-primary mb-4 text-pretty">{industry.painPoint}</p>

                  {/* What We Can Build */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">What We Can Build for You:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.slice(0, 3).map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                      {!isExpanded && industry.solutions.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          + {industry.solutions.length - 3} more solutions...
                        </li>
                      )}
                      {isExpanded &&
                        industry.solutions.slice(3).map((solution, idx) => (
                          <li key={idx + 3} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                      {/* Reality After Implementation */}
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Your Reality After Implementation:</h4>
                        <p className="text-sm italic text-muted-foreground text-pretty">{industry.reality}</p>
                      </div>

                      {/* Industry-Specific Intelligence */}
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Industry-Specific Intelligence:</h4>
                        <ul className="space-y-1">
                          {industry.intelligence.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Success Scenario */}
                      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                        <p className="text-sm font-medium text-success text-pretty">{industry.success}</p>
                      </div>
                    </div>
                  )}

                  {/* Investment & Timeline */}
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Investment:</span>
                      <span className="font-semibold text-foreground">{industry.investment}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-semibold text-foreground">{industry.timeline}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 space-y-3">
                    <Button className="w-full" size="lg">
                      {industry.cta}
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full" onClick={() => toggleCard(industry.id)}>
                      {isExpanded ? (
                        <>
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          See Full Details <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Industry Not Listed? No Problem.</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in understanding unique business challenges and building AI solutions that fit perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Other Industries */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Other Industries We Serve</h4>
              <ul className="space-y-2">
                {[
                  "E-commerce & Retail",
                  "Professional Services",
                  "Education & Training",
                  "Non-Profit Organizations",
                  "Hospitality & Events",
                  "Transportation & Logistics",
                ].map((industry, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Approach */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Our Industry Approach</h4>
              <ul className="space-y-2">
                {[
                  "Deep-dive discovery of your workflows",
                  "Custom AI solutions for your specific needs",
                  "Industry regulation and compliance integration",
                  "Ongoing optimization as your business grows",
                ].map((item, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: What Happens Next */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">What Happens Next</h4>
              <ul className="space-y-2">
                {[
                  "30-minute industry consultation",
                  "Custom AI opportunity assessment",
                  "Detailed implementation roadmap",
                  "Transparent pricing and timeline",
                ].map((item, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8">
              Discuss My Industry's AI Potential
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
