import Image from 'next/image'

// Award and certificate photos from the Elevate Labs office shoot.
const items = [
  {
    src: '/images/office/award-fisher-paykel.jpg',
    alt: 'Fisher & Paykel Healthcare Distributor of the Year award presented to Al Mashriq Medical Supplies',
    title: 'Distributor of the Year',
    caption: 'Fisher & Paykel Healthcare',
  },
  {
    src: '/images/office/certificate-respiratory-congress.jpg',
    alt: 'Certificate of Appreciation from the Respiratory Therapy Congress',
    title: 'Certificate of Appreciation',
    caption: 'Respiratory Therapy Congress',
  },
  {
    src: '/images/office/iso-certificate.jpg',
    alt: 'ISO certificate of Al Mashriq Medical Supplies',
    title: 'ISO Certified',
    caption: 'Quality Management System',
  },
]

export default function RecognitionSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-dm-sans text-xs sm:text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Recognition
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#3AA874]">
            Trusted by Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item) => (
            <figure key={item.src} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5 text-center">
                <div className="font-playfair text-lg font-semibold text-[#16263F]">{item.title}</div>
                <div className="mt-1 font-dm-sans text-xs uppercase tracking-[0.15em] text-[#3AA874] font-semibold">
                  {item.caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
