import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Stats from "./components/Stats"
import WhyChooseUs from "./components/WhyChooseUs"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  )
}