'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function MissionValuesSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.mv-header',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.mv-card',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.mv-grid',
          start: 'top 75%',
        }
      }
    )
  }, { scope: container })

  return (
    <section ref={container} id="mission" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mv-header opacity-0 mb-24 flex flex-col items-center text-center">
          <h2 className="w-full text-center font-playfair font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl mb-6">
            All our products are renowned for their <span className="text-[#3AA874]">innovation, functionality, and quality</span>, complemented by excellent support services.
          </h2>
          <span className="w-full text-center font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-6">
            Our Mission & Values
          </span>
        </div>

        <div className="mv-grid grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-white/10 pt-16">
          {[
            {
              title: 'Patient First',
              desc: 'Every decision is guided by what is best for patient safety and clinical outcomes across the UAE.',
            },
            {
              title: 'Clinical Excellence',
              desc: 'We partner only with manufacturers who meet the highest standards of global innovation and quality.',
            },
            {
              title: 'True Partnership',
              desc: 'Building relationships grounded in transparency, trust, and a shared commitment to healthcare success.',
            },
            {
              title: 'Absolute Integrity',
              desc: 'Operating with the highest ethical standards in every transaction since 1991.',
            },
          ].map(({ title, desc }, i) => (
            <div
              key={title}
              className="mv-card opacity-0"
            >
              <div className="font-dm-sans text-xs text-slate-500 mb-4">0{i + 1}</div>
              <h3 className="font-playfair font-medium text-2xl mb-4">{title}</h3>
              <p className="font-dm-sans font-light text-slate-400 leading-relaxed text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
