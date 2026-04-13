import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function HomeCTA() {
  return (
    <section className="section-padding bg-[#0D1117] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,212,255,0.07) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)',
        }}
      />
      <div className="container-custom relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to make every business decision{' '}
              <span className="gradient-text">data-backed?</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-10 leading-relaxed">
              Join forward-thinking enterprises using ORIGIN to ingest, clean, and transform their most complex data into revenue-driving intelligence — in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@origindata.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white hover:opacity-90 transition-opacity"
              >
                Book a Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@origindata.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-[#1E2A3A] text-[#F1F5F9] hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
