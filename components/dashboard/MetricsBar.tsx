import { TrendingUp, Users, Clock, MousePointerClick } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const METRICS = [
  { label: 'Total Page Views', value: 48320, suffix: '', icon: TrendingUp, delta: '+12.4%', color: '#00D4FF' },
  { label: 'Active Users', value: 2841, suffix: '', icon: Users, delta: '+8.1%', color: '#A855F7' },
  { label: 'Avg Session (s)', value: 184, suffix: 's', icon: Clock, delta: '+5.3%', color: '#06B6D4' },
  { label: 'Bounce Rate', value: 32, suffix: '%', icon: MousePointerClick, delta: '-3.2%', color: '#10B981' },
]

export function MetricsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {METRICS.map((m) => {
        const Icon = m.icon
        return (
          <div key={m.label} className="bg-[#0D1117] border border-[#1E2A3A] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#94A3B8] text-xs font-medium">{m.label}</p>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${m.color}15` }}>
                <Icon size={16} style={{ color: m.color }} />
              </div>
            </div>
            <div className="font-display font-bold text-2xl text-white mb-1">
              <AnimatedCounter end={m.value} suffix={m.suffix} />
            </div>
            <p className={`text-xs font-medium ${m.delta.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {m.delta} vs last month
            </p>
          </div>
        )
      })}
    </div>
  )
}
