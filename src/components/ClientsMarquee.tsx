'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { principals } from '@/lib/seo'
import { Sparkles } from '@/components/ui/sparkles'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

gsap.registerPlugin(ScrollTrigger)

export default function ClientsMarquee() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.clients-header',
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        }
      }
    )
  }, { scope: container })

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-white pt-12 md:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="clients-header opacity-0 text-center text-slate-900">
          <span className="font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.25em] block mb-4">
            Our Partners in Health Care
          </span>
          <h2 className="font-playfair font-light text-3xl sm:text-4xl md:text-5xl leading-tight">
            Trusted by <span className="font-medium italic">Global Leaders</span>
          </h2>
        </div>

        <div className="relative mt-8 md:mt-16 h-[100px] md:h-[140px] w-full">
          <InfiniteSlider 
            className="flex h-full w-full items-center" 
            duration={45}
            gap={32}
          >
            {principals.map((principal, index) => (
              <div 
                key={`${principal.slug}-${index}`} 
                className="w-32 md:w-48 flex items-center justify-center transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain max-h-[50px] md:max-h-[80px] w-auto transition-all duration-500"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>

      <div className="relative -mt-10 md:-mt-20 h-24 md:h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-0">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-[0.15]" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-slate-900/10 bg-white" />
        <Sparkles
          density={600}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#3AA874"
        />
      </div>
    </section>
  )
}
