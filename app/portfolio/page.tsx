import { FeaturedCaseStudy } from "@/components/portfolio/featured-case-study"
import { CaseStudyCard } from "@/components/portfolio/case-study-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Real AI Solutions We've Built <span className="text-primary">(With Full Transparency)</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8">
              Every project below shows actual costs, timelines, technologies used, and ROI delivered. No fluff, no
              exaggeration - just proven results you can verify.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-1">$127K</div>
                <div className="text-sm text-muted-foreground">Total Value Created</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-1">325%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter System */}

      {/* Case Studies */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* Featured Case Study - Octupus.ai */}
          <FeaturedCaseStudy />

          {/* Other Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CaseStudyCard
              title="AC Graphics CRM"
              industry="Manufacturing"
              badge="Phase-Based Implementation"
              investment="$2.3K Phase 1"
              totalValue="$7.5K Total Value"
              roi="226%"
              description="Custom CRM system with lead automation, pipeline tracking, and quote generation for manufacturing business."
              features={["Lead automation", "Pipeline tracking", "Quote generation", "Client management"]}
              techStack={["Custom Web App", "API Integrations", "Automated Workflows"]}
              timeline="2 months Phase 1, scalable"
              image="/AC-Graphics.jpg"
            />

            <CaseStudyCard
              title="MyVKard"
              industry="SaaS Startup"
              badge="Rapid MVP Development"
              investment="$2.3K"
              totalValue="$12K Market Value"
              roi="422%"
              description="NFC-enabled digital identity platform with payment processing and customizable profile builder."
              features={["NFC integration", "Payment processing", "Profile builder", "QR code generation"]}
              techStack={["React", "Node.js", "Stripe API", "NFC Protocols"]}
              timeline="7 weeks from concept to launch"
              image="/myvkard_nfc1.png"
            />

            <CaseStudyCard
              title="Wellenpuls Health App"
              industry="HealthTech"
              badge="Hardware Integration"
              investment="$1.3K"
              totalValue="$10K Market Value"
              roi="669%"
              description="Mobile health application with Bluetooth hardware integration and AI-powered health coaching."
              features={["Bluetooth connectivity", "AI health coach", "Progress tracking", "Personalized insights"]}
              techStack={["React Native", "Bluetooth APIs", "AI Integration"]}
              timeline="6 weeks mobile development"
              image="/Wellenpuls_App.png"
            />

            <CaseStudyCard
              title="E-Commerce Platform"
              industry="Retail"
              badge="Full-Stack Solution"
              investment="$8.5K"
              totalValue="$22K Market Value"
              roi="159%"
              description="Complete e-commerce platform with inventory management, payment processing, and analytics dashboard."
              features={["Product management", "Payment gateway", "Order tracking", "Analytics dashboard"]}
              techStack={["Next.js", "PostgreSQL", "Stripe", "AWS"]}
              timeline="12 weeks full development"
              image="/modern-ecommerce-dashboard-with-products-and-analy.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                "The ROI was immediate. We saw efficiency gains within the first week."
              </p>
              <div className="font-semibold">AC Graphics</div>
              <div className="text-sm text-muted-foreground">Manufacturing</div>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                "BrandingBeez delivered exactly what they promised, on time and on budget."
              </p>
              <div className="font-semibold">Wellenpuls</div>
              <div className="text-sm text-muted-foreground">HealthTech</div>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">"Finally, an agency that shows you the real costs upfront."</p>
              <div className="font-semibold">Digital Identity Client</div>
              <div className="text-sm text-muted-foreground">SaaS Startup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Ready to See Your Project Here?</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            Every project starts with understanding your specific needs. We provide transparent timelines, costs, and
            ROI projections upfront. No surprise fees, no scope creep, no broken promises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Your Project Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
