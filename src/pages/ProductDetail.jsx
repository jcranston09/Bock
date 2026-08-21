import { Link, Navigate, useParams } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import SpecTable from '../components/SpecTable'
import ProductCard from '../components/ProductCard'
import InquiryForm from '../components/InquiryForm'
import { getProduct, getRelated } from '../data/products'
import { Check } from 'lucide-react'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProduct(productId)

  if (!product) {
    return <Navigate to="/equipment" replace />
  }

  const related = getRelated(product)

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <nav className="text-[12px] tracking-[0.12em] text-ink-400 uppercase">
        <Link to="/equipment" className="hover:text-navy-900">
          Equipment
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy-900">{product.sku}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <ProductGallery product={product} />
        <div>
          <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">{product.lead}</p>
          <h1 className="mt-3 font-display text-4xl text-navy-900 md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-sm text-ink-400">{product.condition}</p>
          <p className="mt-6 text-base leading-relaxed text-ink-700">{product.description}</p>

          <ul className="mt-8 space-y-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-navy-900">
                <Check size={16} className="mt-0.5 shrink-0 text-clinic-600" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h2 className="mb-4 text-[11px] tracking-[0.22em] text-ink-400 uppercase">Specifications</h2>
            <SpecTable specs={product.specs} />
          </div>

          <Link
            to={`/contact?product=${product.id}`}
            className="mt-8 inline-flex rounded-sm bg-navy-900 px-5 py-3 text-[12px] tracking-[0.18em] text-cream-50 uppercase hover:bg-navy-800"
          >
            Request this unit
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl text-navy-900">Pairs with</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 grid gap-10 border-t border-cream-200 pt-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">Inquiry</p>
          <h2 className="mt-3 font-display text-4xl text-navy-900">Ask about {product.sku}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-500">
            Availability is confirmed against current warehouse stock. Tell us if you need the
            unit alone or as part of a complete exam lane.
          </p>
        </div>
        <InquiryForm key={product.id} defaultProductId={product.id} />
      </section>
    </div>
  )
}
