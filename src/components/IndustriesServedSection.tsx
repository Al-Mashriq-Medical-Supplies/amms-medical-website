'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    title: 'Hospitals & Medical Centers',
    description: 'Comprehensive equipment packages for tertiary hospitals and multi-specialty centers.',
    metric: '120+',
    label: 'Facilities',
  },
  {
    title: 'Clinics & Polyclinics',
    description: 'Scalable solutions for outpatient clinics from single-unit procurement to full fitouts.',
    metric: '300+',
    label: 'Clinics',
  },
  {
    title: 'Rehabilitation Centers',
    description: 'Physiotherapy and neurological rehabilitation equipment for specialized recovery.',
    metric: '45+',
    label: 'Centers',
  },
  {
    title: 'Diagnostic Centers',
    description: 'Advanced imaging and screening equipment for stand-alone diagnostic laboratories.',
    metric: '80+',
    label: 'Laboratories',
  },
  {
    title: 'Homecare & Long-Term Care',
    description: 'Patient-friendly products enabling chronic disease management at home.',
    metric: '5K+',
    label: 'Patients',
  },
]

export default function IndustriesServedSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Header fade in
    gsap.fromTo('.ind-header',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      }
    )

    // List items stagger
    gsap.fromTo('.ind-item',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ind-list',
          start: 'top 75%',
        }
      }
    )
  }, { scope: container })

  return (
    <section ref={container} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="ind-header opacity-0 sticky top-32">
              <span className="font-dm-sans text-xs text-green-800 uppercase tracking-[0.2em] block mb-4">
                Clinical Environments
              </span>
              <h2 className="font-outfit font-light text-4xl sm:text-5xl text-slate-900 leading-tight mb-6">
                Serving the <br />
                <span className="font-medium">Full Spectrum</span> <br />
                of Care.
              </h2>
              <p className="font-dm-sans text-slate-500 font-light leading-relaxed mb-8">
                From high-acuity tertiary hospitals to specialized outpatient clinics, 
                our scalable solutions are engineered for every healthcare setting in the UAE.
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="ind-list border-t border-slate-200">
              {industries.map(({ title, description, metric, label }) => (
                <div
                  key={title}
                  className="ind-item opacity-0 group flex flex-col sm:flex-row sm:items-center justify-between py-10 border-b border-slate-200 hover:bg-slate-50 transition-colors duration-300 px-6 -mx-6"
                >
                  <div className="sm:w-2/3 mb-6 sm:mb-0 pr-8">
                    <h3 className="font-outfit font-medium text-2xl text-slate-900 mb-3 group-hover:text-green-800 transition-colors">
                      {title}
                    </h3>
                    <p className="font-dm-sans text-slate-500 font-light leading-relaxed">
                      {description}
                    </p>
                  </div>
                  
                  <div className="sm:w-1/3 text-left sm:text-right border-l sm:border-slate-200 pl-0 sm:pl-8 border-transparent">
                    <p className="font-outfit font-light text-4xl text-green-800 mb-1">
                      {metric}
                    </p>
                    <p className="font-dm-sans text-xs text-slate-400 uppercase tracking-widest">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
