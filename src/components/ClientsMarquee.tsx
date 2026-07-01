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

  useGSAP(
    () => {
      gsap.fromTo(
        ".clients-header",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full overflow-hidden bg-white flex flex-col justify-start pt-16 pb-8 md:pt-24 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="clients-header opacity-0 text-center text-slate-900">
          <span className="font-dm-sans text-xs text-[#3AA874] uppercase tracking-[0.25em] block mb-4">
            Our Partners in Health Care
          </span>
          <h2 className="font-playfair font-medium text-3xl sm:text-4xl md:text-5xl leading-tight text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874]">
            Trusted by Global Leaders
          </h2>
        </div>

        <div className="relative mt-4 md:mt-8 h-[80px] md:h-[100px] w-full">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={45}
            gap={32}
          >
            {principals.map((principal, index) => (
              <div
                key={`${principal.slug}-${index}`}
                className="w-32 md:w-48 flex items-center justify-center transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={principal.logo}
                  alt={`${principal.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain max-h-[50px] md:max-h-[80px] w-auto transition-all duration-500"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[40%] w-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,168,116,0.15),transparent_70%)]" />
        <div className="absolute -left-1/2 bottom-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-b border-slate-900/10 bg-white" />
        <Sparkles
          density={600}
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#3AA874"
        />
      </div>
    </section>
  );
}
