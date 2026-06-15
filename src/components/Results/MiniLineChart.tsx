type Props = { color: string; points: string }

export default function MiniLineChart({ color, points }: Props) {
  const gradId = `grad-${color.replace('#', '')}`
  return (
    <svg viewBox="0 0 200 60" className="w-full h-12" fill="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M ${points} L 200,55 L 0,55 Z`} fill={`url(#${gradId})`} />
      <polyline points={points} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="196" cy="8" r="4" fill={color} />
    </svg>
  )
}
