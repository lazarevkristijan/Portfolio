'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navIcons, navText } from '../constants'
import Image from 'next/image'
import { displayMediaQueries } from '@/constants'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 600
  }

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth <= 420) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    handleWindowSize()
    window.addEventListener('resize', handleWindowSize)

    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  }, [])
  return (
    <nav
      // className={`${displayMediaQueries} flex items-center h-[50px]`}
      className={` w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-full flex items-center h-[50px]`}
    >
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
        {isMobile
          ? navIcons.map((icon, index) => (
              <Link href={icon.url} key={index}>
                <div className="bg-white active:bg-gray-300  py-2 px-2 rounded-full">
                  <Image
                    src={icon.fileUrl}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))
          : navText.map((text, index) => (
              <Link href={text.url} key={index}>
                <li className="smallCaps text-[30px] md:text-[27.5px] sm:text-[20px] mont hover:scale-105 transition-all">
                  {text.name}
                </li>
              </Link>
            ))}
      </ul>
    </nav>
  )
}

export default Navbar
