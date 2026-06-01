import { rates, footerItems } from "../data/pricing"

export default function Pricing() {
  return (
    <section className="bg-[#111111] py-16 px-6 md:px-10 text-white">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="text-brand-yellow text-[11px] font-black uppercase tracking-[4px] mb-3">
            Pricing
          </p>

          <h2 className="text-white text-3xl font-black tracking-tight">
            Transparent Pricing
            <span className="
              inline-block ml-3
              bg-[#1a1a1a] border border-[#2a2a2a]
              text-white/60 text-[10px] font-bold uppercase tracking-widest
              px-2.5 py-1
            ">
              GST Exclusive
            </span>
          </h2>

          <div className="w-10 h-[3px] bg-brand-yellow mx-auto mt-4" />
        </div>

        {/* RATE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222] mb-px">

          {rates.map((r) => (
            <div
              key={r.label}
              className="bg-[#161616] border-t-2 border-brand-yellow px-6 py-7"
            >

              {/* LABEL */}
              <p className="text-[10px] font-black uppercase tracking-[2.5px] text-white/50 mb-2.5">
                {r.label}
              </p>

              {/* PRICE */}
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-brand-yellow text-4xl font-black">
                  {r.price}
                </span>
                <span className="text-white/40 text-sm">
                  {r.unit}
                </span>
              </div>

              {/* DETAIL */}
              <p className="text-white/60 text-sm mb-3">
                {r.detail}
              </p>

              {/* DESC */}
              <p className="text-white/70 text-sm leading-relaxed">
                {r.desc}
              </p>

            </div>
          ))}
        </div>
        {/* PHOTO REPORT */}
        <div className="bg-[#0f1f14] border-t-2 border-[#52E0A0] px-6 py-7">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* LEFT */}
            <div>

              {/* badge */}
              <div className="inline-flex items-center gap-2 bg-[#0a2a16] border border-[#52E0A0] px-3.5 py-1.5 mb-4">

                <span
                  className="w-2 h-2 rounded-full bg-[#52E0A0]"
                  style={{ animation: "pricing-pulse 2s infinite" }}
                />

                <span className="text-[#52E0A0] text-[10px] font-black uppercase tracking-[2px]">
                  INCLUDED FREE
                </span>

              </div>

              {/* title */}
              <h3 className="text-white text-2xl font-black mb-1.5">
                Photo Report
              </h3>

              {/* desc */}
              <p className="text-white/65 text-sm max-w-sm leading-relaxed">
                Every job includes a basic photo report showing before and after work at no extra cost.
              </p>

            </div>

            {/* RIGHT */}
            <div className="text-right shrink-0">

              <p className="text-[#52E0A0] text-5xl font-black leading-none">
                FREE
              </p>

              <p className="text-[#52E0A0]/60 text-[10px] uppercase tracking-[2px] mt-1.5">
                Always included
              </p>

            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 pt-4 border-t border-[#1e1e1e]">

          {footerItems.map((item) => (
            <span
              key={item}
              className="text-white/50 text-[11px]"
            >
              <span className="text-[#52E0A0] mr-1.5">✓</span>
              {item}
            </span>
          ))}

        </div>

      </div>
    </section>
  )
}