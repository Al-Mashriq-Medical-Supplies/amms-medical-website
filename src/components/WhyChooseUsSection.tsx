"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Globe,
  ShieldCheck,
  Activity,
  Route,
  Layers,
  RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Globe,
    title: "Exclusive Global Partnerships",
    description:
      "We secure exclusive relationships with world-class manufacturers—such as Fisher & Paykel and Penlon—delivering tier-one medical technology directly to your facility.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Compliance",
    description:
      "Every system we deploy rigorously adheres to international quality standards and is fully registered with all relevant UAE regulatory authorities.",
  },
  {
    icon: Activity,
    title: "Specialized Clinical Engineering",
    description:
      "Our factory-trained biomedical engineers execute flawless installations and provide rapid-response preventive maintenance to eliminate clinical downtime.",
  },
  {
    icon: Route,
    title: "Robust National Logistics",
    description:
      "A highly sophisticated supply chain guarantees rapid, uninterrupted deployment of critical equipment to healthcare facilities across all seven Emirates.",
  },
  {
    icon: Layers,
    title: "Turnkey Workflow Integration",
    description:
      "We manage the entire deployment lifecycle—from pre-installation site planning to advanced clinical staff training—ensuring a seamless operational handover.",
  },
  {
    icon: RefreshCw,
    title: "Strategic Lifecycle Management",
    description:
      "We build long-term institutional value through tailored service level agreements (SLAs) and a guaranteed, rapid-access spare parts inventory.",
  },
];

export default function WhyChooseUsSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".why-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".why-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-grid",
            start: "top 75%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-20 sm:py-32 bg-[var(--color-background)] border-y border-[var(--color-border)]/50 relative overflow-hidden"
    >
      {/* Subtle Background Elements for Premium Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-navy)] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="why-header opacity-0 mb-16 sm:mb-24 max-w-4xl mx-auto text-center">
          <span className="font-dm-sans text-xs font-semibold text-[var(--color-brand)] uppercase tracking-[0.2em] block mb-4">
            Our Strategic Value
          </span>
          <h2 className="font-playfair font-medium text-3xl sm:text-4xl md:text-5xl text-[var(--color-navy)] leading-tight mb-6">
            Why leading facilities choose <br className="hidden md:block" />
            <span className="text-[var(--color-brand)]">
              Al Mashriq Medical Supplies
            </span>
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-[var(--color-charcoal)] leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            We move beyond standard procurement. We are a strategic clinical
            engineering partner focused on optimizing the intersection of
            technology, patient care, and operational efficiency.
          </p>
        </div>

        {/* 
          Mobile: Horizontal Swipe Carousel (hide-scrollbar)
          Desktop: 3-column Grid 
        */}
        <div className="why-grid flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-8 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="why-card opacity-0 group relative bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(22,38,63,0.04)] hover:shadow-[0_20px_40px_rgba(22,38,63,0.08)] transition-all duration-500 border border-[var(--color-border)]/30 sm:hover:-translate-y-2 shrink-0 snap-center w-[85vw] sm:w-auto"
            >
              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              <div className="w-14 h-14 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[var(--color-brand)]/10 transition-colors duration-500">
                <Icon className="w-6 h-6 text-[var(--color-navy)] group-hover:text-[var(--color-brand)] transition-colors duration-500" />
              </div>

              <h3 className="font-playfair font-medium text-xl sm:text-2xl text-[var(--color-navy)] mb-3 sm:mb-4 leading-tight group-hover:text-[var(--color-brand)] transition-colors duration-500">
                {title}
              </h3>

              <p className="font-dm-sans text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
