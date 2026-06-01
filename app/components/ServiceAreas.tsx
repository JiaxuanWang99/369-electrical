const SERVICE_AREAS = [
  "Brisbane CBD",
  "Logan",
  "Ipswich",
  "Redland Bay",
  "Gold Coast",
  "Surrounding Areas",
]
export default function ServiceAreasMarquee() {
  return (
    <section className="bg-brand-mid border-y border-brand-mid overflow-hidden">

      <div className="max-w-7xl mx-auto py-3">

        <p className="text-center text-brand-yellow text-xs font-semibold tracking-[2px] uppercase mb-3">
          Service Areas
        </p>

        <div className="relative">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-brand-mid to-transparent" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-brand-mid to-transparent" />
          </div>

          {/* Marquee */}
          <div className="flex w-max animate-marquee whitespace-nowrap gap-8 px-6">

            {[...SERVICE_AREAS, ...SERVICE_AREAS].map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <span className="text-white/80 text-sm md:text-base hover:text-brand-yellow transition">
                  {area}
                </span>

                <span className="text-brand-yellow/40">•</span>
              </div>
            ))}

          </div>

        </div>

        <p className="text-center text-sm mt-3 max-w-3xl mx-auto leading-relaxed">

        <span className="text-white/70">
            We service Brisbane City and surrounding suburbs including{" "}
        </span>

        <span className="text-white font-medium">
            Logan, Ipswich, Redland Bay and Gold Coast.
        </span>

        <br />

        <span className="text-white/60">
            For locations outside our standard service area, a small travel fee may apply depending on distance.
        </span>

        <br />

        <span className="text-brand-yellow font-medium">
            All costs are always confirmed upfront before we attend — no surprises.
        </span>

        <br />

        <span className="text-white/60">
            Feel free to contact us for an accurate quote based on your location.
        </span>

        </p>

      </div>

    </section>
  )
}