import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    company: 'PropNest Realty',
    initial: 'AM',
    color: '#10B981',
    text: 'HEFeed delivered 2,500+ qualified leads in just two months at ₹19 per lead — 81% below industry average. Their hyper-local targeting and WhatsApp automation funnel was unlike anything we had seen before.',
  },
  {
    name: 'Sneha Rajan',
    company: 'CloudPilot SaaS',
    initial: 'SR',
    color: '#D4AF37',
    text: 'We went from zero inbound leads to 1,000+ high-intent sign-ups in under 30 days. The creative frameworks HEFeed built for our Meta campaigns were razor-sharp. They built a repeatable growth engine for us.',
  },
  {
    name: 'Karthik Subramaniam',
    company: 'NovaBuild Engineering',
    initial: 'KS',
    color: '#10B981',
    text: 'From branding to website to Google Ads — HEFeed handled everything under one roof. Our cost per acquisition dropped 64% in 90 days and our qualified pipeline tripled. Best business decision we made.',
  },
  {
    name: 'Priya Nair',
    company: 'LuxeStay Hospitality',
    initial: 'PN',
    color: '#D4AF37',
    text: 'The custom booking platform reduced our front-desk load by 40% and boosted online reservations significantly. Their team truly understood our business before writing a single line of code.',
  },
  {
    name: 'Rahul Sharma',
    company: 'TechNova Solutions',
    initial: 'RS',
    color: '#10B981',
    text: 'HEFeed transformed our digital presence completely. Within 60 days of the campaign launch, our inbound inquiries tripled and our brand visibility across South India improved dramatically.',
  },
]

const VISIBLE = 3

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const total = TESTIMONIALS.length
  const maxIndex = total - VISIBLE

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  const visible = TESTIMONIALS.slice(index, index + VISIBLE)

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #07170F 0%, #0A0F1D 50%, #07170F 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #10B981, transparent)', transform: 'translateY(-50%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-center">

          {/* ── Left Panel ── */}
          <div className="space-y-8">
            {/* Big quote badge */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #044E36, #10B981)', boxShadow: '0 8px 32px rgba(16,185,129,0.4)' }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                <path d="M11.3 6C8 7.1 5.9 9.7 5.9 12.8v.1c.3-.1.7-.1 1-.1 2.1 0 3.7 1.6 3.7 3.7S9 20.2 6.9 20.2 3.2 18.6 3.2 16.5c0-4.7 3.3-8.7 8.1-10.5zm9.5 0c-3.3 1.1-5.4 3.7-5.4 6.8v.1c.3-.1.7-.1 1-.1 2.1 0 3.7 1.6 3.7 3.7s-1.6 3.7-3.7 3.7-3.7-1.6-3.7-3.7c0-4.7 3.3-8.7 8.1-10.5z"/>
              </svg>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                What Our{' '}
                <span className="text-gradient-mint">Clients Say</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Real words from real partners who experienced guaranteed growth firsthand. 60+ businesses transformed across industries.
              </p>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
              ))}
              <span className="text-slate-400 text-sm ml-1">5.0 average rating</span>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={index === 0}
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 disabled:opacity-30"
                style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#10B981' }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                disabled={index === maxIndex}
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 disabled:opacity-30"
                style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#10B981' }}
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? '20px' : '8px',
                      height: '8px',
                      background: i === index ? '#10B981' : 'rgba(16,185,129,0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Panel: Cards ── */}
          <div className="grid grid-cols-3 gap-4 relative">
            {visible.map((t, i) => (
              <div
                key={t.name}
                className="relative flex flex-col rounded-2xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(160deg, rgba(4,78,54,0.18) 0%, rgba(10,15,29,0.96) 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: i === 1 ? '0 8px 40px rgba(16,185,129,0.15)' : '0 4px 24px rgba(0,0,0,0.4)',
                  transform: i === 1 ? 'translateY(-8px)' : 'none',
                }}
              >
                {/* Avatar sticking out from top */}
                <div className="flex justify-center pt-6 pb-2">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}cc, ${t.color}66)`,
                      border: `2px solid ${t.color}60`,
                      boxShadow: `0 4px 20px ${t.color}40`,
                    }}
                  >
                    {t.initial}
                  </div>
                </div>

                <div className="px-5 pb-6 flex flex-col gap-3 flex-1">
                  {/* Quote icon */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: t.color }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M11.3 6C8 7.1 5.9 9.7 5.9 12.8v.1c.3-.1.7-.1 1-.1 2.1 0 3.7 1.6 3.7 3.7S9 20.2 6.9 20.2 3.2 18.6 3.2 16.5c0-4.7 3.3-8.7 8.1-10.5zm9.5 0c-3.3 1.1-5.4 3.7-5.4 6.8v.1c.3-.1.7-.1 1-.1 2.1 0 3.7 1.6 3.7 3.7s-1.6 3.7-3.7 3.7-3.7-1.6-3.7-3.7c0-4.7 3.3-8.7 8.1-10.5z"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-slate-300 text-xs leading-relaxed flex-1">
                    {t.text}
                  </p>

                  {/* Client info */}
                  <div className="pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs italic mt-0.5" style={{ color: t.color }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
