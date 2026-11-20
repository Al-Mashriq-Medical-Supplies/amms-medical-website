'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import CountUp from 'react-countup'
import VisionMission from '@/components/VisionMission'

gsap.registerPlugin(ScrollTrigger)

export default function MissionValuesSection() {
  const container = useRef<HTMLElement>(null)
  const paragraphRef = useRef<HTMLHeadingElement>(null)

  const introText = "Superior patient care is at the very heart of what we do. Al Mashriq Medical Supplies (AMMS) brings world-class quality of healthcare to the UAE by offering capital equipment, consumables, disposables, and homecare products. We support hospitals, medical centres, and clinics with innovative technologies and prompt follow-up to enhance recovery and ensure optimal patient experiences."
  const words = introText.split(" ")

  useGSAP(() => {
    // Fade up elements
    gsap.fromTo('.mv-fade-up',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    // Text scroll reveal effect (color based, no foggy opacity)
    gsap.to('.reveal-word', {
      color: '#16263F',
      stagger: 0.05,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 85%',
        end: 'bottom 45%',
        scrub: 1,
      }
    })
  }, { scope: container })

  return (
    <section ref={container} id="mission" className="pt-4 pb-20 md:pt-8 md:pb-28 bg-[var(--color-background)] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Paragraph & Stats */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="mv-fade-up flex flex-col items-center mb-8">
            <span className="font-dm-sans text-xs sm:text-sm text-[#3AA874] uppercase tracking-[0.25em] font-semibold mb-4">
              Our Commitment
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#3AA874] to-transparent"></div>
          </div>
          
          <h2 ref={paragraphRef} className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light mb-12 sm:mb-16 px-2 sm:px-4">
            {words.map((word, i) => (
              <span key={i} className="reveal-word text-slate-300">
                {word}{' '}
              </span>
            ))}
          </h2>

          <div className="mv-fade-up grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-y border-[#3AA874]/20 py-10">
            <div className="flex flex-col items-center justify-center">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={35} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Years in Market</span>
            </div>
            <div className="flex flex-col items-center justify-center sm:border-x border-[#3AA874]/20">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={20} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Global Partners</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Dedicated Professionals</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mv-fade-up max-w-5xl mx-auto">
          <VisionMission />
        </div>

      </div>
    </section>
  )
}
