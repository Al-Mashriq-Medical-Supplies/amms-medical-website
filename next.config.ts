import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/products', destination: '/services', permanent: true },
      { source: '/principals', destination: '/our-partners', permanent: true },
      { source: '/principals/:slug', destination: '/our-partners/:slug', permanent: true },
      { source: '/our-partners/maxtec', destination: '/our-partners/salaera', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
