'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'
import { GradientText } from '@/components/ui/GradientText'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Particle background */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-custom w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                Enterprise BI Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              Turn{' '}
              <GradientText>Raw Data</GradientText>
              <br />
              Into Revenue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[#94A3B8] leading-relaxed max-w-xl mb-8"
            >
              ORIGIN ingests, cleans, and transforms the most complex marketplace data into clean,
              decision-ready intelligence — in minutes. Built for enterprises that can{`'`}t afford to wait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:hello@origindata.ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white hover:opacity-90 transition-opacity shadow-glow-cyan"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-[#1E2A3A] text-[#F1F5F9] hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['HGG', 'IC', 'MS'].map((init, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0D1117] bg-gradient-to-br from-[#00D4FF]/40 to-[#7C3AED]/40 flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#94A3B8]">
                Trusted by <span className="text-white font-semibold">enterprise teams</span> in grocery, retail & beyond
              </p>
            </motion.div>
          </div>

          {/* Right: floating dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Dashboard mockup */}
              <div
                className="rounded-2xl border border-[#1E2A3A] bg-[#0D1117] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                style={{ perspective: '1000px', transform: 'rotateY(-5deg) rotateX(3deg)' }}
              >
                {/* Header bar */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1E2A3A]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 text-center text-[10px] text-[#475569]">ORIGIN Analytics Dashboard</div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Conversion Rate', value: '4.8%', delta: '+0.6%', color: '#00D4FF' },
                    { label: 'Revenue', value: '$2.4M', delta: '+12%', color: '#A855F7' },
                    { label: 'Data Accuracy', value: '99.2%', delta: '+1.3%', color: '#06B6D4' },
                  ].map((m) => (
                    <div key={m.label} className="bg-[#161B27] rounded-lg p-3 border border-[#1E2A3A]">
                      <p className="text-[9px] text-[#475569] mb-1">{m.label}</p>
                      <p className="text-sm font-bold font-display" style={{ color: m.color }}>{m.value}</p>
                      <p className="text-[9px] text-green-400">{m.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Fake chart */}
                <div className="bg-[#161B27] rounded-lg p-3 border border-[#1E2A3A] mb-2">
                  <div className="flex items-end gap-1 h-16">
                    {[30, 45, 35, 60, 52, 70, 65, 80, 72, 90, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(to top, #00D4FF, #7C3AED)'
                            : `rgba(0,212,255,${0.2 + i * 0.05})`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Status row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[9px] text-[#94A3B8]">Data pipeline active</span>
                  </div>
                  <span className="text-[9px] text-[#475569]">Updated just now</span>
                </div>
              </div>

              {/* Glow behind mockup */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl blur-3xl opacity-30"
                style={{ background: 'radial-gradient(ellipse at center, #7C3AED, #00D4FF, transparent)' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#475569]"
        >
          <span className="text-xs">Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
