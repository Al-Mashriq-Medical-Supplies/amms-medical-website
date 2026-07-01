import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { principals } from "@/lib/seo";
import ProductAccordionList from "@/components/ProductAccordionList";

export async function generateStaticParams() {
  return principals.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PrincipalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const principal = principals.find((p) => p.slug === slug);

  if (!principal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-24 pb-32">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/principals"
              className="inline-flex items-center text-sm font-dm-sans text-slate-500 hover:text-[#3AA874] transition-colors"
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
              Back to Principals
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0 w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center p-4 border border-slate-100 shadow-sm">
              <Image
                src={principal.logo}
                alt={`${principal.name} logo`}
                width={100}
                height={100}
                className="object-contain max-h-[80px] w-auto"
              />
            </div>
            <div>
              <h1 className="font-playfair text-4xl sm:text-5xl font-medium text-slate-900 mb-4">
                {principal.name}
              </h1>
              <p className="font-dm-sans text-lg text-slate-600 max-w-2xl leading-relaxed">
                {principal.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.2em] block mb-2 font-semibold">
              Product Portfolio
            </span>
            <h2 className="font-playfair text-3xl text-slate-900">
              Medical{" "}
              <span className="font-medium text-[#3AA874]">Solutions</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full font-dm-sans text-sm text-slate-600 font-medium shadow-sm">
              {principal.products.length} Categories
            </span>
          </div>
        </div>

        <ProductAccordionList products={principal.products} />
      </div>
    </div>
  );
}
