"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  TrendingUp,
  Clock,
  MessageSquare,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  BarChart,
  Calendar,
  DollarSign,
  Sparkles,
} from "lucide-react"

export default function AIChatbotsPage() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null)
  const [activeUseCase, setActiveUseCase] = useState("legal")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      content:
        "Hi! I'm an AI assistant built by BrandingBeez.io. I can answer questions about our services, pricing, and approach. What would you like to know?",
    },
  ])

  const capabilities = [
    {
      title: "Advanced Lead Qualification",
      icon: Target,
      description:
        "Our AI doesn't just capture contact info - it has intelligent conversations that determine budget, timeline, decision-making authority, and specific needs.",
      details: {
        technical:
          "Custom qualification frameworks for each industry, budget range discovery, timeline assessment, decision-maker identification, pain point analysis",
        conversation: [
          { speaker: "AI", text: "What's driving your interest in automation right now?" },
          { speaker: "Prospect", text: "We're growing fast and our manual processes can't keep up" },
          { speaker: "AI", text: "That's exciting growth! How many team members are feeling the bottleneck?" },
          { speaker: "Prospect", text: "About 25 people, mostly in sales and operations" },
          { speaker: "AI", text: "Perfect size for our solutions. What's your timeline for getting this solved?" },
        ],
        impact: [
          "85% lead qualification accuracy",
          "60% reduction in sales team discovery time",
          "3x improvement in qualified lead volume",
        ],
      },
    },
    {
      title: "Intelligent Customer Support",
      icon: MessageSquare,
      description:
        "Handles complex customer questions by understanding context, accessing your knowledge base, and providing personalized solutions.",
      details: {
        technical:
          "Custom knowledge base integration, customer history awareness, multi-step problem resolution, sentiment analysis, escalation triggers",
        conversation: [
          { speaker: "Customer", text: "I'm having issues with the CRM system we bought from you" },
          {
            speaker: "AI",
            text: "I'm sorry to hear that! I can see you're John from AC Graphics. What specific issue are you encountering?",
          },
          { speaker: "Customer", text: "The quote generation is taking forever to load" },
          {
            speaker: "AI",
            text: "That shouldn't be happening - quotes should generate in under 10 seconds. I'm creating a priority support ticket and scheduling a screen-share session to fix this today.",
          },
        ],
        impact: [
          "78% of support issues resolved without human intervention",
          "24/7 customer support availability",
          "90% customer satisfaction",
        ],
      },
    },
    {
      title: "Appointment Scheduling & Management",
      icon: Calendar,
      description:
        "Intelligently schedules appointments, consultations, and demos based on availability, lead quality, and optimal timing.",
      details: {
        technical:
          "Calendar integration (Google, Outlook, Calendly), intelligent scheduling based on lead quality, time zone detection, automated confirmations",
        conversation: [
          {
            speaker: "AI",
            text: "I have availability this week on Wednesday at 2 PM or Thursday at 10 AM. Which works better for your schedule?",
          },
          { speaker: "Customer", text: "Thursday at 10 AM works perfectly" },
          {
            speaker: "AI",
            text: "Perfect! I've scheduled your consultation for Thursday, March 14th at 10:00 AM EST. You'll receive a calendar invitation within 2 minutes.",
          },
        ],
        impact: [
          "89% scheduled consultation show-rate",
          "Zero double-booking conflicts",
          "40% increase in qualified consultations booked",
        ],
      },
    },
    {
      title: "Sales Process Automation",
      icon: DollarSign,
      description:
        "Guides prospects through your entire sales funnel with intelligent conversation, objection handling, and personalized recommendations.",
      details: {
        technical:
          "Custom sales methodology programming, objection handling optimization, product recommendation engine, pricing automation, payment processing",
        conversation: [
          { speaker: "Prospect", text: "I'm interested but $12K seems expensive for a CRM" },
          {
            speaker: "AI",
            text: "I understand the investment consideration. You mentioned your current manual process costs about 20 hours/week in lost productivity. At $150/hour, that's $3,000/week or $156,000 annually. Our CRM typically pays for itself within 6-8 weeks.",
          },
        ],
        impact: [
          "45% improvement in sales conversion rates",
          "Consistent objection handling",
          "24/7 sales availability",
        ],
      },
    },
  ]

  const useCases = {
    legal: {
      title: "Legal Practices",
      subtitle: "Client Intake & Qualification",
      conversation: [
        {
          speaker: "AI",
          text: "Hello! I'm here to help with your legal inquiry. What type of legal matter brings you to our firm today?",
        },
        { speaker: "Prospect", text: "I think I need help with a business contract dispute" },
        {
          speaker: "AI",
          text: "I can definitely help you understand if this is something our business litigation team can assist with. First, is this a dispute with a vendor, client, partner, or employee?",
        },
        { speaker: "Prospect", text: "It's with a vendor who didn't deliver what was promised" },
        {
          speaker: "AI",
          text: "That's frustrating when vendors don't meet their commitments. To help determine the best approach: What was the approximate value of the contract? Do you have the original contract documented? Have you attempted to resolve this directly with the vendor?",
        },
      ],
      impact: [
        "87% reduction in initial consultation time",
        "60% improvement in case qualification accuracy",
        "24/7 client intake availability",
      ],
    },
    healthcare: {
      title: "Healthcare Practices",
      subtitle: "Appointment Scheduling & Patient Support",
      conversation: [
        {
          speaker: "AI",
          text: "Hi! I'm here to help you schedule an appointment or answer questions about our services. What can I assist you with today?",
        },
        { speaker: "Patient", text: "I need to schedule a check-up but I'm not sure what's covered by my insurance" },
        {
          speaker: "AI",
          text: "I'd be happy to help you schedule your check-up and check your insurance coverage. What type of check-up are you looking for - annual physical, specific concern follow-up, or preventive screening?",
        },
        { speaker: "Patient", text: "Annual physical - it's been about 18 months" },
        {
          speaker: "AI",
          text: "Perfect timing! To check your coverage and find the best appointment time: What's your insurance provider and plan type? Do you have a preferred day of the week or time?",
        },
      ],
      impact: [
        "45% reduction in appointment no-shows",
        "60% decrease in phone call volume",
        "24/7 scheduling availability",
      ],
    },
    realestate: {
      title: "Real Estate",
      subtitle: "Lead Qualification & Property Matching",
      conversation: [
        {
          speaker: "AI",
          text: "Welcome! I'm here to help you find the perfect property. Are you looking to buy, sell, or just exploring the market?",
        },
        { speaker: "Prospect", text: "We're thinking about buying our first home" },
        {
          speaker: "AI",
          text: "Congratulations on taking this exciting step! Let me ask a few questions: What area or neighborhoods are you considering? What's your target price range?",
        },
        {
          speaker: "Prospect",
          text: "We're looking in downtown or nearby suburbs, budget around $400-500K, need at least 3 bedrooms",
        },
        {
          speaker: "AI",
          text: "Excellent! That budget gives you great options. Have you been pre-approved for financing yet? I can connect you with our preferred lenders who often get better rates than banks.",
        },
      ],
      impact: [
        "40% increase in qualified buyer leads",
        "65% improvement in initial consultation quality",
        "24/7 lead capture",
      ],
    },
    professional: {
      title: "Professional Services",
      subtitle: "Service Consultation & Proposal Generation",
      conversation: [
        {
          speaker: "AI",
          text: "Hello! I'm here to help you explore how our consulting services might benefit your business. What challenges are you looking to address?",
        },
        { speaker: "Prospect", text: "Our company is growing fast but our operations are becoming chaotic" },
        {
          speaker: "AI",
          text: "Growth challenges are exciting but can become overwhelming! To better understand: What size is your team currently? What operational areas feel most chaotic?",
        },
        {
          speaker: "Prospect",
          text: "We're about 35 people now, biggest issues are project management and client communication",
        },
        {
          speaker: "AI",
          text: "That's a classic scaling challenge. Based on your situation, we typically recommend our Operations Assessment package. For a 35-person company, this runs $8,000-$12,000 and usually pays for itself within 60 days through improved efficiency.",
        },
      ],
      impact: [
        "50% increase in qualified consultation requests",
        "Consistent service positioning",
        "Automated proposal generation",
      ],
    },
  }

  const pricingTiers = [
    {
      name: "Smart Assistant",
      investment: "$4,000 - $8,000",
      timeline: "3-6 weeks",
      team: "2-3 specialists",
      perfectFor: "5-25 employees",
      features: [
        "GPT-4 powered conversational AI",
        "Custom training on your business",
        "Lead qualification and contact capture",
        "Basic appointment scheduling",
        "FAQ and customer support automation",
        "Website integration (any platform)",
        "Mobile-responsive chat interface",
        "30-day optimization period",
        "Team training and documentation",
      ],
      capabilities: [
        "Answer common questions intelligently",
        "Qualify leads with natural conversation",
        "Schedule appointments and consultations",
        "Handle basic customer support",
        "Escalate complex issues appropriately",
      ],
    },
    {
      name: "Intelligent Business Assistant",
      investment: "$8,000 - $15,000",
      timeline: "6-10 weeks",
      team: "3-4 specialists",
      perfectFor: "25-100 employees",
      popular: true,
      features: [
        "Everything in Smart Assistant",
        "Advanced conversation flows and logic",
        "CRM integration and lead management",
        "Multi-platform deployment (web, social, SMS)",
        "Advanced analytics and conversation intelligence",
        "Custom personality and brand voice",
        "Industry-specific compliance",
        "Automated follow-up sequences",
        "Performance optimization and A/B testing",
        "60-day optimization period",
      ],
      capabilities: [
        "Complex multi-step conversations",
        "Industry-specific knowledge",
        "Advanced lead scoring",
        "Automated proposal generation",
        "Customer onboarding assistance",
        "Technical support with escalation",
      ],
    },
    {
      name: "Enterprise AI Platform",
      investment: "$15,000 - $35,000",
      timeline: "8-16 weeks",
      team: "4-6 specialists",
      perfectFor: "100+ employees",
      features: [
        "Everything in Intelligent Plus",
        "Multiple AI personalities for departments",
        "Advanced machine learning",
        "Custom integrations with business systems",
        "Multi-language and regional deployment",
        "Advanced security and compliance",
        "Custom analytics dashboard",
        "White-label and branded mobile apps",
        "Priority support and success manager",
        "90-day optimization period",
      ],
      capabilities: [
        "Department-specific AI assistants",
        "Advanced workflow automation",
        "Custom reporting and business intelligence",
        "Multi-location support",
        "Advanced security and audit trails",
        "Custom mobile applications",
      ],
    },
  ]

  const personalities = [
    {
      name: "Professional Consultant",
      industry: "Legal, Financial, Professional Services",
      tone: "Authoritative, empathetic, detail-oriented",
      sample:
        "I understand this is a significant legal matter for your business. Let me ask a few targeted questions to ensure you're connected with the right attorney who specializes in your specific situation.",
      traits: [
        "Uses industry-appropriate terminology",
        "Asks thoughtful qualifying questions",
        "Provides detailed explanations",
        "Maintains professional boundaries",
      ],
    },
    {
      name: "Friendly Healthcare Guide",
      industry: "Healthcare, Wellness, Medical",
      tone: "Caring, patient, informative",
      sample:
        "I'm here to help make your healthcare experience as smooth as possible! I know medical appointments can feel overwhelming, so let me walk you through the process step by step.",
      traits: [
        "Uses warm, reassuring language",
        "Explains medical processes clearly",
        "Shows empathy for patient concerns",
        "Maintains HIPAA compliance",
      ],
    },
    {
      name: "Knowledgeable Sales Partner",
      industry: "Real Estate, Retail, Sales",
      tone: "Enthusiastic, helpful, results-focused",
      sample:
        "That's exciting that you're exploring your options! I love helping people find exactly what they're looking for. Tell me about your ideal situation, and I'll connect you with the right specialist.",
      traits: [
        "Enthusiastic and positive tone",
        "Focuses on customer needs",
        "Builds excitement about possibilities",
        "Qualifies without being pushy",
      ],
    },
    {
      name: "Technical Problem Solver",
      industry: "Technology, Engineering, Technical Services",
      tone: "Precise, helpful, solution-oriented",
      sample:
        "I can definitely help troubleshoot that issue. Let me gather some specific details about what you're experiencing so we can identify the most efficient solution.",
      traits: [
        "Uses precise technical language",
        "Asks diagnostic questions systematically",
        "Provides step-by-step guidance",
        "Offers multiple solution approaches",
      ],
    },
  ]

  const faqs = [
    {
      question: "How is your AI different from basic chatbots or ChatGPT?",
      answer:
        "Basic chatbots use keyword-based responses and can't handle complex questions. Generic ChatGPT has general knowledge but doesn't know your business. Our custom AI assistants are GPT-4 powered but trained specifically on YOUR business - understanding your services, pricing, processes, and industry. They integrate with your CRM and calendar, remember conversation context, and continuously learn from successful interactions. The result: customers feel like they're talking to your best employee, not a generic AI.",
    },
    {
      question: "What if the AI gives wrong information or makes mistakes?",
      answer:
        "We implement multiple safeguards: (1) Knowledge Base Control - AI trained only on verified information, (2) Confidence Thresholds - AI only provides information it's highly confident about, (3) Escalation Triggers - complex situations automatically route to humans, (4) Response Monitoring - all conversations logged and monitored, (5) Regular Updates - AI knowledge updated as your business evolves. The goal is an AI that knows what it knows and admits what it doesn't - more reliable than humans who might guess or provide outdated information.",
    },
    {
      question: "How do you handle integration with our existing website and systems?",
      answer:
        "We've connected AI assistants to virtually every business platform. Website integration works with any platform (WordPress, Shopify, custom-built) as an embedded chat widget that matches your branding. Business system connections include CRM (Salesforce, HubSpot, custom), calendars (Google, Outlook, Calendly), communication platforms (email, SMS, social media), and e-commerce systems. The process: (1) Integration assessment, (2) API development, (3) Data mapping, (4) Comprehensive testing, (5) Team training. Result: Your AI has access to real-time information and can take actions in your business systems automatically.",
    },
    {
      question: "What kind of ongoing maintenance and support is required?",
      answer:
        "Our AI assistants are designed to be low-maintenance while continuously improving. Included in every project: 30-90 day optimization period, conversation monitoring, bug fixes, and uptime assurance. Minimal ongoing requirements - your AI learns automatically from conversations with no daily maintenance tasks. Optional ongoing services: monthly conversation analysis ($300-800/month), new feature development (project-based), priority support ($500-1,200/month), advanced analytics ($200-400/month). Most clients find the AI requires less ongoing attention than a human employee while delivering consistent 24/7 performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-sans text-5xl lg:text-6xl font-bold text-balance">
                  Your Customers Want Answers at 3 AM. Are You There?
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Forget basic chatbots that frustrate customers with robotic responses. We build intelligent AI
                  assistants powered by GPT-4 that understand context, handle complex conversations, and actually solve
                  problems - 24/7.
                </p>
              </div>

              {/* Value Props */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">GPT-4 Powered Intelligence</div>
                    <div className="text-sm text-muted-foreground">Understands context, nuance, and complex needs</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Beyond Lead Capture</div>
                    <div className="text-sm text-muted-foreground">
                      Qualifies leads, books appointments, handles support
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Gets Smarter Over Time</div>
                    <div className="text-sm text-muted-foreground">Learns from every conversation to improve</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Availability</div>
                    <div className="text-sm text-muted-foreground">Never miss a customer inquiry or opportunity</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#demo">Chat with Our AI Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#capabilities">See AI in Action</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Live Demo */}
            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur border-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">AI Assistant Demo</div>
                        <div className="text-xs text-muted-foreground">Built in 2 weeks for $6K</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-[400px] overflow-y-auto">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${msg.role === "ai" ? "bg-muted" : "bg-primary text-primary-foreground"}`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <p className="text-sm text-muted-foreground">Try asking:</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        What makes you different?
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        How much does it cost?
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Book a consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">The Painful Reality of Missing Customer Conversations</h2>
            <p className="text-xl text-muted-foreground">
              Every missed conversation is a missed opportunity - and your competitors are capturing them
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem 1 */}
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-sans text-2xl font-bold">The 3 AM Lost Lead</h3>
              <p className="text-muted-foreground">
                It's 3 AM. A perfect prospect visits your website - ready to buy, budget approved, timeline urgent. They
                have questions. Your contact form asks them to "allow 24-48 hours for response." They leave. Your
                competitor's AI assistant immediately engages them, answers their questions, and books a consultation
                for tomorrow morning.
              </p>
              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-semibold">Cost Reality:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 67% of website visitors never return</li>
                  <li>• After-hours inquiries represent 40% of total leads</li>
                  <li>• Average lost deal value: $5,000-$50,000+</li>
                  <li>• Competitor advantage while you sleep</li>
                </ul>
              </div>
            </Card>

            {/* Problem 2 */}
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-sans text-2xl font-bold">The Support Ticket Avalanche</h3>
              <p className="text-muted-foreground">
                Your phone rings constantly with the same questions: "What are your prices?" "Do you work with my
                industry?" "How long does implementation take?" Your team spends 60% of their time answering repetitive
                questions instead of serving high-value clients.
              </p>
              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-semibold">Cost Reality:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 15-20 hours/week on repetitive inquiries</li>
                  <li>• $30K+ annual cost in staff time</li>
                  <li>• High-value prospects frustrated by delays</li>
                  <li>• Team burnout from repetitive work</li>
                </ul>
              </div>
            </Card>

            {/* Problem 3 */}
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-sans text-2xl font-bold">The Qualification Nightmare</h3>
              <p className="text-muted-foreground">
                Your marketing generates leads, but 70% are unqualified. Your sales team wastes hours on discovery calls
                with people who can't afford your services, aren't decision-makers, or aren't ready to buy. Meanwhile,
                the 30% of quality leads get poor attention because your team is exhausted.
              </p>
              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-semibold">Cost Reality:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 70% of sales time wasted on unqualified leads</li>
                  <li>• Quality prospects receive delayed attention</li>
                  <li>• Sales team morale and performance decline</li>
                  <li>• Revenue ceiling from inefficient qualification</li>
                </ul>
              </div>
            </Card>

            {/* Problem 4 */}
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-sans text-2xl font-bold">The Human Bottleneck</h3>
              <p className="text-muted-foreground">
                You want to scale, but every new customer means more support load. Hiring support staff is expensive and
                slow. New team members need weeks of training. Customer satisfaction varies by who answers. Growth means
                more complexity, not more freedom.
              </p>
              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-semibold">Cost Reality:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• $40K+ annual cost per support hire</li>
                  <li>• 2-3 month training and onboarding</li>
                  <li>• Inconsistent customer experience</li>
                  <li>• Growth limited by human capacity</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary">
              What if you had a team member who never sleeps, never calls in sick, handles unlimited conversations
              simultaneously, and gets smarter every day?
            </p>
          </div>
        </div>
      </section>

      {/* Intelligent vs Basic Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">Why Most Chatbots Fail (And How Ours Succeed)</h2>
            <p className="text-xl text-muted-foreground">
              The difference between frustrating keyword robots and intelligent conversation partners
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Basic Chatbots */}
            <Card className="p-8 border-destructive/50">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <XCircle className="w-8 h-8 text-destructive" />
                  <h3 className="font-sans text-2xl font-bold">Basic Chatbots</h3>
                </div>

                <div className="space-y-3 p-4 bg-destructive/5 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold">Customer:</div>
                    <div className="text-sm">
                      "I need help with pricing for a CRM system for my law firm with 15 attorneys"
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold text-destructive">Bot:</div>
                    <div className="text-sm">
                      "I see you mentioned pricing! Please fill out this form and someone will contact you within 24-48
                      hours."
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold">Customer:</div>
                    <div className="text-sm">"That's not helpful. What's the approximate cost range?"</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold text-destructive">Bot:</div>
                    <div className="text-sm">"I don't understand. Please contact our sales team."</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">Limitations:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Keyword-based responses only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Can't handle complex or specific questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Frustrates customers with robotic replies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>No context memory between messages</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-destructive">
                    Result: 73% of users abandon basic chatbot conversations
                  </p>
                </div>
              </div>
            </Card>

            {/* Our Intelligent AI */}
            <Card className="p-8 border-green-500/50">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="font-sans text-2xl font-bold">Our Intelligent AI Assistants</h3>
                </div>

                <div className="space-y-3 p-4 bg-green-500/5 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold">Customer:</div>
                    <div className="text-sm">
                      "I need help with pricing for a CRM system for my law firm with 15 attorneys"
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm font-semibold text-green-500">AI:</div>
                    <div className="text-sm">
                      "I'd be happy to help with CRM pricing for your law practice. For a 15-attorney firm, our custom
                      CRM solutions typically range from $8,000-$18,000 depending on complexity. This includes client
                      intake automation, case management, billing integration, and compliance features specific to legal
                      practices. What's your biggest challenge with your current client management process?"
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">Capabilities:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Understands context and industry-specific needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Provides specific, helpful information immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Asks intelligent follow-up questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Remembers conversation context</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-green-500">
                    Result: 94% conversation completion rate, 67% convert to qualified leads
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">
              Intelligent Capabilities That Actually Help Your Business
            </h2>
            <p className="text-xl text-muted-foreground">
              Beyond chat - AI assistants that work like your best employee
            </p>
          </div>

          <div className="space-y-4">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon
              const isExpanded = expandedCapability === idx

              return (
                <Card key={idx} className="overflow-hidden">
                  <button
                    onClick={() => setExpandedCapability(isExpanded ? null : idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-sans text-xl font-bold">{capability.title}</h3>
                        <p className="text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-6 border-t">
                      <div className="pt-6 space-y-4">
                        <div>
                          <p className="font-semibold mb-2">Technical Implementation:</p>
                          <p className="text-sm text-muted-foreground">{capability.details.technical}</p>
                        </div>

                        <div>
                          <p className="font-semibold mb-3">Real Conversation Flow:</p>
                          <div className="space-y-2 p-4 bg-muted rounded-lg">
                            {capability.details.conversation.map((msg, msgIdx) => (
                              <div key={msgIdx} className="text-sm">
                                <span className="font-semibold">{msg.speaker}:</span> {msg.text}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">Business Impact:</p>
                          <ul className="space-y-1">
                            {capability.details.impact.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Case Showcase */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">AI Assistants Built for Your Industry</h2>
            <p className="text-xl text-muted-foreground">
              See exactly how intelligent conversation works in your business context
            </p>
          </div>

          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(useCases).map(([key, useCase]) => (
                <Button
                  key={key}
                  variant={activeUseCase === key ? "default" : "outline"}
                  onClick={() => setActiveUseCase(key)}
                >
                  {useCase.title}
                </Button>
              ))}
            </div>

            {/* Active Use Case */}
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-2xl font-bold mb-2">
                    {useCases[activeUseCase as keyof typeof useCases].title}
                  </h3>
                  <p className="text-muted-foreground">{useCases[activeUseCase as keyof typeof useCases].subtitle}</p>
                </div>

                <div className="space-y-3 p-6 bg-muted rounded-lg">
                  {useCases[activeUseCase as keyof typeof useCases].conversation.map((msg, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm font-semibold">{msg.speaker}:</p>
                      <p className="text-sm text-muted-foreground pl-4">{msg.text}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-semibold mb-3">Business Impact:</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {useCases[activeUseCase as keyof typeof useCases].impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">Transparent AI Assistant Pricing</h2>
            <p className="text-xl text-muted-foreground">
              One-time development cost, optional monthly hosting - no per-conversation fees
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <Card key={idx} className={`p-8 ${tier.popular ? "border-primary border-2 relative" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{tier.investment}</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Timeline: {tier.timeline}</p>
                      <p>Team: {tier.team}</p>
                      <p>Perfect For: {tier.perfectFor}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-semibold text-sm">What's Included:</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                    Build {tier.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              What's Always Included: Complete source code ownership • No per-conversation fees • Unlimited conversation
              volume • 24/7 uptime monitoring
            </p>
            <p className="text-sm text-muted-foreground">
              Optional Monthly Services: Hosting ($200-500/mo) • Ongoing optimization ($300-800/mo) • Priority support
              ($500-1,200/mo)
            </p>
          </div>
        </div>
      </section>

      {/* AI Personalities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">Custom AI Personalities That Match Your Brand</h2>
            <p className="text-xl text-muted-foreground">
              Your AI assistant should sound like your best employee, not a robot
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {personalities.map((personality, idx) => (
              <Card key={idx} className="p-8 space-y-4">
                <div>
                  <h3 className="font-sans text-xl font-bold mb-1">{personality.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{personality.industry}</p>
                  <Badge variant="outline">{personality.tone}</Badge>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm italic">"{personality.sample}"</p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Personality Traits:</p>
                  <ul className="space-y-1">
                    {personality.traits.map((trait, traitIdx) => (
                      <li key={traitIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx

              return (
                <Card key={idx}>
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                  >
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t pt-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl font-bold mb-4">
              Ready to Have Better Conversations with Your Customers?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join businesses that never miss a customer inquiry, question, or sales opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Path 1 */}
            <Card className="p-8 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">I Want to See AI in Action</h3>
                <p className="text-muted-foreground">
                  Experience intelligent conversation firsthand. Our AI assistant can answer questions about our
                  services, pricing, timeline, and approach.
                </p>
              </div>
              <Button className="w-full" asChild>
                <Link href="#demo">Start Chatting with Our AI</Link>
              </Button>
            </Card>

            {/* Path 2 */}
            <Card className="p-8 space-y-6 border-primary border-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">I'm Ready to Build My AI Assistant</h3>
                <p className="text-muted-foreground">
                  60-minute consultation where we analyze your customer interactions, design your AI assistant's
                  personality, and provide detailed implementation plan.
                </p>
              </div>
              <Button className="w-full">Schedule AI Strategy Session</Button>
            </Card>

            {/* Path 3 */}
            <Card className="p-8 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold mb-2">I Want to Learn More First</h3>
                <p className="text-muted-foreground">
                  Connect with 500+ business owners using AI assistants. See real conversation examples, implementation
                  case studies, and get direct access to our AI developers.
                </p>
              </div>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="/community">Request Community Access</Link>
              </Button>
            </Card>
          </div>

          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Conversation Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span>500+ successful conversations daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>94% customer satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
