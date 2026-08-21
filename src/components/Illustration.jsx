export default function Illustration({ name, className = '' }) {
  const common = 'h-full w-full'
  if (name === 'slit-lamp') {
    return (
      <svg viewBox="0 0 200 240" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <rect x="70" y="198" width="60" height="10" rx="2" fill="#0c2438" opacity="0.2" />
        <rect x="88" y="150" width="24" height="50" rx="2" fill="#0c2438" />
        <rect x="60" y="138" width="80" height="14" rx="2" fill="#1c4d70" />
        <circle cx="100" cy="108" r="28" stroke="#0c2438" strokeWidth="4" />
        <circle cx="100" cy="108" r="10" fill="#c4a574" />
        <rect x="94" y="54" width="12" height="28" rx="2" fill="#0c2438" />
        <rect x="84" y="40" width="32" height="18" rx="3" fill="#1c4d70" />
        <path d="M100 40 V28" stroke="#0c2438" strokeWidth="3" />
        <circle cx="100" cy="24" r="6" fill="#c4a574" />
      </svg>
    )
  }
  if (name === 'phoropter') {
    return (
      <svg viewBox="0 0 200 240" className={`${common} ${className}`} fill="none" aria-hidden="true">
        <rect x="36" y="88" width="52" height="64" rx="26" stroke="#0c2438" strokeWidth="4" />
        <rect x="112" y="88" width="52" height="64" rx="26" stroke="#0c2438" strokeWidth="4" />
        <rect x="86" y="108" width="28" height="16" rx="2" fill="#1c4d70" />
        <circle cx="62" cy="120" r="12" fill="#c4a574" />
        <circle cx="138" cy="120" r="12" fill="#c4a574" />
        <path d="M62 88 V70 H138 V88" stroke="#0c2438" strokeWidth="4" />
        <rect x="88" y="54" width="24" height="18" rx="3" fill="#0c2438" />
        <circle cx="62" cy="168" r="7" stroke="#0c2438" strokeWidth="3" />
        <circle cx="138" cy="168" r="7" stroke="#0c2438" strokeWidth="3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 240" className={`${common} ${className}`} fill="none" aria-hidden="true">
      <circle cx="100" cy="78" r="32" fill="#d5cebd" />
      <rect x="68" y="108" width="64" height="18" rx="9" fill="#0c2438" />
      <rect x="88" y="126" width="24" height="36" rx="4" fill="#1c4d70" />
      <circle cx="100" cy="178" r="28" stroke="#0c2438" strokeWidth="4" />
      <circle cx="100" cy="178" r="6" fill="#c4a574" />
    </svg>
  )
}
