import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-brand-black text-white min-h-[50vh] flex items-center overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* brand badge */}
          <p className="inline-block px-3 py-1 text-s bg-brand-mid border border-brand-mid text-brand-yellow rounded-full">
            ⚡ Powering Brisbane and nearby suburbs with care
          </p>

          {/* headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            Power the way{" "}
            <span className="text-brand-yellow">Forward</span>
          </h1>

         {/* description - ONE LINE IMPACT */}
          <p className="mt-6 text-text-secondary text-base md:text-lg leading-relaxed">
            Local Brisbane electricians delivering safe, reliable and high-quality electrical work for 
            <span className="text-brand-yellow font-semibold"> homes</span> and{" "}
            <span className="text-brand-yellow font-semibold">businesses</span>
          </p>

          {/* key highlights - SCANABLE BLOCK */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm md:text-base text-text-secondary">

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span><span className="text-white font-medium">Licensed</span> electricians</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span><span className="text-white font-medium">Fast</span> same-day response</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span><span className="text-white font-medium">High-quality</span> workmanship</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span><span className="text-white font-medium">Trusted</span> local Brisbane team</span>
            </div>

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
          <div className="h-72 md:h-[420px]
            rounded-2xl
            bg-gradient-to-br
            from-brand-dark
            to-brand-mid
            border
            shadow-lg
            flex items-center justify-center
            relative overflow-hidden border-brand-yellow/80 border-2">  

            <Image
              src="/hero.png"
              alt="369 Electrical Service"
              fill
              priority
              className="object-cover"
            />
          </div>

       

        </div>

      </div>
    </section>
  )
}