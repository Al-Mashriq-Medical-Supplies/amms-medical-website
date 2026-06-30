import type { Metadata } from 'next'
import OurPrincipalsSection from '@/components/OurPrincipalsSection'
import ClientsMarquee from '@/components/ClientsMarquee'
import ContactCtaSection from '@/components/ContactCtaSection'
import PrincipalsDetailList from '@/components/PrincipalsDetailList'

export const metadata: Metadata = {
  title: 'Our Principals',
  description: 'AMMS is the authorized UAE distributor for Fisher & Paykel Healthcare, Penlon, Breas, COSMED, Baxter, Sefam, Maxtec, idmed, Bio-Med Devices, and Porter.',
}

export default function PrincipalsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="w-full text-center font-playfair font-light text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-[1.05] mb-4">
              Trusted <span className="text-[#3AA874]">global principals</span>
            </h1>
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-8">
              Our Partners in Health Care
            </span>
            <p className="w-full text-center font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              We partner with principals who help us enhance the standard of care for patients
              across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      <ClientsMarquee />
      <PrincipalsDetailList />
      <OurPrincipalsSection />
      <ContactCtaSection />
    </>
  )
}
