export default function Hero() {
  return (
    <section className="relative bg-brand-black text-white min-h-[70vh] flex items-center overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* brand badge */}
          <p className="inline-block px-3 py-1 text-xs bg-brand-mid border border-brand-mid text-brand-yellow rounded-full">
            ⚡ 24/7 Emergency Electricians in Brisbane
          </p>

          {/* headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Power Your Home{" "}
            <span className="text-brand-yellow">Safely</span>
          </h1>

          {/* description */}
          <p className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed">
            Licensed electricians providing residential, commercial, and emergency services.<br />
            Fast response, transparent pricing, and trusted local expertise.
          </p>

          {/* trust points */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-text-secondary">

            <span>✔ Licensed</span>
            <span>✔ Insured</span>
            <span>✔ Same Day Service</span>

          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button className="bg-brand-yellow text-black px-7 py-3 font-semibold rounded-md hover:scale-105 transition">
              Get Free Quote
            </button>

            <button className="border border-text-secondary text-white px-7 py-3 rounded-md hover:border-brand-yellow hover:text-brand-yellow transition">
              Call Now
            </button>

          </div>

          {/* mini trust score */}
          <div className="mt-6 text-sm text-text-secondary">
            ⭐⭐⭐⭐⭐ 4.9/5 from 300+ Brisbane jobs
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* image card */}
          <div className="h-72 md:h-[420px] rounded-2xl bg-gradient-to-br from-brand-dark to-brand-mid border border-brand-mid shadow-lg flex items-center justify-center">

            <span className="text-text-secondary">
              Hero Image / Electrician Work
            </span>

          </div>

       

        </div>

      </div>
    </section>
  )
}