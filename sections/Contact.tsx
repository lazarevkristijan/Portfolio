import React from 'react'
import { Heading } from '../components/index'
import ContactDetail from '@/components/ContactDetail'
import { contactDetails } from '@/constants'
import Image from 'next/image'
import './Footer.css'

const Contact = () => {
  return (
    <div className="mont pb-[100px]  shadow-2xl" id="contact">
      <div className="w-[1100px] my-0 mx-auto flex flex-wrap">
        <div className="w-1/2">
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
          <Image
            src="/linkedinLogo.svg"
            width={450}
            height={200}
            alt="linkedin logo"
            className="pt-[75px]"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/gmailLogo.svg"
            width={300}
            height={300}
            alt="gmail logo"
            className="w-[260px] pt-[175px]"
            style={{ animation: 'upDown 1s infinite' }}
          />
          <Image
            src="/githubLogo.svg"
            width={300}
            height={300}
            alt="github logo"
            className="w-[260px] mt-[30px] my-0 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
