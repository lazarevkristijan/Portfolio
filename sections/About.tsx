import Image from 'next/image'
import React from 'react'
import { Heading } from '../components/index'

const About = () => {
  return (
    <div className=" pb-[100px] mont">
      <Heading title="ABOUT" />
      <p className="w-[850px] mt-[80px] mb-[100px] text">
        KRISTIJAN, a 20 years old boy, overfilled with enthusiasm & craving for
        success. i accept every challenge as an opportunity for personal,
        professional growth & development. love taking risks, improving my mind,
        my body & health, making life purposely uncomfortable to get the best
        out of it! working since the age of 13, coming with experience as a
        sales agent, electrician & fitness trainer. since jan 2023 fully
        committed to front end web development. i withhold high level skills in
        graphics design, computer set-ups & 96 wpm typing speed. i possess good
        knowledge of the front end environment, how the internet works & a basic
        understanding of the backend workflow. constantly working on new ideas
        and learning new skills through projects & books written by the people
        that have already made it.
      </p>
      <div className="w-fit my-0 mx-auto">
        <div className="flex justify-end -my-1">
          <p className="text">pdf portfolio</p>
          <Image
            src="/download-button-w.svg"
            width={18}
            height={15}
            alt="download button"
            className="text-right"
          />
        </div>
        <Image
          src="/hobbies.jpg"
          alt="hobbies ilustration"
          width={502}
          height={100}
          className="h-[200px] object-cover rounded-[2px]"
        />
      </div>
    </div>
  )
}

export default About
