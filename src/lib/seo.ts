export interface Product {
  name: string;
  category?: string;
  image?: string;
  brief: string;
  /** Page for this product on the partner's own website (opens in a new tab) */
  url?: string;
}

export interface Principal {
  name: string;
  slug: string;
  logo: string;
  description: string;
  /** Partner's own website (opens in a new tab) */
  website: string;
  products: Product[];
}

export const siteConfig = {
  name: 'Al Mashriq Medical Supplies',
  legalName: 'Al Mashriq Medical Supplies L.L.C',
  shortName: 'AMMS',
  url: 'https://ammsuae.me',
  title: 'Al Mashriq Medical Supplies (AMMS) | Leading Medical Equipment Supplier in UAE',
  description:
    'Premier UAE medical equipment distributor since 1991. AMMS supplies hospitals with world-class ICU, respiratory, anesthesia, and diagnostic solutions across Abu Dhabi and Dubai.',
  /** Main AMMS email (head office, footer, contact strip, FAQ) */
  email: 'info@ammsuae.com',
  phone: '+97126277223',
  displayPhone: '+971 2 627 7223',
  whatsapp: '+971558693930',
  // Paste the real profile URLs here once AMMS shares them (e.g. 'https://www.instagram.com/amms.uae')
  social: {
    instagram: 'https://www.instagram.com/almashriqmedicalsupplies/',
    facebook: 'https://www.facebook.com/share/19qn6DJ2aE/',
    linkedin: 'https://www.linkedin.com/company/al-mashriq-medical-supplies/',
  },
  fax: '+97126271667',
  displayFax: '+971 2 627 1667',
  established: 1991,
  headOffice: {
    name: 'Head Office — Abu Dhabi',
    company: 'Al Mashriq Medical Supplies L.L.C',
    street: 'Floor 16-01, Falcon Tower, Qasr Al Hosn',
    poBox: 'PO Box 44800',
    city: 'Abu Dhabi',
    country: 'UAE',
    phone: '+971 2 627 7223',
    fax: '+971 2 627 1667',
    email: 'info@ammsuae.com',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.4!2d54.3543!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6561f4e6f9f1%3A0x8e97e7c3a0b5f4d8!2sFalcon%20Tower%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  branchOffice: {
    name: 'Branch Office — Dubai',
    company: 'Al Mashriq Medical Supplies L.L.C',
    street: 'Office 419, City 4 Building, Al Garhoud',
    poBox: 'PO Box 34570',
    city: 'Dubai',
    country: 'UAE',
    phone: '+971 4 282 7870',
    fax: '+971 4 282 7873',
    // Dubai branch email (client: amms@eim.ae is used by the Dubai branch only)
    email: 'amms@eim.ae',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8!2d55.3478!3d25.2491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4b0b8c1e5f%3A0x2e3c1d8f7a6b5c4d!2sAl%20Garhoud%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  address: {
    streetAddress: 'Floor 16-01, Falcon Tower, Qasr Al Hosn',
    locality: 'Abu Dhabi',
    region: 'Abu Dhabi',
    country: 'AE',
  },
  keywords: [
    'medical equipment UAE',
    'medical equipment supplier Abu Dhabi',
    'Al Mashriq Medical Supplies',
    'AMMS UAE',
    'hospital equipment UAE',
    'ICU equipment UAE',
    'respiratory care equipment UAE',
    'Fisher Paykel healthcare UAE',
    'CPAP machines UAE',
    'anesthesia equipment Abu Dhabi',
    'neonatal care equipment UAE',
    'medical consumables UAE',
    'healthcare equipment supplier UAE',
    'ventilator supplier UAE',
    'Penlon anesthesia UAE',
    'COSMED spirometry UAE',
  ],
  ogImage:
    '/images/logo/logo.png',
}

export const productCategories = [
  'Intensive Care Unit equipment',
  'Cardiac Care Unit equipment',
  'Surgical ICU equipment',
  'Neonatal ICU solutions',
  'Pediatric ICU solutions',
  'Operation Theatre equipment',
  'Cardiac Rehabilitation equipment',
  'Physiotherapy equipment',
  'Ophthalmic diagnostics',
  'Hearing diagnostics',
  'Respiratory & Sleep Apnea solutions',
  'Medical disposables and consumables',
  'Emergency medical products',
  'Cardiopulmonary equipment',
  'Homecare medical products',
]

export const principals: Principal[] = [
  {
    name: 'Fisher & Paykel Healthcare',
    slug: 'fisher-paykel',
    logo: '/images/clients/fisher-paykel-new.webp',
    description: 'World-leading respiratory humidification and acute care solutions.',
    website: 'https://www.fphcare.com/nz/',
    products: [
      { name: 'Respiratory Humidifiers', category: 'Respiratory & Airway Management', brief: 'Advanced humidification technology for optimal respiratory support.', url: 'https://www.fphcare.com/nz/products/hospital-products/humidification/' },
      { name: 'Breathing Circuits', category: 'Respiratory & Airway Management', brief: 'High-quality consumable circuits designed for secure patient connections.', url: 'https://www.fphcare.com/nz/products/hospital-products/breathing-circuits/' },
      { name: 'Opti-flow Systems', category: 'Respiratory & Airway Management', brief: 'Nasal high flow therapy for effective oxygen delivery and comfort.', url: 'https://www.fphcare.com/nz/hospital/adult-respiratory/optiflow/' },
      { name: 'Bubble Continuous Positive Airway Pressure Systems', category: 'Neonatal & Infant Care', brief: 'Gentle, effective continuous positive airway pressure for infants.', url: 'https://www.fphcare.com/nz/hospital/infant-respiratory/neonates/cpap/bubble-cpap-system/' },
      { name: 'Full Face & Nasal Masks', category: 'Respiratory & Airway Management', brief: 'Comfortable and secure masks for hospital and homecare therapy.', url: 'https://www.fphcare.com/nz/products/hospital-products/masks/' },
      { name: 'Infant Resuscitators (Neopuff)', category: 'Neonatal & Infant Care', brief: 'Reliable, safe manual resuscitation systems for neonatal care.', url: 'https://www.fphcare.com/nz/hospital/infant-respiratory/neonates/resuscitation/neopuff/' },
      { name: 'Hospital & Home Masks', category: 'Sleep Therapy & Homecare', brief: 'A wide range of patient interfaces for continuous positive airway pressure and ventilation.', url: 'https://www.fphcare.com/nz/homecare/sleep-apnea/masks/' },
      { name: 'Optiflow THRIVE', category: 'Anesthesia & Surgical Care', brief: 'Advanced high-flow nasal oxygen therapy for anesthesia and pre-oxygenation.', url: 'https://www.fphcare.com/nz/hospital/surgical/anesthesia/' },
    ],
  },
  {
    name: 'Penlon',
    slug: 'penlon',
    logo: '/images/clients/penlon-medcaptain.svg',
    description: 'Premium anesthesia delivery and airway management. A Medcaptain company.',
    website: 'https://www.penlon.com/',
    products: [
      { name: 'Anesthesia Machines', category: 'Anesthesia & Surgical Care', brief: 'State-of-the-art workstations for precise anesthesia delivery.', url: 'https://www.penlon.com/product-category/anaesthesia/' },
      { name: 'Air & Oxygen Flowmeters', category: 'Medical Gases & Suction', brief: 'Accurate and reliable medical gas flow control.', url: 'https://www.penlon.com/product-category/oxygen-therapy/' },
      { name: 'Regulators', category: 'Medical Gases & Suction', brief: 'High-performance gas regulators for hospital pipelines and cylinders.', url: 'https://www.penlon.com/product-category/oxygen-therapy/' },
      { name: 'Bacteria Filters', category: 'Respiratory & Airway Management', brief: 'Essential filtration to prevent cross-contamination in breathing systems.', url: 'https://www.penlon.com/product/bactitrap-anti-bacterial-filter/' },
      { name: 'Laryngoscopes', category: 'Anesthesia & Surgical Care', brief: 'Premium airway visualization tools for safe intubation.', url: 'https://www.penlon.com/product-category/airway-management/' },
      { name: 'Endoscopy Systems', category: 'Anesthesia & Surgical Care', brief: 'Advanced visualization for minimally invasive surgical procedures.', url: 'https://www.penlon.com/product-category/endoscopy/' },
      { name: 'Suction Machines', category: 'Medical Gases & Suction', brief: 'Powerful and reliable vacuum systems for clinical use.', url: 'https://www.penlon.com/product-category/suction-control/' },
      { name: 'Infusion Pumps', category: 'Infusion Therapy', brief: 'Precise intravenous fluid and medication delivery devices.', url: 'https://www.penlon.com/product-category/infusion-systems/' },
      { name: 'Syringe Pumps', category: 'Infusion Therapy', brief: 'Accurate, low-volume continuous infusion systems.', url: 'https://www.penlon.com/product-category/infusion-systems/' },
    ],
  },
  {
    name: 'Breas',
    slug: 'breas',
    logo: '/images/clients/breas.svg',
    description: 'Innovative ventilation and airway clearance solutions.',
    website: 'https://www.breas.com/en',
    products: [
      { name: 'Bilevel Positive Airway Pressure Ventilators', category: 'Respiratory & Airway Management', brief: 'Advanced non-invasive ventilation for home and hospital.', url: 'https://www.breas.com/en/products/bi-level' },
      { name: 'Portable Ventilators', category: 'Respiratory & Airway Management', brief: 'Lightweight, versatile life-support for mobile patients.', url: 'https://www.breas.com/en/products/life-support' },
      { name: 'Airway Clearance Equipment', category: 'Respiratory & Airway Management', brief: 'Effective solutions for managing respiratory secretions.', url: 'https://www.breas.com/en/products/airway-clearance' },
    ],
  },
  {
    name: 'Sefam',
    slug: 'sefam',
    logo: '/images/clients/sefam.webp',
    description: 'Comprehensive sleep apnea diagnosis and continuous positive airway pressure therapy.',
    website: 'https://sefam-international.com/',
    products: [
      { name: 'Continuous Positive Airway Pressure Machines', category: 'Sleep Therapy & Homecare', brief: 'Reliable continuous positive airway pressure devices.', url: 'https://sefam-international.com/cpaps' },
      { name: 'Auto Continuous Positive Airway Pressure Machines', category: 'Sleep Therapy & Homecare', brief: 'Self-adjusting pressure devices for optimal sleep therapy.', url: 'https://sefam-international.com/cpaps' },
      { name: 'Bilevel Positive Airway Pressure Machines', category: 'Sleep Therapy & Homecare', brief: 'Dual pressure support for complex respiratory conditions.', url: 'https://sefam-international.com/cpaps' },
      { name: 'Sleep Lab Systems', category: 'Diagnostics & Testing', brief: 'Professional diagnostic equipment for sleep clinics.', url: 'https://sefam-international.com/range-diagnosis-sefam' },
      { name: 'NightScan Screening', category: 'Diagnostics & Testing', brief: 'Home sleep testing and initial apnea screening tools.', url: 'https://sefam-international.com/range-diagnosis-sefam' },
      { name: 'Therapy Masks', category: 'Sleep Therapy & Homecare', brief: 'Ergonomic patient interfaces for sleep therapy.', url: 'https://sefam-international.com/masks' },
    ],
  },
  {
    name: 'Bio-Med Devices',
    slug: 'bio-med',
    logo: '/images/clients/bio-med.webp',
    description: 'Reliable air/oxygen blending and portable ventilation.',
    website: 'https://www.biomeddevices.com/',
    products: [
      { name: 'Air & Oxygen Blenders', category: 'Medical Gases & Suction', brief: 'Precise gas mixing devices for critical care environments.', url: 'https://www.biomeddevices.com/blender-models' },
      { name: 'Portable Ventilators', category: 'Respiratory & Airway Management', brief: 'Rugged and dependable transport ventilation systems.', url: 'https://www.biomeddevices.com/transport-ventilators' },
    ],
  },
  {
    name: 'COSMED',
    slug: 'cosmed',
    logo: '/images/clients/cosmed-new.png',
    description: 'Gold-standard metabolic testing and pulmonary function diagnostics.',
    website: 'https://www.cosmed.com/en/',
    products: [
      { name: 'Pulmonary Function Tests', category: 'Diagnostics & Testing', brief: 'Comprehensive lung function assessment devices.', url: 'https://www.cosmed.com/en/products/pulmonary-function' },
      { name: 'Metabolic Testing', category: 'Diagnostics & Testing', brief: 'Cutting-edge indirect calorimetry for clinical nutrition.', url: 'https://www.cosmed.com/en/products/indirect-calorimetry' },
      { name: 'Cardiopulmonary Exercise Testing Systems', category: 'Diagnostics & Testing', brief: 'Cardiopulmonary exercise testing for accurate fitness assessment.', url: 'https://www.cosmed.com/en/products/cardio-pulmonary-exercise-test' },
      { name: 'Spirometry Equipment', category: 'Diagnostics & Testing', brief: 'Accurate and user-friendly spirometers for rapid diagnostics.', url: 'https://www.cosmed.com/en/products/spirometry' },
    ],
  },
  {
    name: 'Salaera',
    slug: 'salaera',
    logo: '/images/clients/salaera.svg',
    description: 'Precision oxygen sensing, analysis and flow measurement (formerly Maxtec).',
    website: 'https://salaera.com/',
    products: [
      { name: 'Oxygen Analyzers (15%–99%)', category: 'Medical Gases & Suction', brief: 'Highly accurate devices for monitoring oxygen purity.', url: 'https://salaera.com/collections/sensing/medical-oxygen-sensing' },
      { name: 'Flow Meters', category: 'Medical Gases & Suction', brief: 'Durable, precise medical gas flow measuring tools.', url: 'https://salaera.com/collections/medical' },
    ],
  },
  {
    name: 'Porter',
    slug: 'porter',
    logo: '/images/clients/porter-new.png',
    description: 'The trusted name in nitrous oxide delivery systems.',
    website: 'https://www.porterinstrument.com/',
    products: [
      { name: 'Nitrous Oxide Systems — 50/50 Fixed', category: 'Pain Management', brief: 'Standardized pain management delivery systems.', url: 'https://www.porterinstrument.com/labor-and-delivery' },
      { name: 'Adjustable 0–50% Nitrous Oxide', category: 'Pain Management', brief: 'Variable concentration delivery for tailored patient relief.', url: 'https://www.porterinstrument.com/medical-nitrous-applications' },
      { name: 'Adjustable 0–70% Nitrous Oxide', category: 'Pain Management', brief: 'High-capacity nitrous delivery systems for specialized procedures.', url: 'https://www.porterinstrument.com/medical-nitrous-applications' },
    ],
  },
  {
    name: 'Baxter',
    slug: 'baxter',
    logo: '/images/clients/baxter.svg',
    description: 'Advanced vision screening and ophthalmic diagnostic solutions.',
    website: 'https://pro.baxter.com/',
    products: [
      { name: 'Spot Vision Screener', category: 'Diagnostics & Testing', brief: 'Fast, objective, and accurate vision screening device.', url: 'https://pro.baxter.com/products/diagnostics-examination/vision-screening/spot-vision-screener' },
    ],
  },
  {
    name: 'idmed',
    slug: 'idmed',
    logo: '/images/clients/idmed-new.png',
    description: 'Neuromuscular blockade and analgesia monitoring for the operating room and ICU.',
    website: 'https://www.idmed.fr/en/',
    products: [
      { name: 'TOFscan Neuromuscular Monitoring', category: 'Anesthesia & Surgical Care', brief: 'Train-of-four monitoring of neuromuscular blockade during anesthesia.', url: 'https://www.idmed.fr/en/tof/' },
    ],
  },
]

// ─── Link helpers ───────────────────────────────────────────────
// "Respiratory & Airway Management" → "respiratory-and-airway-management"
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/** Where a product click goes: the product's page on the partner's website (falls back to their homepage) */
export const productLink = (principal: Principal, product: Product) => product.url ?? principal.website

/** Link to a category tab on the Services page, e.g. /services#respiratory-and-airway-management */
export const categoryHref = (category: string) => `/services#${slugify(category)}`

// ─── Home hero slides ───────────────────────────────────────────
// One flagship product per partner. Images are from each partner's website
// (as AMMS asked); clicking a slide opens that product on the partner's site.
export interface HeroSlide {
  title: string
  caption: string
  image: string
  href: string
}

export const heroSlides: HeroSlide[] = [
  { title: 'Optiflow THRIVE', caption: 'Fisher & Paykel Healthcare', image: '/images/slider/fisher-paykel-optiflow-thrive.webp', href: 'https://www.fphcare.com/nz/hospital/surgical/anesthesia/' },
  { title: 'Prima 460 Anaesthesia Machine', caption: 'Penlon', image: '/images/slider/penlon-prima-460.webp', href: 'https://www.penlon.com/product/prima-460/' },
  { title: 'Vivo 45 LS Ventilator', caption: 'Breas', image: '/images/slider/breas-vivo-45-ls.webp', href: 'https://www.breas.com/en/products/life-support/vivo-45ls' },
  { title: 'S.Box CPAP', caption: 'Sefam', image: '/images/slider/sefam-sbox.webp', href: 'https://sefam-international.com/cpaps' },
  { title: 'Air & Oxygen Blender', caption: 'Bio-Med Devices', image: '/images/slider/biomed-blender.webp', href: 'https://www.biomeddevices.com/blender-models' },
  { title: 'Quark PFT', caption: 'COSMED', image: '/images/slider/cosmed-quark-pft.webp', href: 'https://www.cosmed.com/en/products/pulmonary-function/quark-pft' },
  { title: 'MaxO₂ ME Oxygen Analyzer', caption: 'Salaera', image: '/images/slider/salaera-maxo2-me.webp', href: 'https://salaera.com/products/maxo2-me' },
  { title: 'Nitronox Plus 50/50', caption: 'Porter', image: '/images/slider/porter-nitronox-plus.webp', href: 'https://www.porterinstrument.com/labor-and-delivery' },
  { title: 'Spot Vision Screener', caption: 'Baxter', image: '/images/slider/baxter-spot-vision-screener.webp', href: 'https://pro.baxter.com/products/diagnostics-examination/vision-screening/spot-vision-screener' },
  { title: 'TOFscan', caption: 'idmed', image: '/images/slider/idmed-tofscan.webp', href: 'https://www.idmed.fr/en/tof/' },
]
