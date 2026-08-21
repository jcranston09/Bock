import { Link } from 'react-router-dom'
import Illustration from './Illustration'

export default function ProductCard({ product }) {
  const photo = product.images?.[0]

  return (
    <Link
      to={`/equipment/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-cream-200 bg-white transition hover:border-navy-900/20 hover:shadow-[0_18px_40px_-28px_rgba(12,36,56,0.45)]"
    >
      <div className="product-photo relative aspect-[4/5] overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={product.name}
            className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-10">
            <Illustration name={product.illustration} className="max-h-48 max-w-[9rem]" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-sm bg-navy-900/90 px-2 py-1 text-[10px] tracking-[0.16em] text-cream-50 uppercase">
          {product.sku}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[11px] tracking-[0.18em] text-clinic-600 uppercase">
          {product.lead}
        </p>
        <h3 className="font-display text-2xl leading-tight text-navy-900">{product.name}</h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-500">
          {product.summary}
        </p>
        <div className="flex items-center justify-between pt-2 text-[12px] tracking-[0.14em] uppercase">
          <span className="text-ink-400">{product.condition}</span>
          <span className="text-navy-900">View details</span>
        </div>
      </div>
    </Link>
  )
}
