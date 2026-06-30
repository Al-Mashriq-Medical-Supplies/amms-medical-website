'use client'

import { useRef, useState } from 'react'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Building2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { siteConfig } from '@/lib/seo'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.contact-panel',
      { y: 34, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 78%',
        },
      }
    )
  }, { scope: container })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      gsap.fromTo('.success-msg',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }
      )

      setTimeout(() => setIsSuccess(false), 5000)
    }, 1200)
  }

  return (
    <div ref={container} id="contact-form" className="w-full">
      {/* Office Info + Maps */}
      <div className="contact-panel opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Abu Dhabi Office */}
        <div className="bg-white border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={20} className="text-[var(--color-brand)]" />
              <h3 className="font-playfair text-xl font-medium text-[var(--color-navy)]">
                {siteConfig.headOffice.name}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-charcoal)]/50 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-sm text-[var(--color-charcoal)] font-light leading-relaxed">
                  {siteConfig.headOffice.company}<br />
                  {siteConfig.headOffice.street}<br />
                  {siteConfig.headOffice.poBox}, {siteConfig.headOffice.city} — {siteConfig.headOffice.country}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--color-charcoal)]/50 shrink-0" />
                <a href={`tel:${siteConfig.headOffice.phone.replace(/\s/g, '')}`} className="font-dm-sans text-sm text-[var(--color-charcoal)] hover:text-[var(--color-brand)] transition-colors">
                  Tel: {siteConfig.headOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-charcoal)]/50 shrink-0" />
                <a href={`mailto:${siteConfig.headOffice.email}`} className="font-dm-sans text-sm text-[var(--color-charcoal)] hover:text-[var(--color-brand)] transition-colors">
                  {siteConfig.headOffice.email}
                </a>
              </div>
            </div>
          </div>
          <iframe
            src={siteConfig.headOffice.mapUrl}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AMMS Head Office Abu Dhabi Location"
          />
        </div>

        {/* Dubai Branch */}
        <div className="bg-white border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={20} className="text-[#3AA874]" />
              <h3 className="font-playfair text-xl font-medium text-slate-900">
                {siteConfig.branchOffice.name}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-charcoal)]/50 shrink-0 mt-0.5" />
                <p className="font-dm-sans text-sm text-[var(--color-charcoal)] font-light leading-relaxed">
                  {siteConfig.branchOffice.company}<br />
                  {siteConfig.branchOffice.street}<br />
                  {siteConfig.branchOffice.poBox}, {siteConfig.branchOffice.city} — {siteConfig.branchOffice.country}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--color-charcoal)]/50 shrink-0" />
                <a href={`tel:${siteConfig.branchOffice.phone.replace(/\s/g, '')}`} className="font-dm-sans text-sm text-[var(--color-charcoal)] hover:text-[var(--color-brand)] transition-colors">
                  Tel: {siteConfig.branchOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--color-charcoal)]/50 shrink-0" />
                <a href={`mailto:${siteConfig.branchOffice.email}`} className="font-dm-sans text-sm text-[var(--color-charcoal)] hover:text-[var(--color-brand)] transition-colors">
                  {siteConfig.branchOffice.email}
                </a>
              </div>
            </div>
          </div>
          <iframe
            src={siteConfig.branchOffice.mapUrl}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AMMS Branch Office Dubai Location"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-panel opacity-0 max-w-2xl mx-auto">
        <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-[var(--color-border)]/50 shadow-[0_4px_20px_rgba(22,38,63,0.04)] overflow-hidden">
          {isSuccess ? (
            <div className="success-msg absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--color-brand)] p-12 text-center text-[var(--color-background)] opacity-0">
              <CheckCircle2 size={64} className="mb-6 text-[var(--color-background)]/80" />
              <h3 className="mb-4 font-playfair text-3xl font-medium">Inquiry Received</h3>
              <p className="max-w-sm font-dm-sans font-light text-white/80">
                Thank you for reaching out. One of our specialists will contact you within 24 hours.
              </p>
            </div>
          ) : null}

          <h3 className="mb-2 font-playfair text-2xl font-medium text-[var(--color-navy)]">
            Send Us a Message
          </h3>
          <p className="mb-8 font-dm-sans text-sm text-[var(--color-charcoal)] font-light">
            Our team will respond within one business day.
          </p>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="sr-only" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="sr-only" htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-org">Organization</label>
                <input
                  id="contact-org"
                  name="organization"
                  required
                  type="text"
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
                  placeholder="Organization / Hospital"
                />
              </div>
            </div>

            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="mb-6 w-full rounded-xl resize-none border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm font-normal text-[var(--color-charcoal)] focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
              placeholder="Tell us about your requirements..."
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full rounded-xl items-center justify-center gap-3 bg-[var(--color-navy)] text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1a2b4b] hover:shadow-lg disabled:opacity-70 group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
