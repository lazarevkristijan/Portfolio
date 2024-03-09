"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  flags,
  contactDetails,
  hoverStyles,
  contactLogoStyles,
} from "@/constants"
import { Flag, ContactDetail, Heading } from "../components/index"

const Contact = () => (
  <div
    className={`mont ${sectionTopDivStyles} overflow-hidden xs:mt-[50px]`}
    id="contact"
  >
    <div className={`${sectionMediaQueries} xs:mt-0 flex sm:block`}>
      <div>
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
                width={20}
                height={20}
                classname="inline ml-1 w-[20px] h-[20px]"
              />
            ))}
          </p>
          {/* What topics I'm into */}
          <p>
            i love topics such as: <br /> books, fitness & health,{" "}
            <br className="hidden lg:inline" /> coding, personal growth
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
