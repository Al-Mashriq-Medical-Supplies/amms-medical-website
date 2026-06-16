import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustedBySection from '@/components/TrustedBySection'
import ProductCategoriesSection from '@/components/ProductCategoriesSection'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import IndustriesServedSection from '@/components/IndustriesServedSection'
import MissionValuesSection from '@/components/MissionValuesSection'
import OurPrincipalsSection from '@/components/OurPrincipalsSection'
import ContactCtaSection from '@/components/ContactCtaSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FlowArt from '@/components/ui/story-scroll'
import { productCategories, siteConfig } from '@/lib/seo'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      {
        '@type': 'Place',
        name: 'Middle East',
      },
    ],
    knowsAbout: productCategories,
    makesOffer: productCategories.map((category) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: category,
        areaServed: 'United Arab Emirates',
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <Navbar />
        <HeroSection />
        <TrustedBySection />
        <ProductCategoriesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <IndustriesServedSection />
        <MissionValuesSection />
        <FlowArt aria-label="End of page sections">
          <OurPrincipalsSection />
          <ContactCtaSection />
          <ContactSection />
        </FlowArt>
        <Footer />
      </main>
    </>
  )
}
