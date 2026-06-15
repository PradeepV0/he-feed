import { ArrowRight, Star, Users, BarChart3, Zap } from 'lucide-react'
import HeroDashboard from './HeroDashboard'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A0F1D 0%, #07170F 50%, #0A0F1D 100%)' }}
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: 'radial-gradient(ellipse at top right, #044E36, transparent 70%)' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
              style={{ background: 'rgba(4,78,54,0.2)', borderColor: 'rgba(16,185,129,0.3)', color: '#10B981' }}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              Integrated Stack Development &amp; Marketing
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
                Your One-Stop <br />Solution for{' '}
                <span className="text-gradient-mint">Business Success</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
                From Strategy to Execution, We Handle It All! Turning your vision into guaranteed
                reality across all industries — with precision, speed, and measurable results.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-gradient"
                style={{
                  background: 'linear-gradient(135deg, #044E36, #10B981, #044E36)',
                  boxShadow: '0 4px 24px rgba(16,185,129,0.35)',
                }}
              >
                Explore Solutions <ArrowRight size={18} />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 border"
                style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37' }}
              >
                <Star size={17} /> Watch Success Stories
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { icon: <Users size={16} />, text: '60+ Clients Served' },
                { icon: <BarChart3 size={16} />, text: '5+ Years of Excellence' },
                { icon: <Zap size={16} />, text: 'End-to-End Delivery' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span style={{ color: '#10B981' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
