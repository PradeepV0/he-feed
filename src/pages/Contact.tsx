import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageCircle } from 'lucide-react'
import heFeedLogo from '../assets/heFeedLogo.png'

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

const CONTACT_ITEMS = [
  { icon: <Mail size={20} />, label: 'Email Us', value: 'hefeedofficial@gmail.com', href: 'mailto:hefeedofficial@gmail.com', color: '#10B981' },
  { icon: <Phone size={20} />, label: 'Call Us', value: '+91 94459 48121', href: 'tel:+919445948121', color: '#D4AF37' },
  { icon: <MapPin size={20} />, label: 'Our Office', value: 'Chennai, Tamil Nadu, India', href: '#', color: '#10B981' },
  { icon: <Clock size={20} />, label: 'Working Hours', value: 'Mon–Sat, 9 AM – 7 PM IST', href: '#', color: '#D4AF37' },
]

const SOCIALS = [
  { icon: <IconInstagram />, href: 'https://www.instagram.com/he_feed/', label: 'Instagram' },
  { icon: <IconFacebook />, href: 'https://www.facebook.com/he.feed', label: 'Facebook' },
]

type FormState = { name: string; email: string; phone: string; service: string; message: string }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(16,185,129,0.2)' }
  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 border outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/30'

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1D', color: '#fff' }}>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0A0F1D 0%, #07170F 55%, #0A0F1D 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center space-y-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <MessageCircle size={12} /> Get In Touch
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Let's Build Something{' '}
            <span className="text-gradient-mint">Great Together</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Tell us about your business goals and we'll show you exactly how HEFeed can help you achieve them — faster and at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <img src={heFeedLogo} alt="HEFeed" className="h-10 w-auto object-contain mb-6" />
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  HEFeed is a full-service integrated growth agency delivering Software Development,
                  Digital Marketing, and Business Consultancy — with 5+ years of proven, data-backed results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ background: 'rgba(4,78,54,0.1)', borderColor: `${item.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                      <div className="text-sm text-slate-200 font-semibold mt-0.5 leading-snug">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Follow Us</p>
                <div className="flex items-center gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
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
            </div>

            {/* Right: Form */}
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
                <div className="py-14 text-center space-y-4">
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
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone Number</label>
                    <input name="phone" type="tel" placeholder="+91 98765 43210"
                      value={form.phone} onChange={handleChange} className={inputClass} style={inputStyle} />
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
      </section>

      {/* Sub-footer */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} HEFeed. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
