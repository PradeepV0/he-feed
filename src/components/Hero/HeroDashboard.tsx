export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[540px] animate-float">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
        style={{ background: 'radial-gradient(ellipse, #10B981 0%, #044E36 50%, transparent 80%)' }}
      />

      <div
        className="relative rounded-3xl border p-6 space-y-4"
        style={{
          background: 'linear-gradient(145deg, rgba(4,78,54,0.25) 0%, rgba(10,15,29,0.85) 100%)',
          borderColor: 'rgba(16,185,129,0.2)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 60px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
            <span className="w-3 h-3 rounded-full opacity-80" style={{ backgroundColor: '#10B981' }} />
          </div>
          <span className="text-xs font-mono text-slate-400">hefeed.stack v2.0</span>
        </div>

        {/* Code snippet */}
        <div
          className="rounded-xl p-4 font-mono text-xs leading-relaxed border"
          style={{ background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(16,185,129,0.12)' }}
        >
          <div className="text-slate-500">// HEFeed Unified Growth Engine</div>
          <div><span className="text-purple-400">const</span> <span className="text-blue-300">stack</span> <span className="text-white">=</span> <span className="text-yellow-300">&#123;</span></div>
          <div className="pl-4"><span className="text-slate-300">frontend</span><span className="text-white">:</span> <span className="text-green-400">'React / Next.js'</span><span className="text-white">,</span></div>
          <div className="pl-4"><span className="text-slate-300">backend</span><span className="text-white">:</span> <span className="text-green-400">'Node / Django / Laravel'</span><span className="text-white">,</span></div>
          <div className="pl-4"><span className="text-slate-300">marketing</span><span className="text-white">:</span> <span className="text-green-400">'Meta · Google · SEO'</span><span className="text-white">,</span></div>
          <div className="pl-4"><span className="text-slate-300">growth</span><span className="text-white">:</span> <span className="text-orange-400">true</span><span className="text-white">,</span></div>
          <div><span className="text-yellow-300">&#125;</span></div>
          <div className="mt-1">
            <span className="text-purple-400">return</span> <span className="text-blue-300">stack</span><span className="text-white">.</span><span className="text-yellow-200">deploy</span><span className="text-white">()</span>
            <span className="text-slate-400"> // 🚀 Success</span>
          </div>
        </div>

        {/* Funnel progress bars */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Growth Funnel</div>
          {[
            { label: 'Dev → Product', pct: 100, color: '#10B981' },
            { label: 'SEO → Traffic', pct: 84, color: '#D4AF37' },
            { label: 'Leads → Clients', pct: 68, color: '#10B981' },
            { label: 'Revenue Scale', pct: 91, color: '#D4AF37' },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="text-xs text-slate-400 w-32 flex-shrink-0">{row.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-slate-800">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                />
              </div>
              <span className="text-xs font-mono" style={{ color: row.color }}>{row.pct}%</span>
            </div>
          ))}
        </div>

        {/* Stat pills */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { val: '5+', label: 'Yrs Exp' },
            { val: '2.5K+', label: 'Leads/Mo' },
            { val: '100%', label: 'Delivery' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3 text-center border"
              style={{ background: 'rgba(4,78,54,0.3)', borderColor: 'rgba(16,185,129,0.2)' }}
            >
              <div className="text-lg font-extrabold" style={{ color: '#10B981' }}>{s.val}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Node map SVG */}
        <div className="relative h-24 mt-2">
          <svg viewBox="0 0 460 90" className="w-full h-full" fill="none">
            <line x1="80" y1="45" x2="180" y2="25" stroke="#044E36" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="80" y1="45" x2="180" y2="65" stroke="#044E36" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="180" y1="25" x2="290" y2="45" stroke="#10B981" strokeWidth="1.5" />
            <line x1="180" y1="65" x2="290" y2="45" stroke="#10B981" strokeWidth="1.5" />
            <line x1="290" y1="45" x2="390" y2="45" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="80" cy="45" r="18" fill="rgba(4,78,54,0.5)" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="180" cy="25" r="14" fill="rgba(4,78,54,0.4)" stroke="#10B981" strokeWidth="1" />
            <circle cx="180" cy="65" r="14" fill="rgba(4,78,54,0.4)" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="290" cy="45" r="18" fill="rgba(4,78,54,0.5)" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="390" cy="45" r="20" fill="rgba(16,185,129,0.2)" stroke="#D4AF37" strokeWidth="2" />
            <text x="80" y="49" textAnchor="middle" fontSize="7" fill="#10B981" fontWeight="bold">DEV</text>
            <text x="180" y="28" textAnchor="middle" fontSize="6" fill="#94a3b8">Web</text>
            <text x="180" y="68" textAnchor="middle" fontSize="6" fill="#94a3b8">App</text>
            <text x="290" y="49" textAnchor="middle" fontSize="7" fill="#10B981" fontWeight="bold">MKT</text>
            <text x="390" y="49" textAnchor="middle" fontSize="7" fill="#D4AF37" fontWeight="bold">ROI</text>
          </svg>
        </div>
      </div>
    </div>
  )
}
