"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronRight } from "lucide-react"

export function MultiStepConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1: Basic Contact
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    // Step 2: Business Context
    industry: "",
    industryOther: "",
    companySize: "",
    revenue: "",
    // Step 3: Current Challenges
    bottleneck: "",
    challenges: [] as string[],
    challengesOther: "",
    timeConsumers: "",
    // Step 4: Automation Experience
    automationExperience: "",
    timeline: "",
    drivingFactors: [] as string[],
    drivingFactorsOther: "",
    // Step 5: Consultation Preferences
    consultationFormat: "video",
    bestTimes: [] as string[],
    // Step 6: Final Details
    additionalInfo: "",
    hearAbout: "",
    referralName: "",
    emailUpdates: true,
    weeklyInsights: false,
    eventNotifications: false,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayValue = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter((v) => v !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }))
  }

  const isStep1Valid = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phone && formData.company
  }

  const isStep2Valid = () => {
    return formData.industry && formData.companySize
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-[#a1a1aa]">We'll be in touch within 24 hours to schedule your strategy session.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#a1a1aa]">Step {currentStep} of 6</span>
          <span className="text-sm text-[#a1a1aa]">{Math.round((currentStep / 6) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-[#262626] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6366f1] transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Basic Contact */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="firstName" className="text-white text-sm mb-1.5 block">
              First Name *
            </Label>
            <Input
              id="firstName"
              required
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => updateFormData("firstName", e.target.value)}
              className="bg-[#0a0a0a] border-[#262626] text-white"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-white text-sm mb-1.5 block">
              Last Name *
            </Label>
            <Input
              id="lastName"
              required
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => updateFormData("lastName", e.target.value)}
              className="bg-[#0a0a0a] border-[#262626] text-white"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-white text-sm mb-1.5 block">
            Business Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="bg-[#0a0a0a] border-[#262626] text-white"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white text-sm mb-1.5 block">
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="bg-[#0a0a0a] border-[#262626] text-white"
          />
          <p className="text-xs text-[#71717a] mt-1">For consultation confirmation only - we won't call for sales</p>
        </div>

        <div>
          <Label htmlFor="company" className="text-white text-sm mb-1.5 block">
            Company Name *
          </Label>
          <Input
            id="company"
            required
            placeholder="Your Company Name"
            value={formData.company}
            onChange={(e) => updateFormData("company", e.target.value)}
            className="bg-[#0a0a0a] border-[#262626] text-white"
          />
        </div>
      </div>

      {/* Step 2: Business Context */}
      {currentStep >= 2 && isStep1Valid() && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="pt-6 border-t border-[#262626]">
            <h4 className="text-lg font-semibold text-white mb-4">Business Context</h4>
          </div>

          <div>
            <Label htmlFor="industry" className="text-white text-sm mb-1.5 block">
              Industry *
            </Label>
            <select
              id="industry"
              required
              value={formData.industry}
              onChange={(e) => updateFormData("industry", e.target.value)}
              className="w-full px-3 py-2 bg-[#0a0a0a] border border-[#262626] text-white rounded-md"
            >
              <option value="">Select your industry</option>
              <option value="legal">Law Firm / Legal Services</option>
              <option value="realestate">Real Estate & Property Management</option>
              <option value="healthcare">Healthcare / Medical Practice</option>
              <option value="accounting">Accounting & Financial Services</option>
              <option value="construction">Construction & Contracting</option>
              <option value="telecom">Telecommunications</option>
              <option value="consulting">Consulting / Professional Services</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail / E-commerce</option>
              <option value="technology">Technology / Software</option>
              <option value="education">Education</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="other">Other</option>
            </select>
          </div>

          {formData.industry === "other" && (
            <div>
              <Label htmlFor="industryOther" className="text-white text-sm mb-1.5 block">
                Please specify your industry
              </Label>
              <Input
                id="industryOther"
                value={formData.industryOther}
                onChange={(e) => updateFormData("industryOther", e.target.value)}
                className="bg-[#0a0a0a] border-[#262626] text-white"
              />
            </div>
          )}

          <div>
            <Label className="text-white text-sm mb-2 block">Company Size *</Label>
            <div className="space-y-2">
              {[
                { value: "1", label: "Just me (1 person)" },
                { value: "2-10", label: "Small team (2-10 employees)" },
                { value: "11-25", label: "Growing business (11-25 employees)" },
                { value: "26-50", label: "Established company (26-50 employees)" },
                { value: "51-100", label: "Large organization (51-100 employees)" },
                { value: "100+", label: "Enterprise (100+ employees)" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="companySize"
                    value={option.value}
                    checked={formData.companySize === option.value}
                    onChange={(e) => updateFormData("companySize", e.target.value)}
                    className="text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="revenue" className="text-white text-sm mb-1.5 block">
              Annual Revenue (Optional)
            </Label>
            <select
              id="revenue"
              value={formData.revenue}
              onChange={(e) => updateFormData("revenue", e.target.value)}
              className="w-full px-3 py-2 bg-[#0a0a0a] border border-[#262626] text-white rounded-md"
            >
              <option value="">Select range</option>
              <option value="prefer-not">Prefer not to say</option>
              <option value="under-250k">Under $250K</option>
              <option value="250k-500k">$250K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-2m">$1M - $2M</option>
              <option value="2m-5m">$2M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="over-10m">Over $10M</option>
            </select>
            <p className="text-xs text-[#71717a] mt-1">Helps us recommend appropriate automation investments</p>
          </div>
        </div>
      )}

      {/* Step 3: Current Challenges */}
      {currentStep >= 3 && isStep2Valid() && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="pt-6 border-t border-[#262626]">
            <h4 className="text-lg font-semibold text-white mb-4">Current Challenges</h4>
          </div>

          <div>
            <Label htmlFor="bottleneck" className="text-white text-sm mb-1.5 block">
              What's your biggest operational bottleneck right now? *
            </Label>
            <Textarea
              id="bottleneck"
              required
              placeholder="Example: We spend 15+ hours weekly on manual client intake, and qualified leads often slip through the cracks during busy periods..."
              value={formData.bottleneck}
              onChange={(e) => updateFormData("bottleneck", e.target.value)}
              maxLength={500}
              rows={4}
              className="bg-[#0a0a0a] border-[#262626] text-white resize-none"
            />
            <p className="text-xs text-[#71717a] mt-1">
              {formData.bottleneck.length}/500 characters - Be specific to help us prepare valuable insights
            </p>
          </div>

          <div>
            <Label className="text-white text-sm mb-2 block">Which challenges sound familiar? (Optional)</Label>
            <div className="space-y-2">
              {[
                "Too much time on repetitive administrative tasks",
                "Leads falling through the cracks",
                "Inconsistent follow-up with prospects/clients",
                "Manual data entry and document processing",
                "Poor communication between team members",
                "Difficulty tracking project/case progress",
                "Client service requests getting lost or delayed",
                "Spending too much time on reporting",
                "Team overwhelmed during busy periods",
                "Other",
              ].map((challenge) => (
                <label key={challenge} className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.challenges.includes(challenge)}
                    onChange={() => toggleArrayValue("challenges", challenge)}
                    className="mt-0.5 text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{challenge}</span>
                </label>
              ))}
            </div>
          </div>

          {formData.challenges.includes("Other") && (
            <div>
              <Label htmlFor="challengesOther" className="text-white text-sm mb-1.5 block">
                Please specify other challenges
              </Label>
              <Input
                id="challengesOther"
                value={formData.challengesOther}
                onChange={(e) => updateFormData("challengesOther", e.target.value)}
                className="bg-[#0a0a0a] border-[#262626] text-white"
              />
            </div>
          )}
        </div>
      )}

      {/* Step 4: Automation Experience */}
      {currentStep >= 4 && formData.bottleneck && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="pt-6 border-t border-[#262626]">
            <h4 className="text-lg font-semibold text-white mb-4">Automation Experience & Timeline</h4>
          </div>

          <div>
            <Label className="text-white text-sm mb-2 block">Have you tried automation tools before? *</Label>
            <div className="space-y-2">
              {[
                "No, this would be our first automation project",
                "Yes, but they didn't work well for our business",
                "Yes, we have some tools but want to do more",
                "We've had mixed results with automation",
              ].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="automationExperience"
                    value={option}
                    checked={formData.automationExperience === option}
                    onChange={(e) => updateFormData("automationExperience", e.target.value)}
                    className="text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-white text-sm mb-2 block">When are you hoping to implement a solution? *</Label>
            <div className="space-y-2">
              {[
                "As soon as possible (next 30 days)",
                "Within the next quarter (2-3 months)",
                "Planning for next year (6+ months)",
                "Just exploring options (no timeline yet)",
              ].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    checked={formData.timeline === option}
                    onChange={(e) => updateFormData("timeline", e.target.value)}
                    className="text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Consultation Preferences */}
      {currentStep >= 5 && formData.automationExperience && formData.timeline && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="pt-6 border-t border-[#262626]">
            <h4 className="text-lg font-semibold text-white mb-4">Consultation Preferences</h4>
          </div>

          <div>
            <Label className="text-white text-sm mb-2 block">Preferred Consultation Format *</Label>
            <div className="space-y-2">
              {[
                { value: "video", label: "📹 Video call (Zoom/Teams) - Recommended" },
                { value: "phone", label: "📞 Phone call" },
                { value: "inperson", label: "🏢 In-person meeting (if local)" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="consultationFormat"
                    value={option.value}
                    checked={formData.consultationFormat === option.value}
                    onChange={(e) => updateFormData("consultationFormat", e.target.value)}
                    className="text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-white text-sm mb-2 block">Best Times for You (Optional)</Label>
            <div className="space-y-2">
              {[
                "Early morning (8-10 AM)",
                "Mid-morning (10 AM-12 PM)",
                "Early afternoon (12-2 PM)",
                "Late afternoon (2-5 PM)",
                "Evening (5-7 PM)",
                "Flexible - show me all available times",
              ].map((time) => (
                <label key={time} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.bestTimes.includes(time)}
                    onChange={() => toggleArrayValue("bestTimes", time)}
                    className="text-[#6366f1]"
                  />
                  <span className="text-sm text-[#a1a1aa]">{time}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 6: Final Details */}
      {currentStep >= 6 && formData.consultationFormat && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="pt-6 border-t border-[#262626]">
            <h4 className="text-lg font-semibold text-white mb-4">Final Details</h4>
          </div>

          <div>
            <Label htmlFor="additionalInfo" className="text-white text-sm mb-1.5 block">
              Anything else you'd like us to know? (Optional)
            </Label>
            <Textarea
              id="additionalInfo"
              placeholder="Special requirements, specific questions, or context that would help us prepare..."
              value={formData.additionalInfo}
              onChange={(e) => updateFormData("additionalInfo", e.target.value)}
              maxLength={200}
              rows={3}
              className="bg-[#0a0a0a] border-[#262626] text-white resize-none"
            />
            <p className="text-xs text-[#71717a] mt-1">{formData.additionalInfo.length}/200 characters</p>
          </div>

          <div>
            <Label htmlFor="hearAbout" className="text-white text-sm mb-1.5 block">
              How did you hear about us? (Optional)
            </Label>
            <select
              id="hearAbout"
              value={formData.hearAbout}
              onChange={(e) => updateFormData("hearAbout", e.target.value)}
              className="w-full px-3 py-2 bg-[#0a0a0a] border border-[#262626] text-white rounded-md"
            >
              <option value="">Select source</option>
              <option value="google">Google search</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral</option>
              <option value="publication">Industry publication/blog</option>
              <option value="social">Social media</option>
              <option value="email">Email newsletter</option>
              <option value="event">Event/conference</option>
              <option value="other">Other</option>
            </select>
          </div>

          {formData.hearAbout === "referral" && (
            <div>
              <Label htmlFor="referralName" className="text-white text-sm mb-1.5 block">
                Who referred you?
              </Label>
              <Input
                id="referralName"
                value={formData.referralName}
                onChange={(e) => updateFormData("referralName", e.target.value)}
                className="bg-[#0a0a0a] border-[#262626] text-white"
              />
            </div>
          )}

          <div className="space-y-3 pt-4">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.emailUpdates}
                onChange={(e) => updateFormData("emailUpdates", e.target.checked)}
                className="mt-0.5 text-[#6366f1]"
                required
              />
              <span className="text-sm text-[#a1a1aa]">
                I agree to receive consultation confirmation and follow-up emails *
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.weeklyInsights}
                onChange={(e) => updateFormData("weeklyInsights", e.target.checked)}
                className="mt-0.5 text-[#6366f1]"
              />
              <span className="text-sm text-[#a1a1aa]">Send me weekly AI automation insights and case studies</span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.eventNotifications}
                onChange={(e) => updateFormData("eventNotifications", e.target.checked)}
                className="mt-0.5 text-[#6366f1]"
              />
              <span className="text-sm text-[#a1a1aa]">Notify me about relevant webinars and events</span>
            </label>

            <p className="text-xs text-[#71717a]">
              We never share your information with third parties. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            className="border-[#262626] text-white hover:bg-[#262626]"
          >
            Back
          </Button>
        )}

        <div className="ml-auto">
          {currentStep < 6 ? (
            <Button
              type="button"
              onClick={() => setCurrentStep((prev) => Math.min(6, prev + 1))}
              disabled={
                (currentStep === 1 && !isStep1Valid()) ||
                (currentStep === 2 && !isStep2Valid()) ||
                (currentStep === 3 && !formData.bottleneck) ||
                (currentStep === 4 && (!formData.automationExperience || !formData.timeline)) ||
                (currentStep === 5 && !formData.consultationFormat)
              }
              className="bg-[#6366f1] hover:bg-[#5558e3] text-white"
            >
              Continue <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting || !formData.emailUpdates}
              className="bg-[#6366f1] hover:bg-[#5558e3] text-white font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Schedule My Free Consultation"}
            </Button>
          )}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center justify-between pt-6 border-t border-[#262626]">
        <div className="text-center flex-1">
          <div className="text-white font-semibold text-sm">200+</div>
          <div className="text-[#71717a] text-xs">Projects</div>
        </div>
        <div className="text-center flex-1 border-l border-[#262626]">
          <div className="text-white font-semibold text-sm">94%</div>
          <div className="text-[#71717a] text-xs">Satisfaction</div>
        </div>
        <div className="text-center flex-1 border-l border-[#262626]">
          <div className="text-white font-semibold text-sm">24h</div>
          <div className="text-[#71717a] text-xs">Response time</div>
        </div>
      </div>
    </form>
  )
}
