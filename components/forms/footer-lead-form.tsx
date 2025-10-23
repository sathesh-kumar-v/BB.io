"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialState = {
  name: "",
  email: "",
  companyName: "",
  industry: "",
  preferredCallTime: "",
}

export function FooterLeadForm() {
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
      const response = await fetch("/api/footer-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error || "Unable to submit your details right now.")
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
      <div className="rounded-xl border border-[#262626] bg-[#0d0d0d] p-6 text-left">
        <h4 className="text-lg font-semibold text-white">Thank you!</h4>
        <p className="mt-2 text-sm text-[#a1a1aa]">
          We received your request and will reach out shortly to schedule a call at your preferred time.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-medium text-[#6366f1] hover:text-[#818cf8]"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[#262626] bg-[#0d0d0d] p-6">
      <div>
        <Label htmlFor="footer-name" className="mb-2 block text-sm text-white">
          Name
        </Label>
        <Input
          id="footer-name"
          required
          value={formValues.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="footer-email" className="mb-2 block text-sm text-white">
          Email
        </Label>
        <Input
          id="footer-email"
          type="email"
          required
          value={formValues.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <Label htmlFor="footer-company" className="mb-2 block text-sm text-white">
          Company Name
        </Label>
        <Input
          id="footer-company"
          required
          value={formValues.companyName}
          onChange={(event) => updateField("companyName", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="BrandingBeez"
        />
      </div>

      <div>
        <Label htmlFor="footer-industry" className="mb-2 block text-sm text-white">
          Industry
        </Label>
        <Input
          id="footer-industry"
          required
          value={formValues.industry}
          onChange={(event) => updateField("industry", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="Property Management"
        />
      </div>

      <div>
        <Label htmlFor="footer-preferred-time" className="mb-2 block text-sm text-white">
          Preferred time for the call
        </Label>
        <Input
          id="footer-preferred-time"
          required
          value={formValues.preferredCallTime}
          onChange={(event) => updateField("preferredCallTime", event.target.value)}
          className="border-[#262626] bg-[#050505] text-white"
          placeholder="Weekdays at 2 PM EST"
        />
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#6366f1] text-white hover:bg-[#5558e3]"
      >
        {isSubmitting ? "Submitting..." : "Request a callback"}
      </Button>
    </form>
  )
}
