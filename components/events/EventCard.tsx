import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import type { OriginEvent } from '@/lib/constants/events'
import { cn } from '@/lib/utils/cn'

const categoryStyles: Record<string, string> = {
  conference: 'bg-[#00D4FF]/10 text-[#00D4FF] border-[#00D4FF]/20',
  hackathon: 'bg-[#7C3AED]/10 text-[#A855F7] border-[#7C3AED]/20',
  community: 'bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20',
  charity: 'bg-green-500/10 text-green-400 border-green-500/20',
}

const categoryLabels: Record<string, string> = {
  conference: 'Conference',
  hackathon: 'Hackathon',
  community: 'Community',
  charity: 'Charity',
}

interface EventCardProps {
  event: OriginEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className={cn('glow-card flex flex-col h-full', event.isFeatured && 'border-[#00D4FF]/30')}>
      {event.isFeatured && (
        <div className="flex justify-end mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-0.5 rounded-full border border-[#00D4FF]/20">
            Featured
          </span>
        </div>
      )}

      <span className={cn('inline-block w-fit px-2.5 py-1 rounded-full text-xs font-semibold border mb-4', categoryStyles[event.category])}>
        {categoryLabels[event.category]}
      </span>

      <h3 className="font-display font-bold text-white text-base mb-3 leading-tight">{event.title}</h3>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Calendar size={12} className="text-[#475569]" />
          {event.date}
        </div>
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <MapPin size={12} className="text-[#475569]" />
          {event.location}
        </div>
      </div>

      <p className="text-[#64748B] text-xs leading-relaxed flex-1 mb-5">{event.description}</p>

      {event.ctaLabel && (
        <a
          href={event.ctaHref || '#'}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors group"
        >
          {event.ctaLabel}
          <ExternalLink size={11} className="group-hover:scale-110 transition-transform" />
        </a>
      )}
    </div>
  )
}
