import adore from '../assets/clientLogos/adore.png'
import desq from '../assets/clientLogos/desq.png'
import dvs from '../assets/clientLogos/dvs.png'
import energy from '../assets/clientLogos/energy .png'
import groming from '../assets/clientLogos/groming.png'
import iec from '../assets/clientLogos/iec.png'
import jolie from '../assets/clientLogos/jolie.png'
import lin from '../assets/clientLogos/lin.png'
import qabar from '../assets/clientLogos/qa bar.png'
import solar from '../assets/clientLogos/solar.png'

const LOGOS = [
  { src: adore, alt: 'Adore' },
  { src: desq, alt: 'DESQ' },
  { src: dvs, alt: 'DVS' },
  { src: energy, alt: 'Energy' },
  { src: groming, alt: 'Grooming' },
  { src: iec, alt: 'IEC' },
  { src: jolie, alt: 'Jolie' },
  { src: lin, alt: "Lin's" },
  { src: qabar, alt: 'QA Bar' },
  { src: solar, alt: 'Solar' },
]

const TRACK = [...LOGOS, ...LOGOS]

export default function PartnerRibbon() {
  return (
    <section className="py-14 relative overflow-hidden border-y"
      style={{ borderColor: 'rgba(16,185,129,0.1)', background: 'rgba(4,78,54,0.07)' }}
    >
      {/* Heading */}
      <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-10">
        Trusted by 60+ clients across industries
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0F1D 30%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0F1D 30%, transparent)' }} />

      {/* Scrolling track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap" style={{ gap: '3rem' }}>
          {TRACK.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 cursor-default"
              style={{
                width: '160px',
                height: '72px',
                padding: '10px 16px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(16,185,129,0.08)',
                filter: 'grayscale(1) brightness(0.55)',
                opacity: 0.65,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.filter = 'grayscale(0) brightness(1)'
                el.style.opacity = '1'
                el.style.background = 'rgba(255,255,255,0.08)'
                el.style.borderColor = 'rgba(16,185,129,0.25)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.filter = 'grayscale(1) brightness(0.55)'
                el.style.opacity = '0.65'
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(16,185,129,0.08)'
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: '48px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
