'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import CountUp from 'react-countup'

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
          
          <h2 ref={paragraphRef} className="font-playfair text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light mb-16 px-4">
            {words.map((word, i) => (
              <span key={i} className="reveal-word text-slate-300">
                {word}{' '}
              </span>
            ))}
          </h2>

          <div className="mv-fade-up grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-y border-[#3AA874]/20 py-10">
            <div className="flex flex-col items-center justify-center">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={30} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Years in Market</span>
            </div>
            <div className="flex flex-col items-center justify-center sm:border-x border-[#3AA874]/20">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={20} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Global Principals</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-playfair text-4xl md:text-5xl text-[#3AA874] font-medium mb-2">
                <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </span>
              <span className="font-dm-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">Dedicated Professionals</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mv-fade-up grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Mission Card */}
          <div className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-500">
            {/* Running Light Border */}
            <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#3AA874]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-20">
                <h3 className="font-dm-sans text-[11px] sm:text-xs text-[#3AA874] uppercase tracking-[0.2em] font-semibold mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#3AA874] to-transparent mb-5 sm:mb-6"></div>
                <p className="font-playfair text-base sm:text-lg leading-relaxed font-normal text-slate-700">
                  To continuously support UAE healthcare providers by delivering innovative medical technologies, ensuring prompt service, and prioritizing optimal patient recovery and experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-500">
            {/* Running Light Border */}
            <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_270deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#3AA874]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-20">
                <h3 className="font-dm-sans text-[11px] sm:text-xs text-slate-400 group-hover:text-[#3AA874] transition-colors duration-500 uppercase tracking-[0.2em] font-semibold mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <div className="h-[2px] w-8 bg-gradient-to-r from-slate-200 group-hover:from-[#3AA874] to-transparent transition-colors duration-500 mb-5 sm:mb-6"></div>
                <p className="font-playfair text-base sm:text-lg leading-relaxed font-normal text-slate-700">
                  To be the foremost provider of capital equipment and homecare solutions, establishing the benchmark for world-class healthcare standards across the United Arab Emirates.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
