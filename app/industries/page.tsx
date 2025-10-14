import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Scale,
  Building2,
  Phone,
  HardHat,
  Calculator,
  Heart,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              AI Solutions Engineered for Your Industry's Specific Challenges
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Generic automation fails because every industry has unique workflows, compliance requirements, and growth
              bottlenecks. We've delivered 325% average ROI by building AI solutions that understand your business as
              deeply as you do.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span>Trusted across 6 key industries</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                <span>$2.3K-$16K investment range</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>6-week average delivery</span>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="#industries">Find Your Industry Below</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                <Link href="/contact">Not Sure Where You Fit? Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Industries Section */}
      <section id="industries" className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Personal Injury Law Firms */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Scale size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground">Personal Injury Law Firms</h2>
                <p className="text-xl text-muted-foreground">Streamline case management and client communication</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Managing hundreds of client inquiries while ensuring nothing falls through the cracks? We get it.
                Between initial consultations, document collection, and ongoing case updates, qualified leads slip away
                while administrative tasks consume billable hours.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-6">AI-Powered Legal Tools</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Medical Records Chronology AI */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Medical Records Chronology AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically organize and summarize medical records into chronological timelines, saving 20+ hours
                    per case.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>OCR document scanning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Intelligent date extraction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated summarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Export to PDF/Word</span>
                    </li>
                  </ul>
                </div>

                {/* Client Intake Automation */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Client Intake Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Streamline client onboarding with intelligent forms that qualify leads and schedule consultations
                    automatically.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Smart form routing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Lead scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Auto-scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>CRM integration</span>
                    </li>
                  </ul>
                </div>

                {/* Case Status Communication Bot */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Case Status Communication Bot</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep clients informed with automated updates via SMS, email, or portal notifications.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-channel messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Client portal access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>24/7 availability</span>
                    </li>
                  </ul>
                </div>

                {/* Settlement Calculator */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Settlement Calculator</h4>
                  <p className="text-sm text-muted-foreground">
                    Calculate potential settlement values based on case details, medical expenses, and historical data.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-powered valuation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Comparable case analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Expense tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Report generation</span>
                    </li>
                  </ul>
                </div>

                {/* Appointment & Deadline Manager */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Appointment & Deadline Manager</h4>
                  <p className="text-sm text-muted-foreground">
                    Never miss a court date or statute of limitations with intelligent calendar management and
                    reminders.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Court calendar sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Deadline tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Conflict detection</span>
                    </li>
                  </ul>
                </div>

                {/* Document Management System */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Document Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    Organize, search, and retrieve case documents instantly with AI-powered categorization.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Smart tagging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-text search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Version control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Secure cloud storage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/50 border border-border rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Technical Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {["Clio", "MyCase", "PracticePanther", "Google Workspace", "Outlook"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  HIPAA-compliant where medical malpractice is involved • Custom API development for specialized legal
                  software
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Legal Industry Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">See Legal Workflow Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Property Management */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Building2 size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground">Property Management</h2>
                <p className="text-xl text-muted-foreground">Automate tenant relations and property operations</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Between property showings, tenant maintenance requests, and following up on leads, you're managing
                hundreds of touchpoints while trying to close deals and keep properties profitable. Sound familiar?
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-6">Property Management Tools</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Tenant Screening Automation */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Tenant Screening Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate background checks, credit reports, and rental history verification for faster tenant
                    approval.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Credit check integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Background verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Income verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated scoring</span>
                    </li>
                  </ul>
                </div>

                {/* Maintenance Request Portal */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Maintenance Request Portal</h4>
                  <p className="text-sm text-muted-foreground">
                    Let tenants submit and track maintenance requests while automatically routing to appropriate
                    vendors.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Tenant portal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Photo uploads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Vendor assignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Status tracking</span>
                    </li>
                  </ul>
                </div>

                {/* Rent Collection Automation */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Rent Collection Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate rent collection, late payment reminders, and financial reporting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Auto-payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Late fee calculation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Payment reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Financial reports</span>
                    </li>
                  </ul>
                </div>

                {/* Lease Management System */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Lease Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    Digitize lease agreements with e-signatures, renewal reminders, and document storage.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>E-signature integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Renewal tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Template library</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Compliance checks</span>
                    </li>
                  </ul>
                </div>

                {/* Tenant Communication Hub */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Tenant Communication Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    Centralize all tenant communications with automated responses and announcement broadcasting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Mass messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>AI chatbot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Announcement system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Communication history</span>
                    </li>
                  </ul>
                </div>

                {/* Inspection & Compliance Tracker */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Inspection & Compliance Tracker</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule and document property inspections with photo evidence and compliance reporting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Inspection scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Photo documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Compliance checklists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Report generation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/50 border border-border rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Technical Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {["AppFolio", "Buildium", "Rent Manager", "Stripe", "PayPal"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  MLS data synchronization • CRM connectivity with Chime, Top Producer, CINC
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Real Estate Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">See Property Management Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Construction Firms */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <HardHat size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground">Construction Firms</h2>
                <p className="text-xl text-muted-foreground">Manage projects, teams, and compliance efficiently</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Juggling multiple projects, coordinating subcontractors, tracking materials, and ensuring compliance
                creates chaos. Between client updates, safety documentation, and budget management, critical details
                slip through the cracks.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-6">Construction Management Tools</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Project Management Dashboard */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Project Management Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Track multiple projects, timelines, budgets, and resources in one centralized platform.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Gantt charts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Budget tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Resource allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Progress reporting</span>
                    </li>
                  </ul>
                </div>

                {/* Bid Management System */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Bid Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    Streamline the bidding process with automated takeoffs, cost estimation, and proposal generation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Digital takeoffs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Cost database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Proposal templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Bid comparison</span>
                    </li>
                  </ul>
                </div>

                {/* Subcontractor Coordination */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Subcontractor Coordination</h4>
                  <p className="text-sm text-muted-foreground">
                    Manage subcontractor schedules, payments, and documentation in one system.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Schedule coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Payment tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Document management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance ratings</span>
                    </li>
                  </ul>
                </div>

                {/* Material Ordering & Inventory */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Material Ordering & Inventory</h4>
                  <p className="text-sm text-muted-foreground">
                    Automate material ordering based on project needs and track inventory across job sites.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Auto-ordering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Inventory tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Supplier integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Cost optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Safety Compliance Tracker */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Safety Compliance Tracker</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure OSHA compliance with digital safety checklists, incident reporting, and training tracking.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Safety checklists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Incident reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Training records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Compliance alerts</span>
                    </li>
                  </ul>
                </div>

                {/* Client Communication Portal */}
                <div className="bg-accent/30 border border-border rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Client Communication Portal</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep clients updated with progress photos, milestone updates, and change order approvals.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Progress photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Change orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Client approvals</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/50 border border-border rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Technical Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {["Procore", "Buildertrend", "CoConstruct", "QuickBooks", "Sage"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  OSHA compliance built-in • Integration with accounting and project management software
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Construction Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">See Construction Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Industries Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Beyond Our Core Specializations</h2>
            <p className="text-xl text-muted-foreground">
              We've delivered proven results across multiple high-value industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Telecommunications */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Telecommunications</h3>
              <p className="text-sm text-muted-foreground">
                Scale customer support and service delivery with intelligent automation
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Customer onboarding automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Service issue resolution workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Billing inquiry management</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Octupus.ai Success</p>
                <p className="text-xs text-muted-foreground">
                  Increased monthly revenue from $16K to $25K through automated customer communication
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/portfolio">
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Construction & Services */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <HardHat size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Construction & Services</h3>
              <p className="text-sm text-muted-foreground">
                Streamline project workflows and client communication for service-based businesses
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Project timeline automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Resource scheduling and crew coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Estimate generation and approval workflows</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Typical Results</p>
                <p className="text-xs text-muted-foreground">
                  45% reduction in project communication overhead, 67% faster estimate turnaround
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/contact">
                  Explore Solutions <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Accounting & Finance */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Accounting & Finance</h3>
              <p className="text-sm text-muted-foreground">
                Automate document processing and client reporting for financial professionals
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Invoice processing and categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Client report generation and distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Compliance documentation workflows</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Digital Identity Platform</p>
                <p className="text-xs text-muted-foreground">
                  Achieved 422% ROI through automated financial process optimization
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/portfolio">
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Healthcare/Clinics */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Healthcare/Clinics</h3>
              <p className="text-sm text-muted-foreground">
                Optimize appointments and operational workflows with HIPAA-compliant automation
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Appointment scheduling and confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Patient communication and follow-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Insurance verification workflows</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Wellenpuls Health App</p>
                <p className="text-xs text-muted-foreground">
                  Generated 669% ROI through patient engagement automation
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/portfolio">
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Don't See Your Industry?</h2>
            <p className="text-xl text-muted-foreground">
              We've automated success across 15+ sectors with our proven methodology
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <p className="text-lg text-muted-foreground text-center">
              Every business has unique workflows, but the principles of effective automation remain consistent. Whether
              you're in manufacturing, education, nonprofit, or any other sector, our approach stays the same:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Deep Discovery</h4>
                    <p className="text-sm text-muted-foreground">We analyze your specific workflows and pain points</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Custom Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Build solutions that integrate with your existing systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Gradual Implementation</h4>
                    <p className="text-sm text-muted-foreground">Phase-based rollout ensures smooth adoption</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ongoing Optimization</h4>
                    <p className="text-sm text-muted-foreground">Continuous improvement based on real usage data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">325%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6 weeks</div>
                <div className="text-sm text-muted-foreground">Average Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">Zero</div>
                <div className="text-sm text-muted-foreground">Vendor Lock-in</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50/50</div>
                <div className="text-sm text-muted-foreground">Profit Sharing</div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Custom Industry Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to See What AI Can Do for Your Industry?</h2>
            <p className="text-xl text-muted-foreground">Choose the path that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Schedule Consultation */}
            <div className="bg-card border border-primary rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Schedule Industry-Specific Consultation</h3>
                <p className="text-muted-foreground">
                  30-minute discovery call focused on your industry challenges with custom automation opportunity
                  assessment
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>No-obligation ROI projection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry-specific workflow analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom solution recommendations</span>
                </li>
              </ul>
              <Button size="lg" className="w-full" asChild>
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
            </div>

            {/* Join Community */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Join Our AI Business Community</h3>
                <p className="text-muted-foreground">
                  Weekly newsletter with industry-specific automation insights and access to case studies
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Industry-specific automation insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Implementation guides and templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>First look at new solutions</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/community">Join the Community</Link>
              </Button>
            </div>

            {/* Download Guide */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ArrowRight size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Download Industry Automation Guide</h3>
                <p className="text-muted-foreground">
                  Industry-specific automation checklists and ROI calculation worksheets
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Automation opportunity checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>ROI calculation worksheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Implementation timeline templates</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Download Free Guide</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>No long-term contracts required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>All consultations include custom ROI projections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Average 6-week delivery timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Proven results across 50+ successful projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
