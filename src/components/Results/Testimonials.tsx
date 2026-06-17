import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Pradeep',
    company: 'Digital Marketing Client',
    service: 'Digital Marketing',
    initial: 'PR',
    color: '#10B981',
    text: 'hefeed ran our Meta and Google campaigns with surgical precision. Within 45 days our leads doubled and cost per lead dropped by 68%. Their creative frameworks and targeting strategy is on another level entirely.',
  },
  {
    name: 'Dhivya Dharashini',
    company: 'Software Development Client',
    service: 'Software Development',
    initial: 'DD',
    color: '#D4AF37',
    text: 'The custom ERP platform Hefeed built for us replaced three different tools we were using. Clean UI, fast performance, and they delivered on time. Our operations team adapted to it within a week — zero friction.',
  },
  {
    name: 'Hariharan',
    company: 'Interior Design Client',
    service: 'Interior Design',
    initial: 'HH',
    color: '#10B981',
    text: 'HEFEED designed and launched our interior studio website with a stunning portfolio showcase. Enquiries from the site went up 3x in the first month. The design perfectly captures our brand aesthetic.',
  },
  {
    name: 'Jerish',
    company: 'Analytics & Strategy Client',
    service: 'Business Analytics',
    initial: 'JR',
    color: '#D4AF37',
    text: 'The analytics dashboard he feed built gave us real-time visibility into our sales funnel for the first time. We identified two major revenue leaks within the first week and fixed them immediately. Game changer.',
  },
  {
    name: 'Akther',
    company: 'Digital Marketing Client',
    service: 'Digital Marketing',
    initial: 'AK',
    color: '#10B981',
    text: 'Our Instagram and Facebook presence was almost zero before Hefeed. In 60 days they grew our following by 4,200 and converted 380+ of them into paying customers. ROI was beyond what we expected.',
  },
  {
    name: 'Vickey',
    company: 'Software Development Client',
    service: 'Software Development',
    initial: 'VK',
    color: '#D4AF37',
    text: 'We needed a mobile app built fast and built right. HEFEED delivered a fully functional iOS and Android app in 8 weeks. The code quality, documentation, and post-launch support were all excellent.',
  },
  {
    name: 'Vishva',
    company: 'Analytics & Strategy Client',
    service: 'Business Analytics',
    initial: 'VS',
    color: '#10B981',
    text: 'he-feed audited our entire marketing spend and showed us exactly where money was being wasted. Their data-driven strategy cut our ad budget by 30% while increasing total conversions by 55%. Brilliant team.',
  },
  {
    name: 'Jeevan',
    company: 'Interior Design Client',
    service: 'Interior Design',
    initial: 'JV',
    color: '#D4AF37',
    text: 'We hired HeFeed to build our interior design brand from scratch — logo, website, social media, and lead generation. In 3 months we had more project inquiries than we could handle. Truly a full-service partner.',
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
                    <div className="text-xs italic mt-0.5" style={{ color: t.color }}>{t.service}</div>
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
