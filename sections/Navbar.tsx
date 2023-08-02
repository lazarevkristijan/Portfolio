'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  navIcons,
  navText,
  displayMediaQueries,
  hoverStyles,
} from '../constants'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState('')

  // Handle toggling of icons and text
  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth <= 420) {
        setIsMobile('true')
      } else {
        setIsMobile('false')
      }
    }

    handleWindowSize()
    window.addEventListener('resize', handleWindowSize)

    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  }, [])

  return (
    <nav className={`${displayMediaQueries} h-[50px] flex items-center`}>
      {/* Logo button  */}
      <Link href="#hero">
        <Image
          src="/Klogo.svg"
          width={45}
          height={45}
          alt="logo"
          className={`ml-[50px] xl:ml-[40px] lg:ml-[30px] md:ml-[20px] sm:ml-[10px] xs:ml-[20px] md:w-[40px] ${hoverStyles}`}
        />
      </Link>
      {/* Mapping over nav icons and showing either icons for xs screens or text for > xs */}
      <ul className="w-full flex justify-evenly">
        {isMobile === 'true'
          ? navIcons.map((icon, index) => (
              <Link href={icon.url} key={index}>
                <div className="bg-[#1f3a40] active:bg-[#2c5a4c] py-2 px-2 rounded-full">
                  <Image
                    src={icon.fileUrl}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))
          : isMobile === 'false'
          ? navText.map((text, index) => (
              <Link href={text.url} key={index}>
                <li
                  className={`text-[#c1ffbf] smallCaps text-[30px] md:text-[27.5px] sm:text-[20px] mont ${hoverStyles}`}
                >
                  {text.name}
                </li>
              </Link>
            ))
          : ''}
      </ul>
    </nav>
  )
}

export default Navbar
