"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Search, TrendingUp, Map, CheckCircle2, Clock, Target, Calendar, ChevronRight, ChevronLeft } from "lucide-react"

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    companySize: "",
    revenue: "",
    biggestChallenge: "",
    challenges: [] as string[],
    timeWasters: "",
    automationExperience: "",
    timeline: "",
    motivations: [] as string[],
    budget: "",
    meetingFormat: "video",
    availability: [] as string[],
    specificNeeds: "",
    referralSource: "",
    referralName: "",
    emailUpdates: false,
    webinarInvites: false,
    industryReports: false,
  })

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Get Your Custom AI Automation Strategy
            <span className="block text-primary mt-2">(Free 30-Minute Consultation)</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance">
            In one focused conversation, we'll analyze your biggest operational bottlenecks, calculate your potential
            ROI, and create a phase-by-phase automation roadmap - with zero obligation or sales pressure.
          </p>

          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Workflow Bottleneck Assessment</h3>
              <p className="text-muted-foreground mb-4">
                We'll identify exactly where manual processes are costing you time and money
              </p>
              <p className="text-sm text-primary font-medium">
                Walk away knowing your highest-impact automation opportunities
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Custom ROI Calculation</h3>
              <p className="text-muted-foreground mb-4">
                See realistic cost savings and revenue potential based on your actual business metrics
              </p>
              <p className="text-sm text-primary font-medium">Get specific numbers, not vague promises</p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Map className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Phase-by-Phase Roadmap</h3>
              <p className="text-muted-foreground mb-4">
                Receive a prioritized timeline with quick wins and long-term optimizations
              </p>
              <p className="text-sm text-primary font-medium">
                Leave with a concrete plan you can start executing immediately
              </p>
            </Card>
          </div>

          {/* Social Proof Banner */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Trusted by 50+ SMBs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>325% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>6-Week Average Delivery</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No sales pitch - genuine strategy session</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Usually identifies $20K+ in annual savings opportunities</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Cancel or reschedule anytime up to 2 hours before</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Preview Section */}
      <section className="py-16 px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What to Expect in Your Strategy Session
          </h2>

          <div className="space-y-8">
            {[
              {
                time: "Minutes 1-5",
                title: "Understanding Your Business",
                items: [
                  "Current workflows and pain points",
                  "Team structure and responsibilities",
                  "Growth goals and challenges",
                  "Industry-specific requirements",
                ],
              },
              {
                time: "Minutes 6-15",
                title: "Opportunity Identification",
                items: [
                  "Process bottleneck analysis",
                  "Automation potential assessment",
                  "Integration possibilities review",
                  "Quick win identification",
                ],
              },
              {
                time: "Minutes 16-25",
                title: "Custom ROI Projection",
                items: [
                  "Time savings calculations",
                  "Cost reduction opportunities",
                  "Revenue improvement potential",
                  "Investment range discussion",
                ],
              },
              {
                time: "Minutes 26-30",
                title: "Next Steps & Planning",
                items: [
                  "Implementation timeline options",
                  "Priority recommendations",
                  "Resource requirements",
                  "Questions and clarification",
                ],
              },
            ].map((phase, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary">{phase.time}</span>
                      <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg text-muted-foreground mt-8 italic">
            By the end of 30 minutes, you'll have a clear picture of exactly how AI automation can transform your
            business operations and what it would take to get there.
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What Business Owners Say About Their Strategy Sessions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The consultation alone was worth thousands. They identified a workflow problem we didn't even realize was costing us $30K annually. Even if we never work together, that insight paid for itself.",
                name: "Jennifer Walsh",
                title: "Practice Administrator",
                company: "Walsh Medical Group (14 employees)",
                outcome: "$30K annual savings opportunity identified",
              },
              {
                quote:
                  "Other consultants gave us pie-in-the-sky promises. BrandingBeez showed us realistic numbers, honest timelines, and specific solutions. When we did move forward, they hit every projection.",
                name: "Marcus Rodriguez",
                title: "Operations Manager",
                company: "Coastal Property Management (8 employees)",
                outcome: "Accurate ROI projections led to 422% return",
              },
              {
                quote:
                  "I expected a sales pitch. Instead, I got a genuine business consultation. They even recommended a simple solution we could implement ourselves before considering their services.",
                name: "Sarah Chen",
                title: "Managing Partner",
                company: "Chen & Associates Law Firm (6 attorneys)",
                outcome: "Immediate implementation guidance",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.company}</p>
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-primary font-medium">{testimonial.outcome}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm text-muted-foreground">Strategy sessions completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Rate as 'extremely valuable'</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">$31K</p>
              <p className="text-sm text-muted-foreground">Average savings identified</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">Zero</p>
              <p className="text-sm text-muted-foreground">Sales pressure guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schedule Your Free AI Strategy Session
            </h2>
            <p className="text-lg text-muted-foreground">
              Help us prepare the most valuable consultation possible by sharing some context about your business
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      We'll send your consultation confirmation and custom ROI analysis here
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      required
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      For consultation confirmation only - we won't call you for sales
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </Card>
            )}

            {/* Step 2: Business Context */}
            {currentStep === 2 && (
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Business Overview</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="industry">What industry best describes your business? *</Label>
                    <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="law">Law Firm / Legal Services</SelectItem>
                        <SelectItem value="realestate">Real Estate & Property Management</SelectItem>
                        <SelectItem value="healthcare">Healthcare / Medical Practice / Clinic</SelectItem>
                        <SelectItem value="accounting">Accounting & Financial Services</SelectItem>
                        <SelectItem value="construction">Construction & Contracting Services</SelectItem>
                        <SelectItem value="telecom">Telecommunications / Technology Services</SelectItem>
                        <SelectItem value="consulting">Consulting / Professional Services</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing & Distribution</SelectItem>
                        <SelectItem value="retail">Retail / E-commerce</SelectItem>
                        <SelectItem value="education">Education / Training</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                        <SelectItem value="hospitality">Restaurant / Hospitality</SelectItem>
                        <SelectItem value="insurance">Insurance / Financial Planning</SelectItem>
                        <SelectItem value="marketing">Marketing / Advertising Agency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>How many people work at your company? *</Label>
                    <RadioGroup
                      value={formData.companySize}
                      onValueChange={(value) => updateFormData("companySize", value)}
                      className="mt-3 space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="solo" id="solo" />
                        <Label htmlFor="solo" className="font-normal cursor-pointer">
                          Just me (solo entrepreneur)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="small" />
                        <Label htmlFor="small" className="font-normal cursor-pointer">
                          Small team (2-10 employees)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="growing" id="growing" />
                        <Label htmlFor="growing" className="font-normal cursor-pointer">
                          Growing business (11-25 employees)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="established" id="established" />
                        <Label htmlFor="established" className="font-normal cursor-pointer">
                          Established company (26-50 employees)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large" className="font-normal cursor-pointer">
                          Large organization (51-100 employees)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="enterprise" id="enterprise" />
                        <Label htmlFor="enterprise" className="font-normal cursor-pointer">
                          Enterprise (100+ employees)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="revenue">What's your approximate annual revenue? (Optional)</Label>
                    <Select value={formData.revenue} onValueChange={(value) => updateFormData("revenue", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prefer-not">Prefer not to share</SelectItem>
                        <SelectItem value="under-100k">Just getting started (under $100K)</SelectItem>
                        <SelectItem value="100k-500k">Growing steadily ($100K - $500K)</SelectItem>
                        <SelectItem value="500k-1m">Established business ($500K - $1M)</SelectItem>
                        <SelectItem value="1m-2m">Strong performer ($1M - $2M)</SelectItem>
                        <SelectItem value="2m-5m">High growth ($2M - $5M)</SelectItem>
                        <SelectItem value="5m-10m">Market leader ($5M - $10M)</SelectItem>
                        <SelectItem value="10m-plus">Large enterprise ($10M+)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-2">
                      This helps us recommend automation investments that make sense for your business size
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 3: Current Challenges & Goals */}
            {currentStep === 3 && (
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Current Situation</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="biggestChallenge">
                      What's the biggest operational challenge your business faces right now? *
                    </Label>
                    <Textarea
                      id="biggestChallenge"
                      value={formData.biggestChallenge}
                      onChange={(e) => updateFormData("biggestChallenge", e.target.value)}
                      required
                      rows={5}
                      maxLength={750}
                      className="mt-2"
                      placeholder="Example: We're spending 20+ hours weekly on manual client intake and follow-up. During busy periods, qualified leads slip through the cracks, and our team is overwhelmed with administrative tasks instead of focusing on revenue-generating activities..."
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      {formData.biggestChallenge.length}/750 characters - Be as specific as possible
                    </p>
                  </div>

                  <div>
                    <Label>Which of these challenges sound familiar to your business? (Optional)</Label>
                    <div className="mt-3 space-y-3">
                      {[
                        { id: "time", label: "Too much time spent on repetitive administrative tasks" },
                        { id: "leads", label: "Leads and prospects falling through the cracks" },
                        { id: "followup", label: "Inconsistent follow-up with clients and prospects" },
                        { id: "dataentry", label: "Manual data entry and document processing" },
                        { id: "communication", label: "Poor communication between team members" },
                        { id: "tracking", label: "Difficulty tracking project, case, or deal progress" },
                        { id: "requests", label: "Client service requests getting lost or delayed" },
                        { id: "reporting", label: "Spending too much time creating reports and updates" },
                        { id: "overwhelmed", label: "Team overwhelmed during busy periods" },
                        { id: "scaling", label: "Can't scale without hiring more people" },
                        { id: "repetitive", label: "Doing the same tasks over and over manually" },
                        { id: "scattered", label: "Information scattered across multiple systems" },
                      ].map((challenge) => (
                        <div key={challenge.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={challenge.id}
                            checked={formData.challenges.includes(challenge.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                updateFormData("challenges", [...formData.challenges, challenge.id])
                              } else {
                                updateFormData(
                                  "challenges",
                                  formData.challenges.filter((c) => c !== challenge.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={challenge.id} className="font-normal cursor-pointer">
                            {challenge.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeWasters">What's currently eating up most of your team's time? (Optional)</Label>
                    <Textarea
                      id="timeWasters"
                      value={formData.timeWasters}
                      onChange={(e) => updateFormData("timeWasters", e.target.value)}
                      rows={3}
                      maxLength={400}
                      className="mt-2"
                      placeholder="e.g., Data entry, client communication, scheduling, document creation, manual reporting, invoice processing..."
                    />
                    <p className="text-sm text-muted-foreground mt-2">{formData.timeWasters.length}/400 characters</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 4: Automation Experience & Timeline */}
            {currentStep === 4 && (
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Project Context</h3>
                <div className="space-y-6">
                  <div>
                    <Label>Have you tried business automation tools before? *</Label>
                    <RadioGroup
                      value={formData.automationExperience}
                      onValueChange={(value) => updateFormData("automationExperience", value)}
                      className="mt-3 space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="font-normal cursor-pointer">
                          No, this would be our first automation project
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="didnt-work" id="didnt-work" />
                        <Label htmlFor="didnt-work" className="font-normal cursor-pointer">
                          Yes, but the tools didn't work well for our specific needs
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="want-more" id="want-more" />
                        <Label htmlFor="want-more" className="font-normal cursor-pointer">
                          Yes, we have some basic automation but want to do much more
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mixed" id="mixed" />
                        <Label htmlFor="mixed" className="font-normal cursor-pointer">
                          We've had mixed results with previous automation attempts
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gaps" id="gaps" />
                        <Label htmlFor="gaps" className="font-normal cursor-pointer">
                          We have good automation in some areas but gaps in others
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>When are you hoping to implement an automation solution? *</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => updateFormData("timeline", value)}
                      className="mt-3 space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap" className="font-normal cursor-pointer">
                          <span className="flex items-center gap-2">
                            ASAP - we need help now (next 30 days)
                            <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="soon" id="soon" />
                        <Label htmlFor="soon" className="font-normal cursor-pointer">
                          <span className="flex items-center gap-2">
                            Soon - planning to get started (next 2-3 months)
                            <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="future" id="future" />
                        <Label htmlFor="future" className="font-normal cursor-pointer">
                          <span className="flex items-center gap-2">
                            Future planning - not urgent (next 6+ months)
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exploring" id="exploring" />
                        <Label htmlFor="exploring" className="font-normal cursor-pointer">
                          <span className="flex items-center gap-2">
                            Just exploring options - no specific timeline yet
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>What's driving this automation exploration right now? (Optional)</Label>
                    <div className="mt-3 space-y-3">
                      {[
                        { id: "growing", label: "Business is growing and current processes can't scale" },
                        { id: "burnout", label: "Team is overwhelmed and at risk of burnout" },
                        { id: "competitors", label: "Competitors seem more efficient and responsive" },
                        { id: "lost-leads", label: "Lost important leads or clients due to process failures" },
                        { id: "costs", label: "Want to reduce operational costs and improve margins" },
                        { id: "prep-growth", label: "Preparing for significant business growth" },
                        { id: "mandate", label: "Leadership mandate to improve efficiency" },
                        { id: "visibility", label: "Need better visibility into business operations" },
                        { id: "tired", label: "Tired of doing the same manual tasks repeatedly" },
                        { id: "insights", label: "Want data-driven insights for better decisions" },
                      ].map((motivation) => (
                        <div key={motivation.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={motivation.id}
                            checked={formData.motivations.includes(motivation.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                updateFormData("motivations", [...formData.motivations, motivation.id])
                              } else {
                                updateFormData(
                                  "motivations",
                                  formData.motivations.filter((m) => m !== motivation.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={motivation.id} className="font-normal cursor-pointer">
                            {motivation.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">What's your estimated budget range for automation? (Optional)</Label>
                    <Select value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="help">Need help determining appropriate budget</SelectItem>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20k-35k">$20,000 - $35,000</SelectItem>
                        <SelectItem value="35k-50k">$35,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+ (enterprise solution)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-2">
                      No wrong answer - this helps us recommend solutions that fit your investment comfort zone
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Step 5: Consultation Scheduling */}
            {currentStep === 5 && (
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Schedule Your Session</h3>
                <div className="space-y-6">
                  <div>
                    <Label>What's the best way to conduct your consultation? *</Label>
                    <RadioGroup
                      value={formData.meetingFormat}
                      onValueChange={(value) => updateFormData("meetingFormat", value)}
                      className="mt-3 space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="video" />
                        <Label htmlFor="video" className="font-normal cursor-pointer">
                          📹 Video call (Zoom/Teams) - Recommended for screen sharing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="font-normal cursor-pointer">
                          📞 Phone call - Great for busy schedules
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inperson" id="inperson" />
                        <Label htmlFor="inperson" className="font-normal cursor-pointer">
                          🏢 In-person meeting - Available if you're local
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>What days and times work best for you?</Label>
                    <div className="mt-3 space-y-3">
                      {[
                        { id: "morning", label: "🌅 Weekday mornings (9:00 AM - 12:00 PM)" },
                        { id: "afternoon", label: "☀️ Weekday afternoons (12:00 PM - 5:00 PM)" },
                        { id: "evening", label: "🌆 Weekday evenings (5:00 PM - 7:00 PM)" },
                        { id: "weekend", label: "🏖️ Weekend availability (Saturday mornings)" },
                        { id: "flexible", label: "📅 I'm flexible - show me all available times" },
                      ].map((slot) => (
                        <div key={slot.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={slot.id}
                            checked={formData.availability.includes(slot.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                updateFormData("availability", [...formData.availability, slot.id])
                              } else {
                                updateFormData(
                                  "availability",
                                  formData.availability.filter((a) => a !== slot.id),
                                )
                              }
                            }}
                          />
                          <Label htmlFor={slot.id} className="font-normal cursor-pointer">
                            {slot.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Widget Placeholder */}
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Calendar booking widget will be integrated here</p>
                    <p className="text-sm text-muted-foreground">(Calendly, Cal.com, or similar scheduling system)</p>
                  </div>

                  <div>
                    <Label htmlFor="specificNeeds">
                      Is there anything specific you'd like us to address in your consultation? (Optional)
                    </Label>
                    <Textarea
                      id="specificNeeds"
                      value={formData.specificNeeds}
                      onChange={(e) => updateFormData("specificNeeds", e.target.value)}
                      rows={4}
                      maxLength={300}
                      className="mt-2"
                      placeholder="Specific automation ideas, integration requirements, compliance needs, or questions you'd like us to prepare for..."
                    />
                    <p className="text-sm text-muted-foreground mt-2">{formData.specificNeeds.length}/300 characters</p>
                  </div>

                  <div>
                    <Label htmlFor="referralSource">How did you hear about BrandingBeez? (Optional)</Label>
                    <Select
                      value={formData.referralSource}
                      onValueChange={(value) => updateFormData("referralSource", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google search</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="blog">Industry blog or publication</SelectItem>
                        <SelectItem value="social">Social media</SelectItem>
                        <SelectItem value="email">Email newsletter</SelectItem>
                        <SelectItem value="webinar">Webinar or event</SelectItem>
                        <SelectItem value="podcast">Podcast or interview</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.referralSource === "referral" && (
                      <Input
                        placeholder="Who referred you?"
                        value={formData.referralName}
                        onChange={(e) => updateFormData("referralName", e.target.value)}
                        className="mt-3"
                      />
                    )}
                  </div>

                  {/* Communication Preferences */}
                  <div className="border-t border-border pt-6">
                    <Label className="text-base mb-4 block">Communication Preferences</Label>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="confirmation" checked disabled />
                        <Label htmlFor="confirmation" className="font-normal cursor-not-allowed opacity-70">
                          ✅ Send consultation confirmation and follow-up materials (Required)
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="emailUpdates"
                          checked={formData.emailUpdates}
                          onCheckedChange={(checked) => updateFormData("emailUpdates", checked)}
                        />
                        <Label htmlFor="emailUpdates" className="font-normal cursor-pointer">
                          Weekly AI automation insights and case studies - Get practical tips and real results from
                          other businesses
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="webinarInvites"
                          checked={formData.webinarInvites}
                          onCheckedChange={(checked) => updateFormData("webinarInvites", checked)}
                        />
                        <Label htmlFor="webinarInvites" className="font-normal cursor-pointer">
                          Invitations to automation webinars and workshops - Learn about new automation opportunities
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="industryReports"
                          checked={formData.industryReports}
                          onCheckedChange={(checked) => updateFormData("industryReports", checked)}
                        />
                        <Label htmlFor="industryReports" className="font-normal cursor-pointer">
                          Quarterly industry automation reports - See trends and benchmarks for your industry
                        </Label>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 flex items-start gap-2">
                      <span>🔒</span>
                      <span>
                        Your information is never shared with third parties. Unsubscribe from marketing emails anytime.
                        Consultation data is used solely to provide you value.
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
              )}
              {currentStep < totalSteps ? (
                <Button type="button" onClick={handleNext} className="ml-auto flex items-center gap-2">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" className="ml-auto flex items-center gap-2">
                  Schedule My Free Strategy Session
                  <Calendar className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Secondary Options */}
            {currentStep === totalSteps && (
              <div className="text-center pt-6 space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Need to think about it?</strong> No problem! We'll email you a summary to review.
                </p>
                <p>
                  <strong>Have questions first?</strong> Email us at{" "}
                  <a href="mailto:hello@brandingbeez.io" className="text-primary hover:underline">
                    hello@brandingbeez.io
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
