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
    <main className="textColor w-full">
      <div className="sideBackground">
        <div
          className="text-center navbarColor w-full
        h-[50px] fixed shadow-2xl z-10"
        >
          <div
            className={`${displayMediaQueries} xs:min-w-[340px] xs:max-w-[420px] my-0 mx-auto h-[50px]`}
          >
            <Navbar />
          </div>
        </div>

        <div
          className={`${displayMediaQueries} xs:min-w-[340px] xs:max-w-[420px] my-0 mx-auto`}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  )
}
