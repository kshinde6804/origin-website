import { XCircle, CheckCircle2 } from 'lucide-react'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { PROBLEMS } from '@/lib/constants/problems'

export function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-[#0D1117]">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">The Problem We Solve</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            BI is broken.{' '}
            <GradientText>ORIGIN fixes it.</GradientText>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Enterprise corporations face the same data challenges at every scale. We built ORIGIN specifically to eliminate them.
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: 25, suffix: '%', label: 'avg BI tool adoption rate' },
            { value: 80, suffix: '%', label: 'of data projects fail to deliver ROI' },
            { value: 3, suffix: 'x', label: 'faster insights with ORIGIN' },
            { value: 99, suffix: '.2%', label: 'data accuracy after cleaning' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl border border-[#1E2A3A] bg-[#161B27]">
              <div className="font-display text-3xl font-bold text-[#00D4FF] mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#94A3B8] text-xs">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Problem / Solution grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-red-900/40 bg-red-950/10 p-6">
              <h3 className="font-display font-bold text-red-400 text-lg mb-6 flex items-center gap-2">
                <XCircle size={20} />
                Industry Challenges
              </h3>
              <div className="space-y-5">
                {PROBLEMS.map((p) => (
                  <div key={p.id} className="flex gap-3">
                    <XCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{p.problem}</p>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">{p.problemDetail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Solutions */}
          <ScrollReveal direction="right">
            <div className="rounded-2xl border border-[#00D4FF]/20 bg-[#00D4FF]/5 p-6">
              <h3 className="font-display font-bold text-[#00D4FF] text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} />
                The ORIGIN Way
              </h3>
              <div className="space-y-5">
                {PROBLEMS.map((p) => (
                  <div key={p.id} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{p.solution}</p>
                      <p className="text-[#94A3B8] text-xs leading-relaxed">{p.solutionDetail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
