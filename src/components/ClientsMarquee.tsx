"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { principals } from "@/lib/seo";
import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsMarquee() {
  const container = useRef<HTMLElement>(null);

  // Animation removed for clients-header to guarantee mobile visibility

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden bg-white flex flex-col justify-start pt-8 pb-4 md:pt-24 md:pb-12"
    >
      {/* Background Elements moved to top of DOM for guaranteed correct mobile layering */}
      <div className="absolute top-0 left-0 right-0 h-full md:h-[60%] w-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,168,116,0.15),transparent_70%)] md:bg-[radial-gradient(ellipse_at_top,rgba(58,168,116,0.15),transparent_70%)]" />
        {/* Hide the overlapping white curve on mobile to let the green gradient shine */}
        <div className="hidden md:block absolute -left-1/2 bottom-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-b border-slate-900/10 bg-white" />
        <Sparkles
          density={600}
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#3AA874"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center w-full">
        <div className="clients-header text-center w-full flex flex-col items-center">
          <span className="font-dm-sans text-[10px] sm:text-xs text-[#3AA874] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] block mb-2 sm:mb-4 text-center">
            Our Partners in Health Care
          </span>
          <h2 className="font-playfair font-medium text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight text-[#3AA874] md:drop-shadow-md px-2 text-center w-full max-w-[95vw]">
            Trusted by Global Leaders
          </h2>
        </div>

        <div className="relative mt-8 md:mt-12 h-[80px] sm:h-[100px] md:h-[140px] w-full">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={45}
            gap={80}
          >
            {principals.map((principal, index) => (
              <div
                key={`${principal.slug}-${index}`}
                className="w-32 sm:w-48 md:w-64 flex items-center justify-center transition-all duration-500 cursor-pointer h-[40px] sm:h-[60px] md:h-[90px]"
              >
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={240}
                  height={100}
                  className="object-contain h-full w-auto transition-all duration-500"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
