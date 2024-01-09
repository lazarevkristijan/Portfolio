// Top section to hopefully catch your attention

"use client"

import React from "react"
import Image from "next/image"
import {
  heroTags,
  sectionMediaQueries,
  sectionTopDivStyles,
} from "../constants"

const Hero = () => (
  <div
    className={`${sectionTopDivStyles} pt-[100px] xs:pt-[50px]  overflow-x-hidden`}
    id="home"
  >
    <div className={`${sectionMediaQueries} flex sm:flex-col`}>
      {/* Graduation Pic */}
      <div className="w-1/3 sm:w-full my-auto">
        <Image
          src="/otherImages/gradpic.png"
          alt="Graduation Pic"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </div>

      {/* Decorative pictures */}
      <div className="w-2/3 sm:w-full my-auto">
        {/* Text */}
        <div>
          <h1 className="heroFont text-[60px] xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-center leading-none shadow-2xl">
            KRISTIJAN LAZAREV <br />
            <span className="mont text-[45px] xl:text-[35px] lg:text-[30px] md:text-[20px] sm:text-[15px]">
              SOFTWARE ENGINEER
            </span>
          </h1>
        </div>

        {/* Image' */}
        <div className="mont smallCaps flex flex-col text-[25px] md:text-[20px] mt-[30px] lg:mt-[20px] h-fit">
          {heroTags.map((tag) => (
            <div
              className="flex w-[250px] md:w-[210px] justify-between mx-auto"
              key={tag.name}
            >
              <Image
                src={`/HeroIcons/${tag.name.replace(" ", "-")}.svg`}
                alt={tag.name}
                width={35}
                height={35}
                className="mr-[10px]"
              />
              <h2>{tag.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Hero
