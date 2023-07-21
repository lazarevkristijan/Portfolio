import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="pb-[100px] shadow-2xl" id="hero">
      <div className="w-[1100px] flex my-0 mx-auto">
        <div className="pt-[131px] w-1/3">
          <Image
            src="/gradpic.png"
            alt="Hero Pic"
            width={409}
            height={614}
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="pt-[131px] w-2/3">
          <div className="flex justify-center">
            <Image
              src="/headerCodeImage.png"
              alt="Header Code Image"
              width={535}
              height={181}
              className="mt-[33px] imageBorder drop-shadow-2xl"
            />
          </div>
          <div className="w-4/5">
            <p className="headerText text-center leading-none mt-[67px]">
              KRISTIJAN
              <br />
              LAZAREV <br />
              <span className="text-[60px] mont">WEB DEVELOPER</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
