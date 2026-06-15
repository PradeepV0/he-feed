import { Globe } from 'lucide-react'

const CLIENTS = [
  'DESQ Workspace', 'Regal Engineers & Contractors', 'Solarrays',
  'Shaai Salon', 'Qualitix Consulting', "Lin's Cafe",
  'DESQ Workspace', 'Regal Engineers & Contractors', 'Solarrays',
  'Shaai Salon', 'Qualitix Consulting', "Lin's Cafe",
]

export default function PartnerRibbon() {
  return (
    <section
      className="py-10 relative overflow-hidden border-y"
      style={{ borderColor: 'rgba(16,185,129,0.08)', background: 'rgba(4,78,54,0.06)' }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0F1D, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0F1D, transparent)' }} />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {CLIENTS.map((name, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <Globe size={12} color="#10B981" />
              </div>
              <span className="text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <span className="text-xs text-slate-600 uppercase tracking-widest">
          Trusted across industries — Real Estate · Tech · Hospitality · Engineering · Wellness
        </span>
      </div>
    </section>
  )
}
