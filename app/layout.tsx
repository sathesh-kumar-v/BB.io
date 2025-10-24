import type React from "react"
import { Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata = {
  title: "BrandingBeez.io - Lean AI Development Agency",
  description:
    "Enterprise-quality AI solutions at 50-70% below market rates. Proven 325% average ROI. Custom GPT-4 integrations, ML models, and automation platforms.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
