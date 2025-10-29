import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import { fetchSubscriptions, storeSubscription, type SubscriptionPayload } from "@/lib/storage"

const subscriptionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("newsletter"),
    email: z.string().email(),
  }),
  z.object({
    type: z.literal("community"),
    email: z.string().email(),
  }),
])

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const subscriptions = await fetchSubscriptions()

    return NextResponse.json({ subscriptions })
  } catch (error) {
    console.error("Failed to load subscriptions", error)
    return NextResponse.json({ error: "Unable to load subscriptions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = subscriptionSchema.parse(body) as SubscriptionPayload

    const storedSubscription = await storeSubscription(payload)

    const template = payload.type === "newsletter" ? "newsletter-signup" : "community-signup"
    const subject = payload.type === "newsletter" ? "New newsletter subscriber" : "New community waitlist subscriber"

    try {
      await Promise.all([
        sendConfirmationEmail({ to: payload.email, template, name: "" }),
        sendNotificationEmail({
          subject,
          details: [
            { label: "Type", value: payload.type === "newsletter" ? "Newsletter" : "Community" },
            { label: "Email", value: payload.email },
          ],
        }),
      ])
    } catch (emailError) {
      console.error("Subscription email delivery failed", emailError)
    }

    return NextResponse.json({ success: true, id: storedSubscription.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid subscription", details: error.flatten() }, { status: 400 })
    }

    console.error("Failed to capture subscription", error)
    return NextResponse.json({ error: "Unable to save your subscription right now." }, { status: 500 })
  }
}
