import { Link } from 'react-router-dom'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className={`grid h-9 w-9 place-items-center rounded-sm ${
          inverted ? 'bg-cream-100' : 'bg-navy-900'
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <circle
            cx="16"
            cy="16"
            r="8"
            stroke={inverted ? '#0c2438' : '#f4f1ea'}
            strokeWidth="1.6"
          />
          <circle cx="16" cy="16" r="2.4" fill="#c4a574" />
          <path
            d="M16 5.5v4M16 22.5v4M5.5 16h4M22.5 16h4"
            stroke={inverted ? '#0c2438' : '#f4f1ea'}
            strokeWidth="1.6"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-[13px] font-semibold tracking-[0.32em] ${
            inverted ? 'text-cream-50' : 'text-navy-900'
          }`}
        >
          BOCK
        </span>
        <span
          className={`mt-1 text-[10px] tracking-[0.22em] uppercase ${
            inverted ? 'text-cream-300' : 'text-ink-500'
          }`}
        >
          Ophthalmic
        </span>
      </span>
    </Link>
  )
}
