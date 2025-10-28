export const FORM_SUBMISSION_TYPES = [
  "Consultation",
  "Footer Lead",
  "Hero Lead",
  "Quick Session",
  "Community Application",
  "AI Readiness Assessment",
  "Newsletter Subscription",
  "Community Waitlist",
] as const

export type FormSubmissionType = (typeof FORM_SUBMISSION_TYPES)[number]

export type FormSubmission = {
  id: string
  type: FormSubmissionType
  name: string
  email: string
  phone?: string
  company?: string
  details?: string
  source: string
  createdAt: string
}

export type GroupedFormSubmissions = Record<FormSubmissionType, FormSubmission[]>

export type FormSubmissionsResponseSource = "database" | "fallback"

export type FormSubmissionsResponse = {
  submissions: FormSubmission[]
  groupedByType: GroupedFormSubmissions
  source: FormSubmissionsResponseSource
}

export function createEmptySubmissionGroups(): GroupedFormSubmissions {
  return FORM_SUBMISSION_TYPES.reduce((groups, type) => {
    groups[type] = []
    return groups
  }, {} as GroupedFormSubmissions)
}
