export const categories = [
  { id: 'all', label: 'All equipment' },
  { id: 'chairs', label: 'Exam chairs' },
  { id: 'stands', label: 'Instrument stands' },
  { id: 'lanes', label: 'Complete lanes' },
  { id: 'instruments', label: 'Lane instruments' },
]

export const products = [
  {
    id: 'bc-900',
    sku: 'BC-900',
    name: 'Motorized Ophthalmic Exam Chair',
    shortName: 'Exam Chair',
    category: 'chairs',
    condition: 'Inspected, warehouse-ready',
    lead: 'Ready to ship',
    priceLabel: 'Quote',
    featured: true,
    images: ['/images/exam-chair.png'],
    summary:
      'Powered exam chair with clinical-grade light-grey vinyl, channel-stitched back and leg rest, and a stable square base built for a full clinic day.',
    description:
      'This chair is the patient platform of an ophthalmic lane. Motorized lift and recline keep working height consistent from pediatric exams to dilated fundus work. The oval headrest locks on a white stem, padded armrests swing clear for wheelchair transfers, and a textured footplate gives patients a sure first step. Side-mounted controls sit where the technician actually stands. Photographed on the warehouse pallet, inspected, and ready to crate.',
    features: [
      'Motorized height and recline with side-mounted controls',
      'Light-grey clinical vinyl with horizontal channel stitching',
      'Adjustable oval headrest on a locking stem',
      'Padded armrests that clear for patient transfer',
      'Textured footplate and heavy square base',
      'Clinic-ready upholstery in a light grey that hides wear',
    ],
    specs: [
      { label: 'Type', value: 'Powered ophthalmic exam chair' },
      { label: 'Upholstery', value: 'Clinical vinyl, light grey' },
      { label: 'Headrest', value: 'Padded oval, height-adjustable' },
      { label: 'Armrests', value: 'Flat padded, transfer-clear' },
      { label: 'Base', value: 'Low-profile square, off-white' },
      { label: 'Controls', value: 'Side membrane / rocker switches' },
      { label: 'Power', value: 'Standard clinic outlet' },
      { label: 'Use', value: 'Optometry and ophthalmology lanes' },
    ],
    related: ['is-700', 'lane-900', 'st-100'],
  },
  {
    id: 'is-700',
    sku: 'IS-700',
    name: 'Multi-Arm Instrument Stand',
    shortName: 'Instrument Stand',
    category: 'stands',
    condition: 'Inspected, warehouse-ready',
    lead: 'Ready to ship',
    priceLabel: 'Quote',
    featured: true,
    images: ['/images/instrument-stand.jpg'],
    summary:
      'Cream-finish instrument stand with a sloped control console, counterbalanced slit-lamp arm, phoropter arm, and overhead exam lamp on a chrome pole.',
    description:
      'A complete lane stand, not a lamp pole. The vertical console carries power and lighting knobs on a sloped top deck. A heavy lower arm is ready for a slit lamp; the mid arm takes a phoropter or chart projector; the upper articulated arm ends in a black spotlight for near-work and external exams. Polished chrome rises from a wide rectangular base so the unit stays planted when instruments swing. Finish is matte cream with black controls—the same clinical palette as the BC-900 chair.',
    features: [
      'Sloped console with power and lamp controls',
      'Heavy swing-away arm for a slit lamp',
      'Mid arm for phoropter or projector',
      'Articulated overhead lamp with adjustable spotlight',
      'Polished chrome vertical pole',
      'Wide rectangular base in matching cream finish',
    ],
    specs: [
      { label: 'Type', value: 'Ophthalmic instrument stand' },
      { label: 'Finish', value: 'Matte cream / off-white with chrome' },
      { label: 'Lower arm', value: 'Counterbalanced slit-lamp mount' },
      { label: 'Mid arm', value: 'Phoropter / projector support' },
      { label: 'Upper arm', value: 'Multi-joint exam lamp' },
      { label: 'Console', value: 'Black knobs and lighting switches' },
      { label: 'Base', value: 'Wide low-profile rectangle' },
      { label: 'Use', value: 'Pairs with BC-900 exam chair' },
    ],
    related: ['bc-900', 'lane-900', 'sl-400'],
  },
  {
    id: 'lane-900',
    sku: 'LANE-900',
    name: 'Complete Exam Lane',
    shortName: 'Exam Lane',
    category: 'lanes',
    condition: 'Matched pair, inspected',
    lead: 'Ships as a set',
    priceLabel: 'Quote',
    featured: true,
    images: ['/images/exam-chair.png', '/images/instrument-stand.jpg'],
    summary:
      'Chair and stand, matched in cream and light grey, sold as one clinic-ready lane so you are not mixing finishes or waiting on a second vendor.',
    description:
      'Most practices do not want a chair from one crate and a stand from another. LANE-900 is the BC-900 motorized chair and IS-700 instrument stand quoted, inspected, and shipped together. The chair’s square base lines up with the stand’s rectangular footprint; cream metal and light-grey vinyl read as one lane, not leftover inventory. Add a slit lamp or phoropter from the instruments list, or we will quote a lamp and stool with the same shipment.',
    features: [
      'BC-900 motorized exam chair',
      'IS-700 multi-arm instrument stand',
      'Matched cream / light-grey clinic finish',
      'Single quote, single crate plan',
      'Optional slit lamp, phoropter, and stool add-ons',
      'Photographed from current warehouse stock',
    ],
    specs: [
      { label: 'Includes', value: 'Exam chair + instrument stand' },
      { label: 'Chair', value: 'BC-900 motorized' },
      { label: 'Stand', value: 'IS-700 multi-arm' },
      { label: 'Finish', value: 'Cream metal, light-grey vinyl' },
      { label: 'Shipping', value: 'Freight, palletized as a pair' },
      { label: 'Install', value: 'Standard 120V clinic circuit' },
      { label: 'Add-ons', value: 'Slit lamp, phoropter, operator stool' },
      { label: 'Lead', value: 'Current warehouse units' },
    ],
    related: ['bc-900', 'is-700', 'sl-400'],
  },
  {
    id: 'sl-400',
    sku: 'SL-400',
    name: 'Slit Lamp',
    shortName: 'Slit Lamp',
    category: 'instruments',
    condition: 'Quoted to match the stand',
    lead: 'Available to pair',
    priceLabel: 'Quote',
    featured: false,
    illustration: 'slit-lamp',
    images: [],
    summary:
      'Tower slit lamp specified to mount on the IS-700 lower arm—illumination, magnification, and a table that actually fits the stand you are buying.',
    description:
      'We do not ship a stand and leave you hunting for a lamp that fits the mount. SL-400 is quoted as a companion to the IS-700: Haag-Streit-style tower geometry, joystick table, and a chin rest set for the BC-900 working height. Magnification and illumination options are confirmed on the inquiry so the lamp you receive is the lamp your doctors already know how to use.',
    features: [
      'Specified to the IS-700 slit-lamp arm',
      'Tower illumination with adjustable slit',
      'Multi-mag optical head',
      'Chin rest and head straps for the exam chair height',
      'Quoted new or inspected depending on stock',
    ],
    specs: [
      { label: 'Type', value: 'Tower slit lamp' },
      { label: 'Mount', value: 'IS-700 lower instrument arm' },
      { label: 'Optics', value: 'Multi-magnification binocular' },
      { label: 'Illumination', value: 'Adjustable slit, halogen or LED' },
      { label: 'Table', value: 'Joystick XYZ' },
      { label: 'Pairing', value: 'Sold with LANE-900 or IS-700' },
    ],
    related: ['is-700', 'lane-900', 'ph-20'],
  },
  {
    id: 'ph-20',
    sku: 'PH-20',
    name: 'Phoropter',
    shortName: 'Phoropter',
    category: 'instruments',
    condition: 'Quoted to match the stand',
    lead: 'Available to pair',
    priceLabel: 'Quote',
    featured: false,
    illustration: 'phoropter',
    images: [],
    summary:
      'Refraction head for the IS-700 mid arm—sphere, cylinder, and prism in a housing that balances on the stand you already have on the floor.',
    description:
      'The mid arm on the IS-700 is built for a phoropter. PH-20 is the refraction head we quote with that arm: standard sphere and cylinder ranges, Jackson cross, rotary prisms, and a pupillary-distance control that does not drift. We confirm minus- vs plus-cylinder preference on the inquiry so the unit arrives the way your doctors refract.',
    features: [
      'Mounts to the IS-700 phoropter arm',
      'Full sphere / cylinder refraction range',
      'Jackson cross and rotary prisms',
      'PD adjustment with positive lock',
      'Cylinder convention confirmed before ship',
    ],
    specs: [
      { label: 'Type', value: 'Manual phoropter' },
      { label: 'Mount', value: 'IS-700 mid instrument arm' },
      { label: 'Sphere', value: 'Standard clinical range' },
      { label: 'Cylinder', value: 'Plus or minus convention' },
      { label: 'Auxiliary', value: 'Cross cylinder, prisms, occluders' },
      { label: 'Pairing', value: 'Sold with LANE-900 or IS-700' },
    ],
    related: ['is-700', 'lane-900', 'sl-400'],
  },
  {
    id: 'st-100',
    sku: 'ST-100',
    name: 'Operator Stool',
    shortName: 'Operator Stool',
    category: 'instruments',
    condition: 'Clinic-grade, quoted with the chair',
    lead: 'Ships with the lane',
    priceLabel: 'Quote',
    featured: false,
    illustration: 'stool',
    images: [],
    summary:
      'Pneumatic operator stool set to the BC-900 working height—so the doctor is not perched on a leftover reception chair.',
    description:
      'A lane is not finished until the operator can sit at the slit lamp without shrugging their shoulders. ST-100 is a five-star clinic stool with a pneumatic cylinder ranged for the BC-900, a padded seat in matching light grey, and a foot ring for longer dilated exams. Quoted with the chair or as a third crate in the LANE-900 shipment.',
    features: [
      'Height ranged to the BC-900 exam chair',
      'Clinical vinyl in light grey',
      'Five-star base with clinic casters',
      'Optional foot ring',
      'Ships with chair or complete lane',
    ],
    specs: [
      { label: 'Type', value: 'Pneumatic operator stool' },
      { label: 'Upholstery', value: 'Clinical vinyl, light grey' },
      { label: 'Base', value: 'Five-star, dual-wheel casters' },
      { label: 'Lift', value: 'Gas cylinder, clinic height range' },
      { label: 'Pairing', value: 'BC-900 and LANE-900' },
    ],
    related: ['bc-900', 'lane-900', 'is-700'],
  },
]

export function getProduct(id) {
  return products.find((product) => product.id === id)
}

export function getRelated(product) {
  if (!product?.related) return []
  return product.related.map(getProduct).filter(Boolean)
}

export function getFeatured() {
  return products.filter((product) => product.featured)
}
