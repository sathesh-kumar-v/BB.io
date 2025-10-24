import { HeroWithForm } from "@/components/sections/hero-with-form"
import { CoreIndustriesSection } from "@/components/sections/core-industries-section"
import { AutomationSection } from "@/components/sections/automation-section"
import { SimplifiedSolutionsSection } from "@/components/sections/simplified-solutions-section"
import { BusinessModelSection } from "@/components/sections/business-model-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { LeadMagnetsSection } from "@/components/sections/lead-magnets-section"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimation animation="fade-up">
        <HeroWithForm />
      </ScrollAnimation>
      <ScrollAnimation animation="scale-up" delay={100}>
        <CoreIndustriesSection />
      </ScrollAnimation>
      <ScrollAnimation animation="slide-left" delay={150}>
        <AutomationSection />
      </ScrollAnimation>
      <ScrollAnimation animation="neon-glow" delay={200}>
        <SimplifiedSolutionsSection />
      </ScrollAnimation>
      <ScrollAnimation animation="slide-right" delay={150}>
        <BusinessModelSection />
      </ScrollAnimation>
      <ScrollAnimation animation="card-reveal" delay={100}>
        <PortfolioSection />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" delay={150}>
        <LeadMagnetsSection />
      </ScrollAnimation>
    </main>
  )
}
