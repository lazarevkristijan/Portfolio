'use client'

import React from 'react'
import { Heading } from '../components/index'
import ContactDetail from '@/components/ContactDetail'
import { contactDetails } from '@/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { sectionMediaQueries } from '@/constants'

const Contact = () => {
  return (
    <div className="mont pb-[100px] shadow-2xl" id="contact">
      <div className={`${sectionMediaQueries} my-0 mx-auto flex`}>
        <div className="w-1/2 ">
          <Heading title="CONTACT" />
          <p className="mt-[50px] subSectionHeader">LET&lsquo;S CONNECT</p>
          <div className="text mt-[30px]">
            {contactDetails.map((socialMedia, index) => (
              <ContactDetail
                media={socialMedia.media}
                link={socialMedia.link}
                key={index}
              />
            ))}
            <p>i speak eng / deu / mkd / bgr / srb</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, borderRadius: '100%' }}
          >
            <Link
              href="https://www.linkedin.com/in/kristijanlazarev/"
              target="_blank"
            >
              <Image
                src="/linkedinLogo.svg"
                width={450}
                height={200}
                alt="linkedin logo"
                className="pt-[75px]"
              />
            </Link>
          </motion.div>
        </div>
        <div className="w-1/2">
          <Link href="mailto:lazarevkristijan@gmail.com">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Image
                src="/gmailLogo.svg"
                width={300}
                height={300}
                alt="gmail logo"
                className="w-[260px] pt-[175px]"
              />
            </motion.div>
          </Link>
          <Link href="https://github.com/lazarevkristijan" target="_blank">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Image
                src="/githubLogo.svg"
                width={300}
                height={300}
                alt="github logo"
                className="w-[260px] mt-[30px] my-0 mx-auto"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
