import type { Metadata } from 'next'
import MissionValuesSection from '@/components/MissionValuesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import IndustriesServedSection from '@/components/IndustriesServedSection'
import DirectorMessageSection from '@/components/DirectorMessageSection'
import OfficeGallery from '@/components/OfficeGallery'
import RecognitionSection from '@/components/RecognitionSection'
import Image from 'next/image'

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

          {/* Reception banner — Elevate Labs office shoot (058A0517) */}
          <div className="relative mt-10 sm:mt-12 mx-auto w-full max-w-5xl aspect-[3/2] sm:aspect-[12/5] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-20px_rgba(22,38,63,0.35)] ring-1 ring-slate-900/5">
            <Image
              src="/images/office/reception.jpg"
              alt="Reception of Al Mashriq Medical Supplies head office in Abu Dhabi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </section>

      <MissionValuesSection />
      <OfficeGallery />
      <DirectorMessageSection />
      <RecognitionSection />
      <IndustriesServedSection />
    </>
  )
}
