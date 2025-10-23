import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

import { FooterLeadForm } from "@/components/forms/footer-lead-form"

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <Image src="/logo-icon.png" alt="BrandingBeez.io" width={48} height={48} className="h-12 w-12" />
              <span className="text-2xl font-bold text-white">BrandingBeez.io</span>
            </div>
            <p className="text-[#a1a1aa] max-w-md leading-relaxed">
              Lean AI development agency delivering enterprise-quality solutions at 50-70% below market rates. Proven
              325% average ROI.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[#a1a1aa] hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#a1a1aa] hover:text-white transition-colors">
                  GPT-4 Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#a1a1aa] hover:text-white transition-colors">
                  ML Models
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#a1a1aa] hover:text-white transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-[#a1a1aa] hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-[#a1a1aa] hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#a1a1aa] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Request a quick call</h3>
            <p className="mb-4 text-sm text-[#a1a1aa]">
              Share a few details and we&apos;ll reach out with a tailored next step for your AI transformation.
            </p>
            <FooterLeadForm />
          </div>
        </div>

        <div className="border-t border-[#262626] mt-12 pt-8 text-center text-[#71717a] text-sm">
          <p>&copy; {new Date().getFullYear()} BrandingBeez.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
