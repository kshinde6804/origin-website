import { Zap, Eye, MessageSquare, Upload, CheckCircle2 } from 'lucide-react'

const ACTIVITIES = [
  { icon: CheckCircle2, color: '#10B981', text: 'Data pipeline completed successfully', time: '2m ago' },
  { icon: Eye, color: '#00D4FF', text: 'Homepage viewed by 142 unique visitors', time: '8m ago' },
  { icon: MessageSquare, color: '#A855F7', text: 'Tolen AI: 23 conversations today', time: '15m ago' },
  { icon: Upload, color: '#06B6D4', text: 'New data source connected: Instacart API', time: '1h ago' },
  { icon: Zap, color: '#F59E0B', text: 'Performance alert: Services page load +0.3s', time: '2h ago' },
  { icon: CheckCircle2, color: '#10B981', text: 'Weekly Zoom session: 34 attendees', time: '1d ago' },
]

export function ActivityFeed() {
  return (
    <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-xl">
      <div className="px-6 py-4 border-b border-[#1E2A3A]">
        <h3 className="font-display font-bold text-white text-base">Recent Activity</h3>
      </div>
      <div className="p-4 space-y-1">
        {ACTIVITIES.map((a, i) => {
          const Icon = a.icon
          return (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#161B27] transition-colors">
              <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: `${a.color}15` }}>
                <Icon size={14} style={{ color: a.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#CBD5E1] leading-snug">{a.text}</p>
                <p className="text-[10px] text-[#475569] mt-0.5">{a.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
