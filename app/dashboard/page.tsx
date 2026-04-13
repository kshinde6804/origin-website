import type { Metadata } from 'next'
import { Zap, LayoutDashboard, BarChart2, Users, Settings } from 'lucide-react'
import Link from 'next/link'
import { MetricsBar } from '@/components/dashboard/MetricsBar'
import { PerformanceChart } from '@/components/dashboard/PerformanceChart'
import { UserTable } from '@/components/dashboard/UserTable'
import { ActivityFeed } from '@/components/dashboard/ActivityFeed'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'ORIGIN internal team dashboard',
}

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard', active: true },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard', active: false },
  { icon: Users, label: 'Team', href: '/dashboard', active: false },
  { icon: Settings, label: 'Settings', href: '/dashboard', active: false },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-base flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-[#1E2A3A] bg-[#0D1117] pt-20 pb-8 px-4 fixed left-0 top-0 bottom-0">
        <div className="flex items-center gap-2 font-display font-bold text-white mb-8 px-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7C3AED]">
            <Zap size={14} className="text-white" fill="white" />
          </span>
          ORIGIN Internal
        </div>
        <nav className="space-y-1">
          {SIDEBAR_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.active
                    ? 'bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#161B27]'
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto">
          <div className="p-3 rounded-lg bg-[#161B27] border border-[#1E2A3A]">
            <p className="text-xs text-[#475569] mb-1">Internal Access Only</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400">All systems operational</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-60 pt-20 px-4 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-white mb-1">Dashboard Overview</h1>
            <p className="text-[#94A3B8] text-sm">ORIGIN website performance — April 2026</p>
          </div>

          <div className="space-y-6">
            <MetricsBar />
            <PerformanceChart />

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <UserTable />
              </div>
              <div>
                <ActivityFeed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
