"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function DirectorMessageSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".director-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pt-8 pb-20 sm:pt-12 sm:pb-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Div: Director Caption */}
          <div className="director-fade flex flex-col justify-center">
            <span className="font-dm-sans text-xs font-semibold text-[#3AA874] uppercase tracking-[0.2em] block mb-6">
              A Message from Leadership
            </span>
            <blockquote className="font-playfair text-2xl lg:text-3xl leading-relaxed text-[#16263F] mb-8 font-light italic">
              "Our commitment to the UAE healthcare sector goes beyond providing
              equipment. We are dedicated to elevating patient care through
              continuous innovation, uncompromising quality, and enduring global
              partnerships."
            </blockquote>
            <div>
              <div className="font-dm-sans font-bold text-[#16263F] text-lg">
                Director
              </div>
              <div className="font-dm-sans text-sm text-slate-500 uppercase tracking-widest mt-1">
                Al Mashriq Medical Supplies
              </div>
            </div>
          </div>

          {/* Right Div: Image */}
          <div className="director-fade relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/images/director/ammm-director.jpeg"
              alt="Director of AMMS"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
