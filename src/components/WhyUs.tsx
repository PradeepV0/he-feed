import { ArrowRight, Star, Globe, Code2, Shield, Layers, CheckCircle2 } from 'lucide-react'

const PILLS = [
  {
    icon: <Layers size={20} />,
    title: 'End-to-End Solutions',
    desc: 'One team, one invoice — from ideation and development through launch, marketing, and scale.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Digital Marketing Mastery',
    desc: 'Proven campaigns across Meta, Google, SEO, and emerging channels — driven by analytics, not guesswork.',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Customized Software Development',
    desc: 'No templates. Every product is engineered to your exact workflow, stack, and growth trajectory.',
  },
  {
    icon: <Star size={20} />,
    title: 'Proven Expertise Since 2019',
    desc: 'Over 5 years serving clients across Real Estate, Hospitality, Engineering, SaaS, and Retail.',
  },
  {
    icon: <Shield size={20} />,
    title: 'One-Stop Partnership',
    desc: 'Strategy, execution, and optimization all live under one roof — eliminating vendor fragmentation for good.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 opacity-10"
          style={{ background: 'radial-gradient(ellipse at center left, #044E36, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <Shield size={13} /> Why Partner With Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              We don't just provide services —{' '}
              <span className="text-gradient-mint">We create success stories.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every client engagement at HEFeed is treated as a partnership built for long-term
              compounding returns. We're not a vendor. We're the growth team you never had —
              embedded, accountable, and obsessed with your results.
            </p>
            <blockquote className="border-l-4 pl-5 py-2 italic text-slate-300" style={{ borderColor: '#D4AF37' }}>
              "HEFeed's integrated approach helped us cut our cost per acquisition by 64% while
              tripling our qualified pipeline — in under 90 days."
              <footer className="text-sm text-slate-500 mt-2 not-italic">— Client, Real Estate Sector</footer>
            </blockquote>
            <div className="flex gap-8 pt-2">
              {[
                { val: '60+', label: 'Active Clients' },
                { val: '5+', label: 'Years in Market' },
                { val: '3', label: 'Integrated Practices' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold" style={{ color: '#10B981' }}>{s.val}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #044E36, #10B981)', boxShadow: '0 4px 24px rgba(16,185,129,0.3)' }}
            >
              Start Your Growth Journey <ArrowRight size={17} />
            </a>
          </div>

          {/* Right: pill checklist */}
          <div className="space-y-3">
            {PILLS.map((pill, i) => (
              <div
                key={pill.title}
                className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-x-1 group"
                style={{
                  background: 'rgba(4,78,54,0.12)',
                  borderColor: i % 2 === 0 ? 'rgba(16,185,129,0.2)' : 'rgba(212,175,55,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: i % 2 === 0 ? 'rgba(16,185,129,0.15)' : 'rgba(212,175,55,0.12)',
                    color: i % 2 === 0 ? '#10B981' : '#D4AF37',
                  }}
                >
                  {pill.icon}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{pill.title}</div>
                  <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{pill.desc}</p>
                </div>
                <CheckCircle2
                  size={18}
                  className="ml-auto flex-shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#10B981' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
