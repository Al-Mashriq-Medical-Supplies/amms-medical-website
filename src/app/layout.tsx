import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Josefin Sans is bundled with the site (src/fonts) so builds never depend on Google Fonts
const josefinSans = localFont({
  variable: '--font-josefin',
  display: 'swap',
  src: [
    { path: '../fonts/josefin-sans-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/josefin-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/josefin-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/josefin-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/josefin-sans-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
})
import { siteConfig } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScrolling from '@/components/SmoothScrolling'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Healthcare',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Advanced medical equipment by Al Mashriq Medical Supplies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="flex flex-col antialiased bg-white text-slate-800">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrolling>
      </body>
    </html>
  )
}
