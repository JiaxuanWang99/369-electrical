'use client'

import { useState } from 'react'

interface CarouselProps {
  images: string[]
  aspectRatio?: string
  className?: string
}

export default function Carousel({
  images,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}: CarouselProps) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <div
      className={`
        relative
        rounded-3xl
        overflow-hidden
        bg-[#111]
        max-w-4xl
        mx-auto
        mb-8
        ${aspectRatio}
        ${className}
      `}
    >
      {/* slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="min-w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center text-lg hover:bg-black/80 transition z-10"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center text-lg hover:bg-black/80 transition z-10"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition ${
              i === idx ? 'bg-brand-yellow' : 'bg-white/25'
            }`}
          />
        ))}
      </div>
    </div>
  )
}