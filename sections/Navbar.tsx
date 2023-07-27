'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navIcons, navText, displayMediaQueries } from '../constants'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState('')

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
      <Link href="#hero">
        <Image
          src="/Klogo.svg"
          width={45}
          height={45}
          alt="logo"
          className="ml-[50px] xl:ml-[40px] lg:ml-[30px] md:ml-[20px] sm:ml-[10px] xs:ml-[20px] md:w-[40px] hover:scale-105 transition-all"
        />
      </Link>
      <ul className="w-full flex justify-evenly">
        {isMobile === 'true'
          ? navIcons.map((icon, index) => (
              <Link href={icon.url} key={index}>
                <div className="bg-[#1f3a40] active:bg-gray-300 py-2 px-2 rounded-full">
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
                <li className="smallCaps text-[30px] md:text-[27.5px] sm:text-[20px] mont hover:scale-105 transition-all text-[#c1ffbf]">
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
