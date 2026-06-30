/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/images/logo/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Principals", href: "/principals" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };
    
    // Initial setup
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[var(--color-navy)]/95 backdrop-blur-xl border-[var(--color-navy)]/20 py-2 shadow-[0_1px_20px_rgba(0,0,0,0.04)] text-white"
            : "bg-transparent border-[var(--color-charcoal)]/10 py-2 lg:py-3 text-[var(--color-navy)]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center focus:outline-none"
              aria-label="Go to homepage"
            >
              <img
                src={LOGO_URL}
                alt="Al Mashriq Medical Supplies Logo"
                className={`h-12 lg:h-14 w-auto object-contain transition-all duration-300 scale-[1.5] lg:scale-[1.8] origin-left ${isScrolled ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-[13px] font-dm-sans uppercase tracking-[0.15em] transition-colors duration-300 group ${
                      isActive
                        ? "text-[var(--color-brand)] font-semibold"
                        : isScrolled
                          ? "text-white/80 hover:text-[var(--color-gold)]"
                          : "text-[var(--color-charcoal)] hover:text-[var(--color-navy)]"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-brand)]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-full transition-all duration-500 ease-out ${isScrolled ? "bg-[var(--color-gold)]" : "bg-[var(--color-navy)]"}`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+97126277223"
                className={`flex items-center gap-2 text-sm font-dm-sans transition-colors ${isScrolled ? "text-white/80 hover:text-[var(--color-gold)]" : "text-[var(--color-charcoal)] hover:text-[var(--color-brand)]"}`}
              >
                <Phone size={14} />
                +971 2 627 7223
              </a>
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-[var(--color-brand)] text-white text-sm font-dm-sans font-medium px-7 py-3 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(58,168,116,0.35)] group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-dark)] to-[var(--color-brand)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 focus:outline-none ${isScrolled ? "text-white" : "text-[var(--color-navy)]"}`}
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={1.5} />
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
            className="fixed inset-0 z-[60] bg-[var(--color-navy)] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[var(--color-charcoal)]/20">
              <img
                src={LOGO_URL}
                alt="AMMS Logo"
                className="h-12 w-auto object-contain scale-[1.5] origin-left ml-2 brightness-0 invert"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white focus:outline-none"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-start pt-16 px-10 gap-8 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06 + 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-3xl font-playfair font-light transition-colors ${
                        isActive
                          ? "text-[var(--color-brand)] font-medium"
                          : "text-white/70 hover:text-[var(--color-gold)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-8 pb-12 border-t border-[var(--color-charcoal)]/20 bg-[var(--color-navy)] flex flex-col items-center">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-[var(--color-brand)] text-white font-dm-sans font-medium py-4 text-center text-base mb-6 hover:bg-[var(--color-brand-dark)] transition-colors shadow-[0_8px_30px_rgba(58,168,116,0.25)]"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+97126277223"
                className="flex items-center justify-center gap-2 text-white/70 font-dm-sans text-sm font-medium hover:text-[var(--color-gold)] transition-colors"
              >
                <Phone size={16} />
                +971 2 627 7223
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
