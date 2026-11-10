'use client'

import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

/**
 * When the URL has a #hash (e.g. /our-partners/fisher-paykel#respiratory-humidifiers),
 * scroll to that element and briefly highlight it.
 */
export default function HashHighlighter({ delay = 900 }: { delay?: number }) {
  const lenis = useLenis()

  useEffect(() => {
    let timer: number | undefined

    const focusHash = (wait: number) => {
      const id = decodeURIComponent(window.location.hash.replace('#', ''))
      if (!id) return
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (!el) return
        if (lenis) {
          lenis.scrollTo(el, { offset: -140, duration: 1.2 })
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
        el.classList.remove('product-highlight')
        // restart the animation
        void el.offsetWidth
        el.classList.add('product-highlight')
        window.setTimeout(() => el.classList.remove('product-highlight'), 3200)
      }, wait)
    }

    // wait for the page-transition animation before scrolling
    focusHash(delay)
    const onHashChange = () => focusHash(150)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [lenis, delay])

  return null
}
