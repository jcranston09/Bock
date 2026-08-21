import { useState } from 'react'
import Illustration from './Illustration'

export default function ProductGallery({ product }) {
  const images = product.images ?? []
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div>
      <div className="product-photo relative aspect-[4/5] overflow-hidden rounded-sm border border-cream-200">
        {current ? (
          <img src={current} alt={product.name} className="h-full w-full object-contain p-8" />
        ) : (
          <div className="flex h-full items-center justify-center p-12">
            <Illustration name={product.illustration} className="max-h-72 max-w-xs" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-sm bg-navy-900 px-2 py-1 text-[10px] tracking-[0.16em] text-cream-50 uppercase">
          {product.sku}
        </span>
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-2 gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              className={`product-photo overflow-hidden rounded-sm border p-3 ${
                index === active ? 'border-navy-900' : 'border-cream-200'
              }`}
            >
              <img src={src} alt="" className="h-24 w-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
