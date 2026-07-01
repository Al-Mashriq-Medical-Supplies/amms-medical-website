"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Hospitals & Medical Centers",
    description:
      "Comprehensive equipment packages for tertiary hospitals and multi-specialty centers across the UAE.",
    metric: "35+",
    label: "Years Serving",
  },
  {
    title: "Clinics & Polyclinics",
    description:
      "Scalable solutions for outpatient clinics from single-unit procurement to full fitouts.",
    metric: "10+",
    label: "Principals",
  },
  {
    title: "Rehabilitation Centers",
    description:
      "Physiotherapy and cardiac rehabilitation equipment for specialized recovery.",
    metric: "15+",
    label: "Product Lines",
  },
  {
    title: "Diagnostic Centers",
    description:
      "Advanced ophthalmic, hearing, and pulmonary diagnostic equipment for clinical laboratories.",
    metric: "30+",
    label: "Professionals",
  },
  {
    title: "Homecare & Long-Term Care",
    description:
      "Patient-friendly CPAP, respiratory, and homecare products for chronic disease management at home.",
    metric: "7",
    label: "Emirates Covered",
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
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
      className="pt-12 pb-0 md:pt-32 md:pb-0 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-0">
          <div className="w-full">
            <div className="ind-header opacity-0 flex flex-col items-center text-center max-w-4xl mx-auto mb-4">
              <h2 className="w-full text-center font-playfair text-4xl sm:text-5xl font-semibold leading-[1.1] mb-3 tracking-tight text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874]">
                Serving the Full Spectrum of Care
              </h2>
              <span className="w-full text-center font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.2em] block mb-0">
                Healthcare Environments
              </span>
              <p className="w-full text-center font-dm-sans text-slate-500 max-w-2xl font-light leading-relaxed mb-8 mx-auto mt-4">
                Our solutions are deeply integrated across every tier of the UAE
                healthcare system, ensuring world-class technology reaches every
                patient.
              </p>
            </div>
          </div>

          <div className="md:w-2/3 mx-auto mt-0">
            <div className="ind-list border-t border-slate-200">
              {industries.map(({ title, description, metric, label }) => (
                <div
                  key={title}
                  className="ind-item opacity-0 group flex flex-col sm:flex-row sm:items-center justify-between py-10 border-b border-slate-200 hover:bg-slate-50 transition-colors duration-300 px-6 -mx-6"
                >
                  <div className="sm:w-2/3 mb-6 sm:mb-0 pr-8">
                    <h3 className="font-playfair font-medium text-2xl text-slate-900 mb-3 group-hover:text-[#3AA874] transition-colors">
                      {title}
                    </h3>
                    <p className="font-dm-sans text-slate-500 font-light leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="sm:w-1/3 text-left sm:text-right border-l sm:border-slate-200 pl-0 sm:pl-8 border-transparent">
                    <p className="font-playfair font-light text-4xl text-[#3AA874] mb-1">
                      {metric}
                    </p>
                    <p className="font-dm-sans text-xs text-slate-400 uppercase tracking-widest">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
