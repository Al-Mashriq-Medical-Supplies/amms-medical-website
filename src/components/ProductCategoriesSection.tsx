'use client'

import { useEffect, useRef, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'framer-motion'
import ProductCardGrid, { ProductCardItem } from '@/components/ProductCardGrid'
import { principals, Principal, Product, productLink, slugify, siteConfig } from '@/lib/seo'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)

  // Group every partner's products by category, sorted alphabetically.
  // Each card opens that product on the partner's own website, in a new tab.
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
            href: productLink(principal, product),
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

  // ── Mobile (below md): accordion — products open right under the tapped category ──
  const [openMobile, setOpenMobile] = useState<string | null>(null)
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Open the right category when arriving from a link like /services#respiratory-and-airway-management
  useEffect(() => {
    const selectFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace('#', ''))
      if (!hash) return
      const match = groupedProducts.find(([cat]) => slugify(cat) === hash)
      if (!match) return
      setActiveCategory(match[0])
      setOpenMobile(match[0])
      window.setTimeout(() => {
        if (window.matchMedia('(max-width: 767px)').matches) {
          const row = rowRefs.current[match[0]]
          if (row) window.scrollTo({ top: row.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' })
          return
        }
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

  const toggleMobile = (category: string) => {
    const next = openMobile === category ? null : category
    setOpenMobile(next)
    if (next) setActiveCategory(next)
    if (!next) return
    // after the previous panel collapses, bring the tapped row to the top of the screen
    window.setTimeout(() => {
      const el = rowRefs.current[next]
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top: y, behavior: 'smooth' })
    }, 320)
  }

  const enquireUrl = (productName: string) => {
    const number = siteConfig.whatsapp.replace(/[^0-9]/g, '')
    const message = `Hello Al Mashriq Medical Supplies,\n\nI would like to inquire about the *${productName}*.\n\nCould you please provide more information?`
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

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
      {/* ── Mobile: category accordion ── */}
      <div id="service-categories-mobile" className="md:hidden px-4 relative z-20">
        <p className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-3 px-1">
          {groupedProducts.length} categories · tap to view products
        </p>
        <div className="flex flex-col gap-3">
          {groupedProducts.map(([category, items]) => {
            const isOpen = openMobile === category
            const panelId = `cat-panel-${slugify(category)}`
            return (
              <div
                key={category}
                ref={(el) => { rowRefs.current[category] = el }}
                className={cn(
                  'rounded-2xl bg-white overflow-hidden transition-shadow duration-300',
                  isOpen
                    ? 'ring-1 ring-[var(--color-brand)]/40 shadow-[0_10px_30px_-12px_rgba(58,168,116,0.35)]'
                    : 'ring-1 ring-slate-200/80 shadow-[0_2px_10px_rgba(22,38,63,0.04)]'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleMobile(category)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center gap-3.5 p-2.5 pr-4 text-left"
                >
                  <span className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={`/images/products/thumbs/${slugify(category)}.webp`}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={cn(
                      'block font-playfair font-semibold text-[15px] leading-snug transition-colors',
                      isOpen ? 'text-[var(--color-brand)]' : 'text-[#16263F]'
                    )}>
                      {category}
                    </span>
                    <span className="block font-dm-sans text-[11px] text-slate-400 mt-0.5">
                      {items.length} {items.length === 1 ? 'product' : 'products'}
                    </span>
                  </span>
                  <span className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                    isOpen ? 'bg-[var(--color-brand)] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  )}>
                    <ChevronDown size={16} strokeWidth={2.25} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="border-t border-slate-100 divide-y divide-slate-100">
                        {items.map((product) => (
                          <li key={`${product.partnerName}-${product.name}`} className="px-4 py-4">
                            <span className="block font-dm-sans text-[10px] uppercase tracking-[0.16em] text-[var(--color-brand)] font-bold mb-1">
                              {product.partnerName}
                            </span>
                            <h3 className="font-playfair font-semibold text-[15px] text-[#16263F] leading-snug">
                              {product.name}
                            </h3>
                            <p className="font-dm-sans text-[12.5px] leading-relaxed text-slate-500 mt-1 line-clamp-2">
                              {product.brief}
                            </p>
                            <div className="flex gap-2 mt-3">
                              {product.href && (
                                <a
                                  href={product.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 px-3 py-2 font-dm-sans text-[12px] font-semibold text-[#16263F] active:scale-[0.98] transition"
                                  aria-label={`View ${product.name} on the ${product.partnerName} website (opens in a new tab)`}
                                >
                                  View details <ArrowUpRight size={13} />
                                </a>
                              )}
                              <a
                                href={enquireUrl(product.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-3 py-2 font-dm-sans text-[12px] font-semibold text-white active:scale-[0.98] transition"
                              >
                                Enquire now
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* Category Tabs (tablet & desktop) */}
      <div id="service-categories" className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-20 scroll-mt-32">
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

      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

