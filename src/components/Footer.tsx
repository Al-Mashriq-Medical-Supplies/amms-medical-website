"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { siteConfig, categoryHref } from "@/lib/seo";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Respiratory & Airway", href: categoryHref("Respiratory & Airway Management") },
  { label: "Anesthesia & Surgical", href: categoryHref("Anesthesia & Surgical Care") },
  { label: "Neonatal & Infant Care", href: categoryHref("Neonatal & Infant Care") },
  { label: "Diagnostics & Testing", href: categoryHref("Diagnostics & Testing") },
];

// Instagram / Facebook links come from siteConfig.social in src/lib/seo.ts
const socialLinks = [
  { label: "AMMS on Instagram", href: siteConfig.social.instagram, icon: FaInstagram, external: !!siteConfig.social.instagram },
  { label: "AMMS on Facebook", href: siteConfig.social.facebook, icon: FaFacebook, external: !!siteConfig.social.facebook },
  { label: "Chat with AMMS on WhatsApp", href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`, icon: FaWhatsapp, external: true },
  { label: "Email AMMS", href: `mailto:${siteConfig.email}`, icon: FaEnvelope, external: false },
];

const headingClass =
  "font-dm-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--color-navy)] mb-4";
// Every footer row is the same height so all columns line up
const linkClass =
  "inline-flex min-h-6 items-center gap-3 text-[14px] leading-snug text-[var(--color-charcoal)]/75 hover:text-[var(--color-brand)] transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-light)] text-[var(--color-navy)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-12 lg:pb-10">
        {/* Mobile/tablet: 2-col grid. Desktop: brand on the left, link columns grouped on the right
            with equal gaps, last column flush with the right edge */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:gap-x-14 xl:gap-x-20">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="inline-block mb-3 -mt-1" aria-label="Al Mashriq Medical Supplies — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/logo.png"
                alt="Al Mashriq Medical Supplies Logo"
                className="h-16 sm:h-[72px] w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-[var(--color-charcoal)]/75 leading-relaxed max-w-sm">
              Established in 1991, Al Mashriq Medical Supplies connects
              healthcare providers across the UAE with world-class medical
              equipment, local biomedical expertise, and end-to-end support.
            </p>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3 [&>li]:flex">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className={headingClass}>Our Services</h4>
            <ul className="space-y-3 [&>li]:flex">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className={headingClass}>Contact Us</h4>
            <ul className="space-y-3 [&>li]:flex">
              <li>
                <a href={`tel:${siteConfig.phone}`} className={linkClass}>
                  <Phone size={15} className="text-[var(--color-brand)] shrink-0" strokeWidth={2.25} />
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  <Mail size={15} className="text-[var(--color-brand)] shrink-0" strokeWidth={2.25} />
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href || "#"}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-navy)] border border-[var(--color-navy)]/10 shadow-sm hover:bg-[var(--color-brand)] hover:text-white hover:border-transparent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-navy)]/10">
        {/* extra bottom space on phones so the floating WhatsApp button doesn't cover the text */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-5 pb-24 md:pb-5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          <p className="text-[12px] text-[var(--color-charcoal)]/60 text-center md:text-left">
            &copy; Copyright by Al Mashriq Medical Supplies. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[var(--color-charcoal)]/60">
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Terms of Use</Link>
            <Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">Legal</Link>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Site Map</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
