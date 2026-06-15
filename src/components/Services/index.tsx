import { Code2, Megaphone, Briefcase, Layers } from 'lucide-react'
import ServiceCard, { type ServiceCardProps } from './ServiceCard'

const SERVICES: ServiceCardProps[] = [
  {
    icon: <Code2 size={26} />,
    badge: 'Software Development',
    title: 'Full-Stack Engineering',
    subtitle: 'Mobile & Web · ERP & CRM · E-Commerce',
    body: 'Turn raw data into actionable insights, ensuring your customer interactions run smoothly and maximize conversions. We architect custom digital products that scale from MVP to enterprise.',
    features: [
      'Custom Web & Mobile Applications (iOS / Android)',
      'ERP, CRM & Business Automation Systems',
      'E-Commerce Platforms with Payment Integration',
      'API Design, Cloud Infrastructure & DevOps',
    ],
    accentColor: '#10B981',
  },
  {
    icon: <Megaphone size={26} />,
    badge: 'Digital Marketing',
    title: 'Growth Marketing Architecture',
    subtitle: 'SMM · SEO · PPC · Lead Generation',
    body: 'Complete social media profile maintenance, high-intent lead generation, SEO, PPC, and traditional event or broadcast activations — all unified under one strategic roof.',
    features: [
      'Social Media Management & Content Strategy',
      'Meta, Google & LinkedIn Paid Advertising (PPC)',
      'Search Engine Optimization (On/Off Page)',
      'High-Intent Lead Generation Campaigns',
    ],
    accentColor: '#D4AF37',
  },
  {
    icon: <Briefcase size={26} />,
    badge: 'Business Consultancy',
    title: 'Strategic Planning & Scaling',
    subtitle: 'Operations · Formation · Manpower',
    body: 'Operations optimization, company formation, financial planning, and end-to-end manpower solutions tailored to scale your venture from idea stage through market leadership.',
    features: [
      'Business Formation & Legal Structuring',
      'Operations Optimization & Process Design',
      'Financial Planning & KPI Dashboard Setup',
      'End-to-End Talent & Manpower Solutions',
    ],
    accentColor: '#10B981',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(ellipse at center, #044E36 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <Layers size={13} /> Our Core Pillars
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Everything You Need,{' '}
            <span className="text-gradient-mint">Under One Roof</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Three integrated practices that work in concert to drive compounding growth for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
