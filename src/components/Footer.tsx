"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { siteConfig } from "@/lib/seo";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Principals", href: "/principals" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "Critical Care", href: "/products#critical-care" },
  { label: "Respiratory", href: "/products#respiratory" },
  { label: "Anesthesia", href: "/products#anesthesia" },
  { label: "Diagnostic", href: "/products#diagnostic" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-light)] text-[var(--color-navy)] border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 lg:pt-10 lg:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 pr-0 lg:pr-8 flex flex-col justify-start">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo/logo.png"
                alt="Al Mashriq Medical Supplies Logo"
                className="h-28 sm:h-32 w-auto object-contain brightness-0 opacity-80 -ml-2"
              />
            </Link>
            <p className="text-[13px] text-[var(--color-charcoal)]/80 font-normal leading-relaxed max-w-sm mb-6">
              Established in 1991, Al Mashriq Medical Supplies connects
              healthcare providers across the UAE with world-class medical
              equipment, local biomedical expertise, and end-to-end support.
            </p>
            <div className="flex items-center gap-4 text-[var(--color-navy)]">
              <a href="#" className="hover:text-[var(--color-brand)] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[var(--color-brand)] transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="hover:text-[var(--color-brand)] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-brand)] transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[var(--color-navy)] font-bold mb-4 text-[15px]">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-[var(--color-charcoal)]/80 hover:text-[var(--color-brand)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[var(--color-navy)] font-bold mb-4 text-[15px]">
              Our Products
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium text-[var(--color-charcoal)]/80 hover:text-[var(--color-brand)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
            <h4 className="text-[var(--color-navy)] font-bold mb-4 text-[15px]">
              Newsletter
            </h4>
            <p className="text-[13px] text-[var(--color-charcoal)]/80 font-normal leading-relaxed mb-4">
              Subscribe to our newsletter for the latest healthcare technology updates and company news.
            </p>
            <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border border-slate-200 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:border-[var(--color-brand)] text-slate-800"
                required
              />
              <button 
                type="submit" 
                className="bg-[var(--color-brand)] text-white px-4 py-2 rounded-r-lg hover:bg-[var(--color-brand-dark)] transition-colors flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <h4 className="text-[var(--color-navy)] font-bold mb-4 text-[15px]">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[13px] font-medium text-[var(--color-charcoal)]/80">
                <Phone size={14} className="text-[var(--color-brand)] shrink-0" strokeWidth={2.5} />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--color-brand)] transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[13px] font-medium text-[var(--color-charcoal)]/80">
                <Mail size={14} className="text-[var(--color-brand)] shrink-0" strokeWidth={2.5} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-brand)] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-[var(--color-navy)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-medium text-[var(--color-charcoal)]/60 text-center md:text-left">
            &copy; Copyright by Al Mashriq Medical Supplies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-[12px] font-medium text-[var(--color-charcoal)]/60">
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Terms of Use</Link>
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Legal</Link>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
