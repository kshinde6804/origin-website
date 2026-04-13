'use client'

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Apr 1', views: 1200, signups: 14 },
  { day: 'Apr 3', views: 1450, signups: 18 },
  { day: 'Apr 5', views: 1100, signups: 10 },
  { day: 'Apr 7', views: 1800, signups: 24 },
  { day: 'Apr 9', views: 1650, signups: 20 },
  { day: 'Apr 11', views: 2100, signups: 31 },
  { day: 'Apr 13', views: 1950, signups: 27 },
  { day: 'Apr 15', views: 2400, signups: 38 },
  { day: 'Apr 17', views: 2200, signups: 34 },
  { day: 'Apr 19', views: 2700, signups: 42 },
  { day: 'Apr 21', views: 2500, signups: 39 },
  { day: 'Apr 23', views: 3100, signups: 51 },
  { day: 'Apr 25', views: 2900, signups: 46 },
  { day: 'Apr 27', views: 3400, signups: 58 },
  { day: 'Apr 29', views: 3200, signups: 54 },
]

export function PerformanceChart() {
  return (
    <div className="bg-[#0D1117] border border-[#1E2A3A] rounded-xl p-6">
      <h3 className="font-display font-bold text-white text-base mb-6">Site Performance — Last 30 Days</h3>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1E2A3A" />
          <XAxis dataKey="day" tick={{ fill: '#475569', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fill: '#475569', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#475569', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: '#161B27', border: '1px solid #1E2A3A', borderRadius: 8, color: '#F1F5F9' }}
            labelStyle={{ color: '#94A3B8', fontSize: 11 }}
          />
          <Legend
            wrapperStyle={{ color: '#94A3B8', fontSize: 12 }}
          />
          <Bar yAxisId="right" dataKey="signups" name="New Signups" fill="#7C3AED" opacity={0.7} radius={[2, 2, 0, 0]} />
          <Line yAxisId="left" type="monotone" dataKey="views" name="Page Views" stroke="#00D4FF" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
