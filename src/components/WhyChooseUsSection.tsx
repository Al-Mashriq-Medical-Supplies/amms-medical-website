'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import LottieAnimation from '@/components/ui/lottie-animation'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    number: '01',
    title: 'Global Principals',
    description: 'We partner exclusively with globally recognized medical device manufacturers including Fisher & Paykel, Penlon, Breas, and COSMED.',
  },
  {
    number: '02',
    title: 'Regulatory Compliance',
    description: 'All supplied equipment meets international quality standards and is registered with the relevant UAE regulatory authorities.',
  },
  {
    number: '03',
    title: 'Clinical Engineering',
    description: 'Our factory-trained biomedical engineering team provides comprehensive technical support, installation, and preventive maintenance.',
  },
  {
    number: '04',
    title: 'National Network',
    description: 'A sophisticated supply chain and distribution network ensuring rapid deployment across all seven Emirates from Abu Dhabi and Dubai.',
  },
  {
    number: '05',
    title: 'Turnkey Integration',
    description: 'From initial consultation and site planning to installation, commissioning, and comprehensive clinical staff training.',
  },
  {
    number: '06',
    title: 'Lifecycle Management',
    description: 'Long-term partnership approach with tailored service level agreements (SLAs) and guaranteed spare parts availability.',
  },
]

export default function WhyChooseUsSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.why-header',
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.why-card',
      { x: 60, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.why-grid',
          start: 'top 75%',
        }
      }
    )
  }, { scope: container })

  return (
    <section ref={container} className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="why-header opacity-0 mb-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="font-playfair font-light text-4xl sm:text-5xl text-slate-900 leading-tight mb-4">
              Why leading facilities choose <span className="text-[#3AA874]">Al Mashriq Medical Supplies</span>
            </h2>
            <span className="font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-6">
              Value Proposition
            </span>
            <p className="font-dm-sans text-lg text-slate-600 font-light max-w-2xl">
              We move beyond standard procurement. We are a strategic clinical engineering partner
              focused on optimizing the intersection of technology, patient care, and operational efficiency.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm overflow-hidden border border-[#3AA874]/10 bg-white p-6 shadow-[0_24px_70px_rgba(58,168,116,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(58,168,116,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(58,168,116,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <LottieAnimation
                ariaLabel="Animated clinical workflow illustration"
                className="relative z-10 mx-auto aspect-square w-full"
                path="/animations/perulogy.json"
              />
            </div>
          </div>
        </div>

        <div className="why-grid grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map(({ number, title, description }) => (
            <div
              key={title}
              className="why-card opacity-0 relative group"
            >
              <div className="h-[1px] w-full bg-slate-200 mb-6 relative">
                <div className="absolute top-0 left-0 h-[1px] w-0 bg-[#3AA874] group-hover:w-full transition-all duration-700 ease-out" />
              </div>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-playfair font-light text-2xl text-slate-300 group-hover:text-[#3AA874] transition-colors duration-500">
                  {number}
                </span>
                <h3 className="font-playfair font-medium text-xl text-slate-900">
                  {title}
                </h3>
              </div>

              <p className="font-dm-sans text-slate-500 font-light leading-relaxed pl-10">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
