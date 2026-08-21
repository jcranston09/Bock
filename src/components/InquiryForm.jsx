import { useMemo, useState } from 'react'
import { products } from '../data/products'

const empty = {
  name: '',
  practice: '',
  email: '',
  phone: '',
  productId: '',
  message: '',
}

export default function InquiryForm({ defaultProductId = '' }) {
  const [form, setForm] = useState({ ...empty, productId: defaultProductId })
  const [submitted, setSubmitted] = useState(false)

  const options = useMemo(
    () => [{ id: '', name: 'General equipment inquiry' }, ...products],
    [],
  )

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-cream-200 bg-white p-8">
        <p className="text-[11px] tracking-[0.22em] text-clinic-600 uppercase">Inquiry received</p>
        <h3 className="mt-3 font-display text-3xl text-navy-900">We will reply within one business day.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
          A Bock specialist will confirm availability, freight, and options for
          {form.productId
            ? ` the ${products.find((item) => item.id === form.productId)?.name ?? 'selected unit'}.`
            : ' the lane you described.'}
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-sm border border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-navy-900 outline-none transition focus:border-navy-900'
  const label = 'mb-1.5 block text-[11px] tracking-[0.16em] text-ink-500 uppercase'

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-cream-200 bg-white p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input required name="name" value={form.name} onChange={update} className={field} />
        </label>
        <label className="block">
          <span className={label}>Practice or clinic</span>
          <input required name="practice" value={form.practice} onChange={update} className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input required type="email" name="email" value={form.email} onChange={update} className={field} />
        </label>
        <label className="block">
          <span className={label}>Phone</span>
          <input name="phone" value={form.phone} onChange={update} className={field} />
        </label>
        <label className="block md:col-span-2">
          <span className={label}>Equipment of interest</span>
          <select name="productId" value={form.productId} onChange={update} className={field}>
            {options.map((item) => (
              <option key={item.id || 'general'} value={item.id}>
                {item.sku ? `${item.sku} — ${item.name}` : item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className={label}>What do you need in the lane?</span>
          <textarea
            required
            name="message"
            rows={5}
            value={form.message}
            onChange={update}
            className={`${field} resize-y`}
            placeholder="Chair only, stand only, or a complete exam lane. Include cylinder convention, finish, and timing if you know them."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-navy-900 px-5 py-3 text-[12px] font-medium tracking-[0.2em] text-cream-50 uppercase hover:bg-navy-800 md:w-auto"
      >
        Send inquiry
      </button>
    </form>
  )
}
