import type { Metadata } from 'next'
import MissionValuesSection from '@/components/MissionValuesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import IndustriesServedSection from '@/components/IndustriesServedSection'
import DirectorMessageSection from '@/components/DirectorMessageSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Al Mashriq Medical Supplies — established in 1991, providing world-class medical equipment and healthcare solutions across the UAE for over 35 years.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero-style About Banner */}
      <section className="relative pt-36 pb-16 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-4 font-semibold">
              About Al Mashriq Medical Supplies
            </span>
            <h1 className="w-full text-center font-playfair text-4xl sm:text-5xl font-semibold leading-[1.1] mb-6 tracking-tight text-[#3AA874] drop-shadow-md">
              Transforming UAE Healthcare Since 1991.
            </h1>
            <p className="w-full text-center font-dm-sans text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-3xl mx-auto px-4">
              We have been in the business since 1991 and understand the fundamental role we play in the United Arab Emirates&apos; healthcare growth. We are the local representative of several well-known and innovative medical equipment and consumable manufacturers, supported by a highly skilled team with specialized expertise, with the ability to install and train our customers on acquired equipment.
            </p>
          </div>
        </div>
      </section>

      <MissionValuesSection />
      <DirectorMessageSection />
      <IndustriesServedSection />
    </>
  )
}
