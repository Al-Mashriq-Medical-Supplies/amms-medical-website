'use client'

import { useEffect, useRef } from 'react'
import type { AnimationItem } from 'lottie-web'

type LottieAnimationProps = {
  ariaLabel?: string
  className?: string
  path: string
}

export default function LottieAnimation({
  ariaLabel = 'Animated illustration',
  className,
  path,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animation: AnimationItem | undefined
    let isMounted = true

    const load = async () => {
      const lottie = (await import('lottie-web')).default

      if (!containerRef.current || !isMounted) return

      animation = lottie.loadAnimation({
        autoplay: true,
        container: containerRef.current,
        loop: true,
        path,
        renderer: 'svg',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      })
    }

    load()

    return () => {
      isMounted = false
      animation?.destroy()
    }
  }, [path])

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      className={className}
      role="img"
    />
  )
}
