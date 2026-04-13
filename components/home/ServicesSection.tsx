import { Database, Sparkles, BarChart3, BrainCircuit, ChevronRight } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/constants/services'

const iconMap: Record<string, React.ElementType> = {
  Database,
  Sparkles,
  BarChart3,
  BrainCircuit,
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-base">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">Our Services</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything your enterprise{' '}
            <GradientText>data needs</GradientText>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            From raw ingestion to actionable insight — ORIGIN handles every step of the data intelligence pipeline with enterprise-grade precision.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Database
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <GlowCard className="h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-[#161B27] border border-[#1E2A3A] flex items-center justify-center mb-4 ${service.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{service.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#64748B]">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#00D4FF] group cursor-pointer">
                    Learn more
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlowCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
