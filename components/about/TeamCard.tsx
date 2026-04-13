import type { TeamMember } from '@/lib/constants/team'
import { cn } from '@/lib/utils/cn'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="glow-card p-6 flex flex-col h-full">
      {/* Avatar */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-display font-bold text-lg text-white"
          style={{ background: 'radial-gradient(circle at 35% 35%, #00D4FF, #7C3AED)' }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-base leading-tight mb-1">{member.name}</h3>
          <span className={cn('inline-block px-2 py-0.5 rounded-full text-xs font-semibold border', member.badgeColor)}>
            {member.title}
          </span>
        </div>
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#0A66C2] transition-colors flex-shrink-0"
            aria-label={`${member.name} LinkedIn`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
      </div>

      <p className="text-[#94A3B8] text-xs leading-relaxed mb-1 font-medium">{member.role}</p>
      <p className="text-white text-xs leading-relaxed mb-4 flex-1">{member.bio}</p>

      {/* Experience */}
      <div>
        <p className="text-[#475569] text-[11px] font-semibold uppercase tracking-wider mb-2">Experience</p>
        <ul className="space-y-1">
          {member.experience.map((exp) => (
            <li key={exp} className="flex items-start gap-1.5 text-xs text-white">
              <span className="mt-1 w-1 h-1 rounded-full bg-[#00D4FF] flex-shrink-0" />
              {exp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
