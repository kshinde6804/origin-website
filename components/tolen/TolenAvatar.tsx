import { cn } from '@/lib/utils/cn'

interface TolenAvatarProps {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  className?: string
}

export function TolenAvatar({ size = 'md', animated = true, className }: TolenAvatarProps) {
  const sizes = { sm: 32, md: 40, lg: 56 }
  const px = sizes[size]

  return (
    <div
      className={cn('relative flex items-center justify-center rounded-full', className)}
      style={{ width: px, height: px }}
    >
      {/* Outer ring */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full border border-[#00D4FF]/40 animate-spin-slow"
          style={{ borderTopColor: '#00D4FF', borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        />
      )}
      {/* Glow */}
      {animated && (
        <div className="absolute inset-1 rounded-full bg-[#00D4FF]/10 animate-pulse" />
      )}
      {/* Core orb */}
      <div
        className="relative z-10 rounded-full flex items-center justify-center text-white font-display font-bold"
        style={{
          width: px * 0.75,
          height: px * 0.75,
          background: 'radial-gradient(circle at 35% 35%, #00D4FF, #7C3AED)',
          fontSize: px * 0.3,
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
        }}
      >
        T
      </div>
    </div>
  )
}
