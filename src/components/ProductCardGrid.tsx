"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/lib/seo";

export type ProductCardItem = {
  name: string;
  image?: string;
  brief: string;
  category?: string;
  /** Where clicking the card goes (e.g. the item on its partner page) */
  href?: string;
  /** Shown under the title, e.g. "Fisher & Paykel Healthcare" */
  partnerName?: string;
  /** DOM id so other pages can link straight to this card */
  anchorId?: string;
};

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "58, 168, 116";
}

const getTheme = () => {
  return { color: "#3aa874", bgLight: "#f0fdf4", textLight: "#15803d" };
};

export default function ProductCardGrid({ products }: { products: ProductCardItem[] }) {
  const getWhatsAppUrl = (productName: string) => {
    const number = siteConfig.whatsapp.replace(/[^0-9]/g, "");
    const message = `Hello Al Mashriq Medical Supplies,\n\nI would like to inquire about the *${productName}*.\n\nCould you please provide more information?`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {products.map((product) => {
        const theme = getTheme();
        return (
          <motion.div
            key={`${product.partnerName ?? ""}-${product.name}`}
            id={product.anchorId}
            variants={itemVariants}
            className="group bg-white rounded-[16px] sm:rounded-[24px] border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full relative scroll-mt-32"
            onMouseEnter={(e) => {
              const line = e.currentTarget.querySelector(
                ".hover-line",
              ) as HTMLElement;
              if (line) line.style.backgroundColor = theme.color;
              e.currentTarget.style.boxShadow = `0 16px 35px rgba(${hexToRgb(theme.color)}, 0.08)`;

              const title = e.currentTarget.querySelector(
                ".product-title",
              ) as HTMLElement;
              if (title) title.style.color = theme.color;
            }}
            onMouseLeave={(e) => {
              const line = e.currentTarget.querySelector(
                ".hover-line",
              ) as HTMLElement;
              if (line) line.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.02)";

              const title = e.currentTarget.querySelector(
                ".product-title",
              ) as HTMLElement;
              if (title) title.style.color = "#1e293b"; // slate-900
            }}
          >
            {/* Whole card links to the product on its partner page (when href is set) */}
            {product.href && (
              product.href.startsWith("http") ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-[1]"
                  aria-label={`View ${product.name}${product.partnerName ? ` on the ${product.partnerName} website` : ""} (opens in a new tab)`}
                />
              ) : (
                <Link
                  href={product.href}
                  className="absolute inset-0 z-[1]"
                  aria-label={`View ${product.name}${product.partnerName ? ` by ${product.partnerName}` : ""}`}
                />
              )
            )}

            {/* Accent border on top of card on hover */}
            <div className="hover-line absolute top-0 inset-x-0 h-[4px] bg-transparent transition-all duration-300" />

            {/* Card Content */}
            <div className="p-5 sm:p-8 flex flex-col flex-grow">
              {/* Product Name */}
              <h3 className="product-title font-playfair text-base sm:text-lg lg:text-xl font-semibold text-slate-900 transition-colors duration-300 mb-2">
                {product.name}
              </h3>

              {product.partnerName && (
                <span className="inline-flex items-center gap-1 font-dm-sans text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#3AA874] font-semibold mb-3">
                  {product.partnerName}
                  {product.href?.startsWith("http") && <ArrowUpRight className="w-3 h-3" aria-hidden="true" />}
                </span>
              )}

              {/* Product Description */}
              <p className="font-dm-sans text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-4">
                {product.brief}
              </p>

              {/* Enquire Button (sits above the card link) */}
              <a
                href={getWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: theme.bgLight,
                  color: theme.color,
                }}
                className="relative z-[2] inline-flex items-center justify-center w-full text-center text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 group/btn border border-transparent shadow-sm hover:shadow-md active:scale-95"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.color;
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.bgLight;
                  e.currentTarget.style.color = theme.color;
                }}
              >
                <span>Enquire Now</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
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
              </a>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
