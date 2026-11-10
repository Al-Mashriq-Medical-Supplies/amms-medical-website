"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Hospitals & Medical Centers",
    description:
      "Comprehensive equipment packages for tertiary hospitals and multi-specialty centers across the UAE.",
    image: "/images/spectrum/surgery.jpg",
  },
  {
    title: "Clinics & Polyclinics",
    description:
      "Scalable solutions for outpatient clinics from single-unit procurement to full fitouts.",
    image: "/images/spectrum/clinic.jpg",
  },
  {
    title: "Rehabilitation Centers",
    description:
      "Physiotherapy and cardiac rehabilitation equipment for specialized recovery.",
    image: "/images/spectrum/rehab.jpg",
  },
  {
    title: "Diagnostic Centers",
    description:
      "Advanced ophthalmic, hearing, and pulmonary diagnostic equipment for clinical laboratories.",
    image: "/images/spectrum/diagnostic.jpg",
  },
  {
    title: "Homecare & Long-Term Care",
    description:
      "Patient-friendly CPAP, respiratory, and homecare products for chronic disease management at home.",
    image: "/images/spectrum/homecare.jpg",
  },
];

export default function IndustriesServedSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ind-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".ind-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ind-list",
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
      className="py-16 md:py-32 bg-[var(--color-background)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ind-header flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="w-full text-center font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 tracking-tight text-[#3AA874] drop-shadow-sm">
            Serving the Full Spectrum of Care
          </h2>
          <span className="w-full text-center font-dm-sans text-[10px] md:text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-4">
            Healthcare Environments
          </span>
          <p className="w-full text-center font-dm-sans text-slate-500 font-light leading-relaxed">
            Our solutions are deeply integrated across every tier of the UAE
            healthcare system, ensuring world-class technology reaches every
            patient.
          </p>
        </div>

        <div className="ind-list flex flex-col gap-10 md:gap-14 max-w-5xl mx-auto">
          {industries.map((ind, idx) => (
            <div
              key={ind.title}
              className="ind-item group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-4 md:p-6 rounded-2xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm"
            >
              {/* Small Image on the left */}
              <div className="w-full md:w-64 lg:w-72 shrink-0 aspect-[4/3] relative rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text on the right */}
              <div className="flex-1 py-2 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#3AA874] mb-4">
                    {ind.title}
                  </h3>
                  <p className="font-dm-sans text-slate-500 font-light leading-relaxed max-w-xl text-[15px] md:text-[17px]">
                    {ind.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
