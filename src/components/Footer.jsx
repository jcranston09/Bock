import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-300">
            Exam chairs, instrument stands, and complete ophthalmic lanes—inspected in the
            warehouse and quoted for optometry and ophthalmology practices.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-brass-400">Equipment</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-200">
            <li>
              <Link to="/equipment" className="hover:text-white">
                Full catalog
              </Link>
            </li>
            <li>
              <Link to="/equipment/bc-900" className="hover:text-white">
                Exam chairs
              </Link>
            </li>
            <li>
              <Link to="/equipment/is-700" className="hover:text-white">
                Instrument stands
              </Link>
            </li>
            <li>
              <Link to="/equipment/lane-900" className="hover:text-white">
                Complete lanes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-brass-400">Inquiries</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-200">
            <li>
              <Link to="/contact" className="hover:text-white">
                Request a quote
              </Link>
            </li>
            <li>Weekdays, one-business-day reply</li>
            <li>Freight nationwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl justify-between px-5 py-5 text-xs text-cream-300 lg:px-8">
          <span>© {new Date().getFullYear()} Lone Star Ophthalmic Equipment</span>
          <span>Clinical equipment, warehouse inspected</span>
        </div>
      </div>
    </footer>
  )
}
