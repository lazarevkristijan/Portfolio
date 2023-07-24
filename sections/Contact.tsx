'use client'

import React from 'react'
import { Heading } from '../components/index'
import ContactDetail from '@/components/ContactDetail'
import { contactDetails } from '@/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { sectionMediaQueries } from '@/constants'
import { slideIn } from '@/utils/motion'

const Contact = () => {
  return (
    <div
      className="mont mainBackgroundPattern pb-[100px] shadow-2xl overflow-hidden"
      id="contact"
    >
      {/* <div className={`${sectionMediaQueries} my-0 mx-auto flex sm:block`}> */}
      <div
        className={`w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[90%] my-0 mx-auto flex sm:block`}
      >
        <div className="w-1/2 sm:w-full">
          <Heading title="CONTACT" />
          <p className="mt-[50px] text-[20px]">LET&lsquo;S CONNECT</p>
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
              <Image
                src="us.svg"
                alt="svg"
                width={20}
                height={20}
                className="inline ml-1"
              />
              <Image
                src="de.svg"
                alt="svg"
                width={20}
                height={20}
                className="inline ml-1"
              />
              <Image
                src="mk.svg"
                alt="svg"
                width={20}
                height={20}
                className="inline ml-1"
              />
              <Image
                src="bg.svg"
                alt="svg"
                width={20}
                height={20}
                className="inline ml-1"
              />
              <Image
                src="rs.svg"
                alt="svg"
                width={20}
                height={20}
                className="inline ml-1"
              />
            </p>
            <p>
              i love topics such as: <br /> books, fitness & health,{' '}
              <br className="hidden lg:inline" /> coding, personal growth
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
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
                  className="mt-[75px] sm:mt-[40px] sm:w-[150px] sm:mx-auto"
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'spring', 0, 1)}
          initial="hidden"
          whileInView="show"
          className="w-1/2 sm:w-full sm:flex mt-[25px]"
        >
          <div className="sm:w-1/2 ">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="mailto:lazarevkristijan@gmail.com">
                <Image
                  src="/gmailLogo.svg"
                  width={300}
                  height={300}
                  alt="gmail logo"
                  className="w-[260px] mt-[175px] sm:mt-[0px] md:ml-4 md:w-[180px] sm:w-[100px]"
                />
              </Link>
            </motion.div>
          </div>
          <div className="sm:w-1/2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="https://github.com/lazarevkristijan" target="_blank">
                <Image
                  src="/githubLogo.svg"
                  width={300}
                  height={300}
                  alt="github logo"
                  className="w-[260px] mt-[30px] sm:mt-[0px] my-0 mx-auto md:w-[180px] sm:w-[100px]"
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
