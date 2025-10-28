"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    {
      title: "AI Automation Platform",
      label: "Most Popular",
      href: "/services/ai-automation",
      description: "Intelligent workflows that save 20+ hours/week",
    },
    {
      title: "Custom CRM Development",
      label: "Phase-Based",
      href: "/services/custom-crm",
      description: "Tailored sales & customer management systems",
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      label: "24/7 Solution",
      href: "/services/ai-chatbots",
      description: "Automated customer support & engagement",
    },
    {
      title: "Mobile App Development",
      label: "iOS & Android",
      href: "/services/mobile-apps",
      description: "Native & cross-platform mobile solutions",
    },
  ]

  const closeServices = () => setIsServicesOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Brandingbeez2-21.svg" alt="BrandingBeez.io" width={42} height={42} className="h-42 w-42" priority />
            <span className="text-2xl font-bold text-foreground"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={closeServices}
              onFocus={() => setIsServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  closeServices()
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:text-foreground"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Services Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[560px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group p-4 rounded-lg hover:bg-accent transition-colors focus-visible:outline-none"
                        onClick={closeServices}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                            {service.title}
                          </h3>
                          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                            {service.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/industries" className="text-muted-foreground hover:text-foreground transition-colors">
              Industries
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-full"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                        <span className="ml-2 text-xs text-primary">({service.label})</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/industries"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/community"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/get-started"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
