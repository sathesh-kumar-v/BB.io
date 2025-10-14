import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-12 md:p-16 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to build your AI solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed text-balance">
            Join SMBs who've achieved enterprise AI capabilities without the enterprise price tag. Let's discuss your
            project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#e5e5e5] transition-all flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
