import type { FormSubmissionType } from "@/types/forms"

export function getTypeBadgeColor(type: FormSubmissionType): string {
  switch (type) {
    case "Consultation":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "Footer Lead":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "Hero Lead":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20"
    case "Quick Session":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    case "Community Application":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20"
    case "AI Readiness Assessment":
      return "bg-rose-500/10 text-rose-400 border-rose-500/20"
    case "Newsletter Subscription":
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    case "Community Waitlist":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20"
    default:
      return "bg-muted/10 text-muted-foreground border-border"
  }
}
