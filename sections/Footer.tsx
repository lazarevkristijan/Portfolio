"use client"

import Link from "next/link"
import React, { useEffect } from "react"
import { Button } from "@/components"
import { sectionMediaQueries, sectionTopDivStyles } from "@/constants"

const Footer = () => {
  useEffect(() => {
    let url = window.location.href.split("/")
    let target = url[url.length - 1].toLowerCase()
    let element = document.getElementById(target)
    element && element.scrollIntoView({ behavior: "smooth", block: "start" })
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
            let section = document.getElementById("home")
            e.preventDefault()
            section &&
              section.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
        >
          <Button
            title="back to top?"
            margin="md:mx-auto"
          />
        </Link>
        {/* Quote */}
        <p className="leading-5 xs:mx-auto mt-[50px] w-[320px] sm:text-center">
          your only limitation is the one <br />
          which you set up in your own mind. <br />
          Napoleon Hill
        </p>
      </div>
    </div>
  )
}

export default Footer
