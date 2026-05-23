"use client"

import { useState } from "react"
import { faqData } from "../data/faq"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-28 bg-brand-black">

      <div className="max-w-4xl mx-auto px-6">

        {/* title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-white/70 mt-5 text-lg">
            Everything you need to know about our Brisbane electrical services
          </p>

        </div>

        {/* list */}
        <div className="space-y-5">

          {faqData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="
                  bg-brand-dark
                  border border-brand-mid
                  rounded-2xl
                  overflow-hidden
                "
              >

                {/* question */}
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full
                    flex items-center justify-between
                    px-8 py-6
                    text-left
                  "
                >

                  <h3 className="text-brand-yellow font-semibold text-xl md:text-2xl">
                    {item.question}
                  </h3>

                  <span className="text-brand-yellow text-3xl leading-none">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* answer */}
                <div
                  className={`
                    px-8
                    text-white/80
                    text-lg
                    leading-relaxed
                    overflow-hidden
                    transition-all duration-300
                   ${isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  {item.answer}
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}