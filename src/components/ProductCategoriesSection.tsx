'use client'

import { useRef, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProductAccordionList from '@/components/ProductAccordionList'
import { principals } from '@/lib/seo'

gsap.registerPlugin(ScrollTrigger)

export default function ProductCategoriesSection() {
  const container = useRef<HTMLElement>(null)
  const [globalOpenProduct, setGlobalOpenProduct] = useState<string | null>(null)

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

  const handleToggle = (productName: string) => {
    setGlobalOpenProduct(prev => prev === productName ? null : productName)
  }

  useGSAP(() => {
    gsap.fromTo('.prod-cat-section',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.prod-tabs-container',
          start: 'top 85%',
        },
      }
    )
  }, { scope: container })

  return (
    <section ref={container} id="products" className="relative pb-12 md:pb-32 pt-2 md:pt-4 bg-[var(--color-background)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prod-tabs-container space-y-12">
          {groupedProducts.map(([category, products]) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="prod-cat-section opacity-0">
              <div className="flex items-center gap-6 mb-8">
                <h2 className="font-playfair text-4xl sm:text-5xl font-semibold text-[#16263F] tracking-tight">
                  {category}
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3AA874]/30 to-transparent"></div>
              </div>
              <ProductAccordionList 
                products={products} 
                openProductName={globalOpenProduct}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
