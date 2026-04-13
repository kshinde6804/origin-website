import { Globe, Share2, AtSign, Play } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const SOCIALS = [
  { name: 'LinkedIn', icon: Globe, href: '#', color: '#0A66C2', desc: 'Follow our company updates and industry insights' },
  { name: 'Twitter / X', icon: Share2, href: '#', color: '#1DA1F2', desc: 'Real-time product updates and team announcements' },
  { name: 'Instagram', icon: AtSign, href: '#', color: '#E1306C', desc: 'Behind the scenes — team moments and company culture' },
  { name: 'YouTube', icon: Play, href: '#', color: '#FF0000', desc: 'Full product demos, community sessions, and tutorials' },
]

export function SocialLinksSection() {
  return (
    <section className="section-padding bg-[#0D1117] border-t border-[#1E2A3A]">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Follow the Journey</h2>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            Stay connected with ORIGIN across our social channels for updates, demos, and community news.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIALS.map((s, i) => {
            const Icon = s.icon
            return (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <a
                  href={s.href}
                  className="glow-card p-6 flex flex-col items-center text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
                  >
                    <Icon size={28} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{s.name}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
                </a>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
