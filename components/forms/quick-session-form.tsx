"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  biggestChallenge: "",
  meetingFormat: "video" as "video" | "phone",
  preferredTime: "",
  notes: "",
}

export function QuickSessionForm() {
  const [formValues, setFormValues] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: keyof typeof initialState, value: string) => {
    setFormValues((previous) => ({ ...previous, [field]: value }))
  }

  const resetForm = () => setFormValues(initialState)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quick-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Unable to submit your session request right now.")
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
        <h3 className="text-lg font-semibold">Session request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll reach out shortly with available times that match your preferences.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-primary hover:text-primary/80"
        >
          Book another session
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="session-first-name">First name *</Label>
          <Input
            id="session-first-name"
            required
            value={formValues.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            placeholder="Jane"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="session-last-name">Last name *</Label>
          <Input
            id="session-last-name"
            required
            value={formValues.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="session-email">Work email *</Label>
          <Input
            id="session-email"
            type="email"
            required
            value={formValues.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="session-phone">Phone *</Label>
          <Input
            id="session-phone"
            required
            value={formValues.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="session-company">Company *</Label>
          <Input
            id="session-company"
            required
            value={formValues.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="BrandingBeez"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="session-industry">Industry *</Label>
          <Input
            id="session-industry"
            required
            value={formValues.industry}
            onChange={(event) => updateField("industry", event.target.value)}
            placeholder="Property management, legal, etc."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="session-challenge">Biggest challenge right now *</Label>
        <Textarea
          id="session-challenge"
          required
          value={formValues.biggestChallenge}
          onChange={(event) => updateField("biggestChallenge", event.target.value)}
          placeholder="Where are manual processes slowing things down?"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Preferred meeting format *</Label>
          <Select value={formValues.meetingFormat} onValueChange={(value) => updateField("meetingFormat", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video call (Zoom/Teams)</SelectItem>
              <SelectItem value="phone">Phone call</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="session-time">Preferred time window *</Label>
          <Input
            id="session-time"
            required
            value={formValues.preferredTime}
            onChange={(event) => updateField("preferredTime", event.target.value)}
            placeholder="Weekdays 1-3 PM ET"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="session-notes">Anything else? (optional)</Label>
        <Textarea
          id="session-notes"
          value={formValues.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          placeholder="Stakeholders who should join, tools to review, deadlines, etc."
        />
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Request my 1:1 session"}
      </Button>
    </form>
  )
}
