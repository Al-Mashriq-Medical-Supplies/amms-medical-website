"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Component = () => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-[var(--color-background)] text-[var(--color-navy)]",
      )}
    >
      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Text Content */}
          <div className="flex w-full flex-col items-center text-center max-w-5xl mx-auto gap-8 lg:gap-12">
            <div>
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-brand)]">
                About AMMS
              </span>
              <h2 className="font-playfair text-2xl font-light leading-relaxed tracking-tight md:text-3xl lg:text-4xl text-[var(--color-navy)] max-w-4xl mx-auto mb-4">
                For over 30 years, we have been a trusted partner in the region, delivering innovative medical equipment and world-class healthcare solutions to advance patient care.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full text-left">
              {/* Mission */}
              <div className="bg-white p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(22,38,63,0.02)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-dm-sans text-[11px] sm:text-xs text-[var(--color-brand)] uppercase tracking-[0.2em] font-semibold mb-4">
                  Our Mission
                </h3>
                <p className="font-playfair text-base sm:text-lg leading-relaxed font-normal text-[var(--color-charcoal)]">
                  To continuously support UAE healthcare providers by delivering innovative medical technologies, ensuring prompt service, and prioritizing optimal patient recovery and experiences.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 sm:p-10 border border-slate-100 shadow-[0_4px_20px_rgba(22,38,63,0.02)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-dm-sans text-[11px] sm:text-xs text-slate-400 group-hover:text-[var(--color-brand)] transition-colors duration-500 uppercase tracking-[0.2em] font-semibold mb-4">
                  Our Vision
                </h3>
                <p className="font-playfair text-base sm:text-lg leading-relaxed font-normal text-[var(--color-charcoal)]">
                  To be the foremost provider of capital equipment and homecare solutions, establishing the benchmark for world-class healthcare standards across the United Arab Emirates.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-2">
              <Link
                href="/about"
                className="group flex w-fit cursor-pointer items-center justify-center gap-0 font-normal"
              >
                <span className="bg-[var(--color-brand)]/10 px-6 py-3 text-sm text-[var(--color-navy)] duration-500 ease-in-out group-hover:bg-[var(--color-navy)] group-hover:text-[var(--color-gold)]">
                  Learn More About Us
                </span>
                <div className="relative flex h-fit items-center overflow-hidden bg-[var(--color-brand)]/10 p-[14px] text-[var(--color-navy)] duration-500 ease-in-out group-hover:bg-[var(--color-navy)] group-hover:text-[var(--color-gold)]">
                  <ArrowUpRight className="absolute h-4 w-4 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-4 w-4 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
