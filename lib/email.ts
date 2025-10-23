import tls from "node:tls"

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
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com"
  const smtpPort = Number(process.env.SMTP_PORT) || 465
  const fromAddress = process.env.SMTP_FROM_EMAIL || smtpUser

  if (!smtpUser || !smtpPassword || !fromAddress) {
    console.warn("SMTP credentials are not fully configured. Skipping confirmation email for", to)
    return
  }

  const selectedTemplate = EMAIL_TEMPLATES[template]
  const html = buildHtml(name?.trim() ?? "", selectedTemplate.intro)

  await sendEmailThroughSmtp({
    host: smtpHost,
    port: smtpPort,
    user: smtpUser,
    password: smtpPassword,
    from: fromAddress,
    to,
    subject: selectedTemplate.subject,
    html,
  })
}

type SmtpSendOptions = {
  host: string
  port: number
  user: string
  password: string
  from: string
  to: string
  subject: string
  html: string
}

async function sendEmailThroughSmtp(options: SmtpSendOptions) {
  const { host, port, user, password, from, to, subject, html } = options

  const message = buildMimeMessage({ from, to, subject, html })
  const envelopeFrom = extractEmailAddress(from)

  await new Promise<void>((resolve, reject) => {
    const socket = tls.connect(
      {
        host,
        port,
        servername: host,
      },
      () => {
        socket.setEncoding("utf8")

        const client = createSmtpClient(socket)

        ;(async () => {
          try {
            await expectCode(await client.readResponse(), 220)
            await expectCode(await client.sendCommand(`EHLO brandingbeez.io`), 250)
            await expectCode(await client.sendCommand("AUTH LOGIN"), 334)
            await expectCode(await client.sendCommand(Buffer.from(user).toString("base64")), 334)
            await expectCode(await client.sendCommand(Buffer.from(password).toString("base64")), 235)
            await expectCode(await client.sendCommand(`MAIL FROM:<${envelopeFrom}>`), 250)
            await expectCode(await client.sendCommand(`RCPT TO:<${to}>`), 250)
            await expectCode(await client.sendCommand("DATA"), 354)

            client.write(`${message}\r\n.\r\n`)
            await expectCode(await client.readResponse(), 250)

            client.write("QUIT\r\n")
            resolve()
          } catch (error) {
            reject(error)
          } finally {
            socket.end()
          }
        })().catch(reject)
      },
    )

    socket.setTimeout(15000, () => {
      socket.destroy(new Error("SMTP connection timed out"))
    })

    socket.on("error", (error) => {
      reject(error)
    })
  })
}

function buildMimeMessage({ from, to, subject, html }: { from: string; to: string; subject: string; html: string }) {
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
  ]

  return `${headers.join("\r\n")}\r\n\r\n${html}`
}

function extractEmailAddress(address: string) {
  const match = address.match(/<([^>]+)>/) ?? address.match(/([^\s@]+@[^\s@]+)/)
  return match ? match[1] ?? match[0] : address
}

type SmtpClient = {
  readResponse: () => Promise<SmtpResponse>
  sendCommand: (command: string) => Promise<SmtpResponse>
  write: (chunk: string) => void
}

type SmtpResponse = {
  code: number
  lines: string[]
}

function createSmtpClient(socket: tls.TLSSocket): SmtpClient {
  let buffer = ""
  const queue: Array<{ resolve: (value: string) => void; reject: (error: Error) => void }> = []
  const readyLines: string[] = []
  let closed = false

  socket.on("data", (data) => {
    buffer += data

    while (true) {
      const newlineIndex = buffer.indexOf("\r\n")
      if (newlineIndex === -1) break

      const line = buffer.slice(0, newlineIndex)
      buffer = buffer.slice(newlineIndex + 2)

      const pending = queue.shift()
      if (pending) {
        pending.resolve(line)
      } else {
        readyLines.push(line)
      }
    }
  })

  socket.on("error", (error) => {
    closed = true
    while (queue.length) {
      queue.shift()?.reject(error as Error)
    }
  })

  socket.on("close", () => {
    if (closed) return
    const error = new Error("SMTP connection closed unexpectedly")
    while (queue.length) {
      queue.shift()?.reject(error)
    }
  })

  const readLine = () =>
    new Promise<string>((resolve, reject) => {
      const line = readyLines.shift()
      if (line !== undefined) {
        resolve(line)
        return
      }

      queue.push({ resolve, reject })
    })

  const readResponse = async () => {
    const firstLine = await readLine()
    const code = parseInt(firstLine.slice(0, 3), 10)

    if (Number.isNaN(code)) {
      throw new Error(`Unexpected SMTP response: ${firstLine}`)
    }

    const lines = [firstLine]
    if (firstLine[3] === "-") {
      while (true) {
        const nextLine = await readLine()
        lines.push(nextLine)
        if (nextLine.startsWith(`${code} `)) break
      }
    }

    return { code, lines }
  }

  const sendCommand = async (command: string) => {
    socket.write(`${command}\r\n`)
    return readResponse()
  }

  return {
    readResponse,
    sendCommand,
    write: (chunk: string) => {
      socket.write(chunk)
    },
  }
}

async function expectCode(response: SmtpResponse, expectedCode: number) {
  if (response.code !== expectedCode) {
    throw new Error(`Unexpected SMTP response (expected ${expectedCode}): ${response.lines.join(" | ")}`)
  }
}
