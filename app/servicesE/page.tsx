'use client'

import { useState, useRef } from 'react'
import CTA from '../components/CTA'
import Carousel from '../components/Carousel'
import ServiceAreasStrip from '../components/ServiceAreas'
import { residentialServices, commercialServices, ServiceItem } from '../data/services'

// ── Service Card ─────────────────────────────────────────────
function ServiceCard({
  service,
  bg,
}: {
  service: ServiceItem
  bg: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className={`
        ${bg}
        p-6 md:p-7
        cursor-pointer
        hover:bg-[#151515]
        transition-all duration-300
      `}
    >
      <div className="w-10 h-[3px] bg-brand-yellow mb-4" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          {service.title}
        </h3>

        <span
          className={`
            text-brand-yellow
            transition-transform
            duration-300
            flex-shrink-0
            ${open ? 'rotate-180' : ''}
          `}
        >
          ▼
        </span>
      </div>

      {open && (
        <p className="text-base text-white/70 leading-relaxed mt-4">
          {service.desc}
        </p>
      )}
    </div>
  )
}
// ── Service Grid with Show More ───────────────────────────────
function ServiceGrid({
  services,
  cardBg,
  initialCount = 6,
}: {
  services: ServiceItem[]
  cardBg: string
  initialCount?: number
}) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, initialCount)
  const remaining = services.length - initialCount

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1a1a1a] rounded-3xl overflow-hidden">
        {visible.map((s) => (
          <ServiceCard key={s.title} service={s} bg={cardBg} />
        ))}
      </div>

      {services.length > initialCount && (
        <div className="mt-3.5 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="border border-brand-yellow/35 text-brand-yellow text-xs font-semibold px-7 py-2.5 rounded-full hover:bg-brand-yellow/8 transition"
          >
            {
                showAll
                    ? 'Show Less'
                    : `View ${remaining} More Services`
            }
          </button>
        </div>
      )}
    </>
  )
}

// ── Section Divider ───────────────────────────────────────────
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex-1 h-px bg-[#1e1e1e]" />
      <span className="text-brand-yellow text-[10px] font-bold tracking-[2px]">{label}</span>
      <div className="flex-1 h-px bg-[#1e1e1e]" />
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────
export default function ServicesPage() {

  // ⬇ Replace these with your actual image paths
const workImages = [
  '/aboutWork/work1.jpg',
  '/aboutWork/work2.jpg',
  '/aboutWork/work3.jpg',
  '/aboutWork/work4.jpg',
]


  return (
    <main className="relative bg-gradient-to-b from-brand-black via-[#0b0b0b] to-[#0f0f0f] text-white overflow-hidden">

      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('/noise.png')]" />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-10 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.10),transparent_55%)]" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">

          <p className="text-brand-yellow font-semibold uppercase tracking-wide text-sm">
            Brisbane Electrical Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Residential & Commercial{' '}
            <span className="text-brand-yellow">Electrical Services</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/75 leading-relaxed">
            From installations and upgrades to repairs and safety inspections,
            we deliver safe, reliable, and compliant electrical solutions for homes
            and businesses.
            </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#residential"
              className="bg-brand-yellow text-black px-8 py-4 rounded-full font-semibold"
            >
              Residential Services
            </a>
            <a
              href="#commercial"
              className="border border-brand-yellow text-brand-yellow px-8 py-4 rounded-full font-semibold"
            >
              Commercial Services
            </a>
          </div>

        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-[#0c0c0c] border-y border-brand-mid">
        <ServiceAreasStrip />
      </section>

      {/* ── RESIDENTIAL ── */}
      <section id="residential" className="py-10 bg-[#101010]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
        
            <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Residential Services
            </h2>
            <p className="text-lg md:text-xl text-white/75 mt-6 max-w-3xl mx-auto leading-relaxed">
              Safe and reliable residential electrical services for homes, apartments,
              renovations, and emergency repairs.
            </p>
          </div>

          <SectionDivider label="RESIDENTIAL" />
          
          <ServiceGrid
            services={residentialServices}
            cardBg="bg-[#111]"
            initialCount={6}
          />
        </div>
      </section>

      {/* ── COMMERCIAL ── */}
      <section id="commercial" className="py-10 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
               Commercial Services
            </h2>
            <p className="text-lg md:text-xl text-white/75 mt-6 max-w-3xl mx-auto leading-relaxed">
              Professional electrical services for offices, retail shops, restaurants,
              warehouses, and commercial properties.
            </p>
          </div>

          <SectionDivider label="COMMERCIAL" />
          <ServiceGrid
            services={commercialServices}
            cardBg="bg-[#0f0f0f]"
            initialCount={6}
          />

        </div>
      </section>
      <Carousel images={workImages } />
      {/* ── CTA ── */}
      <CTA />

    </main>
  )
}