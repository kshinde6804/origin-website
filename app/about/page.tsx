import type { Metadata } from 'next'
import { GradientText } from '@/components/ui/GradientText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { MissionVisionSection } from '@/components/about/MissionVisionSection'
import { TeamGrid } from '@/components/about/TeamGrid'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the ORIGIN team — four co-founders with deep expertise in data science, product strategy, and engineering. Learn about our mission and vision.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-base relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <SectionLabel className="mb-6">About ORIGIN</SectionLabel>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
            Built by <GradientText>data obsessives</GradientText>,<br />
            for data-driven enterprises
          </h1>
          <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto leading-relaxed">
            ORIGIN was founded on a simple belief: enterprise corporations deserve BI tools that actually work. We built the platform we always wished existed.
          </p>
        </div>
      </section>

      <MissionVisionSection />
      <TeamGrid />

      {/* Values section */}
      <section className="section-padding bg-base">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Data Integrity First', desc: 'We never compromise on data quality. Every record that passes through ORIGIN is validated, normalized, and auditable.' },
              { title: 'Enterprise Empathy', desc: 'We\'ve seen the problems firsthand. Our solutions are built for the realities of large-scale operations, not textbook scenarios.' },
              { title: 'Continuous Innovation', desc: 'BI is not a one-time project. We ship constantly — so our clients always have access to the most powerful intelligence tools available.' },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl border border-[#1E2A3A] bg-[#0D1117]">
                <h3 className="font-display font-bold text-white text-xl mb-3">{v.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
