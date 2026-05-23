export default function Testimonials() {
  return (
    <section className="relative bg-brand-black text-white py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          What Clients Say
        </h2>

        <p className="text-text-secondary mt-3">
          Real feedback from Brisbane homeowners
        </p>

        {/* testimonial card */}
        <div className="mt-12 relative bg-gradient-to-br from-brand-dark to-brand-mid border border-brand-mid rounded-2xl p-8 md:p-10 shadow-lg">

          {/* quote icon */}
          <div className="text-brand-yellow text-5xl absolute top-4 left-6 opacity-20">
            “
          </div>

          {/* rating */}
          <div className="flex justify-center text-brand-yellow text-lg mb-4">
            ★★★★★
          </div>

          {/* text */}
          <p className="text-text-secondary text-lg leading-relaxed">
            Fast, professional and reliable service. Highly recommended!
          </p>

          {/* name */}
          <p className="mt-6 text-brand-yellow font-semibold">
            — Brisbane Customer
          </p>

        </div>

        {/* trust line */}
        <p className="mt-8 text-sm text-text-secondary">
          ⭐ 4.9/5 average rating from 300+ jobs
        </p>

      </div>
    </section>
  )
}