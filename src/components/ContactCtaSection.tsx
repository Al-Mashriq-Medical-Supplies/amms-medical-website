'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CheckCircle2, Loader2, Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCtaSection() {
  const container = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useGSAP(() => {
    gsap.fromTo('.cta-card-left',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        }
      }
    )

    gsap.fromTo('.cta-card-right',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        }
      }
    )
  }, { scope: container })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      gsap.fromTo('.success-msg',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
      )

      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1200)
  }

  return (
    <section ref={container} className="relative bg-[var(--color-background)] py-16 sm:py-20 lg:py-24 border-y border-[var(--color-border)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Get in Touch (Primary Green) */}
          <div className="cta-card-left opacity-0 relative bg-[var(--color-brand)] rounded-3xl p-8 sm:p-10 overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(58,168,116,0.15)]">
            {/* Subtle overlay pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 mb-8 sm:mb-12">
              <span className="font-dm-sans text-xs font-semibold text-white/90 uppercase tracking-[0.2em] block mb-4">
                Get in Touch
              </span>
              <h2 className="font-playfair font-medium text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                Ready to elevate your clinical capabilities?
              </h2>
              <p className="font-dm-sans text-sm sm:text-base text-white/90 font-light max-w-md leading-relaxed">
                Connect with our clinical engineering team for tailored medical equipment solutions, site planning, and seamless integration.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/97126277223"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-[var(--color-brand)] font-dm-sans font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+97126277223"
                className="group flex items-center justify-center gap-3 bg-[var(--color-navy)] text-white font-dm-sans font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-[#1a2b4b] hover:shadow-lg hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                <span>Call Support</span>
              </a>
              
              {/* Quick Contact Info */}
              <div className="sm:col-span-2 mt-4 space-y-3 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3 text-white/90 font-dm-sans text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:amms@eim.ae" className="hover:text-white transition-colors">amms@eim.ae</a>
                </div>
                <div className="flex items-start gap-3 text-white/90 font-dm-sans text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>M-4, Plot No.2, Musaffah Ind. Area, Abu Dhabi, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Business Enquiry Form (White / Navy) */}
          <div className="cta-card-right opacity-0 relative bg-white border border-[var(--color-border)]/50 rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(22,38,63,0.04)] overflow-hidden flex flex-col">
            {isSuccess ? (
              <div className="success-msg absolute inset-0 z-20 flex flex-col items-center justify-center bg-white p-8 sm:p-12 text-center opacity-0">
                <CheckCircle2 size={64} className="mb-6 text-[var(--color-brand)]" />
                <h3 className="mb-4 font-playfair text-2xl sm:text-3xl font-medium text-[var(--color-navy)]">Inquiry Received</h3>
                <p className="max-w-sm font-dm-sans font-light text-[var(--color-charcoal)] text-sm sm:text-base leading-relaxed">
                  Thank you for reaching out to Al Mashriq Medical Supplies. A specialist will contact you within 24 hours.
                </p>
              </div>
            ) : null}

            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-medium text-[var(--color-navy)] mb-2">
                Business Enquiry
              </h3>
              <p className="font-dm-sans text-sm text-[var(--color-charcoal)]/80 font-light">
                Send us a message and our team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 flex-grow justify-between">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="cta-name">Name</label>
                    <input
                      id="cta-name"
                      name="name"
                      required
                      type="text"
                      className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="cta-org">Organization</label>
                    <input
                      id="cta-org"
                      name="organization"
                      required
                      type="text"
                      className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                      placeholder="Hospital / Facility"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="cta-email">Email</label>
                    <input
                      id="cta-email"
                      name="email"
                      required
                      type="email"
                      className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="cta-phone">Phone</label>
                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="cta-message">Message</label>
                  <textarea
                    id="cta-message"
                    name="message"
                    required
                    rows={3}
                    className="w-full rounded-xl resize-none border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex h-14 w-full rounded-xl items-center justify-center gap-3 bg-[var(--color-navy)] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1a2b4b] hover:shadow-lg disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
