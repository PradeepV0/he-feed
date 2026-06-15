import { useState } from 'react'
import { ArrowRight, Workflow } from 'lucide-react'
import { PROCESS_STEPS } from './processData'

export default function ProcessSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section
      id="process"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0F1D 0%, #061210 50%, #0A0F1D 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-64 rounded-full blur-3xl opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #10B981, #044E36, transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <Workflow size={13} /> How We Work
          </span>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Growth Delivered{' '}
            <span
              className="font-medium italic"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#D4AF37',
                fontSize: '1.05em',
              }}
            >
              End-to-End
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            From the first consultation to compounding scale — our integrated five-step process
            eliminates guesswork and delivers momentum at every stage.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {PROCESS_STEPS.map((step) => {
            const isActive = active === step.num

            return (
              <div
                key={step.num}
                className="flex flex-col gap-3 group"
                onMouseEnter={() => setActive(step.num)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden cursor-default"
                  style={{
                    aspectRatio: '4/3',
                    background: isActive
                      ? `linear-gradient(145deg, rgba(4,78,54,0.45) 0%, rgba(10,15,29,0.95) 100%)`
                      : 'linear-gradient(145deg, rgba(4,78,54,0.18) 0%, rgba(10,15,29,0.9) 100%)',
                    border: `1.5px solid ${isActive ? step.accent + '55' : 'rgba(255,255,255,0.06)'}`,
                    boxShadow: isActive
                      ? `0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px ${step.accent}20`
                      : '0 4px 20px rgba(0,0,0,0.25)',
                    transform: isActive ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Inner glow on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: isActive ? 1 : 0,
                      background: `radial-gradient(ellipse at 30% 30%, ${step.accent}15 0%, transparent 65%)`,
                    }}
                  />

                  {/* SVG illustration */}
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    {step.pattern}
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold transition-all duration-300"
                    style={{
                      background: isActive ? step.accent : 'rgba(255,255,255,0.08)',
                      color: isActive ? '#0A0F1D' : step.accent,
                      border: `1.5px solid ${step.accent}50`,
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Accent line at bottom on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </div>

                {/* Label + desc */}
                <div className="text-center space-y-1 px-1">
                  <p
                    className="text-xs font-bold tracking-wide text-white transition-colors duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.num}. {step.title}
                  </p>
                  {/* Description expands on hover */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isActive ? '80px' : '0', opacity: isActive ? 1 : 0 }}
                  >
                    <p className="text-xs text-slate-400 leading-snug pt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline connector — desktop only */}
        <div className="hidden lg:block mt-6 relative px-[9%]">
          {/* Connecting line */}
          <div
            className="absolute top-4 left-[9%] right-[9%] h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.25), rgba(212,175,55,0.3), rgba(16,185,129,0.25), transparent)',
            }}
          />
          <div className="flex items-center justify-between">
            {PROCESS_STEPS.map((step) => {
              const isActive = active === step.num
              return (
                <div
                  key={step.num}
                  className="relative z-10 flex items-center justify-center w-8 h-8"
                  onMouseEnter={() => setActive(step.num)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Outer ring */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive ? step.accent + '20' : 'rgba(10,15,29,0.9)',
                      border: `2px solid ${isActive ? step.accent : step.accent + '40'}`,
                      boxShadow: isActive ? `0 0 0 4px ${step.accent}20` : 'none',
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{ background: isActive ? step.accent : step.accent + '60' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#10B981' }}
          >
            Explore All Services
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #044E36, #10B981)',
              boxShadow: '0 4px 24px rgba(16,185,129,0.3)',
            }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
