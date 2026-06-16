'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FlowSection } from '@/components/ui/story-scroll'

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
    <FlowSection aria-label="Contact" style={{ backgroundColor: '#ffffff', color: '#000' }}>
      <div
        ref={container}
        id="contact"
        className="story-section relative w-full lg:h-[90vh]"
      >
        <div className="story-progress absolute left-0 top-0 h-1 w-full origin-left bg-green-700 hidden" />
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 lg:h-[76vh] lg:grid-cols-2">
            <div className="contact-panel relative mb-10 min-h-[560px] overflow-hidden bg-slate-900 opacity-0 lg:mb-0 lg:min-h-0">
              <Image
                alt="Medical consultation and hospital equipment support"
                className="h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/65 via-slate-900/35 to-green-900/45" />

              <div className="absolute left-6 top-7 sm:left-8 sm:top-8">
                <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.28em] text-green-200">
                  Get in Touch
                </span>
                <h2 className="max-w-md font-outfit text-3xl font-light leading-tight text-white sm:text-4xl lg:text-[2.45rem]">
                  Let&apos;s build a healthier future together.
                </h2>
              </div>

              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <div className="bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.20)]">
                  <a
                    href="tel:+971000000000"
                    className="mb-4 flex items-center"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-green-100 bg-green-50 text-green-800">
                      <Phone size={17} />
                    </span>
                    <span className="ml-4 text-sm font-normal leading-6 text-slate-900">
                      +971 00 000 0000
                    </span>
                  </a>

                  <a
                    href="mailto:info@amms.ae"
                    className="mb-4 flex items-center"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-green-100 bg-green-50 text-green-800">
                      <Mail size={17} />
                    </span>
                    <span className="ml-4 text-sm font-normal leading-6 text-slate-900">
                      info@amms.ae
                    </span>
                  </a>

                  <div className="flex items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-green-100 bg-green-50 text-green-800">
                      <MapPin size={17} />
                    </span>
                    <span className="ml-4 text-sm font-normal leading-5 text-slate-900">
                      Business Bay, Dubai, United Arab Emirates
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-panel relative bg-slate-50 p-6 opacity-0 sm:p-8 lg:p-6 xl:p-7 border border-slate-200 lg:border-l-0">
              {isSuccess ? (
                <div className="success-msg absolute inset-0 z-20 flex flex-col items-center justify-center bg-green-800 p-12 text-center text-white opacity-0">
                  <CheckCircle2 size={64} className="mb-6 text-green-300" />
                  <h3 className="mb-4 font-outfit text-3xl font-medium">Inquiry Received</h3>
                  <p className="max-w-sm font-dm-sans font-light text-green-100">
                    Thank you for reaching out. One of our biomedical specialists will contact you within 24 hours.
                  </p>
                </div>
              ) : null}

              <h3 className="mb-5 font-outfit text-3xl font-semibold leading-tight text-green-800">
                Send Us A Message
              </h3>

              <form onSubmit={handleSubmit} className="relative z-10">
                <label className="sr-only" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  className="mb-4 h-10 w-full border border-slate-200 bg-white px-4 text-sm font-normal leading-7 text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-green-800 focus:outline-none"
                  placeholder="Name"
                />

                <label className="sr-only" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  className="mb-4 h-10 w-full border border-slate-200 bg-white px-4 text-sm font-normal leading-7 text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-green-800 focus:outline-none"
                  placeholder="Email"
                />

                <label className="sr-only" htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  className="mb-4 h-10 w-full border border-slate-200 bg-white px-4 text-sm font-normal leading-7 text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-green-800 focus:outline-none"
                  placeholder="Phone"
                />

                <fieldset className="mb-4">
                  <legend className="mb-2 text-sm font-normal leading-6 text-slate-500">
                    Preferred method of communication
                  </legend>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex cursor-pointer items-center text-sm font-normal leading-6 text-slate-500">
                      <input
                        defaultChecked
                        name="communication"
                        type="radio"
                        value="email"
                        className="mr-3 h-4 w-4 accent-green-800"
                      />
                      Email
                    </label>
                    <label className="flex cursor-pointer items-center text-sm font-normal leading-6 text-slate-500">
                      <input
                        name="communication"
                        type="radio"
                        value="phone"
                        className="mr-3 h-4 w-4 accent-green-800"
                      />
                      Phone
                    </label>
                  </div>
                </fieldset>

                <label className="sr-only" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  className="mb-4 w-full resize-none border border-slate-200 bg-white px-4 py-2.5 text-sm font-normal leading-6 text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-green-800 focus:outline-none"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-10 w-full items-center justify-center gap-3 bg-slate-900 text-sm font-semibold leading-6 text-white shadow-sm transition-all duration-500 hover:bg-green-800 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FlowSection>
  )
}
