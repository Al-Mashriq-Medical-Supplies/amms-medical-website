'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FlowSection } from '@/components/ui/story-scroll'

gsap.registerPlugin(ScrollTrigger)

const principals = [
  'Philips Healthcare', 'Siemens Healthineers', 'GE Healthcare', 
  'Dräger', 'Nihon Kohden', 'Mindray',
  'Masimo', 'Fisher & Paykel', 'Schiller',
  'Zoll Medical', 'Medtronic', 'Stryker'
]

export default function OurPrincipalsSection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Header fade
    gsap.fromTo('.pr-header',
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

    // Grid stagger
    gsap.fromTo('.pr-card',
      { scale: 0.95, opacity: 0 },
      {
        scale: 1, opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pr-grid',
          start: 'top 80%',
        }
      }
    )
  }, { scope: container })

  return (
    <FlowSection aria-label="Our Principals" style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>
      <div ref={container} id="principals" className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="pr-header opacity-0 text-center mb-20">
            <span className="font-dm-sans text-xs text-green-800 uppercase tracking-[0.2em] block mb-4">
              Our Global Partners
            </span>
            <h2 className="font-outfit font-light text-4xl sm:text-5xl text-slate-900 leading-tight mb-6">
              Partnering with <span className="font-medium">Industry Leaders</span>
            </h2>
            <p className="font-dm-sans text-lg text-slate-500 font-light max-w-2xl mx-auto">
              We are proud to be the trusted distributor for the world&apos;s most innovative 
              medical technology manufacturers.
            </p>
          </div>

          <div className="pr-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {principals.map((name) => (
              <div
                key={name}
                className="pr-card opacity-0 bg-white aspect-[3/2] flex items-center justify-center p-6 group hover:bg-slate-50 transition-colors"
              >
                <span className="font-outfit font-light text-lg text-slate-400 group-hover:text-slate-900 transition-colors text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 font-dm-sans text-sm text-green-800 hover:text-green-900 font-medium uppercase tracking-widest transition-colors group">
              View All Partners
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
    </FlowSection>
  )
}
