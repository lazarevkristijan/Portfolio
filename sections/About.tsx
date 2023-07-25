'use client'

import Image from 'next/image'
import React from 'react'
import { Heading } from '../components/index'
import Link from 'next/link'
import { sectionMediaQueries, sectionTopDivStyles } from '@/constants'
import { useState } from 'react'
import { aboutTextStyles } from '@/constants'

const About = () => {
  const [isFullText, setIsFullText] = useState('hidden')
  const [moreLessText, setMoreLessText] = useState('more')

  const handleMoreLessOption = () => {
    if (moreLessText === 'more') {
      setMoreLessText('less')
    } else {
      setMoreLessText('more')
    }

    if (isFullText === 'hidden') {
      setIsFullText('block')
    } else {
      setIsFullText('hidden')
    }

    console.log(isFullText)
    console.log(moreLessText)
  }

  return (
    <div className={`${sectionTopDivStyles} mont xs:text-center`} id="about">
      <div className={`${sectionMediaQueries} xs:w-[90%]`}>
        <Heading title="ABOUT" />
        <div
          className={`${aboutTextStyles} xs:mx-auto mt-[80px] mb-[80px] w-[850px] xl:w-[650px] lg:w-[550px] md:w-[450px] sm:w-[300px] text-justify`}
        >
          <p>
            KRISTIJAN, a 20 years old boy, overfilled with enthusiasm & craving
            for success. i accept every challenge as an opportunity for
            personal, professional growth & development. love taking risks,
            improving my mind, my body & health, making life purposely
            uncomfortable to get the best out of it!
          </p>
          <p className={`mt-[20px] lg:${isFullText}`}>
            working since the age of 13, coming with experience as a sales
            agent, electrician & fitness trainer. since jan 2023 fully committed
            to front end web development. i withhold high level skills in
            graphics design, computer set-ups & 96 wpm typing speed. i possess
            good knowledge of the front end environment, how the internet works
            & a basic understanding of the backend workflow. constantly working
            on new ideas and learning new skills through projects & books
            written by the people that have already made it.
          </p>
          <span
            className={`${isFullText} lg:block w-fit mt-3`}
            onClick={handleMoreLessOption}
          >
            {moreLessText}
          </span>
        </div>
        <div className="w-fit my-0 mx-auto">
          <div className="flex flex-wrap justify-end">
            <Link
              className="flex"
              href="https://dl.dropboxusercontent.com/scl/fi/zbkkh2qhxml55ip4ti65u/Kristijan-Lazarev-CV-ENG.pdf?rlkey=4q793zfc99jhqzontj02lijxf&dl=0"
            >
              <p className={`${aboutTextStyles}`}>pdf portfolio</p>
              <span className="bg-[#1F1F2D] max-w-fit rounded-full py-[6px] px-[6px] my-auto ml-1">
                <Image
                  src="/download-button.svg"
                  width={15}
                  height={15}
                  alt="download button"
                  className="text-right hover:scale-110 transition-all"
                />
              </span>
            </Link>
          </div>
          <Image
            src="/hobbies.jpg"
            alt="hobbies ilustration"
            width={502}
            height={100}
            className="h-[200px] object-cover imageBorder"
          />
        </div>
      </div>
    </div>
  )
}

export default About
