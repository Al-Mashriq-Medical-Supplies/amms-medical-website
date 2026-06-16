'use client'

import Image from 'next/image'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const team = [
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
]

const capabilities = [
  'Authorized medical technology distribution across the UAE.',
  'Factory-trained biomedical engineers for installation and support.',
  'Procurement, commissioning, user training, and lifecycle care.',
]

const partners = [
  'Critical Care',
  'Operating Theatre',
  'Diagnostics',
  'Rehabilitation',
  'Homecare',
  'Consumables',
]

export const Component = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="about"
      className={cn('story-section relative w-full overflow-x-hidden bg-white text-slate-900 lg:scroll-mt-28')}
    >
      <div className="story-progress absolute left-0 top-0 z-20 h-1 w-full origin-left bg-green-700" />

      <div className="relative z-10 mx-auto h-full w-full max-w-full">
        <div className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-12">
          <div className="story-reveal relative h-72 w-full overflow-hidden bg-slate-100 md:h-[520px] lg:col-span-6 lg:h-screen">
            <Image
              alt="Biomedical engineer preparing medical equipment in a clinical environment"
              className="h-full w-full object-cover object-center"
              height={1200}
              priority={false}
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
              width={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-green-100/20" />
            <div className="absolute bottom-5 left-5 border border-white/60 bg-white/80 px-4 py-3 text-slate-900 shadow-[0_18px_40px_rgba(15,81,50,0.12)] backdrop-blur-md">
              <p className="font-outfit text-2xl font-light">
                15<span className="text-green-700">+</span>
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Years in Healthcare
              </p>
            </div>
          </div>

          <div className="flex w-full items-center px-6 pb-14 pt-10 text-left md:px-10 lg:col-span-6 lg:min-h-screen lg:px-8 lg:pb-10 lg:pt-32 xl:px-12">
            <div className="flex w-full max-w-3xl flex-col justify-center space-y-3.5 lg:h-full xl:space-y-4">
              <div className="story-reveal">
                <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.28em] text-green-800">
                  About AMMS
                </span>
                <h2 className="font-outfit text-4xl font-light leading-[1.03] tracking-tight md:text-5xl lg:text-[clamp(2.15rem,3.25vw,3.65rem)]">
                  Engineering dependable healthcare access across the UAE.
                </h2>
              </div>

              <p className="story-reveal max-w-2xl text-sm font-light leading-relaxed text-slate-600 md:text-base lg:text-[0.94rem]">
                AMMS connects hospitals, clinics, and care providers with world-class medical equipment,
                local biomedical expertise, and end-to-end support from selection to commissioning.
              </p>

              <div className="story-reveal grid gap-2">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" strokeWidth={1.8} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="story-reveal space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex -space-x-3">
                    {team.map((src, index) => (
                      <div
                        className="size-10 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm"
                        key={src}
                      >
                        <Image
                          alt={`AMMS clinical specialist ${index + 1}`}
                          className="h-full w-full object-cover"
                          height={96}
                          src={src}
                          width={96}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col text-sm font-normal">
                    <span className="text-base text-slate-900">200+</span>
                    <span className="text-xs text-slate-500">Facilities Supported</span>
                  </div>
                </div>

                <button
                  onClick={handleContactClick}
                  className="group flex w-fit cursor-pointer items-center justify-center gap-0 font-normal"
                >
                  <span className="bg-green-100 px-5 py-2.5 text-sm text-slate-900 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-green-100">
                    Talk to Our Team
                  </span>
                  <div className="relative flex h-fit items-center overflow-hidden bg-green-100 p-4 text-slate-900 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-green-100">
                    <ArrowUpRight className="absolute h-4 w-4 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                    <ArrowUpRight className="absolute h-4 w-4 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                  </div>
                </button>
              </div>

              <div className="story-reveal relative w-full overflow-hidden border-y border-slate-100 py-2.5">
                <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-white" />
                <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-white" />
                <div className="animate-slide flex w-max items-center gap-12 whitespace-nowrap">
                  {[...partners, ...partners].map((name, index) => (
                    <span
                      className="font-outfit text-base font-light text-slate-400"
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
      </div>
    </section>
  )
}

export default Component
