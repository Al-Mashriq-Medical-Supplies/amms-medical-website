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
      className="pt-8 pb-24 bg-[var(--color-background)] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="space-y-5">
          {principals.map((principal, index) => (
            <div
              key={principal.slug}
              className="pd-card opacity-0 group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_rgba(58,168,116,0.12)] hover:border-[#3AA874]/30 hover:-translate-y-1 overflow-hidden transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3AA874]/0 via-transparent to-[#3AA874]/0 group-hover:from-[#3AA874]/[0.03] group-hover:to-[#3AA874]/[0.08] transition-all duration-700 pointer-events-none" />
              <div className="p-6 sm:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Logo + Name */}
                  <div className="sm:w-1/3 flex items-center gap-5">
                    <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 border border-slate-100 shadow-sm group-hover:border-[#3AA874]/30 group-hover:shadow-md transition-all duration-500">
                      <Image
                        src={principal.logo}
                        alt={`${principal.name} logo`}
                        width={64}
                        height={64}
                        className="object-contain max-h-[48px] w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair font-medium text-2xl text-slate-900 group-hover:text-[#3AA874] transition-colors duration-500">
                        {principal.name}
                      </h3>
                      <p className="font-dm-sans text-xs text-slate-500 font-light mt-1">
                        {principal.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="sm:w-2/3 sm:border-l sm:border-slate-100 sm:pl-8">
                    <div>
                      <span className="font-dm-sans text-[10px] text-[#3AA874] uppercase tracking-[0.15em] block mb-4 font-bold">
                        Equipment Categories
                      </span>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {principal.products.map((product) => (
                          <span
                            key={product.name}
                            className="inline-flex items-center px-4 py-2 bg-slate-50 border border-slate-100 rounded-full font-dm-sans text-xs text-slate-600 group-hover:border-[#3AA874]/20 group-hover:bg-[#3AA874]/[0.02] group-hover:text-slate-800 transition-all duration-500 shadow-sm group-hover:shadow"
                          >
                            {product.name}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/principals/${principal.slug}`}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-[#3AA874] text-white rounded-full font-dm-sans text-sm font-medium transition-all duration-300 hover:bg-[#2d8a5f] hover:shadow-[0_8px_20px_rgba(58,168,116,0.3)] hover:-translate-y-0.5 group"
                      >
                        View All Products
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
