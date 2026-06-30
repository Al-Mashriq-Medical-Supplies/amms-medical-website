'use client'

import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'What types of medical equipment does AMMS supply?',
    answer: 'We supply a comprehensive range including ICU/CCU equipment, respiratory care solutions (CPAP, BiPAP, ventilators), anesthesia machines, neonatal care products, operation theatre equipment, diagnostic devices, cardiac rehabilitation equipment, physiotherapy solutions, and homecare products.',
  },
  {
    question: 'Which areas in the UAE do you serve?',
    answer: 'We serve healthcare institutions across all seven Emirates, with our head office in Abu Dhabi (Falcon Tower, Qasr Al Hosn) and a branch office in Dubai (Al Garhoud). Our distribution network ensures rapid deployment nationwide.',
  },
  {
    question: 'Do you provide installation and training services?',
    answer: 'Yes. Our factory-trained biomedical engineering team provides expert equipment installation, comprehensive customer training programs, and on-site technical support. We offer turnkey solutions from consultation and site planning to commissioning and clinical staff training.',
  },
  {
    question: 'Who are your principal manufacturers?',
    answer: 'We are the authorized distributor for Fisher & Paykel Healthcare, Penlon, Breas, COSMED, Baxter, Sefam, Maxtec, idmed, Bio-Med Devices, and Porter. All our principals are globally recognized for innovation and quality.',
  },
  {
    question: 'How long has AMMS been in business?',
    answer: 'Al Mashriq Medical Supplies was established in 1991 and has over 35 years of experience in the UAE healthcare sector. We have been a cornerstone of healthcare infrastructure development, building long-term partnerships with hospitals, clinics, and care providers.',
  },
  {
    question: 'Do you offer after-sales support and maintenance?',
    answer: 'Absolutely. We provide excellent after-sales support including technical assistance, equipment maintenance and servicing, spare parts availability, and tailored service level agreements (SLAs). Our long-term partnership approach ensures your equipment performs optimally throughout its lifecycle.',
  },
  {
    question: 'Are your products certified for use in the UAE?',
    answer: 'Yes. All equipment we supply meets international quality standards and is registered with the relevant UAE regulatory authorities. Our products come from principals renowned for their innovation, functionality, and quality.',
  },
  {
    question: 'How can I request a product demonstration or quotation?',
    answer: 'You can reach us through our Contact page, call our Abu Dhabi head office at +971 2 627 7223, or email amms@eim.ae. Our team of specialists will arrange a consultation, product demonstration, or provide a detailed quotation tailored to your facility\'s needs.',
  },
]

export default function FAQSection() {
  const container = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useGSAP(() => {
    gsap.fromTo('.faq-header',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.faq-item',
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        }
      }
    )
  }, { scope: container })

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={container} className="py-12 md:py-32 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="faq-header opacity-0 text-center mb-16">
          <span className="font-dm-sans text-xs text-[var(--color-brand)] uppercase tracking-[0.2em] block mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-playfair font-light text-3xl sm:text-4xl md:text-5xl text-[var(--color-navy)] leading-tight">
            Everything you need <span className="font-medium italic">to know</span>
          </h2>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item opacity-0 border border-[var(--color-border)]/50 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="font-dm-sans text-[15px] font-medium text-[var(--color-navy)] pr-4 group-hover:text-[var(--color-brand)] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[var(--color-charcoal)]/50 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[var(--color-brand)]' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="font-dm-sans text-sm text-[var(--color-charcoal)] leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
