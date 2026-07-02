'use client'

import { useRef, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'framer-motion'
import ProductCardGrid from '@/components/ProductCardGrid'
import { principals } from '@/lib/seo'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)

  // Group all unique products from principals by their category, sorted alphabetically
  const groupedProducts = useMemo(() => {
    const productsMap = new Map<string, { name: string; brief: string; image?: string; category?: string }>()
    
    principals.forEach(principal => {
      principal.products.forEach(product => {
        if (!productsMap.has(product.name)) {
          productsMap.set(product.name, product)
        }
      })
    })

    const allProducts = Array.from(productsMap.values()).sort((a, b) => a.name.localeCompare(b.name))

    const grouped = allProducts.reduce((acc, product) => {
      const cat = product.category || 'Other'
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(product)
      return acc
    }, {} as Record<string, typeof allProducts>)

    return Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]))
  }, [])

  const [activeCategory, setActiveCategory] = useState<string | null>(
    () => groupedProducts[0]?.[0] || null
  )

  const activeProducts = useMemo(() => {
    if (!activeCategory) return []
    const match = groupedProducts.find(([cat]) => cat === activeCategory)
    return match ? match[1] : []
  }, [activeCategory, groupedProducts])

  useGSAP(() => {
    gsap.fromTo('.prod-tabs-container',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.prod-tabs-container',
          start: 'top 85%',
        },
      }
    )
  }, { scope: container })

  const getTheme = (category?: string | null) => {
    return { color: '#3aa874', bgLight: '#f0fdf4', textLight: '#15803d' }
  }

  const activeTheme = getTheme(activeCategory)

  return (
    <section ref={container} id="products" className="relative pb-12 md:pb-32 pt-2 md:pt-4 bg-[var(--color-background)] overflow-hidden">
      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-20">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center gap-2 sm:gap-3">
          {groupedProducts.map(([category]) => {
            const isActive = activeCategory === category
            const theme = getTheme(category)
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  backgroundColor: isActive ? theme.color : 'white',
                  borderColor: isActive ? theme.color : '#e2e8f0',
                  color: isActive ? 'white' : '#475569',
                }}
                className={cn(
                  "px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 border cursor-pointer select-none text-center w-full md:w-auto flex items-center justify-center min-h-[44px] md:min-h-0 md:whitespace-nowrap leading-tight",
                  isActive && "shadow-md scale-105"
                )}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = theme.color
                    e.currentTarget.style.color = theme.color
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e2e8f0'
                    e.currentTarget.style.color = '#475569'
                  }
                }}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="prod-tabs-container">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="prod-cat-section"
              >
                <div className="flex items-center gap-6 mb-8 sm:mb-10">
                  <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#16263F] tracking-tight">
                    {activeCategory}
                  </h2>
                  <div 
                    style={{
                      backgroundImage: `linear-gradient(to right, ${activeTheme.color}4c, transparent)`
                    }}
                    className="h-[1px] flex-grow"
                  />
                </div>
                <ProductCardGrid products={activeProducts} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

