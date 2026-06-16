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
    description: 'Surgical tables, operating lights, anesthesia workstations, and sterile workflow equipment for precision procedures.',
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
    title: 'Physiotherapy',
    description: 'Electrotherapy, ultrasound therapy, strengthening, mobility, and rehabilitation equipment for recovery programs.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '09',
    title: 'Ophthalmic Diagnostics',
    description: 'Slit lamps, fundus cameras, OCT systems, and eye-care diagnostics for clinical ophthalmology.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Hearing Diagnostics',
    description: 'Audiometers, tympanometers, hearing screening, and newborn hearing diagnostic solutions.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '11',
    title: 'Respiratory & Sleep Apnea',
    description: 'CPAP, BiPAP, spirometry, oxygen therapy, and sleep diagnostics for respiratory care pathways.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'Disposables & Consumables',
    description: 'High-quality sterile consumables, disposables, tubing, masks, and everyday clinical supplies.',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '13',
    title: 'Emergency Products',
    description: 'Defibrillators, rapid response devices, emergency trolleys, and equipment for urgent clinical intervention.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '14',
    title: 'Cardiopulmonary',
    description: 'Heart-lung support, cardiopulmonary monitoring, and advanced systems for complex cardiac procedures.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '15',
    title: 'Homecare Products',
    description: 'Patient-friendly recovery, chronic disease management, mobility, and respiratory products for home use.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Header animation
    gsap.fromTo('.prod-header',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prod-header',
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.prod-tabs',
      { y: 34, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prod-tabs',
          start: 'top 78%',
        },
      }
    )
  }, { scope: container })

  return (
    <section ref={container} id="products" className="story-section relative py-32 bg-white overflow-hidden">
      <div className="story-progress absolute left-0 top-0 h-1 w-full origin-left bg-green-700" />
      <div className="story-depth absolute -right-24 top-24 h-72 w-72 border border-green-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="prod-header story-reveal opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <span className="font-dm-sans text-xs text-green-800 uppercase tracking-[0.2em] block mb-4">
              Clinical Specialities
            </span>
            <h2 className="font-outfit font-light text-4xl sm:text-5xl text-slate-900 leading-tight">
              Comprehensive Portfolio of <br className="hidden sm:block"/>
              <span className="font-medium">Medical Solutions</span>
            </h2>
          </div>
          <p className="font-dm-sans text-slate-500 max-w-sm md:text-right font-light leading-relaxed">
            From acute critical care environments to patient-friendly homecare, 
            we supply industry-leading equipment across every major clinical discipline.
          </p>
        </div>

        <div className="prod-tabs story-reveal opacity-0">
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
