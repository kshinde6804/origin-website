'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants/nav'
import { cn } from '@/lib/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#05070F]/90 backdrop-blur-md border-b border-[#1E2A3A]'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-xl text-white"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7C3AED]">
                <Zap size={16} className="text-white" fill="white" />
              </span>
              ORIGIN
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href.replace('/#', '/'))
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm font-medium transition-colors duration-200 hover:text-[#00D4FF]',
                        isActive ? 'text-[#00D4FF]' : 'text-[#94A3B8]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@origindata.ai"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E2A3A] transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-[#0D1117] border-b border-[#1E2A3A] p-6">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-[#94A3B8] hover:text-[#00D4FF] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:hello@origindata.ai"
                  className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
