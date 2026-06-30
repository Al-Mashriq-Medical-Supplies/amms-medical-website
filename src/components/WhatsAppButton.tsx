'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function WhatsAppButton() {
  const phoneNumber = '971558693930'
  const message = 'Hello Al Mashriq, happy to connect. I would like to know more about your products.'
  
  // Format the URL for WhatsApp API
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed inset-x-0 bottom-6 md:bottom-8 z-50 pointer-events-none flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.a
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex relative items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 md:w-[30px] md:h-[30px]" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-lg flex items-center">
          Chat with us!
          <span className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-900 rotate-45 -translate-y-1/2"></span>
        </span>
      </motion.a>
    </div>
  )
}
