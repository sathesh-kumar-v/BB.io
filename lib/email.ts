const EMAIL_TEMPLATES = {
  consultation: {
    subject: "Thanks for requesting your AI strategy session",
    intro:
      "We're excited to learn more about your goals. A strategist will review your submission and reach out shortly with a proposed meeting time.",
  },
  "footer-lead": {
    subject: "Thanks for reaching out to BrandingBeez.io",
    intro:
      "We received your message and will be in touch soon with next steps tailored to your business goals.",
  },
} as const satisfies Record<string, { subject: string; intro: string }>

type TemplateKey = keyof typeof EMAIL_TEMPLATES

type SendEmailOptions = {
  to: string
  name?: string
  template: TemplateKey
}

function buildHtml(name: string, intro: string) {
  const greetingName = name ? name : "there"

  return `<!doctype html>
<html>
  <body style="font-family: Arial, sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 32px;">
    <div style="max-width: 480px; margin: 0 auto; background-color: #111111; border-radius: 16px; padding: 32px; border: 1px solid #262626;">
      <h1 style="font-size: 22px; margin-bottom: 12px;">Hi ${greetingName},</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #d4d4d8;">${intro}</p>
      <p style="font-size: 15px; line-height: 1.6; color: #d4d4d8;">If you have any immediate questions, just reply to this email and our team will get back to you.</p>
      <p style="margin-top: 24px; font-size: 15px; color: #e0e7ff;">— The BrandingBeez.io Team</p>
    </div>
  </body>
</html>`
}

export async function sendConfirmationEmail({ to, name, template }: SendEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY
  const fromAddress = process.env.RESEND_FROM_EMAIL || "BrandingBeez.io <noreply@brandingbeez.io>"

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured. Skipping confirmation email for", to)
    return
  }

  const selectedTemplate = EMAIL_TEMPLATES[template]
  const html = buildHtml(name?.trim() ?? "", selectedTemplate.intro)

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [to],
      subject: selectedTemplate.subject,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to send confirmation email: ${response.status} ${errorText}`)
  }
}
