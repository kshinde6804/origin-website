import { cn } from '@/lib/utils/cn'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn('gradient-text', className)}
    >
      {children}
    </span>
  )
}
