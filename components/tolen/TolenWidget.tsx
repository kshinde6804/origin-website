'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TolenAvatar } from './TolenAvatar'
import { TolenChatWindow } from './TolenChatWindow'

export function TolenWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{ transformOrigin: 'bottom right' }}
          >
            <TolenChatWindow onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-105 transition-transform"
        aria-label="Open Tolen AI chat"
        style={{ background: 'radial-gradient(circle at 35% 35%, #00D4FF, #7C3AED)' }}
      >
        <TolenAvatar size="md" animated={false} />
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#05070F]" />
        )}
      </button>

      {/* Label */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-16 right-0 bg-[#0D1117] border border-[#1E2A3A] rounded-lg px-3 py-1.5 text-xs font-medium text-[#94A3B8] whitespace-nowrap pointer-events-none"
        >
          Chat with Tolen AI
        </motion.div>
      )}
    </div>
  )
}
