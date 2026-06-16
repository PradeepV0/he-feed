import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, PropNest Realty',
    industry: 'Real Estate',
    rating: 5,
    text: 'HEFeed delivered 2,500+ qualified leads in just two months at ₹19 per lead — 81% below the industry average. Their hyper-local targeting and WhatsApp automation funnel was unlike anything we had seen before. Absolutely transformed our pipeline.',
    color: '#10B981',
  },
  {
    name: 'Sneha Rajan',
    role: 'Head of Growth, CloudPilot SaaS',
    industry: 'B2B SaaS',
    rating: 5,
    text: 'We went from zero inbound leads to 1,000+ high-intent sign-ups in under 30 days. The creative frameworks HEFeed built for our Meta campaigns were razor-sharp. They did not just run ads — they built a repeatable growth engine for us.',
    color: '#D4AF37',
  },
  {
    name: 'Karthik Subramaniam',
    role: 'CEO, NovaBuild Engineering',
    industry: 'Engineering & Manufacturing',
    rating: 5,
    text: 'From branding to website to Google Ads — HEFeed handled everything under one roof. Our cost per acquisition dropped 64% in 90 days and our qualified pipeline tripled. Partnering with them was the best business decision we made last year.',
    color: '#10B981',
  },
  {
    name: 'Priya Nair',
    role: 'Director, LuxeStay Hospitality',
    industry: 'Hospitality',
    rating: 5,
    text: 'The custom booking platform they built reduced our front-desk load by 40% and boosted online reservations significantly. Their team truly understood our business before writing a single line of code. Professional, prompt, and results-driven.',
    color: '#D4AF37',
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#D4AF37" color="#D4AF37" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 relative" style={{ background: 'linear-gradient(180deg, #060D0A 0%, #0A0F1D 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <Star size={12} fill="#D4AF37" /> Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Trusted by{' '}
            <span className="text-gradient-mint">60+ Clients</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real words from real partners who experienced guaranteed growth firsthand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, rgba(4,78,54,0.15) 0%, rgba(10,15,29,0.95) 100%)',
                borderColor: `${t.color}25`,
                boxShadow: '0 4px 30px rgba(0,0,0,0.35)',
              }}
            >
              {/* Quote icon */}
              <Quote size={28} style={{ color: t.color, opacity: 0.4 }} />

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{t.role}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRow count={t.rating} />
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${t.color}18`, color: t.color }}
                  >
                    {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
