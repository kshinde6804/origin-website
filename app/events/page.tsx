import type { Metadata } from 'next'
import { GradientText } from '@/components/ui/GradientText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EventsGrid } from '@/components/events/EventsGrid'
import { SocialLinksSection } from '@/components/events/SocialLinksSection'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join ORIGIN at CES, hackathons, weekly community Zoom rooms, and charity events. Follow our journey and connect with the team.',
}

export default function EventsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-base relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <SectionLabel className="mb-6">Events & Community</SectionLabel>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
            Where <GradientText>ORIGIN Shows Up</GradientText>
          </h1>
          <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto leading-relaxed">
            From CES to weekly community Zoom rooms — ORIGIN is always meeting our clients, partners, and the data community where they are.
          </p>
        </div>
      </section>

      <EventsGrid />
      <SocialLinksSection />
    </>
  )
}
