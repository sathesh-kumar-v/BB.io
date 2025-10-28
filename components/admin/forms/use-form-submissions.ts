"use client"

import { useCallback, useEffect, useState } from "react"
import {
  FORM_SUBMISSION_TYPES,
  createEmptySubmissionGroups,
  type FormSubmission,
  type FormSubmissionType,
  type FormSubmissionsResponse,
  type GroupedFormSubmissions,
} from "@/types/forms"

function normalizeGroupedData(
  grouped: Partial<Record<FormSubmissionType, FormSubmission[]>> | undefined,
  submissions: FormSubmission[],
): GroupedFormSubmissions {
  const normalized = createEmptySubmissionGroups()

  if (grouped) {
    for (const type of FORM_SUBMISSION_TYPES) {
      const entries = grouped[type]
      normalized[type] = Array.isArray(entries) ? entries : []
    }

    return normalized
  }

  for (const submission of submissions) {
    normalized[submission.type] = [...normalized[submission.type], submission]
  }

  return normalized
}

export type UseFormSubmissionsState = {
  submissions: FormSubmission[]
  groupedByType: GroupedFormSubmissions
  loading: boolean
  error: string | null
  isFallbackData: boolean
  reload: () => Promise<void>
}

export function useFormSubmissions(): UseFormSubmissionsState {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([])
  const [groupedByType, setGroupedByType] = useState<GroupedFormSubmissions>(() => createEmptySubmissionGroups())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFallbackData, setIsFallbackData] = useState(false)

  const loadSubmissions = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/forms", { signal })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as Partial<FormSubmissionsResponse>
      const nextSubmissions = Array.isArray(data.submissions) ? data.submissions : []
      const groupedFromApi = data.groupedByType as
        | Partial<Record<FormSubmissionType, FormSubmission[]>>
        | undefined

      setSubmissions(nextSubmissions)
      setGroupedByType(normalizeGroupedData(groupedFromApi, nextSubmissions))
      setIsFallbackData(data.source === "fallback")
    } catch (fetchError) {
      if ((fetchError as Error).name === "AbortError") {
        return
      }

      console.error("Unable to load submissions", fetchError)
      setError("We couldn't load the latest submissions. Please try again later.")
      setSubmissions([])
      setGroupedByType(createEmptySubmissionGroups())
      setIsFallbackData(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    loadSubmissions(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadSubmissions])

  const reload = useCallback(async () => {
    await loadSubmissions()
  }, [loadSubmissions])

  return {
    submissions,
    groupedByType,
    loading,
    error,
    isFallbackData,
    reload,
  }
}
