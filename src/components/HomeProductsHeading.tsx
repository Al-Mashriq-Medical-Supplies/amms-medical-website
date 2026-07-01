'use client'

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useMemo } from 'react'
import { principals } from '@/lib/seo'

export default function HomeProductsHeading() {
  const categories = useMemo(() => {
    const ObjectCategory = new Set<string>()
    principals.forEach(principal => {
      principal.products.forEach(product => {
        if (product.category) {
          ObjectCategory.add(product.category)
        }
      })
    })
    return Array.from(ObjectCategory).sort()
  }, [])

  return (
    <section className="pb-24 md:pb-32 pt-0 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#3AA874]">
            Our Portfolio
          </span>
          <h2 className="w-full text-center font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874] max-w-4xl">
            Comprehensive Solutions for Every Healthcare Environment.
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {categories.map((category, index) => {
            const direction = index % 2 === 0 ? "from_90deg" : "from_270deg"
            return (
              <Link 
                key={category} 
                href={`/products#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-500 flex items-center justify-center text-center h-32 sm:h-40"
              >
                {/* Running Light Border */}
                <div className={`absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(${direction}_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 w-full h-full bg-white rounded-2xl p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-bl from-[#3AA874]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-playfair font-medium text-[#16263F] text-base sm:text-lg lg:text-xl group-hover:text-[#3AA874] transition-colors relative z-20">
                    {category}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/products"
            className="group flex w-fit cursor-pointer items-center justify-center gap-0 font-normal"
          >
            <span className="bg-[#3AA874]/10 px-8 py-4 text-sm text-[#16263F] duration-500 ease-in-out group-hover:bg-[#16263F] group-hover:text-white">
              Explore All Products
            </span>
            <div className="relative flex h-fit items-center overflow-hidden bg-[#3AA874]/10 p-[16px] text-[#16263F] duration-500 ease-in-out group-hover:bg-[#16263F] group-hover:text-white">
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
              <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
