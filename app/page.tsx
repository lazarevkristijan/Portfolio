import {
  Navbar,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Footer,
} from '@/sections/index'

export default function Home() {
  return (
    <main className="w-full textColor backgroundColor">
      <div className="w-full h-[50px] text-center navbarColor fixed shadow-2xl z-10">
        <div className="w-[1200px] my-0 mx-auto h-[50px]">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[1200px] my-0 mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
