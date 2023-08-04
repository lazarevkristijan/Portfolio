'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '@/components'
import { sectionMediaQueries, sectionTopDivStyles } from '@/constants'

const Footer = () => {
  useEffect(() => {
    let url = window.location.href.split('/')
    let target = url[url.length - 1].toLowerCase()
    let element = document.getElementById(target)
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div
      className={`text-[20px] mont smallCaps ${sectionTopDivStyles} pt-[50px]`}
    >
      <div className={`xs:text-center ${sectionMediaQueries} xs:mt-[0]`}>
        {/* Back to top */}
        <Link
          href="/"
          onClick={(e) => {
            let section = document.getElementById('hero')
            e.preventDefault()
            section &&
              section.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          <Button title="back to top?" inline />
        </Link>
        {/* Quote */}
        <p className="leading-5 xs:mx-auto mt-[50px] w-[320px]">
          your only limitation is the one <br />
          which you set up in your own mind. <br />
          -Napoleon Hill
        </p>

        {/* Div for legal stuff */}
        <div className="mt-[30px] flex justify-between md:flex-col-reverse">
          <div className="md:text-center my-auto">
            {/* Copyright */}
            <span>
              copyright © kristijan lazarev 2023.
              <br className="lg:inline hidden" /> all rights reserved.
            </span>
          </div>
          <div className="text-center md:flex md:justify-center">
            {/* Privacy Policy */}
            <Link
              href="/"
              onClick={function (e) {
                e.preventDefault()
              }}
            >
              <Button
                title="privacy policy"
                inline
                margin="mx-3 md:mx-1"
                overridePadding="px-5 py-3 sm:px-2 sm:py-2"
              />
            </Link>

            {/* Terms of Use */}
            <Link
              href="/"
              onClick={function (e) {
                e.preventDefault()
              }}
            >
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
