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
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 10);
    setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

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
        style={{
          transform: "perspective(1200px) rotateX(2deg)",
          transformOrigin: "top center",
        }}
        className={`fixed z-50 transition-all duration-500 ease-out left-1/2 -translate-x-1/2 w-[93%] max-w-[1600px] top-4 lg:top-6 rounded-[2rem] border ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[150%] opacity-0"
        } ${
          isScrolled
            ? "bg-[var(--color-brand)] backdrop-blur-none border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] py-1 lg:py-1.5 text-white hover:bg-[var(--color-brand-dark)] hover:-translate-y-1"
            : "bg-[var(--color-brand)] backdrop-blur-none border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-1 lg:py-1.5 text-white hover:bg-[var(--color-brand-dark)]"
        }`}
      >
        <nav className="w-full mx-auto px-5 sm:px-8 lg:px-10">
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
                className="h-9 lg:h-12 w-auto object-contain transition-all duration-300 scale-[1.5] lg:scale-[1.7] origin-left brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
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
                    className={`relative py-2 px-1 mx-2 text-[13px] font-dm-sans uppercase tracking-[0.1em] transition-all duration-300 group ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] group-hover:w-full transition-all duration-300 ease-out bg-white/50" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+97126277223"
                className="flex items-center gap-2 text-sm font-dm-sans text-white/90 hover:text-white transition-all duration-300 hover:-translate-y-0.5 [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
              >
                <Phone size={14} className="drop-shadow-md" />
                +971 2 627 7223
              </a>
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-white text-[var(--color-brand)] text-sm font-dm-sans font-bold px-7 py-3 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-slate-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 focus:outline-none text-white drop-shadow-md hover:scale-110 transition-transform"
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
            className="fixed inset-0 z-[60] bg-[var(--color-brand)] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[var(--color-charcoal)]/20">
              <img
                src={LOGO_URL}
                alt="AMMS Logo"
                className="h-14 w-auto object-contain scale-[1.5] origin-left ml-2 brightness-0 invert drop-shadow-md"
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
                          ? "text-white font-medium"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-8 pb-12 border-t border-white/20 bg-[var(--color-brand-dark)] flex flex-col items-center">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-white text-[var(--color-brand)] font-dm-sans font-bold py-4 text-center text-base mb-6 hover:bg-slate-100 transition-colors shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
              >
                Contact Us
              </Link>
              <a
                href="tel:+97126277223"
                className="flex items-center justify-center gap-2 text-white/70 font-dm-sans text-sm font-medium hover:text-white transition-colors"
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
