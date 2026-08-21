import { useSearchParams } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'

export default function Contact() {
  const [params] = useSearchParams()
  const productId = params.get('product') ?? ''

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">Contact</p>
        <h1 className="mt-3 font-display text-5xl text-navy-900">Request a quote</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
          Send the chair, stand, or complete lane you need. We reply within one business day
          with availability, freight, and pairing options for slit lamps, phoropters, and stools.
        </p>
        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="tracking-[0.16em] text-ink-400 uppercase">What we quote</dt>
            <dd className="mt-2 text-navy-900">
              Ophthalmic exam chairs, multi-arm instrument stands, matched lanes, and
              mount-ready instruments.
            </dd>
          </div>
          <div>
            <dt className="tracking-[0.16em] text-ink-400 uppercase">Stock</dt>
            <dd className="mt-2 text-navy-900">
              Photographed units are warehouse inventory. Instruments without photos are
              quoted to match the stand and chair.
            </dd>
          </div>
          <div>
            <dt className="tracking-[0.16em] text-ink-400 uppercase">Shipping</dt>
            <dd className="mt-2 text-navy-900">Freight, palletized, nationwide clinic delivery.</dd>
          </div>
        </dl>
      </div>
      <InquiryForm key={productId || 'general'} defaultProductId={productId} />
    </div>
  )
}
