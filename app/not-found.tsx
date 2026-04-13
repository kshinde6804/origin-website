import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="text-center">
        <p className="font-display font-bold text-8xl gradient-text mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-[#94A3B8] text-base mb-8 max-w-md">
          This page doesn&apos;t exist — but your data insights do. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to ORIGIN
        </Link>
      </div>
    </div>
  )
}
