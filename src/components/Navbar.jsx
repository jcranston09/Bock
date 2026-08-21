import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/equipment', label: 'Equipment' },
  { to: '/equipment/lane-900', label: 'Exam lanes' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const inverted = location.pathname === '/'

  return (
    <header
      className={`sticky top-0 z-40 border-b ${
        inverted
          ? 'border-white/10 bg-navy-950/90 text-cream-50 backdrop-blur-md'
          : 'border-cream-200 bg-cream-50/90 text-navy-900 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo inverted={inverted} />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[13px] tracking-[0.16em] uppercase transition ${
                  isActive
                    ? inverted
                      ? 'text-brass-300'
                      : 'text-clinic-600'
                    : inverted
                      ? 'text-cream-200 hover:text-white'
                      : 'text-ink-500 hover:text-navy-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={`rounded-sm px-4 py-2 text-[12px] font-medium tracking-[0.18em] uppercase ${
              inverted
                ? 'bg-brass-400 text-navy-950 hover:bg-brass-300'
                : 'bg-navy-900 text-cream-50 hover:bg-navy-800'
            }`}
          >
            Request quote
          </NavLink>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-5 py-4 lg:hidden ${
            inverted ? 'border-white/10 bg-navy-950' : 'border-cream-200 bg-cream-50'
          }`}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.16em] uppercase"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={`inline-flex w-fit rounded-sm px-4 py-2 text-[12px] tracking-[0.18em] uppercase ${
                inverted ? 'bg-brass-400 text-navy-950' : 'bg-navy-900 text-cream-50'
              }`}
            >
              Request quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
