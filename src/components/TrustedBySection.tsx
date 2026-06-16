'use client'


const partners = [
  'Cleveland Clinic Abu Dhabi',
  'Mediclinic Middle East',
  'American Hospital Dubai',
  'NMC Healthcare',
  'Aster DM Healthcare',
  'Saudi German Hospital',
  'Burjeel Holdings',
  'Healthpoint Hospital',
  'Gulf Medical University',
  'Al Zahra Hospital',
  'Prime Healthcare',
  'Thumbay Group',
]

export default function TrustedBySection() {
  return (
    <section id="overview" className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-6">
           <h2 className="font-dm-sans text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">
             Trusted by Clinical Leaders
           </h2>
           <div className="h-px bg-slate-200 flex-1" />
        </div>
      </div>

      {/* Logo Slider - Minimal text representation of partners */}
      <div className="relative">
        {/* Gradient fades to match white background */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-0 overflow-hidden">
          <div className="flex items-center gap-12 animate-slide whitespace-nowrap">
            {partners.map((name) => (
              <div
                key={name}
                className="inline-flex items-center justify-center h-12 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <span className="font-outfit font-light text-lg text-slate-600">
                  {name}
                </span>
              </div>
            ))}
            {partners.map((name) => (
              <div
                key={`${name}-duplicate`}
                aria-hidden="true"
                className="inline-flex items-center justify-center h-12 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <span className="font-outfit font-light text-lg text-slate-600">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
