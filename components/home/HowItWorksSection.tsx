import { Upload, Cpu, LineChart } from 'lucide-react'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

const STEPS = [
  {
    number: '01',
    icon: Upload,
    title: 'Connect Your Data',
    description: 'Plug in raw exports from any marketplace — Amazon, Instacart, Walmart+, or custom platforms. ORIGIN accepts CSV, JSON, XML, and live API feeds.',
    color: '#00D4FF',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'ORIGIN Cleans & Structures',
    description: 'Our AI pipeline normalizes, deduplicates, and structures your data automatically. Tell it what metrics matter and it highlights them. Done in minutes.',
    color: '#7C3AED',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Receive Actionable Insights',
    description: 'Get a clean, professional data view ready for executive presentations. Tolen AI layers on top with recommendations, anomaly alerts, and strategic guidance.',
    color: '#06B6D4',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-base">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">How It Works</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            From raw data to{' '}
            <GradientText>clarity in 3 steps</GradientText>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            No data engineering team required. No months-long implementation. ORIGIN is designed to deliver value from day one.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#06B6D4] opacity-40" />

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={i * 0.15}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Number bubble */}
                    <div
                      className="relative z-10 w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 border-2"
                      style={{
                        borderColor: step.color,
                        background: `radial-gradient(circle, ${step.color}15, ${step.color}05)`,
                        boxShadow: `0 0 30px ${step.color}20`,
                      }}
                    >
                      <Icon size={36} style={{ color: step.color }} />
                      <span
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold font-display flex items-center justify-center text-white"
                        style={{ background: step.color }}
                      >
                        {step.number.replace('0', '')}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* CTA under steps */}
        <ScrollReveal className="text-center mt-14">
          <a
            href="mailto:hello@origindata.ai"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white hover:opacity-90 transition-opacity"
          >
            See a Live Demo
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
