/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/seo";

const LOGO_URL = "/images/logo/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    // sync initial state on the next frame (e.g. when the page loads already scrolled)
    const raf = window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 10);
      setIsVisible(true);
    });

    const HIDE_THRESHOLD = 80; // min px scrolled down before hiding

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > HIDE_THRESHOLD) {
        setIsVisible(false); // scrolling down past threshold
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true); // scrolling up — always show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2 top-3 sm:top-4 lg:top-5 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[93%] max-w-[1600px] rounded-full border border-white/20 bg-[var(--color-brand)] text-white transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        } ${
          isScrolled
            ? "shadow-[0_18px_40px_-14px_rgba(0,0,0,0.45)]"
            : "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Three columns: logo | links (always centred) | actions */}
        <nav className="grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-16 lg:h-20 px-3 sm:px-4 lg:px-3">
          {/* Logo */}
          <Link
            href="/"
            className="justify-self-start flex items-center h-full pl-1 sm:pl-2 lg:pl-5 focus:outline-none"
            aria-label="Go to homepage"
          >
            <img
              src={LOGO_URL}
              alt="Al Mashriq Medical Supplies Logo"
              className="h-14 lg:h-[72px] w-auto object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[13px] font-dm-sans uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-300 group ${
                    active ? "text-white font-semibold" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-white/60 transition-all duration-300 ease-out group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="justify-self-end flex items-center gap-5 xl:gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden xl:flex items-center gap-2 text-[13px] font-dm-sans text-white/85 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone size={14} />
              {siteConfig.displayPhone}
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex h-11 items-center rounded-full bg-white px-6 text-[13px] font-dm-sans font-bold text-[var(--color-brand)] shadow-sm transition-all duration-300 hover:bg-slate-100 hover:shadow-md whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — Full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[var(--color-brand)] flex flex-col"
          >
            {/* Same size/position as the navbar so the logo and button don't jump */}
            <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 flex h-16 items-center justify-between pl-4 pr-3 sm:pl-6 sm:pr-4 border-b border-white/20">
              <img
                src={LOGO_URL}
                alt="AMMS Logo"
                className="h-14 w-auto object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.75} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-start gap-7 px-8 sm:px-10 pt-12 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-playfair transition-colors ${
                      isActive(link.href) ? "text-white font-medium" : "text-white/70 font-light hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="px-8 pt-8 pb-10 border-t border-white/20 bg-[var(--color-brand-dark)] flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-white text-[var(--color-brand)] font-dm-sans font-bold py-4 text-center text-base hover:bg-slate-100 transition-colors shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 text-white/80 font-dm-sans text-sm font-medium hover:text-white transition-colors"
              >
                <Phone size={16} />
                {siteConfig.displayPhone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
