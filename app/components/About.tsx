'use client'
import Image from 'next/image'

const trustBadges = [
  'QLD Licensed',
  'Fully Insured',
  'Residential & Commercial',
  '24/7 Emergency Service',
  'Fast Response',
  'Free Quotes',
  "Chinese & English Support",
]

const serviceAreas = [
  'Brisbane CBD',
  'Logan',
  'Ipswich',
  'Redlands',
  'Gold Coast',
  'Surrounding Areas',
]

export default function About() {
  return (
    <section className="bg-[#0d0d0d] py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">

          {/* IMAGE */}
          <div className="relative bg-[#111111] min-h-[320px] md:min-h-[450px] overflow-hidden">

            {/* Main Image */}
            <Image
              src="/about-electrician.jpg"
              alt="369 Electrical Service"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Bottom Label */}
            <div className="absolute bottom-0 left-0 right-0 border-l-4 border-brand-yellow bg-black/85 px-5 py-4 z-10">

              <p className="text-white text-lg font-bold">
                369 Electrical Service
              </p>

              <p className="text-brand-yellow text-xs uppercase tracking-[2px] mt-1">
                Licensed • Brisbane • Queensland
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div className="bg-[#111111] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-center">

            {/* Eyebrow */}
            <p className="text-brand-yellow text-sm font-bold uppercase tracking-[3px] mb-3">
              Who We Are
            </p>

            {/* Heading */}
            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">
              A Local Team That{' '}
              <span className="text-brand-yellow">
                Actually Cares
              </span>
            </h2>

            <div className="w-12 h-[3px] bg-brand-yellow mb-6" />

            {/* Description */}
            <p className="text-[#b5b5b5] text-base md:text-lg leading-relaxed mb-8">
              We're local electricians committed to delivering safe,
              reliable, and high-quality electrical work across Brisbane
              and surrounding areas. Every job is completed with honesty,
              professionalism, and attention to detail.
            </p>

            {/* TRUST BADGES */}
            <div>

              <p className="text-white font-semibold mb-3">
                Why Choose Us
              </p>

              <div className="flex flex-wrap gap-3">

                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="
                      border border-[#2e6644]
                      bg-[#0a1f12]
                      text-[#52E0A0]
                      px-4 py-2
                      text-sm
                      font-medium
                    "
                  >
                    {badge}
                  </span>
                ))}

              </div>

            </div>

            {/* SERVICE AREA */}
            <div className="mt-8">

              <p className="text-white font-semibold mb-3">
                Service Areas
              </p>

              <div className="flex flex-wrap gap-3">

                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="
                      border border-[#274b73]
                      bg-[#0c1624]
                      text-[#6FB8FF]
                      px-4 py-2
                      text-sm
                      font-medium
                    "
                  >
                    {area}
                  </span>
                ))}

              </div>

            </div>

            {/* Link */}
            <a
              href="/about"
              className="
                mt-8
                text-sm
                text-white/70
                uppercase
                tracking-wide
                hover:text-brand-yellow
                transition-colors
                w-fit
              "
            >
              Learn more about us →
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}