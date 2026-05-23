"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-black/96 backdrop-blur-md border-b border-brand-mid">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LEFT: logo + brand */}
        <Link href="/" className="relative flex items-center gap-3 px-3 py-2">

            {/* glow background */}
            <div className="
                absolute inset-0
                bg-white/25
                blur-xl
                rounded-full
                opacity-70
            " />

            {/* content */}
            <div className="relative flex items-center gap-3">

                <Image
                src="/logo.jpg"
                alt="369 Electrical Logo"
                width={38}
                height={38}
                className="rounded-md object-cover"
                />

                <span className="text-brand-yellow font-bold text-lg">
                369 Electrical
                </span>

            </div>

        </Link>

        {/* links */}
        <nav className="hidden md:flex gap-8 text-text-secondary text-md font-bold">

          <Link href="/" className="hover:text-brand-yellow transition">
            Home
          </Link>

          <Link href="/servicesE" className="hover:text-brand-yellow transition">
            Services
          </Link>

          <Link href="/about" className="hover:text-brand-yellow transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-brand-yellow transition">
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            bg-brand-yellow text-black
            px-5 py-2 rounded-full
            text-sm font-semibold
            hover:shadow-[0_0_15px_rgba(255,208,0,0.4)]
            transition
          "
        >
          Book Now
        </Link>

      </div>

    </header>
  )
}