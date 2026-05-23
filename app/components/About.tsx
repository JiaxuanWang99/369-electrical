export default function About() {
  return (
    <section className="relative bg-brand-black text-white py-20 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]">

      {/* background glow */}
      <div className="absolute inset-0 " />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* GRID - image bigger than text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          {/* LEFT IMAGE (bigger now) */}
          <div className="md:col-span-6 relative">

            {/* glow */}
            <div className="absolute -inset-8 bg-brand-yellow/10 blur-3xl rounded-full" />

            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-brand-mid bg-gradient-to-br from-brand-dark to-brand-mid shadow-lg">

              {/* replace with real image */}
              <img
                src="/about-electrician.jpg"
                className="w-full h-full object-cover"
                alt="Electrician work in Brisbane"
              />

              {/* overlay label */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg text-sm text-brand-yellow border border-brand-mid">
                Licensed Brisbane Electricians
              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-6">

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Professional Electrical Services Across{" "}
              <span className="text-brand-yellow">Brisbane</span>
            </h2>

            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              We provide residential, commercial, and emergency electrical services across Brisbane with fast response and professional workmanship.
            </p>

            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Our licensed electricians ensure safe, compliant, and high-quality solutions for every project.
            </p>

            {/* FEATURE LIST (cleaner, tighter) */}
            <div className="mt-8 space-y-3">

              {[
                "Licensed & insured electricians",
                "24/7 emergency support across Brisbane",
                "Residential & commercial expertise",
                "Transparent pricing, no hidden costs",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">

                  <span className="text-green-400 text-lg leading-none">✔</span>

                  <span className="text-white text-base">
                    {text}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}