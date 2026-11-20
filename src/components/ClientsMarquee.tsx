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
          <h2 className="font-playfair font-medium text-[clamp(19px,6.11vw,22px)] sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight text-[#3AA874] md:drop-shadow-md px-2 text-center w-full max-w-[95vw]">
            Trusted by Global Leaders
          </h2>
        </div>

        <div className="relative mt-8 md:mt-12 h-[80px] sm:h-[100px] md:h-[120px] w-full">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={45}
            gap={64}
          >
            {principals.map((principal, index) => (
              <div
                key={`${principal.slug}-${index}`}
                className="group flex items-center justify-center w-32 md:w-44 h-16 md:h-20 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-all duration-300 shadow-sm relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3AA874]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={176}
                  height={80}
                  className="w-full h-full object-contain object-center opacity-70 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply relative z-10 scale-100 group-hover:scale-110 p-3 md:p-5"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
