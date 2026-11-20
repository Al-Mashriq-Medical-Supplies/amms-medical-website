'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Photos from the Elevate Labs office shoot. Replace the files in /public/images/office
// with the creative head's edited versions (same names) when they are ready.
const photos = [
  { src: '/images/office/logo-sign.jpg', alt: 'Illuminated Al Mashriq Medical Supplies sign at the AMMS office', className: 'col-span-2 row-span-2' },
  { src: '/images/office/reception-wide.jpg', alt: 'AMMS reception area', className: 'col-span-2 lg:col-span-1' },
  { src: '/images/office/dhow.jpg', alt: 'Traditional dhow model in the AMMS office', className: 'col-span-1' },
  { src: '/images/office/lounge.jpg', alt: 'Executive lounge at the AMMS office', className: 'col-span-1' },
  { src: '/images/office/waiting-area.jpg', alt: 'AMMS waiting area', className: 'col-span-2 lg:col-span-1' },
]

export default function OfficeGallery() {
  const container = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.office-tile',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 80%' },
        },
      )
    },
    { scope: container },
  )

  return (
    <section ref={container} className="py-14 sm:py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-dm-sans text-xs sm:text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Our Office
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#3AA874]">
            Inside AMMS, Abu Dhabi
          </h2>
          <p className="mt-4 font-dm-sans text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our head office at Falcon Tower, Qasr Al Hosn, where our team supports healthcare providers across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`office-tile group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
