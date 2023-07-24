import Link from 'next/link'
import React from 'react'
import { Button } from '@/components'
import { sectionMediaQueries } from '@/constants'

const Footer = () => {
  return (
    <div className=" mont smallCaps text-[20px] pt-[100px] mainBackgroundPattern pb-[50px]">
      {/* <div className={`${sectionMediaQueries} my-0 mx-auto`}> */}
      <div
        className={`xs:text-center w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[90%] my-0 mx-auto`}
      >
        <Link href="#hero">
          <Button title="back to top?" inline />
        </Link>
        <p className="xs:mx-auto w-[320px] mt-[75px] leading-5">
          your only limitation is the one <br />
          which you set up in your own mind. <br />
          -Napoleon Hill
        </p>
        <div className="mt-[30px] flex justify-between md:flex-col-reverse">
          <div className="my-auto md:text-center">
            <span>
              copyright © kristijan lazarev 2023.
              <br className="lg:inline hidden" /> all rights reserved.
            </span>
          </div>
          <div className="md:flex md:justify-center text-center">
            <Link href="/">
              <Button
                title="privacy policy"
                inline
                margin="mx-3 md:mx-1"
                overridePadding="px-5 py-3 sm:px-2 sm:py-2"
              />
            </Link>
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
