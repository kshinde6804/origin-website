import { cn } from '@/lib/utils/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase',
        'border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF]',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
      {children}
    </span>
  )
}
