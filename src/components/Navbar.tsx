import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import heFeedLogo from '../assets/heFeedLogo.png'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

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
          <Link to="/" className="flex items-center group">
            <img
              src={heFeedLogo}
              alt="HEFeed"
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const active = location.pathname === l.href
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className="relative text-sm font-medium transition-colors duration-200 group"
                  style={{ color: active ? '#10B981' : '#cbd5e1' }}
                >
                  {l.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: '#10B981',
                      width: active ? '100%' : '0%',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 animate-pulse-glow hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #044E36, #10B981)',
                boxShadow: '0 0 20px rgba(16,185,129,0.3)',
              }}
            >
              Get Free Consultation
              <ChevronRight size={15} />
            </Link>
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
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,15,29,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-1 border-t border-slate-800/60">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 hover:bg-slate-800/50 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: location.pathname === l.href ? '#10B981' : '#cbd5e1' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-4 rounded-xl text-center text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #044E36, #10B981)' }}
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  )
}
