import type { Metadata } from 'next'
import ProductCategoriesSection from '@/components/ProductCategoriesSection'
import ContactCtaSection from '@/components/ContactCtaSection'

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Explore AMMS comprehensive medical equipment portfolio — ICU, CCU, NICU, respiratory care, anesthesia, operation theatre, diagnostics, rehabilitation, and homecare products.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="w-full text-center font-playfair font-light text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-[1.05] mb-4">
              Comprehensive <span className="text-[#3AA874]">medical solutions</span>
            </h1>
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.2em] block mb-8">
              Products & Services
            </span>
            <p className="w-full text-center font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              We offer a focused range of medical equipment through our global principals covering
              critical care, respiratory therapy, anesthesia, diagnostics, rehabilitation, and homecare.
            </p>
          </div>
        </div>
      </section>

      <ProductCategoriesSection />

      {/* Service Capabilities */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-4">
              Beyond Equipment
            </span>
            <h2 className="font-playfair font-light text-3xl sm:text-4xl text-slate-900 leading-tight">
              Complete <span className="font-medium italic">service capabilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Installation & Commissioning',
                desc: 'Expert equipment installation services with comprehensive site preparation and system commissioning.',
              },
              {
                title: 'Training & Education',
                desc: 'Comprehensive clinical staff training programs to ensure safe and effective equipment utilization.',
              },
              {
                title: 'Maintenance & Support',
                desc: 'On-site technical support, preventive maintenance, and guaranteed spare parts availability.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 p-8 group hover:border-[#3AA874]/30 hover:shadow-[0_8px_30px_rgba(58,168,116,0.06)] transition-all duration-500">
                <h3 className="font-playfair font-medium text-xl text-slate-900 mb-4 group-hover:text-[#3AA874] transition-colors">
                  {title}
                </h3>
                <p className="font-dm-sans text-sm text-slate-500 font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  )
}
