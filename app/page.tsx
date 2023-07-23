import {
  Navbar,
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Footer,
} from '@/sections/index'
import { displayMediaQueries } from '@/constants'

export default function Home() {
  return (
    <main className="w-full textColor">
      <div className="backgroundColor">
        <div
          className="w-full 
        h-[50px] text-center navbarColor fixed shadow-2xl z-10"
        >
          <div
            className={`w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-[200px] my-0 mx-auto h-[50px]`}
          >
            <Navbar />
          </div>
        </div>

        <div
          className={`w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-[200px] my-0 mx-auto`}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
      <div className="footerColor">
        <Footer />
      </div>
    </main>
  )
}
