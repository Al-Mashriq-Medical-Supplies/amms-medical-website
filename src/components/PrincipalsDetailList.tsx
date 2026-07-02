"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { principals } from "@/lib/seo";

gsap.registerPlugin(ScrollTrigger);

export default function PrincipalsDetailList() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pd-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
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
      className="pt-8 pb-0 sm:pb-24 bg-[var(--color-background)] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="space-y-2.5 sm:space-y-5">
          {principals.map((principal) => (
            <Link
              href={`/principals/${principal.slug}`}
              key={principal.slug}
              className="pd-card opacity-0 group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_rgba(58,168,116,0.12)] hover:border-[#3AA874]/30 hover:-translate-y-1 overflow-hidden transition-all duration-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AA874]/0 via-transparent to-[#3AA874]/0 group-hover:from-[#3AA874]/[0.03] group-hover:to-[#3AA874]/[0.08] transition-all duration-700 pointer-events-none" />
              {/* Arrow indicator */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#3AA874] group-hover:text-white group-hover:border-transparent transition-all duration-500 z-20">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="p-3 sm:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  {/* Logo + Name */}
                  <div className="sm:w-1/3 flex items-center gap-3 sm:gap-5">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-3 border border-slate-100 shadow-sm group-hover:border-[#3AA874]/30 group-hover:shadow-md transition-all duration-500">
                      <Image
                        src={principal.logo}
                        alt={`${principal.name} logo`}
                        width={64}
                        height={64}
                        className="object-contain max-h-[36px] sm:max-h-[48px] w-auto transition-all duration-700"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair font-medium text-base sm:text-2xl text-slate-900 group-hover:text-[#3AA874] transition-colors duration-500">
                        {principal.name}
                      </h3>
                      <p className="font-dm-sans text-[11px] sm:text-xs text-slate-500 font-light mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2">
                        {principal.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="sm:w-2/3 sm:border-l sm:border-slate-100 sm:pl-8">
                    <div>
                      <span className="font-dm-sans text-[10px] text-[#3AA874] uppercase tracking-[0.15em] hidden sm:block mb-2 sm:mb-4 font-bold">
                        Equipment Categories
                      </span>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-8">
                        {principal.products.map((product) => (
                          <span
                            key={product.name}
                            className="inline-flex items-center px-2.5 py-1 sm:px-4 sm:py-2 bg-slate-50 border border-slate-100 rounded-full font-dm-sans text-[9px] sm:text-xs text-slate-600 group-hover:border-[#3AA874]/20 group-hover:bg-[#3AA874]/[0.02] group-hover:text-slate-800 transition-all duration-500 shadow-sm group-hover:shadow"
                          >
                            {product.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
