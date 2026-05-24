"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "", // honeypot
  })

  const [loading, setLoading] = useState(false)
  const [startTime] = useState(Date.now())

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🛑 1. honeypot check（机器人会填）
    if (form.website) return

    // 🛑 2. time check（太快提交=机器人）
    if (Date.now() - startTime < 3000) return

    setLoading(true)

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )

      alert("Message sent successfully!")

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        website: "",
      })
    } catch (error) {
      alert("Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#0b0b0b] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-10">

        {/* ✨ white glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-6 relative text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-brand-yellow">369 Electrical</span>
          </h1>

          <p className="text-white/70 mt-6 text-lg max-w-3xl mx-auto">
            Licensed electricians in Brisbane. Fast response for residential &
            commercial electrical services.
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 ">

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-black">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-brand-card border border-brand-mid rounded-2xl p-8 space-y-5"
          >

            <h2 className="text-2xl font-bold text-brand-yellow">
              Get Free Quote
            </h2>

            {/* name */}
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-amber-50 border border-brand-mid rounded-md"
              required
            />

            {/* phone */}
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 bg-amber-50 border border-brand-mid rounded-md"
              required
            />

            {/* email */}
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-amber-50 border border-brand-mid rounded-md"
            />

            {/* message */}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-amber-50 border border-brand-mid rounded-md"
              required
            />

            {/* 🟢 HONEYPOT (hidden field for bots) */}
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-yellow text-black py-3 font-semibold rounded-md hover:scale-[1.02] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* INFO */}
          <div className="space-y-6">

            <div className="bg-brand-dark border border-brand-mid rounded-2xl p-6">
              <h3 className="text-brand-yellow font-semibold">
                📍 Brisbane Service Area
              </h3>
              <p className="text-white/70 mt-2">
                CBD, Logan, Sunnybank, Carindale, Indooroopilly & surrounding suburbs
              </p>
            </div>

            <div className="bg-brand-dark border border-brand-mid rounded-2xl p-6">
              <h3 className="text-brand-yellow font-semibold">
                ⚡ 24/7 Emergency
              </h3>
              <p className="text-white/70 mt-2">
                Fast emergency electrician response across Brisbane
              </p>
            </div>

            <div className="bg-brand-dark border border-brand-mid rounded-2xl p-6">
              <h3 className="text-brand-yellow font-semibold">
                📞 Call Us
              </h3>
              <a
                href="tel:0400000000"
                className="text-brand-yellow font-semibold mt-2 inline-block"
              >
                0400 000 000
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}