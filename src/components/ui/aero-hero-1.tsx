"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import VisionMission from "@/components/VisionMission";

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
          <div className="flex w-full flex-col items-center text-center max-w-6xl mx-auto gap-8 lg:gap-12">
            <div className="w-full">
              <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-brand)]">
                About Al Mashriq Medical Supplies
              </span>
              <h2 className="font-playfair text-[17px] sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] sm:leading-[1.7] tracking-wide text-[#16263F] w-full max-w-6xl mx-auto mb-8 px-2 sm:px-4 md:px-8 text-center text-balance">
                For over 35 years, we have been the trusted regional partner, delivering innovative medical equipment and world-class healthcare solutions to advance patient care.
              </h2>
            </div>

            <VisionMission />

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
