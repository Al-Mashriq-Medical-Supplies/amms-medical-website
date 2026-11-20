import type { Metadata } from 'next'
import ProductCategoriesSection from '@/components/ProductCategoriesSection'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore AMMS medical equipment and services — ICU, CCU, NICU, respiratory care, anesthesia, operation theatre, diagnostics, rehabilitation, and homecare products.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 sm:pt-36 pb-10 sm:pb-16 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-4 font-semibold">
              Our Services
            </span>
            {/* On phones the block shrinks to the heading's width so the paragraph lines up with it */}
            <div className="w-fit max-w-full sm:w-full">
              <h1 className="w-full text-center font-playfair text-[38px] sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-5 sm:mb-8 tracking-tight text-[#3AA874] drop-shadow-md">
                Comprehensive <br className="sm:hidden" />
                medical solutions
              </h1>
              <p className="w-0 min-w-full sm:w-full sm:min-w-0 mx-auto font-dm-sans text-[12.75px] sm:text-lg lg:text-xl text-slate-500 font-normal sm:font-light leading-[1.7] sm:leading-relaxed sm:max-w-2xl text-justify [text-align-last:center] hyphens-none sm:text-center">
                We offer a focused range of medical equipment through our global partners covering
                critical care, respiratory therapy, anesthesia, diagnostics, rehabilitation, and homecare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductCategoriesSection />

      {/* Service Capabilities */}
      <section className="py-12 md:py-24 bg-[var(--color-background)] border-t border-slate-200 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-[#3AA874]/[0.03] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-16">
            <span className="font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-4 font-semibold">
              Beyond Equipment
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-semibold leading-[1.1] mb-6 tracking-tight text-[#3AA874] drop-shadow-sm">
              Complete Service Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            {[
              {
                title: 'Equipment Installation',
                desc: 'End-to-end equipment setup, meticulous site preparation, and seamless clinical workflow integration without disruption.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: 'Clinical Training',
                desc: 'Tailored, hands-on training programs led by specialists, empowering your healthcare staff to maximize equipment potential safely.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: 'Preventive Maintenance',
                desc: 'Proactive technical support, scheduled preventive care, and rapid-response servicing to guarantee continuous operational excellence.',
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
            ].map(({ title, desc, icon }) => (
              <div 
                key={title} 
                className="group flex flex-col items-center text-center py-3 sm:py-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 mb-4 sm:mb-6 group-hover:bg-[#3AA874] group-hover:text-white transition-all duration-500 border border-slate-200/60 group-hover:border-transparent">
                  {icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl text-slate-900 mb-2 sm:mb-3 group-hover:text-[#3AA874] transition-colors duration-300">
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
    </>
  )
}
