"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { heroSlides } from "@/lib/seo";

const SLIDE_INTERVAL = 4500;

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
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidePaused, setSlidePaused] = useState(false);

  // Auto-advance product slides (paused on hover / reduced motion)
  useEffect(() => {
    if (slidePaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setActiveSlide((i) => (i + 1) % heroSlides.length),
      SLIDE_INTERVAL,
    );
    return () => window.clearTimeout(id);
  }, [activeSlide, slidePaused]);

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

  const ctaButtons = (
    <div className="hero-text-block flex flex-row gap-2.5 sm:gap-4 lg:mb-10 w-full max-w-[320px] sm:max-w-lg mx-auto lg:mx-0">
      <Link
        href="/services"
        className="flex-1 group relative overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 bg-[var(--color-brand)] text-white font-dm-sans text-[12px] sm:text-[15px] lg:text-sm font-medium px-2 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 hover:shadow-[0_8px_30px_rgba(58,168,116,0.4)] text-center"
      >
        <span className="relative z-10 flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          <span>Services</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300 sm:w-4 sm:h-4"
          />
        </span>
        <div className="absolute inset-0 bg-[var(--color-brand-dark)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
      </Link>
      <Link
        href="/contact"
        className="flex-1 group flex items-center justify-center gap-2 bg-transparent text-[var(--color-navy)] border border-[var(--color-charcoal)]/30 font-dm-sans text-[12px] sm:text-[15px] lg:text-sm font-medium px-2 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] whitespace-nowrap text-center"
      >
        Contact Us
      </Link>
    </div>
  );

  return (
    <section
      ref={container}
      id="home"
      className="relative min-h-[100dvh] lg:min-h-screen pt-20 lg:pt-0 flex items-center bg-[var(--color-background)] overflow-hidden"
    >
      <div className="w-full lg:w-[93%] max-w-7xl lg:max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 justify-center pb-2 lg:pt-28 lg:pb-10 h-full lg:min-h-[calc(100vh-6rem)]">
          {/* Top Text Block (Mobile 1st, Desktop Left Col) */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center lg:justify-start pt-6 sm:pt-8 lg:pt-8 xl:pt-12 order-1 lg:order-1 items-start text-left px-1 sm:px-0">
            <h1 className="hero-text-block font-playfair text-[28px] sm:text-5xl lg:text-6xl font-semibold leading-[1.2] lg:leading-[1.15] tracking-tight mb-4 lg:mb-8 text-[#16263F]">
              Advanced <br className="hidden sm:block lg:hidden" />
              <span className="inline-flex min-w-[8.8ch] items-baseline text-[#3AA874] justify-start">
                <span>{typedWord}</span>
                <span
                  className="ml-1 inline-block h-[0.86em] w-[2px] sm:w-[3px] translate-y-[0.08em] animate-pulse bg-[#3AA874]"
                  aria-hidden="true"
                />
              </span>{" "}
              <br />
              Equipment.
            </h1>

            {/* Desktop divider */}
            <div className="hero-divider hidden lg:block h-px w-full max-w-lg bg-[var(--color-border)] mb-4 lg:mb-6" />

            <p className="hero-text-block font-dm-sans text-[12.5px] sm:text-base text-[var(--color-charcoal)] leading-[1.65] lg:leading-relaxed mb-0 lg:mb-8 max-w-full sm:max-w-md lg:max-w-xl mx-0">
              Elevating healthcare standards across the UAE with world-class
              medical devices, innovative clinical solutions, and unmatched
              engineering expertise.
            </p>

            {/* Buttons — desktop position (under the text) */}
            <div className="hidden lg:block w-full">{ctaButtons}</div>
          </div>

          {/* Image Block (Mobile 2nd, Desktop Right Col) */}
          <div className="flex lg:col-span-6 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-[70vh] w-[75%] sm:w-full max-w-[280px] sm:max-w-none mx-auto lg:pl-12 items-start order-2 lg:order-2 lg:row-span-2 group mt-4 sm:mt-8 lg:mt-0">
            
            {/* Decorative Offset Border (Premium Detail) */}
            <div className="absolute top-3 left-3 right-[-12px] bottom-[-12px] lg:top-6 lg:left-16 lg:right-[-24px] lg:bottom-[-24px] border-[2px] border-[#E0D4C3] rounded-t-full rounded-br-[5rem] lg:rounded-br-[10rem] rounded-bl-2xl lg:rounded-bl-3xl transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />

            {/* Main Image Wrapper — product slides (photos from each partner's website) */}
            <div
              className="hero-image-wrapper relative w-full h-full overflow-hidden bg-white rounded-t-full rounded-br-[5rem] lg:rounded-br-[10rem] rounded-bl-2xl lg:rounded-bl-3xl shadow-xl lg:shadow-2xl z-10 ring-1 ring-slate-900/5"
              onMouseEnter={() => setSlidePaused(true)}
              onMouseLeave={() => setSlidePaused(false)}
            >
              <div className="hero-image absolute inset-0">
                {heroSlides.map((slide, i) => (
                  <a
                    key={slide.title}
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${slide.title} by ${slide.caption} (opens the ${slide.caption} website)`}
                    aria-hidden={i !== activeSlide}
                    tabIndex={i === activeSlide ? 0 : -1}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      i === activeSlide ? "opacity-100 z-[2]" : "opacity-0 z-[1] pointer-events-none"
                    }`}
                  >
                    {/* Product sits inside the arch with room for the caption below */}
                    <div className="absolute inset-x-[12%] top-[16%] bottom-[24%] sm:inset-x-[14%] sm:top-[14%] sm:bottom-[22%]">
                      <Image
                        src={slide.image}
                        alt={`${slide.title} by ${slide.caption}`}
                        fill
                        sizes="(max-width: 1024px) 80vw, 40vw"
                        className={`object-contain object-center mix-blend-multiply transition-transform duration-[6000ms] ease-out ${
                          i === activeSlide ? "scale-105" : "scale-100"
                        }`}
                        priority={i === 0}
                      />
                    </div>
                  </a>
                ))}
              </div>

              {/* Caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] px-5 pb-8 pt-4 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12 text-center bg-gradient-to-t from-[#eef8f3] via-white/90 to-transparent">
                <span className="block font-dm-sans text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.2em] text-[#3AA874] font-bold mb-1 sm:mb-1.5">
                  {heroSlides[activeSlide].caption}
                </span>
                <span className="block font-playfair text-base sm:text-xl lg:text-2xl font-semibold text-[#16263F] leading-tight">
                  {heroSlides[activeSlide].title}
                </span>
              </div>

              {/* Dots */}
              <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-[7] flex items-center justify-center gap-1.5">
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Show ${slide.title}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === activeSlide ? "w-6 bg-[#3AA874]" : "w-1.5 bg-[#16263F]/20 hover:bg-[#16263F]/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Buttons — mobile/tablet position (under the product slider) */}
          <div className="lg:hidden order-3 w-full mt-8 sm:mt-10">{ctaButtons}</div>

          {/* Badges Block (Mobile 4th, Desktop Left Col) */}
          <div className="lg:col-span-6 w-full xl:w-[110%] xl:-ml-4 flex flex-col justify-start order-4 lg:order-3">
            {/* Mobile divider */}
            <div className="hero-divider lg:hidden h-px w-full bg-[var(--color-border)] mb-5" />

            {/* Professional Trust Badges */}
            <div className="hero-text-block flex flex-wrap items-center justify-between lg:justify-start gap-y-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 lg:pt-4 lg:border-t lg:border-[var(--color-border)] w-full lg:max-w-2xl pr-4 sm:pr-0">
              <div className="flex items-center gap-2 lg:gap-3 order-2 lg:order-1">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--color-brand)]"
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
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-dm-sans text-[var(--color-charcoal)] font-semibold lg:font-medium tracking-wider uppercase">
                  Authorized Distributor
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-2 lg:gap-3 order-3 lg:order-2">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--color-brand)]"
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
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-dm-sans text-[var(--color-charcoal)] font-semibold lg:font-medium tracking-wider uppercase">
                  MOHAP Approved
                </span>
              </div>

              {/* Est. 1991 Badge */}
              <div className="flex items-center gap-2 lg:gap-3 mt-1 sm:mt-0 lg:ml-auto order-1 lg:order-3">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center">
                  <span className="text-xs lg:text-sm drop-shadow-sm">🇦🇪</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-dm-sans text-[8px] lg:text-[9px] font-bold tracking-[0.2em] text-[var(--color-brand)] uppercase">
                    Est. 1991
                  </span>
                  <span className="font-playfair text-[10px] lg:text-[11px] text-[var(--color-navy)] font-medium tracking-wide">
                    Abu Dhabi, UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
