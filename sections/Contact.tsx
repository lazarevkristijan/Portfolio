'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  flags,
  contactDetails,
  hoverStyles,
} from '@/constants'
import { Flag, ContactDetail, Heading } from '../components/index'

const Contact = () => {
  return (
    // mb usually xs:60, now 0px so that it connects to the footer (looks better)
    <div
      className={`mont ${sectionTopDivStyles} overflow-hidden xs:mb-[0px]`}
      id="contact"
    >
      <div className={`${sectionMediaQueries} xs:w-[90%] flex sm:block`}>
        <div className="w-1/2 sm:w-full">
          <Heading title="CONTACT" />
          <p className="text-[20px] mt-[80px] md:mt-[60px]">
            LET&lsquo;S CONNECT
          </p>
          <div className="text-[20px] smallCaps mt-[30px]">
            {contactDetails.map((socialMedia, index) => (
              <ContactDetail
                media={socialMedia.media}
                link={socialMedia.link}
                key={index}
              />
            ))}
            <p className="mt-[30px]">
              i speak
              {flags.map((flag, index) => (
                <Flag
                  key={index}
                  source={flag.source}
                  alt={flag.alt}
                  width={flag.width}
                  height={flag.height}
                  classname={flag.className}
                />
              ))}
            </p>
            <p>
              i love topics such as: <br /> books, fitness & health,{' '}
              <br className="hidden lg:inline" /> coding, personal growth
            </p>
          </div>
          <motion.div className={`${hoverStyles}`}>
            <Link
              href="https://www.linkedin.com/in/kristijanlazarev/"
              target="_blank"
            >
              <motion.div
                variants={slideIn('left', 'spring', 0, 1)}
                initial="hidden"
                whileInView="show"
              >
                <Image
                  src="/linkedinLogo.svg"
                  width={450}
                  height={200}
                  alt="linkedin logo"
                  className="mt-[75px] sm:mt-[40px] sm:mx-auto sm:w-[150px] drop-shadow-2xl"
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-[25px] w-1/2 sm:w-full sm:flex"
        >
          <div className="sm:w-1/2 ">
            <motion.div className={`${hoverStyles}`}>
              <Link href="mailto:lazarevkristijan@gmail.com">
                <Image
                  src="/gmailLogo.svg"
                  width={300}
                  height={300}
                  alt="gmail logo"
                  className="mt-[175px] sm:mt-[0px] md:ml-4 w-[260px] md:w-[180px] sm:w-[100px] drop-shadow-2xl"
                />
              </Link>
            </motion.div>
          </div>
          <div className="sm:w-1/2">
            <motion.div className={`${hoverStyles}`}>
              <Link href="https://github.com/lazarevkristijan" target="_blank">
                <Image
                  src="/githubLogo.svg"
                  width={300}
                  height={300}
                  alt="github logo"
                  className="mt-[30px] sm:mt-[0px] my-0 mx-auto w-[260px] md:w-[180px] sm:w-[100px] drop-shadow-2xl"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
