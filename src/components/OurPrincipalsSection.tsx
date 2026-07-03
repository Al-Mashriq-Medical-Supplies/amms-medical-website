'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { principals } from '@/lib/seo'

gsap.registerPlugin(ScrollTrigger)

export default function OurPrincipalsSection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.pr-header',
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.pr-card',
      { scale: 0.9, opacity: 0, x: 60 },
      {
        scale: 1, opacity: 1, x: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.pr-grid',
          start: 'top 80%',
        }
      }
    )
  }, { scope: container })

  return (
    <section className="py-8 md:py-36 bg-[var(--color-background)]" aria-label="Our Principals">
      <div ref={container} id="principals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="pr-header opacity-0 text-center mb-20">
          <h2 className="w-full text-center font-playfair font-light text-3xl sm:text-5xl text-[var(--color-navy)] leading-tight mb-4">
            Partnering with <span className="text-[var(--color-brand)]">Industry Leaders</span>
          </h2>
          <span className="w-full text-center font-dm-sans text-xs text-[var(--color-brand)] uppercase tracking-[0.25em] block mb-6">
            Our Global Partners
          </span>
          <p className="font-dm-sans text-lg text-[var(--color-charcoal)] font-light max-w-2xl mx-auto">
            We are the authorized distributor for the world&apos;s most innovative
            medical technology manufacturers in the UAE.
          </p>
        </div>

        <div className="pr-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10">
          {principals.map((principal) => (
            <div
              key={principal.slug}
              className="pr-card opacity-0 group relative bg-white border border-[var(--color-border)]/50 p-4 lg:p-10 flex flex-col items-center justify-center text-center hover:border-[var(--color-brand)]/40 transition-all duration-700 overflow-hidden cursor-pointer rounded-xl lg:rounded-2xl shadow-sm hover:shadow-xl min-h-[160px] lg:min-h-[200px]"
            >
              {/* Premium hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/0 via-transparent to-[var(--color-brand)]/0 group-hover:from-[var(--color-brand)]/[0.04] group-hover:to-[var(--color-brand)]/[0.08] transition-all duration-700" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent group-hover:w-full transition-all duration-700" />

              {/* Logo image */}
              <div className="w-full h-20 lg:h-24 flex items-center justify-center mb-5 relative z-10">
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={240}
                  height={100}
                  className="object-contain h-full w-auto transition-all duration-700"
                />
              </div>
              <p className="font-dm-sans text-[11px] lg:text-[12px] text-[var(--color-charcoal)]/60 font-light leading-relaxed line-clamp-2 relative z-10 group-hover:text-[var(--color-charcoal)] transition-colors duration-500">
                {principal.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
