"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  navIcons,
  navText,
  displayMediaQueries,
  hoverStyles,
} from "../constants"

type NavbarState = {
  isMobile: boolean | null
}

const Navbar = () => {
  // State for on/off mobile mode (just icons instead of text on navbar)
  const [mobileState, setMobileState] = useState<NavbarState>({
    isMobile: null,
  })

  // Handle toggling of icons and text
  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth <= 820) {
        setMobileState({ isMobile: true })
      } else {
        setMobileState({ isMobile: false })
      }
    }

    handleWindowSize()
    window.addEventListener("resize", handleWindowSize)

    return () => {
      window.removeEventListener("resize", handleWindowSize)
    }
  }, [])

  // Smooth scrolling functionality
  useEffect(() => {
    let url = window.location.href.split("/")
    let target = url[url.length - 1].toLowerCase()
    let element = document.getElementById(target)
    element && element.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <nav className={`${displayMediaQueries} h-[50px] flex items-center`}>
      {/* Mapping over nav icons and showing either icons for xs screens or text for > xs */}
      <ul className="w-full flex justify-evenly">
        {mobileState.isMobile
          ? navIcons.map((icon, index) => (
              <li>
                <Link
                  href="/"
                  key={index}
                  onClick={(e) => {
                    let section = document.getElementById(
                      icon.url ? icon.url : icon.name
                    )
                    e.preventDefault()
                    section &&
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                  }}
                >
                  <div className="bg-[#1f3a40] active:bg-[#2c5a4c] py-2 px-2 rounded-full">
                    <Image
                      src={`/navIcons/${icon.name}Icon.svg`}
                      alt={icon.name}
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>
              </li>
            ))
          : mobileState.isMobile === false &&
            navText.map((text, index) => (
              <li
                className={`text-[#c1ffbf] smallCaps text-[30px] md:text-[27.5px] sm:text-[20px] mont ${hoverStyles}`}
              >
                <Link
                  href="/"
                  key={index}
                  onClick={(e) => {
                    let section = document.getElementById(
                      text.sectionName ? text.sectionName : text.name
                    )
                    e.preventDefault()
                    section &&
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                  }}
                >
                  {text.name}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  )
}

export default Navbar
