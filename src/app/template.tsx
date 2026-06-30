'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      {/* Premium Wipe Overlay */}
      <motion.div
        key={pathname + '-overlay'}
        className="fixed inset-0 z-[100] bg-[#0f1a14] pointer-events-none"
        initial={{ height: '100vh', bottom: 0, top: 'auto' }}
        animate={{ height: '0vh' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Premium Content Fade & Slide */}
      <motion.div
        key={pathname + '-content'}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.25
        }}
        className="w-full h-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </>
  )
}
