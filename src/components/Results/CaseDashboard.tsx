import { TrendingUp } from 'lucide-react'
import MiniLineChart from './MiniLineChart'

type Metric = { label: string; value: string; sub: string; color: string }

type Props = {
  title: string
  subtitle: string
  tagline: string
  metrics: Metric[]
  chartPoints: string
  chartColor: string
  index: number
}

function MetricCard({ label, value, sub, color }: Metric) {
  return (
    <div className="rounded-xl p-4 border"
      style={{ background: 'rgba(4,78,54,0.15)', borderColor: `${color}25` }}>
      <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-xs font-semibold text-white mt-0.5">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
    </div>
  )
}

export default function CaseDashboard({ title, subtitle, tagline, metrics, chartPoints, chartColor, index }: Props) {
  return (
    <div
      className="rounded-3xl p-8 border space-y-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(145deg, rgba(4,78,54,0.2) 0%, rgba(10,15,29,0.95) 100%)',
        borderColor: 'rgba(212,175,55,0.2)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            Case Study #{index + 1}
          </div>
          <h3 className="text-xl font-extrabold text-white leading-snug">{title}</h3>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
        >
          <TrendingUp size={22} color="#10B981" />
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-1">
        <div className="text-xs text-slate-500 uppercase tracking-widest">Performance Trajectory</div>
        <div
          className="rounded-xl overflow-hidden px-2 pt-2 pb-1 border"
          style={{ background: 'rgba(0,0,0,0.3)', borderColor: 'rgba(16,185,129,0.1)' }}
        >
          <MiniLineChart color={chartColor} points={chartPoints} />
          <div className="flex justify-between text-xs text-slate-600 px-1 pb-1">
            <span>Day 1</span><span>Week 2</span><span>Week 4</span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm italic text-slate-400 border-l-2 pl-3" style={{ borderColor: chartColor }}>
        &ldquo;{tagline}&rdquo;
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
      </div>
    </div>
  )
}
