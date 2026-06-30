import type { Metadata } from 'next'
import AboutSection from '@/components/AboutSection'
import MissionValuesSection from '@/components/MissionValuesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import IndustriesServedSection from '@/components/IndustriesServedSection'
import ContactCtaSection from '@/components/ContactCtaSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Al Mashriq Medical Supplies — established in 1991, providing world-class medical equipment and healthcare solutions across the UAE for over 35 years.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero-style About Banner */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-6">
              About Al Mashriq Medical Supplies
            </span>
            <h1 className="font-playfair font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.05] mb-8">
              A cornerstone of <span className="font-medium italic text-[#3AA874]">UAE healthcare</span> since 1991.
            </h1>
            <p className="font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
              We have been in the business since 1991, and understand the fundamental role we play in the
              United Arab Emirates healthcare growth. We are the local representative of several well-known
              and innovative medical equipment manufacturers.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <MissionValuesSection />
      <WhyChooseUsSection />
      <IndustriesServedSection />
      <ContactCtaSection />
    </>
  )
}
