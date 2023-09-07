'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading, Button, PortfolioDownloader } from '../components/index'
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  aboutTextStyles,
  hoverStyles,
  aboutMoreText,
} from '@/constants'

const AboutMe = () => {
  // States to show the full introduction text
  const [moreLessText, setMoreLessText] = useState('more')
  const [isFullText, setIsFullText] = useState(true)

  // Function to handle the showing and hiding of the full text
  // On lg(1020) or more the full text gets automatically shown
  // On lg(1020) or less the full text is cut in half and a more button appear to show it
  useEffect(() => {
    const handleResize = () => {
      const onLargeRender = window.innerWidth > 1020
      setIsFullText(onLargeRender)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMoreLessOption = () => {
    setMoreLessText((prev) => (prev === 'more' ? 'less' : 'more'))
  }

  return (
    <div className={`mont xs:text-center ${sectionTopDivStyles}`} id="aboutMe">
      <div className={`${sectionMediaQueries}`}>
        <Heading title="ABOUT ME" />
        {/* Div for the text */}
        <div className="mt-[50px] flex flex-wrap">
          <div
            className={`${aboutTextStyles} xs:mx-auto w-1/2 lg:w-full text-justify`}
          >
            {/* if client width is < 1020, we show the text cut in half */}
            {/* Image for < lg */}
            {!isFullText && (
              <Image
                src="/otherImages/setup.jpg"
                alt="me and my setup"
                width={502}
                height={100}
                className="lg:mr-[10px] sm:mb-[10px] lg:w-1/3 md:w-1/2 sm:w-full object-cover imageBorder float-left hidden lg:block"
              />
            )}

            <p>
              KRISTIJAN, a 20 y/o, overfilled with enthusiasm &
              craving for success. i accept every challenge as an opportunity
              for personal, professional growth & development. love taking
              risks, improving my mind, my body & health, making life purposely
              uncomfortable to get the best out of it!
            </p>

            {/* if client width is > 1020, we show the full text uncut */}

            {isFullText && (
              <p className="mt-[10px] lg:hidden">{aboutMoreText}</p>
            )}

            {/* Showing or hiding the full text content with a button */}
            {moreLessText === 'less' && isFullText == false && (
              <>
                <p className={`mt-[10px] lg:block`}>{aboutMoreText}</p>
                <PortfolioDownloader />
              </>
            )}

            {/* Changing the button text depending if the full text is shown or not on < 1020 */}
            {moreLessText === 'more' ? (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            ) : (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            )}
          </div>

          {/* Image for screens > lg */}
          {isFullText && (
            <div className="pl-[40px] my-auto mx-auto w-1/2">
              <Image
                src="/otherImages/setup.jpg"
                alt="me and my setup"
                width={502}
                height={100}
                // mt-[27px] to align the picture center, moving the p tag down
                className="mt-[27px] ml-auto mr-0 w-full object-cover imageBorder"
              />
              <div className="flex flex-wrap justify-end lg:justify-center">
                <PortfolioDownloader />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
