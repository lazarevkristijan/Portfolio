'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries } from '../constants'
const Home = () => {
  return (
    <div className="pb-[100px] shadow-2xl overflow-x-hidden" id="hero">
      <div
        className={`w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[100px] flex my-0 mx-auto`}
      >
        <motion.div
          variants={slideIn('left', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="pt-[131px] w-1/3"
        >
          <Image
            src="/gradpic.png"
            alt="Main Pic"
            width={409}
            height={614}
            className=" drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          variants={slideIn('right', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="pt-[131px] w-2/3"
        >
          <div className="flex justify-center">
            <Image
              src="/headerCodeImage.png"
              alt="Header Code Image"
              width={535}
              height={181}
              className="mt-[33px] imageBorder drop-shadow-2xl"
            />
          </div>
          <div className="w-4/5 xl:my-0 xl:mx-auto">
            <p className="ps2p text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px] text-center leading-none mt-[67px] md:mt-[40px] ">
              KRISTIJAN
              <br />
              LAZAREV <br />
              <span className="mont text-[60px] xl:text-[50px] lg:text-[40px] md:text-[25px] sm:text-[15px] ">
                WEB DEVELOPER
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
