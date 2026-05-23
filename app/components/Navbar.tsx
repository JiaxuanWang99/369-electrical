"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-mid">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="logo" width={40} height={40} />
          <span className="text-brand-yellow font-bold">
            369 Electrical
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-white/70 font-bold">
          <Link href="/">Home</Link>
          <Link href="/servicesE">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
            href="/contact"
            className="
                hidden md:block
                bg-brand-yellow text-black
                px-5 py-2 rounded-full
                text-sm font-semibold
            "
            >
            Book Now
            </Link>

            {/* MOBILE FLOAT CTA */}
            <Link
                href="/contact"
                className="
                    md:hidden
                    fixed right-0 top-44 -translate-y-1/2
                    z-50

                    px-3 py-4
                    rounded-l-full
                    text-xs font-bold

                    text-white

                    bg-brand-yellow/20
                    backdrop-blur-md
                    border border-white

                    shadow-lg
                "
                >
                Book Now
            </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
     {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-white/80 flex flex-col">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/servicesE" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
    )}

    </header>
  )
}