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
      <div className={`md:text-center ${sectionMediaQueries} xs:mt-[0]`}>
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
          <Button title="back to top?" />
        </Link>
        {/* Quote */}
        <p className="leading-5 xs:mx-auto mt-[50px] w-[320px] sm:text-center md:mx-auto">
          it's not about who's the most talented, it's about who's the{" "}
          <span className="text-red-500 font-bold underline selection:bg-black">
            hungriest
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer
