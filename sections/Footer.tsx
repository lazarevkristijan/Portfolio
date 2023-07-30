import Link from 'next/link'
import React from 'react'
import { Button } from '@/components'
import { sectionMediaQueries, sectionTopDivStyles } from '@/constants'

const Footer = () => {
  return (
    // pb usually 100, now 50 because it's the footer and it looks better
    // mb usually xs:60, now 0 because it's the last section there is nothing below
    <div
      className={`text-[20px] mont smallCaps ${sectionTopDivStyles} pb-[50px] xs:mb-[0px]`}
    >
      <div className={`xs:text-center ${sectionMediaQueries} xs:w-[90%]`}>
        <Link href="#hero">
          <Button title="back to top?" inline />
        </Link>
        {/* Quote */}
        <p className="leading-5 xs:mx-auto mt-[75px] w-[320px]">
          your only limitation is the one <br />
          which you set up in your own mind. <br />
          -Napoleon Hill
        </p>

        {/* Div for legal stuff */}
        <div className="mt-[30px] flex justify-between md:flex-col-reverse">
          <div className="md:text-center my-auto">
            {/* Copyrights */}
            <span>
              copyright © kristijan lazarev 2023.
              <br className="lg:inline hidden" /> all rights reserved.
            </span>
          </div>
          <div className="text-center md:flex md:justify-center">
            {/* Privacy Policy */}
            <Link href="/">
              <Button
                title="privacy policy"
                inline
                margin="mx-3 md:mx-1"
                overridePadding="px-5 py-3 sm:px-2 sm:py-2"
              />
            </Link>

            {/* Terms of Use */}
            <Link href="/">
              <Button
                title="terms of use"
                inline
                margin="mx-3 md:mx-1"
                overridePadding="px-5 py-3 sm:px-2 sm:py-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
