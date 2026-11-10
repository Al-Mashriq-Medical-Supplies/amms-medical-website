'use client'

import { ReactLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    // Ensure GSAP ScrollTrigger updates on scroll
    gsap.registerPlugin(ScrollTrigger)

    // Prevent automatic scroll restoration on refresh which causes jumping
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";

      // Force scroll to top on initial load/refresh to override browser jumps
      // (skipped when the URL points at an item, e.g. #respiratory-humidifiers)
      const timer = setTimeout(() => {
        if (window.location.hash) {
          ScrollTrigger.refresh();
          return;
        }
        window.scrollTo(0, 0);
        if (lenisRef.current?.lenis) {
          lenisRef.current.lenis.scrollTo(0, { immediate: true });
        }
        ScrollTrigger.refresh();
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [])

  // Scroll to top on route change using Lenis instance
  // (unless the link targets an item on the page — HashHighlighter handles that)
  useEffect(() => {
    if (window.location.hash) return;
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
