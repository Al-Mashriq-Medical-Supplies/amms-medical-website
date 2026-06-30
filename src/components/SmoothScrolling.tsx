'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure GSAP ScrollTrigger updates on scroll
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
