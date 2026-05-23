"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  {
    title: "House Rewiring",
    type: "Residential",
    images: ["/p1-before.jpg", "/p1-after.jpg"],
  },
  {
    title: "Shop Fit-out",
    type: "Commercial",
    images: ["/p2-before.jpg", "/p2-after.jpg"],
  },
  {
    title: "Switchboard Upgrade",
    type: "Safety Upgrade",
    images: ["/p3-before.jpg", "/p3-after.jpg"],
  },
]

export default function Projects() {
  return (
    <section className="relative bg-brand-mid text-white overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Recent Projects
        </h2>

        <p className="text-text-secondary text-center mt-3">
          Before & After real electrical work in Brisbane
        </p>

        {/* SWIPER */}
        <div className="mt-12">

          <Swiper
            className="project-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true,
              renderBullet: (index, className) => {
              return `<span class="${className}">⚡</span>`},
             }}
            autoplay={{ delay: 4000 }}
            loop
          >

            {projects.map((p, i) => (
              <SwiperSlide key={i} className="h-auto flex">
                <div className="w-full bg-brand-dark border border-brand-mid rounded-2xl p-6 md:p-10 overflow-hidden">
                  {/* title */}
                  <h3 className="text-xl font-semibold text-center">
                    {p.title}
                  </h3>

                  {/* type */}
                  <div className="text-center mt-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-brand-black border border-brand-mid text-brand-yellow">
                      {p.type}
                    </span>
                  </div>

                  {/* images */}
                  <div className="grid grid-cols-2 gap-4 mt-8">

                    {p.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl border border-brand-mid overflow-hidden">
                        <img
                          src={img}
                          className="h-64 w-full object-cover"
                        />
                      </div>
                    ))}

                  </div>

                  <p className="text-center text-text-secondary text-sm mt-6">
                    Before & After transformation
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  )
}