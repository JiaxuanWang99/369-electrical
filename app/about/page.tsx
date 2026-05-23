import CTA from "../components/CTA"
import FAQ from "../components/FAQ"

export default function AboutPage() {
  return (
    <main className="bg-brand-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.08),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-6 relative">

          <div className="max-w-3xl">

            <p className="text-brand-yellow font-semibold tracking-wide uppercase text-sm">
              About 369 Electrical Service
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Trusted Electricians in{" "}
              <span className="text-brand-yellow">Brisbane</span>
            </h1>

            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              369 Electrical Service provides reliable residential,
              commercial, and emergency electrical solutions across Brisbane
              and surrounding areas. Our licensed electricians are committed
              to safe workmanship, fast response times, and professional service.
            </p>

          </div>

        </div>
      </section>

      {/* ================= IMAGE SECTION ================= */}
      <section className="py-5 bg-[#0d0d0d]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Work in Brisbane
            </h2>

            <p className="text-white/70 mt-4">
              Real electrical projects delivered by our licensed team
            </p>

          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              "/about/work1.jpg",
              "/about/work2.jpg",
              "/about/work3.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-brand-mid bg-brand-dark h-64"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <FAQ />

      {/* ================= CTA ================= */}
      <CTA />

    </main>
  )
}