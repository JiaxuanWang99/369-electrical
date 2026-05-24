"use client"

type Item = {
  text: string
  highlight: string[]
}

const items: Item[] = [
  {
    text: "24/7 emergency electrical support with fast response times",
    highlight: ["24/7", "fast response"],
  },
  {
    text: "Fully certified and licensed electricians in Brisbane",
    highlight: ["certified", "licensed", "Brisbane"],
  },
  {
    text: "Transparent upfront pricing with no hidden fees",
    highlight: ["transparent pricing", "no hidden fees"],
  },
  {
    text: "Local Brisbane experts who understand safety standards",
    highlight: ["Local Brisbane experts", "safety standards"],
  },
]

type HighlightTextProps = {
  text: string
  highlight: string[]
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function HighlightText({ text, highlight }: HighlightTextProps) {
  let result = text

  highlight.forEach((word) => {
    const regex = new RegExp(`(${escapeRegExp(word)})`, "gi")

    result = result.replace(
      regex,
      `<span class="text-brand-yellow font-semibold">$1</span>`
    )
  })

  return (
    <span
      dangerouslySetInnerHTML={{ __html: result }}
    />
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-brand-black text-white py-10 overflow-hidden">

      {/* soft white center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_65%)]" />

      <div className="max-w-4xl mx-auto px-6 relative">

        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Homeowners Trust Us
          </h2>

          <p className="text-white/70 mt-4 text-lg">
            Reliable, fast, and professional electrical services in Brisbane
          </p>
        </div>

        {/* list */}
        <div className="space-y-4">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                flex items-start gap-4
                p-6 rounded-2xl
                bg-brand-dark border border-brand-mid
                transition
              "
            >

              {/* check icon */}
              <div className="
                w-6 h-6 mt-1
                flex items-center justify-center
                rounded-sm
                bg-green-500/15
                border border-green-400/40
                text-green-400
                text-sm font-bold
              ">
                ✓
              </div>

              {/* text */}
              <p className="text-base md:text-lg leading-relaxed">
                <HighlightText
                  text={item.text}
                  highlight={item.highlight}
                />
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}