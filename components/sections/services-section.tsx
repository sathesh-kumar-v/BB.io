"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  TrendingUp,
  Smartphone,
  MessageSquare,
  BarChart3,
  Puzzle,
} from "lucide-react"

interface Service {
  icon: React.ReactNode
  headline: string
  description: string
  example: string
  features: string[]
  techStack: string[]
  investment: string
  timeline: string
  cta: string
}

const services: Service[] = [
  {
    icon: <Sparkles className="w-16 h-16 text-primary" />,
    headline: "AI-Powered Workflow Intelligence",
    description:
      "Stop doing robot work. We build GPT-powered systems that understand context, make decisions, and handle complex business processes automatically.",
    example: "Like Octupus.ai - generates compliant telecom content, manages brand voice, schedules optimally",
    features: [
      "Custom GPT-4 integrations trained on your business data",
      "Intelligent document processing and data extraction",
      "Smart email automation with context awareness",
      "Multi-step workflow orchestration",
      "Predictive process optimization",
    ],
    techStack: ["GPT-4", "Langchain", "Python", "APIs"],
    investment: "From $5K",
    timeline: "4-8 weeks",
    cta: "Automate My Processes",
  },
  {
    icon: <TrendingUp className="w-16 h-16 text-primary" />,
    headline: "CRM That Predicts Your Next Sale",
    description:
      "Beyond contact management - we build CRMs with machine learning that predict which leads convert, when to follow up, and what offers work best.",
    example: "Like AC Graphics CRM - automated pipeline, smart lead scoring, predicted conversion rates",
    features: [
      "Custom CRM with predictive lead scoring",
      "Automated follow-up sequences based on behavior",
      "Sales forecasting with ML algorithms",
      "Customer lifetime value prediction",
      "Integration with existing tools (Salesforce, HubSpot)",
    ],
    techStack: ["Custom ML", "PostgreSQL", "APIs", "React"],
    investment: "From $2.5K",
    timeline: "2-6 weeks",
    cta: "Build My CRM",
  },
  {
    icon: <Smartphone className="w-16 h-16 text-primary" />,
    headline: "Mobile Apps That Think and Learn",
    description:
      "Not just pretty interfaces - we build mobile apps with AI at their core. Recommendation engines, predictive features, and intelligent user experiences.",
    example: "Like Wellenpuls Health App - AI health coach, predictive insights, hardware integration",
    features: [
      "AI-powered recommendation systems",
      "Natural language interfaces in mobile apps",
      "Computer vision for image/document processing",
      "Predictive analytics dashboards",
      "IoT and hardware integration",
    ],
    techStack: ["React Native", "TensorFlow Lite", "AI APIs", "Bluetooth"],
    investment: "From $3K",
    timeline: "4-10 weeks",
    cta: "Build My App",
  },
  {
    icon: <MessageSquare className="w-16 h-16 text-primary" />,
    headline: "Conversational AI That Actually Helps",
    description:
      "Forget simple chatbots. We build AI assistants that understand nuance, handle complex queries, and integrate with your entire business system.",
    example: "Like our legal intake bots - qualify leads, gather case details, schedule consultations automatically",
    features: [
      "GPT-powered customer service automation",
      "Lead qualification and appointment booking",
      "Technical support automation",
      "Multi-language customer communication",
      "Integration with CRM, scheduling, payment systems",
    ],
    techStack: ["OpenAI", "Custom NLP", "Webhooks", "APIs"],
    investment: "From $4K",
    timeline: "3-7 weeks",
    cta: "Build My Assistant",
  },
  {
    icon: <BarChart3 className="w-16 h-16 text-primary" />,
    headline: "AI That Sees Around Corners",
    description:
      "Transform your data into competitive intelligence. We build predictive models that forecast demand, identify risks, and spot opportunities before your competitors.",
    example: "Built demand forecasting for construction company - predicted material needs 6 weeks ahead",
    features: [
      "Custom machine learning models for your industry",
      "Automated reporting with predictive insights",
      "Anomaly detection and risk alerts",
      "Customer behavior prediction models",
      "Dynamic pricing and inventory optimization",
    ],
    techStack: ["TensorFlow", "Python", "Apache Spark", "Custom ML"],
    investment: "From $6K",
    timeline: "6-12 weeks",
    cta: "Predict My Future",
  },
  {
    icon: <Puzzle className="w-16 h-16 text-primary" />,
    headline: "Make Your Existing Systems Smarter",
    description:
      "Don't replace everything - enhance what you have. We integrate AI capabilities into your current software, databases, and workflows.",
    example: "Added AI document processing to existing legal practice management system - 70% faster case prep",
    features: [
      "AI-powered enhancements to existing software",
      "Custom API integrations with AI services",
      "Legacy system modernization with AI features",
      "Staff training and change management",
      "Ongoing AI optimization and improvements",
    ],
    techStack: ["APIs", "Custom Integration", "Various Platforms"],
    investment: "From $3K",
    timeline: "2-8 weeks",
    cta: "Enhance My Systems",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group bg-card border border-border rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <div className="mb-6">{service.icon}</div>

      <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">{service.headline}</h3>

      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

      <div className="bg-muted/50 rounded-lg p-3 mb-6 border-l-4 border-primary">
        <p className="text-sm italic text-foreground">
          <span className="font-semibold">Real Example:</span> {service.example}
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-primary font-medium mb-4 hover:gap-3 transition-all"
      >
        What We Build
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isExpanded && (
        <ul className="space-y-2 mb-6 animate-in slide-in-from-top-2 duration-300">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {service.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm">
        <span className="text-green-500 font-semibold">{service.investment}</span>
        <span className="text-muted-foreground">•</span>
        <span className="text-green-500 font-semibold">{service.timeline}</span>
      </div>

      <Button className="w-full group-hover:scale-105 transition-transform">{service.cta}</Button>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">
            AI Solutions We Build for Growing Businesses
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't just automate - we build intelligent systems that learn, adapt, and get smarter over time. Here's
            exactly what we can build for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-sans">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific challenges and build a custom AI solution that
              delivers measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategy Call CTA */}
            <div className="bg-muted/30 rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <h4 className="text-2xl font-semibold text-foreground mb-4 font-sans">Book a Strategy Call</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>30-minute consultation</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>Identify your biggest automation opportunities</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>Get custom recommendations and cost estimates</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>No sales pitch, just honest advice</span>
                </li>
              </ul>
              <Button size="lg" className="w-full">
                Schedule Free Consultation
              </Button>
            </div>

            {/* Community CTA */}
            <div className="bg-muted/30 rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <h4 className="text-2xl font-semibold text-foreground mb-4 font-sans">Join Our AI Community</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>See how other businesses are using AI</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>Get implementation guides and templates</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>Monthly live Q&A with our AI engineers</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>Learn from real project case studies</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
