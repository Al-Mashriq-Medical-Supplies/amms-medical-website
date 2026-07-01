import HeroSection from '@/components/HeroSection'
import TrustedBySection from '@/components/TrustedBySection'
import AboutSection from '@/components/AboutSection'
import HomeProductsHeading from '@/components/HomeProductsHeading'
import ContactCtaSection from '@/components/ContactCtaSection'
import FAQSection from '@/components/FAQSection'
import { siteConfig, productCategories } from '@/lib/seo'

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
    telephone: siteConfig.displayPhone,
    foundingDate: '1991',
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
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <HomeProductsHeading />
      <FAQSection />
      <ContactCtaSection />
    </>
  )
}
