/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO_URL =
  'https://images.squarespace-cdn.com/content/v1/58481b9d1b631b67d7104343/591c3852-108b-4d1c-8c0b-27902ecf0d8d/Amms+Logo+updated-01.jpg?format=1500w'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Principals', href: '#principals' },
  { label: 'Contact', href: '#contact' },
]

const NAV_OFFSET = 120

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let frame = 0

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      if (frame) return

      frame = window.requestAnimationFrame(() => {
        frame = 0
        const activationY = NAV_OFFSET
        let closestSection = 'home'
        let closestDistance = Number.POSITIVE_INFINITY

        for (const link of navLinks) {
          const section = link.href.replace('#', '')
          const el = document.getElementById(section)
          if (!el) continue

          const rect = el.getBoundingClientRect()

          if (rect.top <= activationY && rect.bottom > activationY) {
            setActiveSection((current) => current === section ? current : section)
            return
          }

          const distance = Math.abs(rect.top - activationY)
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section
          }
        }

        setActiveSection((current) => current === closestSection ? current : closestSection)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white border-b border-slate-200 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center focus:outline-none"
              aria-label="Go to homepage"
            >
              <img
                src={LOGO_URL}
                alt="AMMS Company Logo"
                className="h-10 lg:h-12 w-auto max-w-[150px] object-contain transition-all duration-300"
              />
            </a>

            {/* Desktop Nav - elegant, minimal links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative py-2 text-sm font-dm-sans uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? 'text-green-800 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-green-800"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* CTA - sharp borders */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+971000000000"
                className="flex items-center gap-2 text-sm font-dm-sans text-slate-500 hover:text-green-800 transition-colors"
              >
                <Phone size={14} />
                +971 00 000 0000
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="bg-green-800 hover:bg-green-900 text-white text-sm font-dm-sans px-6 py-2.5 transition-colors duration-300"
              >
                Inquire
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full screen minimal overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100">
              <img
                src={LOGO_URL}
                alt="AMMS Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-800 focus:outline-none"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-3xl font-outfit font-light transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-green-800 font-medium'
                      : 'text-slate-400'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="p-8 border-t border-slate-100 bg-slate-50">
               <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full bg-green-800 text-white font-dm-sans py-4 text-center text-lg mb-4"
                >
                  Make an Inquiry
                </a>
                <a
                  href="tel:+971000000000"
                  className="flex items-center justify-center gap-2 text-slate-500 font-dm-sans"
                >
                  <Phone size={16} />
                  +971 00 000 0000
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
