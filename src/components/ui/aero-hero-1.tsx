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
      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:pt-8 md:pb-32">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Text Content */}
          <div className="flex w-full flex-col items-center text-center max-w-5xl mx-auto gap-8 lg:gap-12">
            <div>
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-brand)]">
                About AMMS
              </span>
              <h2 className="font-playfair text-[17px] sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] sm:leading-[1.7] tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#16263F] to-slate-600 w-full max-w-4xl mx-auto mb-8 px-6 sm:px-10 md:px-16 text-left">
                For over 35 years, we have been the trusted regional partner, delivering innovative medical equipment and world-class healthcare solutions to advance patient care.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full text-left">
              {/* Mission */}
              <div className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-[0_4px_20px_rgba(22,38,63,0.02)] hover:shadow-md transition-all duration-500">
                <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full bg-white rounded-2xl p-8 sm:p-10 flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-dm-sans text-[11px] sm:text-xs text-[var(--color-brand)] uppercase tracking-[0.2em] font-semibold mb-4">
                    Our Mission
                  </h3>
                  <p className="font-playfair text-[15px] sm:text-lg leading-[1.8] sm:leading-relaxed font-normal text-slate-500">
                    To continuously support UAE healthcare providers by delivering
                    innovative medical technologies, ensuring prompt service, and
                    prioritizing optimal patient recovery and experiences.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-[0_4px_20px_rgba(22,38,63,0.02)] hover:shadow-md transition-all duration-500">
                <div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_270deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full bg-white rounded-2xl p-8 sm:p-10 flex flex-col overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand)]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="font-dm-sans text-[11px] sm:text-xs text-[var(--color-brand)] uppercase tracking-[0.2em] font-semibold mb-4">
                    Our Vision
                  </h3>
                  <p className="font-playfair text-[15px] sm:text-lg leading-[1.8] sm:leading-relaxed font-normal text-slate-500">
                    To be the foremost provider of capital equipment and homecare
                    solutions, establishing the benchmark for world-class
                    healthcare standards across the United Arab Emirates.
                  </p>
                </div>
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
