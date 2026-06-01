import CTA from "../components/CTA"
import FAQ from "../components/FAQ"
import Carousel from "../components/Carousel"

export default function AboutPage() {
  return (
    <main className="bg-brand-black text-white overflow-hidden">

      {/* ================= HERO + STORY ================= */}
      <section className="relative py-24 overflow-hidden text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.08),transparent_60%)]" />

        <div className="max-w-4xl mx-auto px-6 relative">

          {/* brand label */}
          <p className="text-brand-yellow font-semibold tracking-wide uppercase text-sm">
            About 369 Electrical Service
          </p>

          {/* main title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4 max-w-3xl mx-auto">
            Trusted Local Electricians in{" "}
            <span className="text-brand-yellow">Brisbane</span>
          </h1>

          {/* subtitle */}
          <p className="mt-6 text-xl text-white/75 leading-relaxed">
            Licensed electricians delivering safe, reliable electrical work across homes and businesses.
          </p>

          {/* supporting text */}
          <p className="mt-5 text-white/60 leading-relaxed max-w-2xl mx-auto">
            We focus on safety, precision, and professional workmanship —
            ensuring every job is completed properly and every site is left clean and tidy.
          </p>

        </div>
<section className="px-6 mt-8">
  <div className="max-w-3xl mx-auto">

    <div className="overflow-hidden rounded-2xl border border-brand-mid bg-[#111]">
      <img
        src="/van.jpg"
        alt="369 Electrical Service Vehicle"
        className="w-full h-[260px] md:h-[380px] object-cover"
      />
    </div>

  </div>
</section>
        {/* section label */}
          <p className="text-brand-yellow mt-8 text-xs font-bold tracking-[3px] uppercase mb-6">
            Our Core Values
          </p>



        {/* ================= HOW WE WORK ================= */}
<div className="max-w-5xl mx-auto px-6">

  <div className="grid md:grid-cols-3 gap-6 text-left">

    {/* CARD 1 */}
    <div className="p-6 rounded-2xl bg-[#111] border border-blue-500/20 hover:border-blue-400/40 transition">

      <h3 className="text-white font-semibold text-lg">
        Work Safely & Comply
      </h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        Every job is completed to Australian standards with strict focus on safety,
        compliance, and long-term reliability.
      </p>

    </div>

    {/* CARD 2 */}
    <div className="p-6 rounded-2xl bg-[#111] border border-white/20 hover:border-yellow-400/40 transition">

      <h3 className="text-white font-semibold text-lg">
        Clear Communication
      </h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        We provide upfront pricing, clear updates, and reliable workmanship from start to finish.
      </p>

    </div>

    {/* CARD 3 */}
    <div className="p-6 rounded-2xl bg-[#111] border border-green-500/20 hover:border-green-400/40 transition">

      <h3 className="text-white font-semibold text-lg">
        Finish Clean & Reset Space
      </h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        We always clean up properly and leave your space tidy — leave like ninja.
      </p>

    </div>

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