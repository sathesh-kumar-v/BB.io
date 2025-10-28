"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectFocus: "",
  goals: "",
}

export function HeroContactForm() {
  const [formValues, setFormValues] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: keyof typeof initialState, value: string) => {
    setFormValues((previous) => ({ ...previous, [field]: value }))
  }

  const resetForm = () => {
    setFormValues(initialState)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/hero-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formValues,
          projectFocus: formValues.projectFocus || "Not specified",
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || "Unable to submit your details right now.")
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
      <div className="rounded-2xl border border-[#262626] bg-[#0d0d0d] p-6 text-left">
        <h4 className="text-lg font-semibold text-white">You're on the list!</h4>
        <p className="mt-2 text-sm text-[#a1a1aa]">
          We received your request. A strategist will review your goals and reach out within one business day with the
          next steps.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-[#6366f1] hover:text-[#818cf8]"
        >
          Submit another project
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="hero-name" className="mb-2 block text-sm text-white">
            Name
          </Label>
          <Input
            id="hero-name"
            required
            value={formValues.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="border-[#262626] bg-[#050505] text-white"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <Label htmlFor="hero-email" className="mb-2 block text-sm text-white">
            Work email
          </Label>
          <Input
            id="hero-email"
            type="email"
            required
            value={formValues.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="border-[#262626] bg-[#050505] text-white"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="hero-company" className="mb-2 block text-sm text-white">
            Company
          </Label>
          <Input
            id="hero-company"
            required
            value={formValues.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="border-[#262626] bg-[#050505] text-white"
            placeholder="BrandingBeez"
          />
        </div>
        <div>
          <Label htmlFor="hero-phone" className="mb-2 block text-sm text-white">
            Phone (optional)
          </Label>
          <Input
            id="hero-phone"
            value={formValues.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="border-[#262626] bg-[#050505] text-white"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="hero-project" className="mb-2 block text-sm text-white">
          What do you want to automate first?
        </Label>
        <Input
          id="hero-project"
          value={formValues.projectFocus}
          onChange={(event) => updateField("projectFocus", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="e.g. Lease processing, client intake, customer support"
        />
      </div>

      <div>
        <Label htmlFor="hero-goals" className="mb-2 block text-sm text-white">
          Give us a sentence on your goals (optional)
        </Label>
        <Textarea
          id="hero-goals"
          value={formValues.goals}
          onChange={(event) => updateField("goals", event.target.value)}
          className="min-h-[96px] border-[#262626] bg-[#050505] text-white"
          placeholder="Cut manual paperwork by 50%, improve response times, etc."
        />
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-white">
        {isSubmitting ? "Submitting..." : "Get My AI Strategy"}
      </Button>
    </form>
  )
}
