'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FlowSection } from '@/components/ui/story-scroll'

gsap.registerPlugin(ScrollTrigger)

export default function ContactCtaSection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.cta-text',
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.cta-btn',
      { x: 30, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )
  }, { scope: container })

  const handleNavClick = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <FlowSection aria-label="Contact CTA" style={{ backgroundColor: '#14532d', color: '#fff' }}>
      <div ref={container} className="w-full relative py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
            
            <div className="cta-text opacity-0 md:w-2/3">
              <h2 className="font-outfit font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Ready to elevate your <br className="hidden sm:block" />
                <span className="font-medium text-green-400">clinical capabilities?</span>
              </h2>
              <p className="font-dm-sans text-xl text-green-100/80 font-light max-w-xl">
                Connect with our biomedical engineers to discuss tailored equipment solutions for your facility.
              </p>
            </div>

            <div className="cta-btn opacity-0 md:w-1/3 flex md:justify-end w-full">
              <button
                onClick={handleNavClick}
                className="group bg-white text-green-900 font-dm-sans font-medium px-8 py-5 flex items-center justify-center gap-3 w-full md:w-auto hover:bg-green-50 transition-colors duration-300"
              >
                Contact Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </FlowSection>
  )
}
