import Image from "next/image"

const badges = [
  { src: '/badges/badge1.svg',   alt: 'Licensed Electrician QLD Certified' },
  { src: '/badges/badge2.svg',   alt: 'Top Rated Brisbane' },
  { src: '/badges/badge3.svg',        alt: '24/7 Emergency Service' },
  { src: '/badges/badge4.svg', alt: '100% Workmanship Guaranteed' },
]

export default function Stats() {
  return (
   <section className="bg-[#111] px-6 ">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-items-center ">
         {badges.map((b) => (
            <div
              key={b.src}
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={300}
                height={300}
                className="object-contain"
              />

            </div>
          ))}
      </div>
    </section>
  )
}