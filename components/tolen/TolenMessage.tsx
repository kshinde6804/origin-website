import { TolenAvatar } from './TolenAvatar'
import type { TolenMessage as TolenMessageType } from '@/lib/hooks/useTolenChat'
import { cn } from '@/lib/utils/cn'

interface TolenMessageProps {
  message: TolenMessageType
}

export function TolenMessage({ message }: TolenMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex gap-2', isUser && 'flex-row-reverse')}>
      {!isUser && <TolenAvatar size="sm" animated={false} className="flex-shrink-0 mt-1" />}
      <div
        className={cn(
          'max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed',
          isUser
            ? 'bg-gradient-to-br from-[#00D4FF]/20 to-[#7C3AED]/20 border border-[#00D4FF]/20 text-[#F1F5F9]'
            : 'bg-[#161B27] border border-[#1E2A3A] text-[#CBD5E1]'
        )}
      >
        {message.content}
      </div>
    </div>
  )
}
