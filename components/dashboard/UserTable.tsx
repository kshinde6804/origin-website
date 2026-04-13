const TEAM_METRICS = [
  { name: 'Giovaughan De La Cruz', role: 'CCO', lastActive: '2 min ago', pagesReviewed: 48, score: 94, status: 'active' },
  { name: 'Hrithika', role: 'CDO', lastActive: '15 min ago', pagesReviewed: 61, score: 98, status: 'active' },
  { name: 'Kunal', role: 'CPO', lastActive: '1 hr ago', pagesReviewed: 39, score: 87, status: 'idle' },
  { name: 'Josh', role: 'CIO', lastActive: '3 min ago', pagesReviewed: 72, score: 96, status: 'active' },
]

const statusColor = { active: 'bg-green-400', idle: 'bg-yellow-400', offline: 'bg-[#475569]' }
const statusLabel = { active: 'Active', idle: 'Idle', offline: 'Offline' }

export function UserTable() {
  return (
    <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-[#1E2A3A]">
        <h3 className="font-display font-bold text-white text-base">Team Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1E2A3A]">
              {['Member', 'Role', 'Last Active', 'Pages Reviewed', 'Performance', 'Status'].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-[#475569]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2A3A]">
            {TEAM_METRICS.map((m) => (
              <tr key={m.name} className="hover:bg-[#161B27] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: 'radial-gradient(circle, #00D4FF55, #7C3AED55)' }}>
                      {m.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                    </div>
                    <span className="text-sm font-medium text-white">{m.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#94A3B8] font-semibold">{m.role}</td>
                <td className="px-6 py-4 text-xs text-[#64748B]">{m.lastActive}</td>
                <td className="px-6 py-4 text-sm text-[#94A3B8] font-mono">{m.pagesReviewed}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-[#1E2A3A] rounded-full overflow-hidden" style={{ minWidth: 80 }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${m.score}%`,
                          background: 'linear-gradient(to right, #00D4FF, #7C3AED)',
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-white">{m.score}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${statusColor[m.status as keyof typeof statusColor]}`} />
                    <span className="text-xs text-[#94A3B8]">{statusLabel[m.status as keyof typeof statusLabel]}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
