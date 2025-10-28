"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  teamSize: "",
  currentSystems: "",
  dataSources: "",
  aiExperience: [] as string[],
  topGoals: "",
  successMetrics: "",
  timeline: "",
  budgetRange: "",
  complianceNeeds: "",
  notes: "",
}

const experienceOptions = [
  "No active AI projects yet",
  "Using AI in limited pilot",
  "AI embedded in a few departments",
  "Company-wide AI adoption",
]

export function AiReadinessForm() {
  const [formValues, setFormValues] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: keyof typeof initialState, value: string | string[]) => {
    setFormValues((previous) => ({ ...previous, [field]: value }))
  }

  const toggleExperience = (value: string) => {
    setFormValues((previous) => ({
      ...previous,
      aiExperience: previous.aiExperience.includes(value)
        ? previous.aiExperience.filter((item) => item !== value)
        : [...previous.aiExperience, value],
    }))
  }

  const resetForm = () => {
    setFormValues(initialState)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/ai-readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formValues,
          aiExperience: formValues.aiExperience.length > 0 ? formValues.aiExperience : ["No active AI projects yet"],
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Unable to submit your assessment right now.")
      }

      setIsSubmitted(true)
      resetForm()
    } catch (submissionError) {
      if (submissionError instanceof Error) {
        setError(submissionError.message)
      } else {
        setError("Something went wrong. Please try again in a moment.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold">Assessment received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our strategists will map your current capabilities and share a readiness report within two business days.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-primary hover:text-primary/80"
        >
          Complete another assessment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="readiness-first-name">First name *</Label>
          <Input
            id="readiness-first-name"
            required
            value={formValues.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            placeholder="Jane"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="readiness-last-name">Last name *</Label>
          <Input
            id="readiness-last-name"
            required
            value={formValues.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="readiness-email">Work email *</Label>
          <Input
            id="readiness-email"
            type="email"
            required
            value={formValues.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="readiness-company">Company *</Label>
          <Input
            id="readiness-company"
            required
            value={formValues.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="BrandingBeez"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="readiness-role">Your role *</Label>
          <Input
            id="readiness-role"
            required
            value={formValues.role}
            onChange={(event) => updateField("role", event.target.value)}
            placeholder="COO, Managing Partner, etc."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="readiness-team-size">Team size *</Label>
          <Input
            id="readiness-team-size"
            required
            value={formValues.teamSize}
            onChange={(event) => updateField("teamSize", event.target.value)}
            placeholder="25"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-systems">Core systems currently in use *</Label>
        <Textarea
          id="readiness-systems"
          required
          value={formValues.currentSystems}
          onChange={(event) => updateField("currentSystems", event.target.value)}
          placeholder="Property management platform, CRM, ERP, spreadsheets, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-data">Primary data sources *</Label>
        <Textarea
          id="readiness-data"
          required
          value={formValues.dataSources}
          onChange={(event) => updateField("dataSources", event.target.value)}
          placeholder="Leasing data, financial systems, support tickets, compliance records, etc."
        />
      </div>

      <div className="space-y-3">
        <Label>Current AI exposure *</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {experienceOptions.map((option) => {
            const isChecked = formValues.aiExperience.includes(option)
            return (
              <label key={option} className="flex items-start gap-3 rounded-lg border border-border p-3">
                <Checkbox checked={isChecked} onCheckedChange={() => toggleExperience(option)} />
                <span className="text-sm text-muted-foreground">{option}</span>
              </label>
            )
          })}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-goals">Top automation goals *</Label>
        <Textarea
          id="readiness-goals"
          required
          value={formValues.topGoals}
          onChange={(event) => updateField("topGoals", event.target.value)}
          placeholder="Reduce manual review time, improve client onboarding, eliminate data silos, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-metrics">How will you measure success? *</Label>
        <Textarea
          id="readiness-metrics"
          required
          value={formValues.successMetrics}
          onChange={(event) => updateField("successMetrics", event.target.value)}
          placeholder="Hours saved, reduction in errors, faster response times, revenue targets, etc."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="readiness-timeline">Desired timeline *</Label>
          <Input
            id="readiness-timeline"
            required
            value={formValues.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            placeholder="e.g. Kickoff within 30 days"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="readiness-budget">Budget range *</Label>
          <Input
            id="readiness-budget"
            required
            value={formValues.budgetRange}
            onChange={(event) => updateField("budgetRange", event.target.value)}
            placeholder="$15K-$30K"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-compliance">Compliance or security requirements (optional)</Label>
        <Textarea
          id="readiness-compliance"
          value={formValues.complianceNeeds}
          onChange={(event) => updateField("complianceNeeds", event.target.value)}
          placeholder="SOC 2, HIPAA, regional requirements, internal policies, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="readiness-notes">Anything else we should know? (optional)</Label>
        <Textarea
          id="readiness-notes"
          value={formValues.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Key stakeholders, upcoming initiatives, blockers, etc."
        />
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Send My AI Readiness Assessment"}
      </Button>
    </form>
  )
}
