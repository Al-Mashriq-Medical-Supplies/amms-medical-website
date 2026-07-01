"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/seo";

type Product = {
  name: string;
  image?: string;
  brief: string;
};

export default function ProductAccordionList({ 
  products,
  openProductName,
  onToggle
}: { 
  products: Product[];
  openProductName?: string | null;
  onToggle?: (productName: string) => void;
}) {
  const [localOpenIndex, setLocalOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number, name: string) => {
    if (onToggle) {
      onToggle(name);
    } else {
      setLocalOpenIndex(localOpenIndex === index ? null : index);
    }
  };

  const getWhatsAppUrl = (productName: string) => {
    const number = siteConfig.whatsapp.replace(/[^0-9]/g, "");
    const message = `Hello Al Mashriq Medical Supplies,\n\nI would like to inquire about the *${productName}*.\n\nCould you please provide more information?`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        const isOpen = openProductName !== undefined 
          ? openProductName === product.name 
          : localOpenIndex === index;
        return (
          <div
            key={product.name}
            className={`group relative flex flex-col py-6 border-b border-slate-100 last:border-b-0 transition-all duration-500 px-6 sm:px-10 -mx-6 sm:-mx-10 rounded-3xl ${
              isOpen ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "hover:bg-white/60 hover:shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index, product.name)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <div className="flex flex-col pr-8">
                <h3
                  className={`font-playfair text-xl sm:text-2xl font-medium tracking-wide transition-colors duration-300 ${
                    isOpen ? "text-[#3AA874]" : "text-slate-900 group-hover:text-[#3AA874]"
                  }`}
                >
                  {product.name}
                </h3>
              </div>

              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  isOpen
                    ? "bg-[#3AA874] border-[#3AA874] text-white rotate-180"
                    : "border-slate-200 text-slate-400 group-hover:bg-[#3AA874]/10 group-hover:border-[#3AA874]/30 group-hover:text-[#3AA874]"
                }`}
              >
                <svg
                  className="w-5 h-5 transition-transform duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="flex flex-col pt-4 border-t border-slate-200/50">
                <p className="font-dm-sans text-slate-800 font-normal leading-relaxed text-lg mb-6 max-w-3xl">
                  {product.brief}
                </p>
                <a 
                  href={getWhatsAppUrl(product.name)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-fit text-sm font-medium px-6 py-2.5 rounded-full border border-[#3AA874] text-[#3AA874] hover:bg-[#3AA874] hover:text-white transition-all duration-300 group/btn"
                >
                  Enquire Now
                  <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
