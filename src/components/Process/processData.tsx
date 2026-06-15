export type ProcessStep = {
  num: number
  title: string
  desc: string
  accent: string
  pattern: React.ReactNode
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: 1,
    title: 'Discovery Call',
    desc: 'We start by understanding your business model, goals, competitive landscape, and vision — no generic templates, ever.',
    accent: '#10B981',
    pattern: (
      <svg viewBox="0 0 220 160" fill="none" className="w-full h-full">
        <circle cx="110" cy="80" r="55" stroke="#10B98122" strokeWidth="1.5" />
        <circle cx="110" cy="80" r="38" stroke="#10B98135" strokeWidth="1.5" />
        <circle cx="110" cy="80" r="20" fill="#10B98112" stroke="#10B981" strokeWidth="1.5" />
        <line x1="28" y1="80" x2="90" y2="80" stroke="#10B98130" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="130" y1="80" x2="192" y2="80" stroke="#10B98130" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="110" y1="8" x2="110" y2="60" stroke="#10B98130" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="110" y1="100" x2="110" y2="152" stroke="#10B98130" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="110" cy="80" r="6" fill="#10B981" />
        <circle cx="28" cy="80" r="4" fill="#10B98155" />
        <circle cx="192" cy="80" r="4" fill="#10B98155" />
        <circle cx="110" cy="8" r="4" fill="#10B98155" />
        <circle cx="110" cy="152" r="4" fill="#10B98155" />
        <circle cx="70" cy="46" r="3" fill="#D4AF3740" />
        <circle cx="150" cy="114" r="3" fill="#D4AF3740" />
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Strategy Design',
    desc: 'A bespoke growth roadmap is crafted — aligning software architecture, marketing funnels, and business milestones into one execution plan.',
    accent: '#D4AF37',
    pattern: (
      <svg viewBox="0 0 220 160" fill="none" className="w-full h-full">
        <rect x="28" y="38" width="72" height="46" rx="7" stroke="#D4AF3730" strokeWidth="1.5" />
        <rect x="120" y="28" width="72" height="46" rx="7" stroke="#D4AF3745" strokeWidth="1.5" />
        <rect x="74" y="98" width="72" height="42" rx="7" fill="#D4AF3710" stroke="#D4AF37" strokeWidth="1.5" />
        <line x1="100" y1="84" x2="110" y2="98" stroke="#D4AF3740" strokeWidth="1.5" />
        <line x1="156" y1="74" x2="146" y2="98" stroke="#D4AF3740" strokeWidth="1.5" />
        <line x1="64" y1="61" x2="120" y2="51" stroke="#D4AF3725" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="40" y="54" width="42" height="4" rx="2" fill="#D4AF3725" />
        <rect x="40" y="62" width="28" height="4" rx="2" fill="#D4AF3315" />
        <rect x="132" y="43" width="42" height="4" rx="2" fill="#D4AF3725" />
        <rect x="132" y="51" width="30" height="4" rx="2" fill="#D4AF3318" />
        <rect x="86" y="112" width="48" height="4" rx="2" fill="#D4AF3745" />
        <rect x="86" y="120" width="34" height="4" rx="2" fill="#D4AF3728" />
      </svg>
    ),
  },
  {
    num: 3,
    title: 'Build & Execute',
    desc: 'Our engineering and marketing teams execute in parallel — code ships while campaigns activate, compressing your time-to-market dramatically.',
    accent: '#10B981',
    pattern: (
      <svg viewBox="0 0 220 160" fill="none" className="w-full h-full">
        <rect x="18" y="28" width="184" height="104" rx="9" stroke="#10B98118" strokeWidth="1" />
        <rect x="18" y="28" width="184" height="24" rx="9" fill="#10B98112" />
        <circle cx="34" cy="40" r="4" fill="#ff5f5770" />
        <circle cx="50" cy="40" r="4" fill="#ffbd2e70" />
        <circle cx="66" cy="40" r="4" fill="#10B98170" />
        <text x="30" y="66" fontSize="9" fill="#10B98185" fontFamily="monospace">const</text>
        <text x="64" y="66" fontSize="9" fill="#93c5fd85" fontFamily="monospace">growth</text>
        <text x="110" y="66" fontSize="9" fill="#ffffff70" fontFamily="monospace">=</text>
        <text x="122" y="66" fontSize="9" fill="#fbbf2485" fontFamily="monospace">launch()</text>
        <rect x="30" y="76" width="96" height="3" rx="1.5" fill="#10B98128" />
        <rect x="30" y="84" width="64" height="3" rx="1.5" fill="#a78bfa28" />
        <rect x="30" y="92" width="116" height="3" rx="1.5" fill="#10B98120" />
        <rect x="30" y="100" width="78" height="3" rx="1.5" fill="#D4AF3728" />
        <rect x="30" y="108" width="52" height="3" rx="1.5" fill="#10B98122" />
        <circle cx="185" cy="117" r="3.5" fill="#10B981" />
      </svg>
    ),
  },
  {
    num: 4,
    title: 'Launch & Optimise',
    desc: 'Products go live and campaigns activate simultaneously. Real-time analytics drive rapid iteration and conversion improvements daily.',
    accent: '#D4AF37',
    pattern: (
      <svg viewBox="0 0 220 160" fill="none" className="w-full h-full">
        <polyline
          points="18,132 52,104 88,114 124,62 158,42 200,18"
          stroke="#D4AF3755" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <polyline
          points="18,142 52,128 88,133 124,104 158,88 200,72"
          stroke="#10B98135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"
        />
        {[18, 52, 88, 124, 158, 200].map((x, i) => {
          const y = [132, 104, 114, 62, 42, 18][i]
          return <circle key={x} cx={x} cy={y} r="3.5" fill="#D4AF37" opacity={0.45 + i * 0.1} />
        })}
        <rect x="18" y="148" width="184" height="1" rx="0.5" fill="#ffffff08" />
        <text x="16" y="157" fontSize="7" fill="#ffffff25" fontFamily="monospace">0d</text>
        <text x="192" y="157" fontSize="7" fill="#D4AF3755" fontFamily="monospace">30d</text>
        <circle cx="200" cy="18" r="7" fill="#D4AF3720" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="200" cy="18" r="3.5" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    num: 5,
    title: 'Scale & Grow',
    desc: 'Compounding results. Ongoing optimisation cycles, upsell systems, and retention loops keep your growth engine running at full capacity.',
    accent: '#10B981',
    pattern: (
      <svg viewBox="0 0 220 160" fill="none" className="w-full h-full">
        <path d="M110 148 L110 28" stroke="#10B98115" strokeWidth="1" />
        <path d="M18 78 L202 78" stroke="#10B98115" strokeWidth="1" />
        <path d="M58 148 Q110 38 162 148" stroke="#10B98145" strokeWidth="1.5" fill="none" />
        <path d="M38 148 Q110 8 182 148" stroke="#D4AF3730" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="110" cy="38" r="14" fill="#10B98110" stroke="#10B981" strokeWidth="1.5" />
        <path d="M104 38 L108 42 L116 34" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="58" cy="112" r="6" fill="#D4AF3715" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="162" cy="112" r="6" fill="#D4AF3715" stroke="#D4AF37" strokeWidth="1" />
        <text x="88" y="136" fontSize="8" fill="#10B98160" fontFamily="monospace">∞ growth</text>
      </svg>
    ),
  },
]
