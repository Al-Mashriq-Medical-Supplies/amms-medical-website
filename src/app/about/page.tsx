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
            <h1 className="w-full text-center font-playfair text-4xl sm:text-5xl font-semibold leading-[1.1] mb-6 tracking-tight text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874]">
              Transforming UAE Healthcare Since 1991.
            </h1>
            <p className="w-full text-center font-dm-sans text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto px-4">
              For over 30 years, we have been a trusted partner in the region, delivering innovative medical equipment and world-class healthcare solutions to advance patient care.
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
