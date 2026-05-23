import Link from "next/link"

export default function ServicesPreview() {
  return (
    <section className="relative text-white py-24 overflow-hidden">

      {/* ✨ background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-mid to-brand-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Our Electrical Services
        </h2>

        <p className="text-white/70 mt-4 text-lg">
          Residential & Commercial electrical solutions across Brisbane
        </p>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Residential */}
          <Link
            href="/servicesE#residential"
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-2xl p-10
              hover:border-brand-yellow/50 transition
              text-left block
            "
          >
            <h3 className="text-2xl font-semibold text-brand-yellow">
              Residential Electrical
            </h3>

            <p className="text-white/70 mt-4 leading-relaxed">
              Home wiring, lighting, switchboards, repairs and emergency services.
            </p>

            <span className="mt-6 inline-block text-sm text-brand-yellow">
              View Residential Services →
            </span>
          </Link>

          {/* Commercial */}
          <Link
            href="/servicesE#commercial"
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-2xl p-10
              hover:border-brand-yellow/50 transition
              text-left block
            "
          >
            <h3 className="text-2xl font-semibold text-brand-yellow">
              Commercial Electrical
            </h3>

            <p className="text-white/70 mt-4 leading-relaxed">
              Offices, shops, warehouses, safety inspections and maintenance.
            </p>

            <span className="mt-6 inline-block text-sm text-brand-yellow">
              View Commercial Services →
            </span>
          </Link>

        </div>

      </div>
    </section>
  )
}