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
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="w-full text-center font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-6">
              Get in Touch
            </span>
            <h1 className="w-full text-center font-playfair font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.05] mb-8">
              Let&apos;s build a <span className="font-medium italic text-[#3AA874]">healthier future</span> together.
            </h1>
            <p className="w-full text-center font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Connect with our team of specialists to discuss your medical equipment
              requirements. We serve healthcare facilities across all seven Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with Maps & Form */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>

      <FAQSection />
    </>
  )
}
