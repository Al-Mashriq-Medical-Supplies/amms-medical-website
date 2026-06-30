'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '971558693930'
  const message = 'Hello Al Mashriq, happy to connect. I would like to know more about your products.'
  
  // Format the URL for WhatsApp API
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-lg flex items-center">
        Chat with us!
        <span className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-900 rotate-45 -translate-y-1/2"></span>
      </span>
    </a>
  )
}
