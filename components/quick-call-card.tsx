import { FooterLeadForm } from "@/components/forms/footer-lead-form"

export function QuickCallCard() {
  return (
    <section className="bg-[#090909] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#262626] bg-[#111111]">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-12">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-[#262626] bg-[#0d0d0d] px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
                Quick Call
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Request a quick call</h2>
                <p className="text-base leading-relaxed text-[#a1a1aa]">
                  Share a few details and we&apos;ll reach out with a tailored next step for your AI transformation.
                  Choose a time that works for you and connect directly with our strategy team.
                </p>
              </div>
              <ul className="grid gap-3 text-sm text-[#a1a1aa] sm:grid-cols-2">
                {[
                  "15-minute rapid assessment",
                  "No obligation consultation",
                  "Industry-specific guidance",
                  "Clear next steps within 24 hours",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <FooterLeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
