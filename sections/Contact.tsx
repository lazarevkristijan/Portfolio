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

const Contact = () => (
  <div
    className={`mont ${sectionTopDivStyles} overflow-hidden xs:mt-[50px]`}
    id="contact"
  >
    <div className={`${sectionMediaQueries} xs:mt-0 flex sm:block`}>
      <div className="w-1/2 sm:w-full">
        <Heading title="CONTACT" />
        {/* Contact details */}
        <div className="text-[20px] smallCaps mt-[50px]">
          {/* Mapping over contact details */}
          {contactDetails.map((socialMedia, index) => (
            <ContactDetail
              media={socialMedia.media}
              link={socialMedia.link}
              key={index}
            />
          ))}
          {/* Languages I speak */}
          <p className="mt-[30px]">
            i speak
            {/* Mapping over flags of languages I speak */}
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
          {/* What topics I'm into */}
          <p>
            i love topics such as: <br /> books, fitness & health,{' '}
            <br className="hidden lg:inline" /> coding, personal growth
          </p>
        </div>
      </div>
      {/* Logos with animations */}
      <motion.div
        variants={slideIn('right', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
        className="w-1/2 sm:w-full flex md:block my-auto"
      >
        {/* GMAIL */}
        <div className={`${contactLogoStyles} ml-0 mr-auto`}>
          <Link href="mailto:lazarevkristijan@gmail.com">
            {/* GMAIL IMAGE */}
            <Image
              src="/mediaIcons/gmailLogo.svg"
              width={150}
              height={150}
              alt="gmail logo"
              // Duplicate w & h, cos console warnings
              className={`md:w-[100px] md:h-[100px] w-[150px] h-auto ${hoverStyles} drop-shadow-2xl`}
            />
          </Link>
        </div>
        {/* GITHUB */}
        <div className={`${contactLogoStyles}`}>
          <Link href="https://github.com/lazarevkristijan" target="_blank">
            {/* GITHUB IMAGE */}
            <Image
              src="/mediaIcons/githubLogo.svg"
              width={150}
              height={150}
              alt="github logo"
              className={`${hoverStyles} drop-shadow-2xl mt-[100%] md:mt-[0%] md:w-[100px]`}
            />
          </Link>
        </div>
        {/* LINKEDIN */}
        <div className={`${contactLogoStyles} ml-auto mr-0`}>
          <Link
            href="https://www.linkedin.com/in/kristijanlazarev/"
            target="_blank"
          >
            {/* LINKEDIN IMAGE */}
            <Image
              src="/mediaIcons/linkedinLogo.svg"
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

export default Contact
