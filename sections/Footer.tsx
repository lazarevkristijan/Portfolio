import Link from 'next/link'
import React from 'react'
import { Button } from '@/components'
import { sectionMediaQueries, sectionTopDivStyles } from '@/constants'

const Footer = () => {
  return (
    <div
      className={`${sectionTopDivStyles} mont smallCaps text-[20px] pt-[100px]`}
    >
      <div className={`${sectionMediaQueries} xs:w-[90%] xs:text-center`}>
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
