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
  contactLogoStyles,
} from '@/constants'
import { Flag, ContactDetail, Heading } from '../components/index'

const Contact = () => {
  return (
    // mb usually xs:60, now 0px so that it connects to the footer (looks better)
    <div
      className={`mont ${sectionTopDivStyles} overflow-hidden xs:mb-0 xs:mt-[50px]`}
      id="contact"
    >
      <div className={`${sectionMediaQueries} xs:mt-0 flex sm:block`}>
        <div className="w-1/2 sm:w-full">
          <Heading title="CONTACT" />
          <div className="text-[20px] smallCaps mt-[50px]">
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
        </div>
        <motion.div
          variants={slideIn('right', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="w-1/2 sm:w-full flex md:block my-auto"
        >
          <div className={`${contactLogoStyles} ml-0 mr-auto`}>
            <Link href="mailto:lazarevkristijan@gmail.com">
              <Image
                src="/gmailLogo.svg"
                width={150}
                height={150}
                alt="gmail logo"
                // Duplicate w & h, cos console warnings
                className={`${hoverStyles} drop-shadow-2xl md:w-[100px] w-[150px] h-[150px]`}
              />
            </Link>
          </div>
          <div className={`${contactLogoStyles}`}>
            <Link href="https://github.com/lazarevkristijan" target="_blank">
              <Image
                src="/githubLogo.svg"
                width={150}
                height={150}
                alt="github logo"
                className={`${hoverStyles} drop-shadow-2xl mt-[100%] md:mt-[0%] md:w-[100px]`}
              />
            </Link>
          </div>
          <div className={`${contactLogoStyles} ml-auto mr-0`}>
            <Link
              href="https://www.linkedin.com/in/kristijanlazarev/"
              target="_blank"
            >
              <Image
                src="/linkedinLogo.svg"
                width={200}
                height={200}
                alt="linkedin logo"
                className={`${hoverStyles} drop-shadow-2xl mt-[200%] md:mt-[0%] md:w-[150px]`}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
