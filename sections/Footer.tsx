import Link from 'next/link'
import React from 'react'
import { Button } from '@/components'
import { sectionMediaQueries } from '@/constants'

const Footer = () => {
  return (
    <div className="mont text pt-[100px] footerColor pb-[50px]">
      <div className={`${sectionMediaQueries} my-0 mx-auto`}>
        <Link href="#hero">
          <Button title="back to top?" inline />
        </Link>
        <p className="w-[350px] mt-[75px] leading-5">
          now that you know enough about me, hit me up tell me something about
          yourself too.
        </p>
        <div className="mt-[30px] flex justify-between">
          <div className="my-auto">
            <span>
              copyright © kristijan lazarev 2023. all rights reserved.
            </span>
          </div>
          <div>
            <Link href="/">
              <Button title="privacy policy" inline margin="mx-3" />
            </Link>
            <Link href="/">
              <Button title="terms of use" inline margin="mx-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
