"use client"

import Link from "next/link"
import { Building2, Scale, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CoreIndustriesSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111] scroll-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built Specifically for Property Management & Legal Firms
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-3xl mx-auto">
            Every solution we create is designed around the unique challenges, regulations, and workflows of these two
            industries
          </p>
        </div>

        {/* Two-Column Industry Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Property Management */}
          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-8 hover:border-[#6366f1]/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#6366f1]/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#6366f1]" />
              </div>
              <h3 className="text-3xl font-bold text-white">Property Management Intelligence</h3>
            </div>

            <p className="text-[#a1a1aa] mb-6 leading-relaxed">
              From tenant screening to lease renewals, maintenance coordination to financial reporting - we automate the
              processes that consume your day so you can focus on growing your portfolio.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Intelligent Tenant Screening & Application Processing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Automated Lease Generation & Renewal Management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Smart Maintenance Request Routing & Coordination</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Financial Reporting & Rent Collection Automation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Tenant Communication & Portal Management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Property Performance Analytics & Insights</span>
              </div>
            </div>

            <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-xl p-4 mb-6">
              <p className="text-white text-sm italic leading-relaxed">
                "Property management companies using our systems process 3x more applications with the same staff while
                reducing screening time from days to hours."
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Industry Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  Fair Housing Act Compliance
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  State Lease Law Integration
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  AppFolio/Buildium Integration
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  QuickBooks/Xero Connection
                </span>
              </div>
            </div>

            <Button className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white">
              See Property Management Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Legal Firms */}
          <div className="bg-[#111111] border border-[#262626] rounded-2xl p-8 hover:border-[#6366f1]/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#6366f1]/10 rounded-xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-[#6366f1]" />
              </div>
              <h3 className="text-3xl font-bold text-white">Legal Practice Automation</h3>
            </div>

            <p className="text-[#a1a1aa] mb-6 leading-relaxed">
              From client intake to case resolution, document review to billing - we streamline legal workflows while
              maintaining compliance and confidentiality standards.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">AI-Powered Client Intake & Qualification</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Automated Document Review & Contract Analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Case Management & Deadline Tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Billing Automation & Time Tracking Integration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Client Communication & Portal Systems</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Legal Research & Precedent Analysis</span>
              </div>
            </div>

            <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-xl p-4 mb-6">
              <p className="text-white text-sm italic leading-relaxed">
                "Legal firms using our automation handle 2x more cases with improved client satisfaction while reducing
                administrative overhead by 60%."
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Industry Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  Attorney-Client Privilege
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  Bar Association Compliance
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  Clio/MyCase Integration
                </span>
                <span className="px-3 py-1 bg-[#262626] text-[#a1a1aa] text-xs rounded-full">
                  Trust Accounting Compliance
                </span>
              </div>
            </div>

            <Button className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white">
              See Legal Practice Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Other Industries */}
        <div className="text-center">
          <p className="text-[#a1a1aa] mb-4">
            We also serve other industries including healthcare, construction, and financial services.
          </p>
          <Link
            href="/industries"
            className="text-[#6366f1] hover:text-[#5558e3] font-medium inline-flex items-center gap-2"
          >
            View All Industries We Serve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
