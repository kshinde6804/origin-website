import Link from 'next/link'
import { Zap, Globe, Share2, AtSign, Play, Mail } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants/nav'

export function Footer() {
  return (
    <footer className="border-t border-[#1E2A3A] bg-[#05070F]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7C3AED]">
                <Zap size={16} className="text-white" fill="white" />
              </span>
              ORIGIN
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Enterprise-grade data analytics and business intelligence — built for the speed and complexity of modern commerce.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[#475569] hover:text-[#00D4FF] transition-colors" aria-label="LinkedIn">
                <Globe size={20} />
              </a>
              <a href="#" className="text-[#475569] hover:text-[#00D4FF] transition-colors" aria-label="Twitter">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-[#475569] hover:text-[#00D4FF] transition-colors" aria-label="Instagram">
                <AtSign size={20} />
              </a>
              <a href="#" className="text-[#475569] hover:text-[#00D4FF] transition-colors" aria-label="YouTube">
                <Play size={20} />
              </a>
              <a href="mailto:hello@origindata.ai" className="text-[#475569] hover:text-[#00D4FF] transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-[#00D4FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@origindata.ai" className="text-[#94A3B8] text-sm hover:text-[#00D4FF] transition-colors">
                  hello@origindata.ai
                </a>
              </li>
              <li>
                <a href="#" className="text-[#94A3B8] text-sm hover:text-[#00D4FF] transition-colors">
                  Book a Demo
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="text-[#94A3B8] text-sm hover:text-[#00D4FF] transition-colors">
                  Team Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E2A3A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © 2026 ORIGIN. All rights reserved.
          </p>
          <p className="text-[#475569] text-sm">
            Built by data obsessives, for data-driven enterprises.
          </p>
        </div>
      </div>
    </footer>
  )
}
