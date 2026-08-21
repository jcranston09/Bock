export default function SpecTable({ specs }) {
  return (
    <dl className="divide-y divide-cream-200 border-y border-cream-200">
      {specs.map((spec) => (
        <div key={spec.label} className="grid grid-cols-2 gap-4 py-3 text-sm">
          <dt className="tracking-[0.12em] text-ink-400 uppercase">{spec.label}</dt>
          <dd className="text-navy-900">{spec.value}</dd>
        </div>
      ))}
    </dl>
  )
}
