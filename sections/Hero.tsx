'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries, sectionTopDivStyles } from '../constants'

const Home = () => {
  return (
    <div className={`${sectionTopDivStyles} overflow-x-hidden`} id="hero">
      <div className={`${sectionMediaQueries} flex sm:flex-col`}>
        <motion.div
          variants={slideIn('left', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="pt-[131px] w-1/3 sm:w-full"
        >
          <Image
            src="/gradpic.png"
            alt="Main Pic"
            width={409}
            height={614}
            className="drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          variants={slideIn('right', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="pt-[131px] sm:pt-[0px] w-2/3 sm:w-full"
        >
          <div className="flex justify-center">
            <Image
              src="/headerCodeImage.png"
              alt="Header Code Image"
              width={535}
              height={181}
              className="mt-[33px] sm:mt-[0px] imageBorder drop-shadow-2xl"
            />
          </div>
          <div className="w-4/5 xl:my-0 xl:mx-auto">
            <p className="ps2p text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-center leading-none mt-[67px] md:mt-[40px] shadow-2xl ">
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
