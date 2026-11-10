import { cn } from '@/lib/utils'

const items = [
  {
    label: 'Our Vision',
    text: 'To be the foremost provider of capital equipment and homecare solutions, establishing the benchmark for world-class healthcare standards across the United Arab Emirates.',
    borderFrom: 'from_90deg',
  },
  {
    label: 'Our Mission',
    text: 'To continuously support UAE healthcare providers by delivering innovative medical technologies, ensuring prompt service, and prioritizing optimal patient recovery and experiences.',
    borderFrom: 'from_270deg',
  },
]

/** Vision (first) and Mission cards — shared by the Home and About pages */
export default function VisionMission({ className }: { className?: string }) {
  return (
    <div className={cn('grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 w-full text-left', className)}>
      {items.map(({ label, text, borderFrom }) => (
        <div
          key={label}
          className="group relative rounded-2xl p-[1px] overflow-hidden hover:-translate-y-1 shadow-[0_4px_20px_rgba(22,38,63,0.04)] hover:shadow-md transition-all duration-500"
        >
          {/* Running light border (same as before) */}
          <div
            className={cn(
              'absolute -inset-[100%] animate-[spin_3s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-500',
              borderFrom === 'from_90deg'
                ? 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)]'
                : 'bg-[conic-gradient(from_270deg_at_50%_50%,transparent_0%,#3AA874_50%,transparent_100%)]',
            )}
          />
          <div className="relative z-10 h-full bg-white rounded-2xl p-7 sm:p-10 flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#3AA874]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Highlighted title */}
            <h3 className="font-playfair text-2xl sm:text-3xl font-semibold tracking-tight text-[#3AA874] mb-3">
              {label}
            </h3>
            <span className="block h-[3px] w-12 rounded-full bg-[#3AA874] mb-5 sm:mb-6" />

            <p className="font-playfair text-base sm:text-lg leading-relaxed text-slate-600">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
