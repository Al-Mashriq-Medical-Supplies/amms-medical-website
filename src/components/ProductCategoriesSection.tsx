'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import VerticalTabs, { type VerticalTabItem } from '@/components/ui/vertical-tabs'

gsap.registerPlugin(ScrollTrigger)

const productSolutions: VerticalTabItem[] = [
  {
    id: '01',
    title: 'Intensive Care Unit (ICU)',
    description: 'Advanced patient monitors, ventilators, infusion systems, and life-support technologies for high-acuity departments.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Cardiac Care Unit (CCU)',
    description: 'Specialized cardiac monitors, hemodynamic systems, ECG solutions, and critical support technologies for cardiac care.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Surgical ICU (SICU)',
    description: 'Post-surgical monitoring, recovery equipment, and support systems for patients after complex procedures.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Neonatal ICU (NICU)',
    description: 'Incubators, warmers, phototherapy systems, and precision monitoring built for newborn critical care.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Pediatric ICU (PICU)',
    description: 'Child-specific critical care monitoring, respiratory support, and pediatric emergency equipment.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'Operation Theatre (OT)',
    description: 'Anesthesia machines, surgical tables, operating lights, and sterile workflow equipment by Penlon and others.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '07',
    title: 'Cardiac Rehabilitation',
    description: 'Stress testing, ECG, exercise monitoring, and recovery equipment for structured cardiac rehabilitation.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '08',
    title: 'Respiratory & Sleep Apnea',
    description: 'CPAP, BiPAP, spirometry, humidifiers, oxygen therapy and sleep diagnostics by Fisher & Paykel, Sefam, and Breas.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '09',
    title: 'Ophthalmic Diagnostics',
    description: 'Vision screening and eye-care diagnostics by Baxter and idmed for clinical ophthalmology.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Physiotherapy',
    description: 'Electrotherapy, ultrasound therapy, strengthening, mobility, and rehabilitation equipment for recovery programs.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '11',
    title: 'Emergency Products',
    description: 'Defibrillators, rapid response devices, emergency trolleys, and equipment for urgent clinical intervention.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'Homecare Products',
    description: 'Patient-friendly CPAP, respiratory care, chronic disease management, and mobility products for home use.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.prod-header',
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prod-header',
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.prod-tabs',
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prod-tabs',
          start: 'top 78%',
        },
      }
    )
  }, { scope: container })

  return (
    <section ref={container} id="products" className="relative py-12 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="prod-header opacity-0 flex flex-col items-center text-center gap-6 mb-14 border-b border-slate-200 pb-8 max-w-4xl mx-auto">
          <div>
            <span className="w-full text-center font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-4">
              Clinical Specialities
            </span>
            <h2 className="w-full text-center font-playfair font-light text-4xl sm:text-5xl text-slate-900 leading-tight">
              Comprehensive Portfolio of <br className="hidden sm:block"/>
              <span className="font-medium italic">Medical Solutions</span>
            </h2>
          </div>
          <p className="w-full text-center font-dm-sans text-slate-500 max-w-2xl font-light leading-relaxed">
            From critical care environments to homecare,
            we supply industry-leading equipment across every major clinical discipline.
          </p>
        </div>

        <div className="prod-tabs opacity-0">
          <VerticalTabs
            eyebrow="(PRODUCT AREAS)"
            title="Explore our product ecosystem"
            items={productSolutions}
          />
        </div>
      </div>
    </section>
  )
}
