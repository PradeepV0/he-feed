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
  { src: adore, alt: 'Salon Adore' },
  { src: desq, alt: 'DESQ Workspace' },
  { src: dvs, alt: 'DVS' },
  { src: energy, alt: 'Energy Entertainment' },
  { src: groming, alt: 'Grooming' },
  { src: iec, alt: 'Innovative Engineers & Consultants' },
  { src: jolie, alt: 'Jolie Robe' },
  { src: lin, alt: "Lin's Cafe" },
  { src: qabar, alt: 'Qualitix Consulting' },
  { src: solar, alt: 'Solar' },
]

const TRACK = [...LOGOS, ...LOGOS]

export default function PartnerRibbon() {
  return (
    <section
      className="py-12 relative overflow-hidden border-y"
      style={{ borderColor: 'rgba(16,185,129,0.1)', background: 'rgba(4,78,54,0.06)' }}
    >
      <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
        Trusted by 60+ clients across industries
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0F1D 20%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0F1D 20%, transparent)' }} />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {TRACK.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
              style={{
                width: '180px',
                height: '80px',
                padding: '12px 20px',
                borderRadius: '12px',
                background: '#ffffff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(16,185,129,0.3)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.85'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.25)'
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: '56px', width: '100%', objectFit: 'contain' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
