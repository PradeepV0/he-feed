import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              HE
            </span>
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#D4AF37', boxShadow: '0 0 8px #D4AF3780' }}
            />
            <span className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Feed
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 group"
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#10B981' }}
                />
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 animate-pulse-glow hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #044E36, #10B981)',
                boxShadow: '0 0 20px rgba(16,185,129,0.3)',
              }}
            >
              Get Free Consultation
              <ChevronRight size={15} />
            </a>
            <button
              className="md:hidden text-slate-300 hover:text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,15,29,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1 border-t border-slate-800/60">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-4 rounded-xl text-center text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #044E36, #10B981)' }}
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
