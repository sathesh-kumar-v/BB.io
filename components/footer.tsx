import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { QuickCallCard } from "@/components/quick-call-card"

export function Footer() {
  return (
    <>
    <QuickCallCard />
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/Brandingbeez2-21.svg" alt="BrandingBeez.io" width={42} height={42} className="h-42 w-42" />
              <span className="text-2xl font-bold text-foreground"></span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Lean AI development agency delivering enterprise-quality solutions at 50-70% below market rates. Proven
              325% average ROI.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-crm"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Custom CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-chatbots"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="mt-8">
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} BrandingBeez.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
