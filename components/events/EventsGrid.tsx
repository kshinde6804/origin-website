'use client'

import { useState } from 'react'
import { EVENTS, type EventCategory } from '@/lib/constants/events'
import { EventCard } from './EventCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils/cn'

type FilterTab = 'all' | EventCategory

const TABS: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All Events' },
  { value: 'conference', label: 'Conferences' },
  { value: 'hackathon', label: 'Hackathons' },
  { value: 'community', label: 'Community' },
  { value: 'charity', label: 'Charity' },
]

export function EventsGrid() {
  const [filter, setFilter] = useState<FilterTab>('all')

  const filtered = filter === 'all' ? EVENTS : EVENTS.filter((e) => e.category === filter)

  return (
    <section className="section-padding bg-base">
      <div className="container-custom">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                filter === tab.value
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white'
                  : 'border border-[#1E2A3A] text-[#94A3B8] hover:border-[#00D4FF]/50 hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.05}>
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
