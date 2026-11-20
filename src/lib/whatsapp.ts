import { siteConfig } from '@/lib/seo'

/**
 * Turns an enquiry form into a pre-filled WhatsApp message to AMMS.
 * Temporary until the forms are connected to info@ammsuae.com.
 */
export function enquiryWhatsAppUrl(form: HTMLFormElement) {
  const data = new FormData(form)
  const field = (key: string) => String(data.get(key) ?? '').trim()

  const lines = [
    'Hello Al Mashriq Medical Supplies, I would like to make an enquiry.',
    field('name') && `\nName: ${field('name')}`,
    field('organization') && `Organization: ${field('organization')}`,
    field('email') && `Email: ${field('email')}`,
    field('phone') && `Phone: ${field('phone')}`,
    field('message') && `\nRequirement: ${field('message')}`,
  ].filter((line): line is string => typeof line === 'string' && line !== '')

  const number = siteConfig.whatsapp.replace(/[^0-9]/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`
}
