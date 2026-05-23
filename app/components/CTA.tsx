import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-yellow">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative">

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
          Need an Electrician Today?
        </h2>

        <p className="mt-5 text-black/80 text-lg max-w-2xl mx-auto">
          Fast response residential and commercial electrical services
          across Brisbane.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/contact"
            className="
              bg-black text-white
              px-8 py-4 rounded-full
              font-semibold
              hover:scale-105
              transition
            "
          >
            Get Free Quote
          </Link>

          <a
            href="tel:0400000000"
            className="
              border border-black/20
              px-8 py-4 rounded-full
              font-semibold
              hover:bg-black hover:text-white
              transition
            "
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  )
}