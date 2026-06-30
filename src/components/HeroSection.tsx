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

      // Image reveal — wipe from bottom
      tl.fromTo(
        ".hero-image-overlay",
        { scaleY: 1, transformOrigin: "bottom" },
        { scaleY: 0, duration: 1.8, ease: "power4.inOut" },
        0.3,
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

      // Stats counter fade
      tl.fromTo(
        ".hero-stats-fade",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        1.4,
      );

      // Scroll indicator bounce
      tl.fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        2,
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
      className="relative lg:min-h-screen pt-8 lg:pt-24 flex items-center bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full lg:min-h-[calc(100vh-6rem)]">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-4 pb-2 lg:py-20 lg:-mt-12 z-10">
            <div className="hero-text-block mb-4">
              <p className="font-dm-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#3AA874] uppercase">
                Est. 1991 &bull; Abu Dhabi, UAE
              </p>
            </div>

            <h1 className="hero-text-block font-playfair text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.05] tracking-tight mb-6">
              Advanced <br />
              <span className="inline-flex min-w-[8.8ch] items-baseline">
                <span
                  className="bg-gradient-to-r from-[#3AA874] to-[#2d8a5f] bg-clip-text text-transparent"
                  aria-live="polite"
                >
                  {typedWord}
                </span>
                <span
                  className="ml-1 inline-block h-[0.86em] w-[3px] translate-y-[0.08em] animate-pulse bg-[#3AA874]"
                  aria-hidden="true"
                />
              </span>{" "}
              <br />
              Equipment.
            </h1>

            <div className="hero-divider h-px w-full bg-slate-200 mb-6" />

            <p className="hero-text-block font-dm-sans text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
              Supplying hospitals, clinics, and healthcare providers across the
              UAE with world-class medical devices, respiratory care solutions,
              and clinical equipment since 1991.
            </p>

            <div className="hero-text-block flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-dm-sans text-sm font-medium px-8 py-4 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-[#3AA874] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-transparent text-slate-900 border border-slate-300 font-dm-sans text-sm font-medium px-8 py-4 transition-all duration-300 hover:border-[#3AA874] hover:text-[#3AA874]"
              >
                Contact Us
              </Link>
            </div>

            <div className="hero-stats-fade mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-playfair text-4xl text-slate-900 mb-1">
                  35<span className="text-[#3AA874]">+</span>
                </p>
                <p className="font-dm-sans text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                  Years of Trust
                </p>
              </div>
              <div>
                <p className="font-playfair text-4xl text-slate-900 mb-1">
                  10<span className="text-[#3AA874]">+</span>
                </p>
                <p className="font-dm-sans text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                  Global Principals
                </p>
              </div>
              <div>
                <p className="font-playfair text-4xl text-slate-900 mb-1">
                  30<span className="text-[#3AA874]">+</span>
                </p>
                <p className="font-dm-sans text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                  Professionals
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:h-[400px] lg:h-[70vh] w-full mt-8 lg:-mt-16 lg:pl-12">
            <div className="hero-image-wrapper relative w-full h-full overflow-hidden bg-slate-100 rounded-[2rem] lg:rounded-tl-[8rem] lg:rounded-br-[8rem] shadow-[0_30px_60px_rgba(58,168,116,0.15)] border-[10px] border-white ring-1 ring-slate-900/5">
              <div className="hero-image-overlay absolute inset-0 bg-[#0a1a12] z-10" />
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="State-of-the-art medical equipment supplied by Al Mashriq Medical Supplies"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="hero-image object-cover object-center"
                priority
              />
              {/* Overlay gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12]/30 via-transparent to-transparent z-[5]" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
