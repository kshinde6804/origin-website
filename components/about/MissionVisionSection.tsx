import { Target, Eye } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function MissionVisionSection() {
  return (
    <section className="section-padding bg-base">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <GlowCard className="h-full">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-6">
                <Target size={24} className="text-[#00D4FF]" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">Our Mission</h3>
              <p className="text-[#94A3B8] leading-relaxed text-base">
                To democratize enterprise-grade data analytics — making clean, actionable intelligence accessible to corporations of every size. We believe no business decision should ever be made on dirty, incomplete, or unstructured data.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1E2A3A]">
                <p className="text-sm text-[#475569] italic">
                  &ldquo;Clean data isn&apos;t a luxury. It&apos;s the foundation of every competitive advantage in modern commerce.&rdquo;
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlowCard className="h-full">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-[#A855F7]" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">Our Vision</h3>
              <p className="text-[#94A3B8] leading-relaxed text-base">
                A world where no business decision is made on dirty data — where every grocery shelf, every SKU, every campaign is backed by real-time, AI-powered intelligence. ORIGIN is building the infrastructure that makes that world possible.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1E2A3A]">
                <p className="text-sm text-[#475569] italic">
                  &ldquo;We&apos;re not just building software. We&apos;re building the future of how enterprises understand their own business.&rdquo;
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
