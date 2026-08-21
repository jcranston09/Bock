import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck, Package, Truck } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import InquiryForm from '../components/InquiryForm'
import { getFeatured, products } from '../data/products'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Inspected on the floor',
    copy: 'Every chair and stand is photographed from current warehouse stock—not a catalog render.',
  },
  {
    icon: Package,
    title: 'Quoted as a lane',
    copy: 'Chair, stand, lamp, and stool can ship as one freight plan so finishes and mounts match.',
  },
  {
    icon: Truck,
    title: 'Crated for clinic delivery',
    copy: 'Palletized equipment, nationwide freight, and a one-business-day reply on availability.',
  },
]

export default function Home() {
  const featured = getFeatured()

  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950 text-cream-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,165,116,0.16),transparent_46%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[12px] tracking-[0.28em] text-brass-300 uppercase">
              Ophthalmic exam equipment
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] text-cream-50 md:text-7xl">
              Chairs and stands for the exam lane.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-300 md:text-lg">
              Bock sells the equipment in the photographs: a motorized ophthalmic exam chair
              and a multi-arm instrument stand, inspected in the warehouse and quoted for
              optometry and ophthalmology practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 rounded-sm bg-brass-400 px-5 py-3 text-[12px] font-medium tracking-[0.18em] text-navy-950 uppercase hover:bg-brass-300"
              >
                View equipment <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-sm border border-cream-200/30 px-5 py-3 text-[12px] tracking-[0.18em] uppercase hover:border-cream-50"
              >
                Request a quote
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="product-photo overflow-hidden rounded-sm border border-white/10">
              <img
                src="/images/exam-chair.png"
                alt="Motorized ophthalmic exam chair"
                className="aspect-[3/4] w-full object-contain p-4"
              />
              <figcaption className="border-t border-white/10 bg-navy-900 px-4 py-3 text-[11px] tracking-[0.16em] uppercase">
                BC-900 Exam chair
              </figcaption>
            </figure>
            <figure className="product-photo mt-8 overflow-hidden rounded-sm border border-white/10 sm:mt-12">
              <img
                src="/images/instrument-stand.jpg"
                alt="Multi-arm ophthalmic instrument stand"
                className="aspect-[3/4] w-full object-contain p-4"
              />
              <figcaption className="border-t border-white/10 bg-navy-900 px-4 py-3 text-[11px] tracking-[0.16em] uppercase">
                IS-700 Instrument stand
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-200 bg-cream-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3 lg:px-8">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-4">
              <step.icon className="mt-0.5 shrink-0 text-clinic-600" size={22} />
              <div>
                <h2 className="text-sm font-medium tracking-[0.08em] text-navy-900 uppercase">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">On the floor</p>
            <h2 className="mt-2 font-display text-4xl text-navy-900 md:text-5xl">
              Current warehouse units
            </h2>
          </div>
          <Link
            to="/equipment"
            className="text-[12px] tracking-[0.18em] text-navy-900 uppercase hover:text-clinic-600"
          >
            Full catalog
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">The lane</p>
            <h2 className="mt-3 font-display text-4xl text-navy-900 md:text-5xl">
              Built around a chair and a stand, not a furniture catalog.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              These photographs are the inventory: a powered exam chair in light-grey clinical
              vinyl, and a cream instrument stand with slit-lamp, phoropter, and overhead lamp
              arms. We quote them separately or as LANE-900, then add a slit lamp, phoropter,
              or stool so the mounts and working height match.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-900">
              <li className="border-l-2 border-brass-400 pl-4">Motorized lift, recline, and transfer-clear armrests</li>
              <li className="border-l-2 border-brass-400 pl-4">Counterbalanced instrument arms and overhead lamp</li>
              <li className="border-l-2 border-brass-400 pl-4">Matched cream metal and light-grey upholstery</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/exam-chair.png"
              alt=""
              className="product-photo aspect-[3/4] rounded-sm object-contain p-4"
            />
            <img
              src="/images/instrument-stand.jpg"
              alt=""
              className="product-photo mt-10 aspect-[3/4] rounded-sm object-contain p-4"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">Catalog</p>
          <h2 className="mt-2 font-display text-4xl text-navy-900">Equipment for the lane</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-cream-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-brass-300 uppercase">Inquiry</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tell us what the lane needs.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-300">
              Availability, freight, and pairing options are confirmed on each quote. Include
              chair-only, stand-only, or a complete lane, and we will answer within one
              business day.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
