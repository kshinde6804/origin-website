import { TEAM } from '@/lib/constants/team'
import { TeamCard } from './TeamCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function TeamGrid() {
  return (
    <section className="section-padding bg-[#0D1117]">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">The Team</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Built by <GradientText>data obsessives</GradientText>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Five co-founders with deep expertise across leadership, data science, product, commerce, and engineering — united by a mission to fix business intelligence.
          </p>
        </ScrollReveal>

        {/* Top row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {TEAM.slice(0, 3).map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.1}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row: 2 cards, centered */}
        <div className="grid sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {TEAM.slice(3).map((member, i) => (
            <ScrollReveal key={member.id} delay={(i + 3) * 0.1}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
