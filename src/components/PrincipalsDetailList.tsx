'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { principals } from '@/lib/seo'

gsap.registerPlugin(ScrollTrigger)

export default function PrincipalsDetailList() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.pd-card',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      }
    )
  }, { scope: container })

  return (
    <section ref={container} className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-light text-3xl sm:text-4xl text-slate-900">
            Principal <span className="font-medium italic">Manufacturers</span>
          </h2>
        </div>

        <div className="space-y-5">
          {principals.map((principal, index) => (
            <div
              key={principal.slug}
              className="pd-card opacity-0 group bg-white border border-slate-200 overflow-hidden hover:border-[#3AA874]/30 hover:shadow-[0_12px_40px_rgba(58,168,116,0.08)] transition-all duration-700"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Logo + Name */}
                  <div className="sm:w-1/3 flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover:border-[#3AA874]/20 transition-colors duration-500">
                      <Image
                        src={principal.logo}
                        alt={`${principal.name} logo`}
                        width={56}
                        height={56}
                        className="object-contain max-h-[40px] w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <span className="font-dm-sans text-[10px] text-slate-400 block mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-playfair font-medium text-xl text-slate-900 group-hover:text-[#3AA874] transition-colors duration-500">
                        {principal.name}
                      </h3>
                      <p className="font-dm-sans text-xs text-slate-500 font-light mt-1">
                        {principal.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="sm:w-2/3 sm:border-l sm:border-slate-100 sm:pl-8">
                    <span className="font-dm-sans text-[10px] text-[#3AA874] uppercase tracking-[0.2em] block mb-3">
                      Product Range
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {principal.products.map((product) => (
                        <span
                          key={product}
                          className="inline-block px-3 py-1.5 bg-slate-50 border border-slate-100 font-dm-sans text-xs text-slate-600 font-light group-hover:border-[#3AA874]/20 group-hover:bg-[#3AA874]/[0.03] transition-all duration-500"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
