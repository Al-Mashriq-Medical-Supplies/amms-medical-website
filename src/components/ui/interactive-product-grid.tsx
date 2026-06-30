'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export interface ProductItem {
  id: string
  title: string
  description: string
  image: string
}

interface InteractiveProductGridProps {
  items: ProductItem[]
}

export default function InteractiveProductGrid({ items }: InteractiveProductGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const selectedItem = items.find((item) => item.id === selectedId)

  const handleToggleShowAll = () => {
    setShowAll(!showAll)
    if (showAll) {
      // Scroll to the products section heading when showing less
      setTimeout(() => {
        const section = document.getElementById('products')
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 120
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 50)
    }
  }

  // Calculate visibility classes to maintain max 2-3 rows across all screen sizes
  const getVisibilityClass = (index: number) => {
    if (showAll) return ''
    if (index >= 8) return 'hidden' // Hide beyond 8 universally
    if (index >= 6) return 'hidden xl:block' // Show 8 items on xl (2 rows of 4)
    if (index >= 4) return 'hidden sm:block' // Show 6 items on sm/md/lg (3 rows of 2, or 2 rows of 3)
    return '' // Show 4 items on mobile (4 rows of 1)
  }

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedId])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, index) => (
          <motion.div
            layoutId={`card-${item.id}`}
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[var(--color-navy)] shadow-md hover:shadow-xl transition-shadow duration-500 ${getVisibilityClass(index)}`}
          >
            <motion.div layoutId={`image-container-${item.id}`} className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
              <motion.h3 
                layoutId={`title-${item.id}`}
                className="text-white font-playfair text-lg sm:text-2xl font-medium mb-2 leading-tight"
              >
                {item.title}
              </motion.h3>
              <div className="flex items-center gap-2 text-[var(--color-brand)] font-dm-sans text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>View Details</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button for ALL devices */}
      {items.length > 4 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleToggleShowAll}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-charcoal)] border border-[var(--color-border)] font-dm-sans text-sm font-medium px-8 py-4 sm:px-10 rounded-full transition-all duration-300 hover:border-[var(--color-brand)] hover:text-white"
          >
            <span className="absolute inset-0 bg-[var(--color-brand)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">{showAll ? 'Show Less' : 'Explore All Solutions'}</span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[var(--color-navy)]/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="w-full max-w-4xl bg-[var(--color-background)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto max-h-[95vh]"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-80 md:h-auto md:w-1/2 shrink-0 bg-[var(--color-navy)]">
                  <motion.div layoutId={`image-container-${selectedItem.id}`} className="absolute inset-0">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover opacity-90"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10 md:hidden"
                  >
                    <X size={20} />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/40 to-transparent md:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-background)] opacity-20 hidden md:block" />
                </div>
                
                {/* Content Section */}
                <div className="p-5 sm:p-10 md:p-12 flex flex-col flex-1 min-h-0 md:w-1/2 relative">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-border)] hover:text-[var(--color-brand)] transition-colors z-10 hidden md:flex"
                  >
                    <X size={20} />
                  </button>
                  
                  {/* Scrollable Text Area */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <span className="font-dm-sans text-xs font-semibold tracking-[0.2em] text-[var(--color-brand)] uppercase mb-3 mt-4 md:mt-0 block">
                      Medical Solution
                    </span>

                    <motion.h3 
                      layoutId={`title-${selectedItem.id}`}
                      className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-[var(--color-navy)] mb-4 sm:mb-6 leading-tight"
                    >
                      {selectedItem.title}
                    </motion.h3>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="w-12 h-1 bg-[var(--color-brand)] mb-5 sm:mb-8"
                    />

                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-[var(--color-charcoal)] font-dm-sans text-sm sm:text-base md:text-lg leading-relaxed mb-4"
                    >
                      {selectedItem.description}
                    </motion.p>
                  </div>
                  
                  {/* Sticky Button Area at Bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-4 sm:pt-6 mt-4 border-t border-[var(--color-border)]/50 shrink-0"
                  >
                    <a
                      href={`https://wa.me/97126277223?text=${encodeURIComponent(`Hi AMMS, I'm interested in ordering equipment for the ${selectedItem.title} department.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center gap-2 sm:gap-3 bg-[var(--color-brand)] text-white font-dm-sans font-medium px-4 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:bg-[var(--color-brand-dark)] hover:shadow-[0_8px_30px_rgba(58,168,116,0.3)] text-xs sm:text-base"
                    >
                      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Order Now via WhatsApp</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
