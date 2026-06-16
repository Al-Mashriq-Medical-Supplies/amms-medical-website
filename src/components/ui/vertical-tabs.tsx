/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type VerticalTabItem = {
  id: string
  title: string
  description: string
  image: string
}

const SERVICES: VerticalTabItem[] = [
  {
    id: '01',
    title: 'Critical Care',
    description: 'Advanced monitoring, ventilation, and life-support systems for high-acuity environments.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Operation Theatre',
    description: 'Surgical lighting, anesthesia, and theatre-ready equipment for precision clinical workflows.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Diagnostics',
    description: 'Reliable diagnostic technologies for screening, imaging, cardiac, ophthalmic, and hearing care.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  },
]

const AUTO_PLAY_DURATION = 5000

type VerticalTabsProps = {
  eyebrow?: string
  items?: VerticalTabItem[]
  title?: string
}

export function VerticalTabs({
  eyebrow = '(SERVICES)',
  items = SERVICES,
  title = 'How I can help you',
}: VerticalTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setIsPaused(false)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, AUTO_PLAY_DURATION)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused, handleNext])

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  const activeItem = items[activeIndex]

  return (
    <section className="w-full bg-background py-8 md:py-12 lg:py-16">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 flex flex-col justify-center pt-4 lg:order-1 lg:col-span-5">
            <div className="mb-12 space-y-1">
              <h2 className="text-balance font-outfit text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <span className="ml-0.5 block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {eyebrow}
              </span>
            </div>

            <div className="vertical-tabs-list flex max-h-[520px] flex-col space-y-0 overflow-y-auto pr-4">
              {items.map((service, index) => {
                const isActive = activeIndex === index
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      'group relative flex items-start gap-4 border-t border-border/50 py-6 text-left transition-all duration-500 first:border-0 md:py-8',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground/60 hover:text-foreground'
                    )}
                  >
                    <div className="absolute bottom-0 left-[-16px] top-0 w-[2px] bg-muted md:left-[-24px]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute left-0 top-0 w-full origin-top bg-foreground"
                          initial={{ height: '0%' }}
                          animate={isPaused ? { height: '0%' } : { height: '100%' }}
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </div>

                    <span className="mt-1 text-[9px] font-medium tabular-nums opacity-50 md:text-[10px]">
                      /{service.id}
                    </span>

                    <div className="flex flex-1 flex-col gap-2">
                      <span
                        className={cn(
                          'font-outfit text-2xl font-normal tracking-tight transition-colors duration-500 md:text-3xl lg:text-4xl',
                          isActive ? 'text-foreground' : ''
                        )}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-sm pb-2 text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
            <div
              className="group/gallery relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="product-image-frame relative aspect-[4/5] overflow-hidden border border-border/40 bg-muted/30 md:aspect-[4/3] lg:aspect-[16/11]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 h-full w-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="m-0 block h-full w-full object-cover p-0 transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/45 via-white/5 to-transparent mix-blend-screen" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:bottom-8 md:right-8 md:gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrev()
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90 md:h-12 md:w-12"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90 md:h-12 md:w-12"
                    aria-label="Next"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerticalTabs
 