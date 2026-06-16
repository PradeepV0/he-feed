import { ArrowRight, Target, Eye, Heart, Users, Zap, Globe, Code2, BarChart3, Shield, Star, CheckCircle2 } from 'lucide-react'
import ContactFooter from '../components/Contact'

// ─── 1. HERO ─────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      className="relative pt-36 pb-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A0F1D 0%, #07170F 55%, #0A0F1D 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}
        >
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" /> About HEFeed
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          The Agency Built to{' '}
          <span className="text-gradient-mint">Guarantee Your Growth</span>
        </h1>
        <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          HEFeed is a full-service integrated growth agency combining Software Development,
          Digital Marketing, and Business Consultancy — delivering measurable, data-backed results
          for 60+ clients across India since 2019.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #044E36, #10B981)', boxShadow: '0 4px 24px rgba(16,185,129,0.3)' }}
          >
            Work With Us <ArrowRight size={17} />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all duration-300 hover:scale-105"
            style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37' }}
          >
            <Star size={16} /> See Our Results
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── 2. OUR STORY ────────────────────────────────────────────────────────────
const MILESTONES = [
  { year: '2019', title: 'Founded in Chennai', desc: 'Started as a boutique digital marketing agency with 3 clients and a bold vision to integrate marketing and technology under one roof.' },
  { year: '2021', title: 'Expanded to Software', desc: 'Launched our Software Development practice, enabling end-to-end product delivery — from strategy and design to full-stack engineering.' },
  { year: '2022', title: '30+ Clients Milestone', desc: 'Crossed 30 active clients across Real Estate, Hospitality, Engineering, and SaaS verticals. Opened dedicated delivery teams for each practice.' },
  { year: '2023', title: 'Lead Gen Breakthrough', desc: 'Pioneered hyper-targeted creative frameworks that drove 1,000+ leads per campaign at 70%+ below industry CPL benchmarks.' },
  { year: '2024', title: '60+ Clients & Growing', desc: 'Serving 60+ active clients with an integrated stack — Software, Marketing, and Consultancy — delivering guaranteed, compounding growth.' },
]

function OurStory() {
  return (
    <section className="py-24 relative" style={{ background: '#0A0F1D' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              5+ Years of Building{' '}
              <span className="text-gradient-mint">Guaranteed Success</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              HEFeed was born out of frustration. Our founders watched businesses pour money into
              siloed agencies — one for ads, another for websites, another for strategy — with no
              one accountable for the overall result.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We built HEFeed to be different: a single integrated team that owns your growth
              end-to-end. From ideation to execution, from first click to closed deal — we are
              the one growth partner you will ever need.
            </p>
            <div className="flex gap-10 pt-3">
              {[{ val: '60+', label: 'Clients' }, { val: '5+', label: 'Years' }, { val: '₹24', label: 'Avg CPL' }].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold" style={{ color: '#10B981' }}>{s.val}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative space-y-0">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 z-10"
                    style={{ background: i % 2 === 0 ? 'rgba(16,185,129,0.2)' : 'rgba(212,175,55,0.2)', color: i % 2 === 0 ? '#10B981' : '#D4AF37', border: `1px solid ${i % 2 === 0 ? '#10B981' : '#D4AF37'}40` }}
                  >
                    {m.year.slice(2)}
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: 'rgba(16,185,129,0.15)' }} />
                  )}
                </div>
                <div className="pb-7 pt-1 space-y-1">
                  <div className="text-xs font-bold" style={{ color: '#10B981' }}>{m.year}</div>
                  <div className="text-white font-bold text-sm">{m.title}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 3. MISSION & VISION ─────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #060D0A 0%, #0A0F1D 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            Mission & Vision
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">What Drives Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="rounded-3xl p-8 border space-y-5"
            style={{ background: 'linear-gradient(145deg, rgba(4,78,54,0.2), rgba(10,15,29,0.95))', borderColor: 'rgba(16,185,129,0.2)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              <Target size={26} color="#10B981" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To eliminate the gap between marketing and technology by delivering integrated,
              accountable growth solutions that generate measurable ROI for every client we serve —
              regardless of industry, budget, or stage.
            </p>
            <ul className="space-y-2.5">
              {['Guaranteed, data-backed results', 'Full-funnel ownership from day one', 'One team, one invoice, zero fragmentation'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={15} color="#10B981" className="flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div
            className="rounded-3xl p-8 border space-y-5"
            style={{ background: 'linear-gradient(145deg, rgba(212,175,55,0.08), rgba(10,15,29,0.95))', borderColor: 'rgba(212,175,55,0.2)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <Eye size={26} color="#D4AF37" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To become India's most trusted integrated growth agency — where every business,
              from startup to enterprise, can access world-class software, marketing, and strategy
              expertise under one unified partnership.
            </p>
            <ul className="space-y-2.5">
              {["India's #1 integrated growth partner", 'Serving 500+ clients by 2027', 'Setting the benchmark for CPL efficiency'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={15} color="#D4AF37" className="flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 4. CORE VALUES ──────────────────────────────────────────────────────────
const VALUES = [
  { icon: <Shield size={22} />, title: 'Accountability', desc: "We own the outcome, not just the output. If results don't materialize, we don't rest.", color: '#10B981' },
  { icon: <BarChart3 size={22} />, title: 'Data First', desc: 'Every decision — creative, technical, or strategic — is grounded in real metrics, not gut feel.', color: '#D4AF37' },
  { icon: <Heart size={22} />, title: 'Client Obsession', desc: 'Your success is our KPI. We measure ourselves by your growth, not by deliverables.', color: '#10B981' },
  { icon: <Zap size={22} />, title: 'Speed & Precision', desc: 'We move fast without cutting corners. Rapid iterations, surgical execution, zero wasted cycles.', color: '#D4AF37' },
  { icon: <Globe size={22} />, title: 'Integrated Thinking', desc: 'We break silos. Marketing, engineering, and strategy speak the same language at HEFeed.', color: '#10B981' },
  { icon: <Code2 size={22} />, title: 'Craft & Quality', desc: "From pixel-perfect UIs to campaign creatives — we never ship something we wouldn't be proud of.", color: '#D4AF37' },
]

function CoreValues() {
  return (
    <section className="py-24 relative" style={{ background: '#0A0F1D' }}>
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse at center, #044E36, transparent 70%)' }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <Heart size={12} /> Core Values
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            The Principles Behind{' '}
            <span className="text-gradient-mint">Every Decision</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-6 border space-y-3 transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: 'rgba(4,78,54,0.1)', borderColor: `${v.color}20` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${v.color}15`, color: v.color, border: `1px solid ${v.color}30` }}
              >
                {v.icon}
              </div>
              <h3 className="font-bold text-white">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 5. TEAM ─────────────────────────────────────────────────────────────────
const TEAM = [
  { name: 'Founder & CEO', role: 'Strategy & Vision', dept: 'Leadership', initial: 'VS', color: '#10B981' },
  { name: 'Growth Lead', role: 'Head of Digital Marketing', dept: 'Paid Media & SEO', initial: 'GL', color: '#D4AF37' },
  { name: 'Tech Lead', role: 'Head of Engineering', dept: 'Software & Product', initial: 'TL', color: '#10B981' },
  { name: 'Creative Head', role: 'Brand & Design Lead', dept: 'Creative & UX', initial: 'CH', color: '#D4AF37' },
]

function OurTeam() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, #060D0A 0%, #0A0F1D 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <Users size={12} /> Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            The People Behind{' '}
            <span className="text-gradient-mint">Your Growth</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A tight-knit, multi-disciplinary team obsessed with one thing: your results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 border text-center space-y-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(145deg, rgba(4,78,54,0.15), rgba(10,15,29,0.95))',
                borderColor: `${member.color}25`,
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto"
                style={{ background: `${member.color}18`, color: member.color, border: `1px solid ${member.color}35` }}
              >
                {member.initial}
              </div>
              <div>
                <div className="text-white font-bold">{member.name}</div>
                <div className="text-sm font-medium mt-0.5" style={{ color: member.color }}>{member.role}</div>
                <div className="text-xs text-slate-500 mt-1">{member.dept}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm">
          … and a full bench of specialist marketers, developers, and strategists behind them.
        </p>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1D', color: '#fff' }}>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <OurTeam />
      <ContactFooter />
    </div>
  )
}
