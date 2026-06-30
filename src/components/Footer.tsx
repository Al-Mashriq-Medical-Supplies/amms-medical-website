'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '@/lib/seo'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/products' },
  { label: 'Principals', href: '/principals' },
  { label: 'Contact Us', href: '/contact' },
]

const specialtiesLinks1 = [
  { label: 'ICU & CCU', href: '/products' },
  { label: 'NICU & PICU', href: '/products' },
  { label: 'Operation Theatre', href: '/products' },
  { label: 'Respiratory', href: '/products' },
]

const specialtiesLinks2 = [
  { label: 'Anesthesia', href: '/products' },
  { label: 'Homecare', href: '/products' },
  { label: 'Emergency', href: '/products' },
  { label: 'Physiotherapy', href: '/products' },
]

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/images/logo/logo.png" 
                alt="Al Mashriq Medical Supplies Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-slate-500 font-normal leading-relaxed max-w-sm mb-6">
              Established in 1991, Al Mashriq Medical Supplies connects healthcare providers across the UAE with world-class medical equipment, local biomedical expertise, and end-to-end support.
            </p>
            <div className="flex items-center gap-4 text-slate-900 mt-2">
              <a href="#" className="hover:text-[#3AA874] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-[#3AA874] transition-colors"><FaWhatsapp size={18} /></a>
              <a href="#" className="hover:text-[#3AA874] transition-colors"><FaFacebook size={18} /></a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#3AA874] transition-colors"><FaEnvelope size={18} /></a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 text-[15px]">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-slate-600 hover:text-[#3AA874] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Specialties 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 text-[15px]">Specialties</h4>
            <ul className="space-y-4">
              {specialtiesLinks1.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-slate-600 hover:text-[#3AA874] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links / Specialties 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 text-[15px]">Solutions</h4>
            <ul className="space-y-4">
              {specialtiesLinks2.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-slate-600 hover:text-[#3AA874] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold mb-6 text-[15px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                <Phone size={16} className="text-[#3AA874] shrink-0 fill-current" strokeWidth={0} />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#3AA874] transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                <Mail size={16} className="text-[#3AA874] shrink-0 fill-current" strokeWidth={0} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#3AA874] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-medium text-slate-600 text-center md:text-left">
            &copy; Copyright by Al Mashriq Medical Supplies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-[12px] font-medium text-slate-600">
            <Link href="/about" className="hover:text-[#3AA874] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#3AA874] transition-colors">Terms of Use</Link>
            <Link href="/about" className="hover:text-[#3AA874] transition-colors">Legal</Link>
            <Link href="/" className="hover:text-[#3AA874] transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
