import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react'

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const SOCIALS = [
  { icon: <IconX />, href: '#', label: 'X (Twitter)' },
  { icon: <IconLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <IconInstagram />, href: '#', label: 'Instagram' },
  { icon: <IconFacebook />, href: '#', label: 'Facebook' },
  { icon: <IconYoutube />, href: '#', label: 'YouTube' },
]

const CONTACT_ITEMS = [
  { icon: <Mail size={17} />, label: 'Email', value: 'hello@hefeed.co' },
  { icon: <Phone size={17} />, label: 'Phone', value: '+91 98765 43210' },
  { icon: <MapPin size={17} />, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
]

type FormState = { name: string; email: string; service: string; message: string }

export default function ContactFooter() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    borderColor: 'rgba(16,185,129,0.2)',
  }
  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 border outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/30'

  return (
    <footer
      id="contact"
      style={{ background: 'linear-gradient(180deg, #0A0F1D 0%, #050A0F 100%)', borderTop: '1px solid rgba(16,185,129,0.1)' }}
    >
      {/* CTA banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #044E36, #07291D)' }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Transform <span style={{ color: '#D4AF37' }}>Your Business?</span>
          </h2>
          <p className="text-slate-200 text-lg max-w-xl mx-auto">
            Over 5 years of delivering guaranteed growth. Your next chapter starts with one conversation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 mt-2"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Book Your Free Call <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-white">HE</span>
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#D4AF37', boxShadow: '0 0 10px #D4AF37' }} />
              <span className="text-3xl font-extrabold text-white">Feed</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              HEFeed is a full-service integrated growth agency delivering Software Development,
              Digital Marketing, and Business Consultancy under one roof — with 5+ years of
              proven, data-backed results.
            </p>
            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm text-slate-200 font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(16,185,129,0.2)', color: '#94a3b8' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = '#10B981'
                    el.style.borderColor = 'rgba(16,185,129,0.6)'
                    el.style.background = 'rgba(16,185,129,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = '#94a3b8'
                    el.style.borderColor = 'rgba(16,185,129,0.2)'
                    el.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div
              className="rounded-3xl p-8 border space-y-6"
              style={{
                background: 'linear-gradient(145deg, rgba(4,78,54,0.15), rgba(10,15,29,0.95))',
                borderColor: 'rgba(16,185,129,0.15)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white">Book a Free Consultation</h3>
                <p className="text-sm text-slate-400">No commitments. Just a focused strategy call to unlock your next growth phase.</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ background: 'rgba(16,185,129,0.15)', border: '2px solid #10B981' }}
                  >
                    <CheckCircle2 size={32} color="#10B981" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto">
                    Our team will reach out within 24 hours. Prepare for growth.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name *</label>
                      <input name="name" type="text" required placeholder="Rajesh Kumar"
                        value={form.name} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Company Email *</label>
                      <input name="email" type="email" required placeholder="you@company.com"
                        value={form.email} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Service Needed *</label>
                    <select name="service" required value={form.service} onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, color: form.service ? '#fff' : '#64748b' }}>
                      <option value="" disabled>Select a service…</option>
                      <option value="software">Software Development (Web / Mobile / ERP)</option>
                      <option value="marketing">Digital Marketing (SEO / PPC / SMM)</option>
                      <option value="leads">Lead Generation Campaign</option>
                      <option value="consultancy">Business Consultancy & Strategy</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="all">Full-Service Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Your Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your business goals…"
                      value={form.message} onChange={handleChange}
                      className={`${inputClass} resize-none`} style={inputStyle} />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #044E36, #10B981)', boxShadow: '0 4px 24px rgba(16,185,129,0.3)' }}>
                    <Send size={18} /> Send Consultation Request
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} HEFeed. All rights reserved. Integrated Stack Development &amp; Marketing.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
