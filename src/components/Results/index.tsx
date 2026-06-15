import { BarChart3, Target, TrendingUp, Zap } from 'lucide-react'
import CaseDashboard from './CaseDashboard'

const GLOBAL_STATS = [
  { val: '3,500+', label: 'Total Leads Generated', icon: <Target size={20} /> },
  { val: '₹24', label: 'Avg Cost Per Lead', icon: <BarChart3 size={20} /> },
  { val: '5.4M+', label: 'Total Impressions', icon: <TrendingUp size={20} /> },
  { val: '81%', label: 'Below Industry CPL', icon: <Zap size={20} /> },
]

const CASE_STUDIES = [
  {
    title: '1,000+ High-Intent Leads Generated in 1 Month',
    subtitle: 'B2B SaaS client — Full-funnel Meta & Google campaigns',
    tagline: 'Scaled from 0 to 1,000+ qualified leads in 30 days through hyper-targeted creative frameworks.',
    chartPoints: '0,55 30,48 60,40 90,30 120,20 150,14 196,8',
    chartColor: '#10B981',
    metrics: [
      { label: 'Total Reach', value: '480K+', sub: 'Unique Accounts', color: '#10B981' },
      { label: 'Impressions', value: '2.1M+', sub: 'Peak Week 3', color: '#D4AF37' },
      { label: 'Cost / Lead', value: '₹28', sub: '72% Below Avg', color: '#10B981' },
    ],
  },
  {
    title: '2,500+ High-Intent Leads Generated in 2 Months',
    subtitle: 'Real Estate developer — Hyperlocal + digital integrated campaign',
    tagline: 'Deployed a cross-channel funnel combining SEO, paid media, and WhatsApp automation for rapid scale.',
    chartPoints: '0,55 25,50 55,42 85,32 115,22 145,14 175,9 196,5',
    chartColor: '#D4AF37',
    metrics: [
      { label: 'Total Reach', value: '1.1M+', sub: 'Unique Accounts', color: '#10B981' },
      { label: 'Impressions', value: '5.4M+', sub: 'Across Channels', color: '#D4AF37' },
      { label: 'Cost / Lead', value: '₹19', sub: '81% Below Avg', color: '#10B981' },
    ],
  },
]

export default function Results() {
  return (
    <section
      id="results"
      className="py-28 relative"
      style={{ background: 'linear-gradient(180deg, #0A0F1D 0%, #060D0A 50%, #0A0F1D 100%)' }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <BarChart3 size={13} /> Verified Performance Data
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Data-Driven Proof:{' '}
            <span className="text-gradient-mint">5+ Years of Guaranteed Growth</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real campaigns. Real numbers. Real clients. Here's the evidence of what HEFeed delivers.
          </p>
        </div>

        {/* Global stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {GLOBAL_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center border transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(4,78,54,0.15)', borderColor: 'rgba(16,185,129,0.15)' }}
            >
              <div className="flex justify-center mb-2" style={{ color: '#10B981' }}>{stat.icon}</div>
              <div className="text-3xl font-extrabold text-white">{stat.val}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case study dashboards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((c, i) => (
            <CaseDashboard key={i} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
