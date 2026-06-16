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
      style={{
        borderColor: 'rgba(16,185,129,0.1)',
        background: 'linear-gradient(180deg, rgba(4,78,54,0.08) 0%, rgba(10,15,29,0.95) 100%)',
      }}
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-8 text-slate-500">
        Trusted by 60+ clients across industries
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0F1D 20%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0F1D 20%, transparent)' }} />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-14 whitespace-nowrap px-4">
          {TRACK.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              draggable={false}
              className="flex-shrink-0 transition-opacity duration-300"
              style={{ height: '72px', width: 'auto', maxWidth: '200px', objectFit: 'contain', opacity: 0.8 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.8' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
