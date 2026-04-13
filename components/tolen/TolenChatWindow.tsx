'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import { TolenAvatar } from './TolenAvatar'
import { TolenMessage } from './TolenMessage'
import { useTolenChat } from '@/lib/hooks/useTolenChat'

interface TolenChatWindowProps {
  onClose: () => void
}

export function TolenChatWindow({ onClose }: TolenChatWindowProps) {
  const [input, setInput] = useState('')
  const { messages, isTyping, sendMessage, suggestions } = useTolenChat()
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    sendMessage(trimmed)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col w-[360px] h-[520px] bg-[#0D1117] rounded-2xl border border-[#1E2A3A] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1E2A3A] bg-[#161B27]">
        <TolenAvatar size="sm" animated />
        <div className="flex-1">
          <div className="font-display font-semibold text-white text-sm">Tolen AI</div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-[#94A3B8]">Online</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-[#475569] hover:text-white hover:bg-[#1E2A3A] transition-colors"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
        {messages.map((msg) => (
          <TolenMessage key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex gap-2 items-center">
            <TolenAvatar size="sm" animated={false} className="flex-shrink-0" />
            <div className="bg-[#161B27] border border-[#1E2A3A] rounded-xl px-3 py-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs px-3 py-1.5 rounded-full border border-[#1E2A3A] bg-[#161B27] text-[#94A3B8] hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 bg-[#161B27] border border-[#1E2A3A] rounded-xl px-3 py-2 focus-within:border-[#00D4FF]/50 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Tolen anything..."
            className="flex-1 bg-transparent text-sm text-[#F1F5F9] placeholder-[#475569] outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-1.5 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            aria-label="Send message"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
