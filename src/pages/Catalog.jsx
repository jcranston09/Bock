import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function Catalog() {
  const [filter, setFilter] = useState('all')
  const visible = useMemo(
    () => (filter === 'all' ? products : products.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">Catalog</p>
      <h1 className="mt-3 font-display text-5xl text-navy-900 md:text-6xl">
        Ophthalmic exam equipment
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
        Chairs, instrument stands, complete lanes, and the instruments that mount to them.
        Units with photographs are current warehouse stock.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setFilter(category.id)}
            className={`rounded-sm px-4 py-2 text-[12px] tracking-[0.14em] uppercase ${
              filter === category.id
                ? 'bg-navy-900 text-cream-50'
                : 'border border-cream-300 text-ink-500 hover:border-navy-900'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
