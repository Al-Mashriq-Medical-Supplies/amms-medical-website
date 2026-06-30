// This file intentionally provides a named export for compatibility.
// The active clients marquee is in ClientsMarquee.tsx

interface Logos3Props {
  heading?: string;
  className?: string;
}

export function Logos3({ heading }: Logos3Props) {
  return (
    <div className="py-8 text-center text-slate-400 text-sm font-dm-sans">
      {heading}
    </div>
  )
}

export default Logos3
