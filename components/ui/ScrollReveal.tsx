'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion()

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, ...directionMap[direction] }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
