import { cn } from '@/lib/utils/cn'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}

export function GlowCard({ children, className, as: Tag = 'div' }: GlowCardProps) {
  return (
    <Tag className={cn('glow-card p-6', className)}>
      {children}
    </Tag>
  )
}
