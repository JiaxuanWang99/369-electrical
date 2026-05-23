import React from "react"

const SERVICE_AREAS = [
  "Brisbane CBD",
  "South Brisbane",
  "Sunnybank",
  "Carindale",
  "Chermside",
  "Logan",
  "Indooroopilly",
  "Upper Mount Gravatt",
]

export default function ServiceAreasMarquee() {
  return (
    <section className="bg-brand-mid border-y border-brand-mid overflow-hidden">

      <div className="py-4 relative">

        {/* gradient fade edges */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-brand-mid to-transparent" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-brand-mid to-transparent" />
        </div>

        {/* marquee wrapper */}
        <div className="flex w-max animate-marquee whitespace-nowrap gap-10 px-6">

          {/* duplicate list for seamless loop */}
          {[...SERVICE_AREAS, ...SERVICE_AREAS].map((area, i) => (
            <span
              key={i}
              className="
                text-white/80 text-sm md:text-base
                hover:text-brand-yellow
                transition
                whitespace-nowrap
              "
            >
              {area}
            </span>
          ))}

        </div>

      </div>

    </section>
  )
}