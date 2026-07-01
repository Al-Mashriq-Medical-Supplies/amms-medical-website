import type { Metadata } from "next";
import OurPrincipalsSection from "@/components/OurPrincipalsSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import PrincipalsDetailList from "@/components/PrincipalsDetailList";

export const metadata: Metadata = {
  title: "Our Principals",
  description:
    "AMMS is the authorized UAE distributor for Fisher & Paykel Healthcare, Penlon, Breas, COSMED, Baxter, Sefam, Maxtec, idmed, Bio-Med Devices, and Porter.",
};

export default function PrincipalsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-16 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="w-full text-center font-dm-sans text-sm text-[#3AA874] uppercase tracking-[0.25em] block mb-4 font-semibold">
              Our Partners in Health Care
            </span>
            <h1 className="w-full text-center font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-8 tracking-tight whitespace-nowrap text-transparent bg-clip-text drop-shadow-md bg-gradient-to-r from-[#16263F] via-[#3AA874] to-[#3AA874]">
              Trusted Global Principals
            </h1>
            <p className="w-full text-center font-dm-sans text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              We partner with principals who help us enhance the standard of
              care for patients across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      <PrincipalsDetailList />
      <ClientsMarquee />
    </>
  );
}
