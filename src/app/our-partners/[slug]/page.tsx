import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { principals, Principal, slugify, productLink } from "@/lib/seo";
import ProductCardGrid from "@/components/ProductCardGrid";
import HashHighlighter from "@/components/HashHighlighter";

export async function generateStaticParams() {
  return principals.map((p: Principal) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const principal = principals.find((p: Principal) => p.slug === slug);
  if (!principal) return {};
  return {
    title: principal.name,
    description: `${principal.description} AMMS is the UAE partner for ${principal.name}: ${principal.products
      .map((product) => product.name)
      .join(", ")}.`,
  };
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const principal = principals.find((p: Principal) => p.slug === slug);

  if (!principal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-20 sm:pt-24 pb-12 sm:pb-32">
      <HashHighlighter />
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6">
            <Link
              href="/our-partners"
              className="inline-flex items-center text-xs sm:text-sm font-dm-sans text-slate-500 hover:text-[#3AA874] transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Our Partners
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center p-3 sm:p-4 border border-slate-100 shadow-sm">
              <Image
                src={principal.logo}
                alt={`${principal.name} logo`}
                width={100}
                height={100}
                className="object-contain max-h-[56px] sm:max-h-[80px] w-auto"
              />
            </div>
            <div>
              <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-medium text-slate-900 mb-2 sm:mb-4">
                {principal.name}
              </h1>
              <p className="font-dm-sans text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {principal.description}
              </p>
              <a
                href={principal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3AA874] px-5 py-2.5 font-dm-sans text-sm font-semibold text-white transition-colors hover:bg-[#2d8a5f]"
              >
                Visit {principal.name} website
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
        <div className="flex items-center justify-between mb-6 sm:mb-12">
          <div>
            <span className="font-dm-sans text-xs sm:text-sm text-[#3AA874] uppercase tracking-[0.2em] block mb-1 sm:mb-2 font-semibold">
              Our Services
            </span>
            <h2 className="font-playfair text-xl sm:text-3xl text-slate-900">
              Medical{" "}
              <span className="font-medium text-[#3AA874]">Solutions</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full font-dm-sans text-sm text-slate-600 font-medium shadow-sm">
              {principal.products.length} {principal.products.length === 1 ? "Solution" : "Solutions"}
            </span>
          </div>
        </div>

        <ProductCardGrid
          products={principal.products.map((product) => ({
            ...product,
            anchorId: slugify(product.name),
            href: productLink(principal, product),
          }))}
        />
      </div>
    </div>
  );
}

