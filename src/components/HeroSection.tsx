"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const typingWords = [
  "Respiratory",
  "Clinical",
  "Surgical",
  "Diagnostic",
  "Neonatal",
];
const TYPING_SPEED = 95;
const DELETING_SPEED = 45;
const WORD_PAUSE = 1300;

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);
  const [typedWord, setTypedWord] = useState(typingWords[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      // Stagger text blocks with premium timing
      tl.fromTo(
        ".hero-text-block",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12 },
        0.3,
      );

      // Image wrapper reveal
      tl.fromTo(
        ".hero-image-wrapper",
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
        0.1,
      );

      // Image subtle scale
      tl.fromTo(
        ".hero-image",
        { scale: 1.15 },
        { scale: 1, duration: 2.5, ease: "power2.out" },
        0.3,
      );

      // Divider draw
      tl.fromTo(
        ".hero-divider",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.5, ease: "power3.inOut" },
        0.6,
      );

      // Floating animation
      gsap.to(".hero-image-wrapper", {
        y: -15,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });

      // Parallax scroll on image
      gsap.to(".hero-image", {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  useEffect(() => {
    const activeWord = typingWords[wordIndex];
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    if (!isDeleting && typedWord === activeWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), WORD_PAUSE);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && typedWord === "") {
      const timeout = window.setTimeout(() => {
        setWordIndex((wordIndex + 1) % typingWords.length);
        setIsDeleting(false);
      }, DELETING_SPEED);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => {
        const nextLength = typedWord.length + (isDeleting ? -1 : 1);
        setTypedWord(activeWord.slice(0, nextLength));
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, typedWord, wordIndex]);

  return (
    <section
      ref={container}
      id="home"
      className="relative min-h-[100dvh] lg:min-h-screen pt-0 flex items-center bg-[#0d1624] lg:bg-[var(--color-background)] overflow-hidden"
    >
      {/* Background Image & Overlay (Mobile Only) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
          alt="State-of-the-art medical equipment"
          fill
          sizes="(max-width: 1024px) 100vw, 0vw"
          className="hero-image object-cover object-center opacity-[0.35]"
          priority
        />
        {/* Navy gradient for text readability + 5% Green tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1624]/90 via-[#0d1624]/50 to-transparent" />
        <div className="absolute inset-0 bg-[var(--color-brand)]/5" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 justify-center pt-32 pb-16 lg:pt-28 lg:pb-10 h-full lg:min-h-[calc(100vh-6rem)]">
          {/* Left Text Column */}
          <div className="lg:col-span-6 w-full xl:w-[110%] xl:-ml-4 flex flex-col justify-center lg:justify-start lg:pt-0">
            <h1 className="hero-text-block font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight mb-5 lg:mb-6 text-white drop-shadow-md lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-[#16263F] lg:via-[#3AA874] lg:to-[#3AA874]">
              Advanced <br />
              <span className="inline-flex min-w-[8.8ch] items-baseline">
                <span>
                  {typedWord}
                </span>
                <span
                  className="ml-1 inline-block h-[0.86em] w-[2px] sm:w-[3px] translate-y-[0.08em] animate-pulse bg-white lg:bg-[#3AA874]"
                  aria-hidden="true"
                />
              </span>{" "}
              <br />
              Equipment.
            </h1>

            <div className="hero-divider h-px w-full max-w-lg bg-white/20 lg:bg-[var(--color-border)] mb-4 lg:mb-6" />

            <p className="hero-text-block font-dm-sans text-xs sm:text-sm lg:text-base text-white/80 lg:text-[var(--color-charcoal)] leading-relaxed mb-8 max-w-xl">
              Elevating healthcare standards across the UAE with world-class
              medical devices, innovative clinical solutions, and unmatched
              engineering expertise.
            </p>

            <div className="hero-text-block grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 mb-12 w-full max-w-lg">
              <Link
                href="/products"
                className="w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 bg-[var(--color-brand)] text-white font-dm-sans text-[12px] sm:text-[15px] lg:text-sm font-medium px-2 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-500 hover:shadow-[0_8px_30px_rgba(58,168,116,0.4)] text-center"
              >
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <span className="sm:hidden">Products</span>
                  <span className="hidden sm:inline">Explore Products</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-[var(--color-brand-dark)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none text-white lg:text-[var(--color-navy)] border border-white/20 lg:border-[var(--color-charcoal)]/30 font-dm-sans text-[12px] sm:text-[15px] lg:text-sm font-medium px-2 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-[var(--color-navy)] lg:hover:border-[var(--color-brand)] lg:hover:text-[var(--color-brand)] whitespace-nowrap text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Professional Trust Badges */}
            <div className="hero-text-block flex flex-wrap items-center gap-y-3 gap-x-6 lg:gap-x-8 pt-6 lg:pt-4 border-t border-white/10 lg:border-[var(--color-border)]/50 max-w-2xl">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 lg:bg-[var(--color-brand)]/10 backdrop-blur-sm lg:backdrop-blur-none border border-white/20 lg:border-none flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#6EE7B7] lg:text-[var(--color-brand)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-dm-sans text-white/90 lg:text-[var(--color-charcoal)] font-semibold lg:font-medium tracking-wider uppercase">
                  Authorized Distributor
                </span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 lg:bg-[var(--color-brand)]/10 backdrop-blur-sm lg:backdrop-blur-none border border-white/20 lg:border-none flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#6EE7B7] lg:text-[var(--color-brand)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-dm-sans text-white/90 lg:text-[var(--color-charcoal)] font-semibold lg:font-medium tracking-wider uppercase">
                  MOHAP Approved
                </span>
              </div>

              {/* Est. 1991 Badge Integrated Here for Desktop/Mobile flow */}
              <div className="flex items-center gap-2 lg:gap-3 mt-2 sm:mt-0 lg:ml-auto">
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--color-brand)]/20 lg:bg-[var(--color-brand)]/10 backdrop-blur-sm lg:backdrop-blur-none border border-[var(--color-brand)]/30 lg:border-none flex items-center justify-center">
                  <span className="text-xs lg:text-sm drop-shadow-sm">🇦🇪</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-dm-sans text-[8px] lg:text-[9px] font-bold tracking-[0.2em] text-[#6EE7B7] lg:text-[var(--color-brand)] uppercase">
                    Est. 1991
                  </span>
                  <span className="font-playfair text-[10px] lg:text-[11px] text-white/90 lg:text-[var(--color-navy)] font-medium tracking-wide">
                    Abu Dhabi, UAE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-6 relative aspect-[4/3] lg:h-[70vh] w-full mt-4 lg:mt-0 lg:pl-12 items-start pb-12 lg:pb-0">
            <div className="hero-image-wrapper relative w-full h-full overflow-hidden bg-[var(--color-muted)] lg:rounded-tl-[8rem] lg:rounded-br-[8rem] shadow-2xl lg:border-[10px] border-[var(--color-background)] ring-1 ring-slate-900/5">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="State-of-the-art medical equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="hero-image object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)]/30 via-transparent to-transparent z-[5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
