import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Al Mashriq Medical Supplies — Head Office in Abu Dhabi (Falcon Tower, Qasr Al Hosn) and Branch Office in Dubai (Al Garhoud). Call +971 2 627 7223.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-4 font-semibold">
              Get in Touch
            </span>
            <h1 className="w-full text-center font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-8 tracking-tight text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874]">
              Let&apos;s build a healthier future together.
            </h1>
            <p className="w-full text-center font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Connect with our team of specialists to discuss your medical equipment
              requirements. We serve healthcare facilities across all seven Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Maps & Form */}
      <section className="py-16 bg-[var(--color-background)] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>

      <FAQSection />
    </>
  )
}
