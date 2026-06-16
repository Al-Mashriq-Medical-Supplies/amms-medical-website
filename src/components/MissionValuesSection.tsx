'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function MissionValuesSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Header
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

    // Values stagger
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
        
        <div className="mv-header opacity-0 mb-24">
          <span className="font-dm-sans text-xs text-green-400 uppercase tracking-[0.2em] block mb-6">
            Purpose & Integrity
          </span>
          <h2 className="font-outfit font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl">
            Advancing <span className="text-green-500 font-medium">patient care</span> through uncompromising quality and clinical integrity.
          </h2>
        </div>

        <div className="mv-grid grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-white/10 pt-16">
          {[
            {
              title: 'Patient First',
              desc: 'Every decision is guided by what is best for patient safety and clinical outcomes.',
            },
            {
              title: 'Clinical Excellence',
              desc: 'We partner only with manufacturers who meet the highest standards of global innovation.',
            },
            {
              title: 'True Partnership',
              desc: 'Building relationships grounded in transparency, trust, and a shared commitment to success.',
            },
            {
              title: 'Absolute Integrity',
              desc: 'Operating with the highest ethical standards in every transaction and daily interaction.',
            },
          ].map(({ title, desc }, i) => (
            <div
              key={title}
              className="mv-card opacity-0"
            >
              <div className="font-dm-sans text-xs text-slate-500 mb-4">0{i + 1}</div>
              <h3 className="font-outfit font-medium text-2xl mb-4">{title}</h3>
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
