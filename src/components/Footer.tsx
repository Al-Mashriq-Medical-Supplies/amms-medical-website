/* eslint-disable @next/next/no-img-element */
'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

const LOGO_URL =
  'https://images.squarespace-cdn.com/content/v1/58481b9d1b631b67d7104343/591c3852-108b-4d1c-8c0b-27902ecf0d8d/Amms+Logo+updated-01.jpg?format=1500w'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Products', href: '#products' },
  { label: 'Our Principals', href: '#principals' },
  { label: 'Mission & Values', href: '#mission' },
  { label: 'Contact Us', href: '#contact' },
]

const productSegments = [
  'ICU & CCU Equipment',
  'NICU & PICU Solutions',
  'Operation Theatre',
  'Cardiac Rehabilitation',
  'Respiratory Therapy',
  'Diagnostic Products',
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-4 pr-8">
            <p className="text-[13px] text-[#707070] font-normal leading-relaxed max-w-sm mt-2">
              Advanced medical equipment trusted by hospitals, clinics, laboratories, and healthcare professionals worldwide. Precision saves lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="font-dm-sans text-xs text-white uppercase tracking-[0.2em] mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-dm-sans text-sm font-light text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Segments */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-dm-sans text-xs text-white uppercase tracking-[0.2em] mb-8">
              Specialities
            </h4>
            <ul className="space-y-4">
              {productSegments.map((seg) => (
                <li key={seg}>
                  <a
                    href="#products"
                    onClick={() => handleNavClick('#products')}
                    className="font-dm-sans text-sm font-light text-slate-400 hover:text-white transition-colors"
                  >
                    {seg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-dm-sans text-xs text-white uppercase tracking-[0.2em] mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-slate-500 shrink-0" />
                <span className="font-dm-sans text-sm font-light text-slate-400 leading-relaxed">
                  Business Bay, Dubai<br />United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-slate-500 shrink-0" />
                <a href="tel:+971000000000" className="font-dm-sans text-sm font-light text-slate-400 hover:text-white transition-colors">
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-slate-500 shrink-0" />
                <a href="mailto:info@amms.ae" className="font-dm-sans text-sm font-light text-slate-400 hover:text-white transition-colors">
                  info@amms.ae
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm-sans font-light text-xs text-slate-500">
            &copy; {new Date().getFullYear()} MediCore Gulf. All rights reserved.
          </p>
          <p className="font-dm-sans font-light text-xs text-slate-500 uppercase tracking-widest">
            Engineering Better Healthcare
          </p>
        </div>
      </div>
    </footer>
  )
}
