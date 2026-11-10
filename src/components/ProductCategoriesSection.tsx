'use client'

import { useEffect, useRef, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'framer-motion'
import ProductCardGrid, { ProductCardItem } from '@/components/ProductCardGrid'
import { principals, Principal, Product, productHref, slugify } from '@/lib/seo'
import { cn } from '@/lib/utils'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)

  // Group every partner's products by category, sorted alphabetically.
  // Each card links to that item on its partner page (e.g. /our-partners/fisher-paykel#respiratory-humidifiers).
  // Products with the same name from different partners (e.g. Portable Ventilators) are both kept.
  const groupedProducts = useMemo(() => {
    const productsMap = new Map<string, ProductCardItem>()
    
    principals.forEach((principal: Principal) => {
      principal.products.forEach((product: Product) => {
        const key = `${principal.slug}::${product.name}`
        if (!productsMap.has(key)) {
          productsMap.set(key, {
            ...product,
            partnerName: principal.name,
            href: productHref(principal.slug, product.name),
          })
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

  // Open the right category when arriving from a link like /services#respiratory-and-airway-management
  useEffect(() => {
    const selectFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace('#', ''))
      if (!hash) return
      const match = groupedProducts.find(([cat]) => slugify(cat) === hash)
      if (!match) return
      setActiveCategory(match[0])
      window.setTimeout(() => {
        document.getElementById('service-categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 900)
    }
    selectFromHash()
    window.addEventListener('hashchange', selectFromHash)
    return () => window.removeEventListener('hashchange', selectFromHash)
  }, [groupedProducts])

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

  const getTheme = () => {
    return { color: '#3aa874', bgLight: '#f0fdf4', textLight: '#15803d' }
  }

  const activeTheme = getTheme()

  return (
    <section ref={container} id="services" className="relative pb-4 md:pb-8 pt-2 md:pt-4 bg-[var(--color-background)] overflow-hidden">
      {/* Category Tabs */}
      <div id="service-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-20 scroll-mt-32">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {groupedProducts.map(([category]) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "group relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
                  isActive ? "ring-2 ring-[var(--color-brand)] shadow-[0_8px_30px_rgba(58,168,116,0.3)] scale-[1.02]" : "ring-1 ring-slate-200 hover:shadow-lg"
                )}
              >
                {/* Background Image */}
                <Image
                  src={`/images/products/${category}.png`}
                  alt={category}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    isActive ? "scale-105" : "group-hover:scale-110"
                  )}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className={cn(
                  "absolute inset-0 transition-colors duration-500",
                  isActive 
                    ? "bg-gradient-to-t from-[var(--color-brand-dark)]/90 via-[var(--color-brand)]/40 to-transparent" 
                    : "bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-[var(--color-brand-dark)]/80"
                )} />

                {/* Text */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-left z-10">
                  <span className="font-playfair font-semibold text-white text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md transition-transform duration-300 group-hover:translate-x-1">
                    {category}
                  </span>
                </div>
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

