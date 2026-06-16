'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const typingWords = ['Medical', 'Clinical', 'Surgical', 'Diagnostic']
const TYPING_SPEED = 95
const DELETING_SPEED = 45
const WORD_PAUSE = 1300

export default function HeroSection() {
  const container = useRef<HTMLElement>(null)
  const [typedWord, setTypedWord] = useState(typingWords[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } })

    // Minimal fade and slide for text
    tl.fromTo('.hero-text-block',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 },
      0.2
    )

    // Image container reveal (sharp curtain effect)
    tl.fromTo('.hero-image-overlay',
      { scaleY: 1, transformOrigin: 'bottom' },
      { scaleY: 0, duration: 1.5, ease: 'power4.inOut' },
      0.1
    )
    
    tl.fromTo('.hero-image',
      { scale: 1.05 },
      { scale: 1, duration: 2, ease: 'power2.out' },
      0.4
    )

    // Thin line expansion
    tl.fromTo('.hero-divider',
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.5, ease: 'power3.inOut' },
      0.5
    )

    tl.fromTo('.hero-stats-fade',
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      1.2
    )

  }, { scope: container })

  useEffect(() => {
    const activeWord = typingWords[wordIndex]
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    if (!isDeleting && typedWord === activeWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), WORD_PAUSE)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && typedWord === '') {
      const timeout = window.setTimeout(() => {
        setWordIndex((wordIndex + 1) % typingWords.length)
        setIsDeleting(false)
      }, DELETING_SPEED)

      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => {
      const nextLength = typedWord.length + (isDeleting ? -1 : 1)
      setTypedWord(activeWord.slice(0, nextLength))
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED)

    return () => window.clearTimeout(timeout)
  }, [isDeleting, typedWord, wordIndex])

  return (
    <section
      ref={container}
      id="home"
      className="relative min-h-screen pt-24 lg:pt-0 flex items-center bg-white"
    >
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full min-h-[calc(100vh-6rem)]">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center py-12 lg:py-20 z-10">
            <div className="hero-text-block mb-6">
              <p className="font-dm-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
                Est. 2005 &bull; UAE
              </p>
            </div>

            <h1 className="hero-text-block font-outfit text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.05] tracking-tight mb-8">
              Advanced <br />
              <span className="inline-flex min-w-[8.8ch] items-baseline text-green-800">
                <span aria-live="polite">{typedWord}</span>
                <span className="ml-1 inline-block h-[0.86em] w-px translate-y-[0.08em] animate-pulse bg-green-800" aria-hidden="true" />
              </span> <br />
              Equipment.
            </h1>

            <div className="hero-divider h-px w-full bg-slate-200 mb-8" />

            <p className="hero-text-block font-dm-sans text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
              Delivering high-performance clinical technology and uncompromising standards of care to the Middle East&apos;s leading healthcare institutions.
            </p>

            <div className="hero-text-block flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-dm-sans text-sm font-medium px-8 py-4 transition-colors duration-200"
              >
                Explore Catalog
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-dm-sans text-sm font-medium px-8 py-4 transition-colors duration-200"
              >
                Contact Sales
              </a>
            </div>
            
            <div className="hero-stats-fade mt-16 grid grid-cols-2 gap-8">
               <div>
                  <p className="font-outfit text-3xl text-slate-900 mb-1">ISO</p>
                  <p className="font-dm-sans text-xs text-slate-500 uppercase tracking-widest">13485 Certified</p>
               </div>
               <div>
                  <p className="font-outfit text-3xl text-slate-900 mb-1">200+</p>
                  <p className="font-dm-sans text-xs text-slate-500 uppercase tracking-widest">Partner Facilities</p>
               </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-7 relative h-[50vh] lg:h-[85vh] w-full mt-8 lg:mt-0 pb-8 lg:pb-0">
            <div className="relative w-full h-full overflow-hidden bg-slate-100">
              <div className="hero-image-overlay absolute inset-0 bg-slate-900 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
                alt="State-of-the-art medical equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="hero-image object-cover object-center grayscale-[20%]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
