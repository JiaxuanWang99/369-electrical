"use client"

import CTA from "../components/CTA"
import ServiceAreasStrip from "../components/ServiceAreas"

const residentialServices = [
  {
    title: "Lighting Installation",
    desc: "Indoor, outdoor, LED, and feature lighting installations for Brisbane homes.",
    img: "/services/lighting.jpg",
  },
  {
    title: "Switchboard Upgrades",
    desc: "Modern switchboard upgrades to improve safety and electrical performance.",
    img: "/services/switchboard.jpg",
  },
  {
    title: "Power Point Installation",
    desc: "Install new power outlets and replace damaged sockets safely.",
    img: "/services/powerpoint.jpg",
  },
  {
    title: "Emergency Electrical Repairs",
    desc: "Fast response emergency electricians available across Brisbane.",
    img: "/services/emergency.jpg",
  },
  {
    title: "Ceiling Fan Installation",
    desc: "Professional ceiling fan installation and replacement services.",
    img: "/services/fan.jpg",
  },
  {
    title: "Smoke Alarm Installation",
    desc: "Compliant smoke alarm installation for Brisbane properties.",
    img: "/services/smoke.jpg",
  },
]

const commercialServices = [
  {
    title: "Office Fit-outs",
    desc: "Complete electrical fit-outs for offices, retail shops, and businesses.",
    img: "/services/office.jpg",
  },
  {
    title: "Commercial Lighting",
    desc: "Energy-efficient commercial lighting solutions and upgrades.",
    img: "/services/commercial-lighting.jpg",
  },
  {
    title: "Electrical Maintenance",
    desc: "Reliable ongoing maintenance for commercial electrical systems.",
    img: "/services/maintenance.jpg",
  },
  {
    title: "Safety Inspections",
    desc: "Professional compliance and safety inspections for businesses.",
    img: "/services/inspection.jpg",
  },
  {
    title: "Emergency Commercial Repairs",
    desc: "Fast-response electrical repair services for commercial properties.",
    img: "/services/commercial-emergency.jpg",
  },
  {
    title: "Data & Network Cabling",
    desc: "Structured cabling solutions for offices and commercial spaces.",
    img: "/services/network.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative bg-gradient-to-b from-brand-black via-[#0b0b0b] to-[#0f0f0f] text-white overflow-hidden">

      {/* noise texture (optional but HIGHLY recommended) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('/noise.png')]" />

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-10 overflow-hidden bg-brand-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,208,0,0.10),transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">

          <p className="text-brand-yellow font-semibold uppercase tracking-wide text-sm">
            Brisbane Electrical Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Residential & Commercial{" "}
            <span className="text-brand-yellow">Electrical Services</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-white/80 text-lg leading-relaxed">
            369 Electrical Service provides professional residential,
            commercial, and emergency electrical services across Brisbane.
            Our licensed electricians deliver reliable workmanship,
            fast response times, and safe electrical solutions.
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

      {/* ================= SERVICE AREAS ================= */}
      <section className="bg-[#0c0c0c] border-y border-brand-mid">
        <ServiceAreasStrip />
      </section>

      {/* ================= RESIDENTIAL ================= */}
      <section id="residential" className="py-24 bg-[#101010]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-brand-yellow font-semibold uppercase tracking-wide text-sm">
              Residential Services
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Electrical Services For Brisbane Homes
            </h2>

            <p className="text-white/80 mt-5 max-w-3xl mx-auto leading-relaxed">
              Safe and reliable residential electrical services for homes,
              apartments, renovations, and emergency repairs.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {residentialServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-brand-mid bg-gradient-to-br from-brand-dark to-brand-black overflow-hidden"
              >

                <div className="h-44 bg-brand-mid">
                  <img
                    src={service.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-xl font-semibold text-brand-yellow">
                    {service.title}
                  </h3>

                  <p className="text-white/80 mt-3 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= COMMERCIAL ================= */}
      <section id="commercial" className="py-24 bg-[#0d0d0d]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-brand-yellow font-semibold uppercase tracking-wide text-sm">
              Commercial Services
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Commercial Electrical Solutions In Brisbane
            </h2>

            <p className="text-white/80 mt-5 max-w-3xl mx-auto leading-relaxed">
              Professional electrical services for offices, retail shops,
              restaurants, warehouses, and commercial properties.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {commercialServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-brand-mid bg-gradient-to-br from-brand-dark to-brand-black overflow-hidden"
              >

                <div className="h-44 bg-brand-mid">
                  <img
                    src={service.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-xl font-semibold text-brand-yellow">
                    {service.title}
                  </h3>

                  <p className="text-white/80 mt-3 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <CTA />

    </main>
  )
}