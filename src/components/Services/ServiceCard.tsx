import { useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export type ServiceCardProps = {
  icon: React.ReactNode
  badge: string
  title: string
  subtitle: string
  body: string
  features: string[]
  accentColor: string
}

export default function ServiceCard({ icon, badge, title, subtitle, body, features, accentColor }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl p-7 flex flex-col gap-5 cursor-default transition-all duration-300 hover:-translate-y-2 border group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(145deg, rgba(4,78,54,0.35) 0%, rgba(10,15,29,0.95) 100%)'
          : 'linear-gradient(145deg, rgba(4,78,54,0.12) 0%, rgba(10,15,29,0.9) 100%)',
        borderColor: hovered ? accentColor + '60' : 'rgba(255,255,255,0.06)',
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${accentColor}30`
          : '0 4px 24px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Glow overlay */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: `radial-gradient(ellipse at top left, ${accentColor}12 0%, transparent 60%)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${accentColor}25, ${accentColor}10)`,
          border: `1px solid ${accentColor}40`,
          boxShadow: hovered ? `0 0 20px ${accentColor}30` : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <span style={{ color: accentColor }}>{icon}</span>
      </div>

      {/* Badge */}
      <span
        className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold"
        style={{ background: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}30` }}
      >
        {badge}
      </span>

      {/* Title */}
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm font-medium" style={{ color: accentColor }}>{subtitle}</p>
      </div>

      {/* Body */}
      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>

      {/* Features */}
      <ul className="space-y-2 mt-auto">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all duration-200 group-hover:gap-3"
        style={{ color: accentColor }}
      >
        Learn More <ArrowRight size={15} />
      </a>
    </div>
  )
}
