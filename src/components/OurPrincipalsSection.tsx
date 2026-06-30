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
    <section className="py-12 md:py-36 bg-white" aria-label="Our Principals">
      <div ref={container} id="principals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="pr-header opacity-0 text-center mb-20">
          <h2 className="w-full text-center font-playfair font-light text-4xl sm:text-5xl text-slate-900 leading-tight mb-4">
            Partnering with <span className="text-[#3AA874]">Industry Leaders</span>
          </h2>
          <span className="w-full text-center font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.25em] block mb-6">
            Our Global Partners
          </span>
          <p className="font-dm-sans text-lg text-slate-500 font-light max-w-2xl mx-auto">
            We are the authorized distributor for the world&apos;s most innovative
            medical technology manufacturers in the UAE.
          </p>
        </div>

        <div className="pr-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {principals.map((principal) => (
            <div
              key={principal.slug}
              className="pr-card opacity-0 group relative bg-white border border-slate-100 p-8 flex flex-col items-center justify-center text-center hover:border-[#3AA874]/40 transition-all duration-700 overflow-hidden cursor-pointer"
              style={{ minHeight: '160px' }}
            >
              {/* Premium hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AA874]/0 via-transparent to-[#3AA874]/0 group-hover:from-[#3AA874]/[0.04] group-hover:to-[#3AA874]/[0.08] transition-all duration-700" />
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#3AA874] to-transparent group-hover:w-full transition-all duration-700" />

              {/* Logo image */}
              <div className="w-full h-16 flex items-center justify-center mb-3 relative z-10">
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={160}
                  height={60}
                  className="object-contain max-h-[50px] w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <p className="font-dm-sans text-[11px] text-slate-400 font-light leading-snug line-clamp-2 relative z-10 group-hover:text-slate-600 transition-colors duration-500">
                {principal.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
