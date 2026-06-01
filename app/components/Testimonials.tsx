'use client'

import { useEffect, useState } from 'react'
import { reviews } from '../data/reviews'

function Stars({ count }: { count: number }) {
  return (
    <div className="text-brand-yellow text-sm tracking-widest">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function HappyIllustration() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end justify-center gap-5">

        {/* House */}
        <svg width="72" height="72" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="45,8 82,38 8,38" stroke="#ffd000" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="10" y="38" width="70" height="44" stroke="#ffd000" strokeWidth="2" />
          <rect x="34" y="55" width="22" height="27" rx="3" stroke="#ffd000" strokeWidth="1.8" />
          <rect x="16" y="46" width="16" height="14" rx="2" stroke="#ffd000" strokeWidth="1.5" />
          <rect x="58" y="46" width="16" height="14" rx="2" stroke="#ffd000" strokeWidth="1.5" />
        </svg>

        {/* Person */}
        <div className="flex flex-col items-center">
          {/* Face */}
          <div
            className="w-[74px] h-[74px] rounded-full border-[2.5px] border-brand-yellow flex flex-col items-center justify-center"
            style={{ animation: 'bob 2s ease-in-out infinite' }}
          >
            {/* Crescent eyes */}
            <div className="flex gap-4 mt-1">
              <div
                className="w-[14px] h-[8px] border-t-[2.5px] border-brand-yellow rounded-tl-full rounded-tr-full"
              />
              <div
                className="w-[14px] h-[8px] border-t-[2.5px] border-brand-yellow rounded-tl-full rounded-tr-full"
              />
            </div>
            {/* Open mouth smile (no teeth) */}
            <div
              className="w-[30px] h-[13px] border-[2.5px] border-brand-yellow border-t-0 rounded-b-full mt-2"
            />
          </div>

          {/* Body */}
          <div
            className="w-[50px] h-[58px] border-2 border-brand-yellow rounded-[14px] bg-brand-yellow/[0.07] relative -mt-[2px]"
            style={{ animation: 'bob 2s ease-in-out infinite' }}
          >
            {/* Thumbs up */}
            <span
              className="absolute text-[26px] leading-none"
              style={{ left: -38, top: 6, animation: 'wave 1.2s ease-in-out infinite', transformOrigin: 'right center' }}
            >
              👍
            </span>
          </div>

          {/* Legs */}
          <div className="flex gap-[14px]">
            <div className="w-[3px] h-9 bg-brand-yellow rounded-sm" style={{ animation: 'bob 2s ease-in-out infinite' }} />
            <div className="w-[3px] h-9 bg-brand-yellow rounded-sm" style={{ animation: 'bob 2s ease-in-out infinite', animationDelay: '0.15s' }} />
          </div>

          {/* Grass */}
          <div className="flex items-end gap-2">
            {/* Tuft 1 */}
            <div className="flex items-end gap-[2px]">
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 10, opacity: 0.6 }} />
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 4, height: 16 }} />
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 11, opacity: 0.7 }} />
            </div>
            {/* Tuft 2 */}
            <div className="flex items-end gap-[2px]">
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 12, opacity: 0.5 }} />
              <div className="bg-[#66bb6a] rounded-t-sm" style={{ width: 5, height: 20 }} />
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 13, opacity: 0.65 }} />
            </div>
            {/* Tuft 3 */}
            <div className="flex items-end gap-[2px]">
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 9, opacity: 0.6 }} />
              <div className="bg-[#388e3c] rounded-t-sm" style={{ width: 4, height: 15 }} />
              <div className="bg-[#4caf50] rounded-t-sm" style={{ width: 3, height: 11, opacity: 0.55 }} />
            </div>
          </div>
        </div>

        {/* 5-star badge */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-brand-yellow text-[17px] tracking-[2px]">★★★★★</div>
          <div className="text-[22px]" style={{ animation: 'pop 1.8s ease-in-out infinite' }}>🏆</div>
          <div className="text-brand-yellow text-[10px] font-bold tracking-[2px] opacity-50">5 STARS</div>
        </div>

      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }
      `}</style>
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-[#0d0d0d] text-white py-14 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,208,0,0.07),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: illustration */}
          <HappyIllustration />

          {/* Right: slider */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-2">
              What Clients Say
            </h2>
            <p className="text-text-secondary mb-8">
              Real feedback from Brisbane homeowners
            </p>

            {/* Slider */}
            <div className="relative h-[180px]">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className={`
                    absolute inset-0 transition-opacity duration-700 ease-in-out
                    ${i === index ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  <div className="h-full flex flex-col justify-center bg-gradient-to-br from-[#141414] to-[#0f0f0f] border border-[#222] rounded-2xl p-6">
                    <Stars count={r.rating} />
                    <p className="text-[#b5b5b5] text-sm leading-relaxed mt-3">
                      "{r.text}"
                    </p>
                    <p className="mt-4 text-brand-yellow font-semibold text-sm">
                      — {r.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${
                    i === index ? 'bg-brand-yellow' : 'bg-[#333]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}