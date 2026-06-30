'use client'

import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const specialties = [
  'Critical Care',
  'Operating Theatre',
  'Neonatal',
  'Respiratory',
  'Physiotherapy',
  'Homecare',
  'Emergency',
]

export const Component = () => {
  return (
    <section
      id="about"
      className={cn('relative w-full overflow-hidden bg-white text-slate-900')}
    >
      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* Top Text Content */}
          <div className="flex w-full flex-col items-center text-center max-w-4xl mx-auto gap-6 lg:gap-8">
            <div>
              <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#3AA874]">
                About AMMS
              </span>
              <h2 className="font-playfair text-4xl font-light leading-[1.15] tracking-tight md:text-5xl lg:text-6xl text-slate-900 max-w-3xl mx-auto">
                Pioneering Medical Excellence.
              </h2>
            </div>

            <div className="flex flex-col items-center gap-8">
              <p className="text-sm font-light leading-relaxed text-slate-600 md:text-base lg:text-lg max-w-2xl mx-auto">
                Established in 1991, Al Mashriq Medical Supplies connects hospitals, clinics, and care
                providers with world-class medical equipment, local biomedical expertise, and end-to-end
                support.
              </p>
              
              <Link
                href="/about"
                className="group flex w-fit cursor-pointer items-center justify-center gap-0 font-normal"
              >
                <span className="bg-[#3AA874]/10 px-6 py-3 text-sm text-slate-900 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[#3AA874]">
                  Learn More About Us
                </span>
                <div className="relative flex h-fit items-center overflow-hidden bg-[#3AA874]/10 p-[14px] text-slate-900 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[#3AA874]">
                  <ArrowUpRight className="absolute h-4 w-4 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-4 w-4 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Image Content */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-slate-100 rounded-sm group">
            <Image
              alt="Biomedical engineer preparing medical equipment at Al Mashriq Medical Supplies"
              className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              height={800}
              priority={false}
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
              width={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 border border-white/20 bg-white/10 px-6 py-4 text-white shadow-2xl backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-playfair text-3xl font-light relative z-10">
                35<span className="text-[#3AA874]">+</span>
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 relative z-10">
                Years in Healthcare
              </p>
            </div>

            {/* Marquee Overlay */}
            <div className="absolute bottom-0 right-0 left-0 md:left-auto md:w-1/2 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-sm py-3">
              <div className="absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-black/20" />
              <div className="absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-black/20" />
              <div className="animate-slide flex w-max items-center gap-10 whitespace-nowrap px-4">
                {[...specialties, ...specialties].map((name, index) => (
                  <span
                    className="font-playfair text-sm font-light text-white/80"
                    key={`${name}-${index}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Component
