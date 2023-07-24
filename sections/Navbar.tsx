'use client'

import React from 'react'
import Link from 'next/link'
import { navItems } from '../constants'
import Image from 'next/image'
import { displayMediaQueries } from '@/constants'

const Navbar = () => {
  return (
    <nav
      // className={`${displayMediaQueries} flex items-center h-[50px]`}
      className={`w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[600px] sm:w-[400px] xs:w-full flex items-center h-[50px]`}
    >
      <Link href="#hero">
        <Image
          src="/Klogo.svg"
          width={45}
          height={45}
          alt="logo"
          className="ml-[50px] xl:ml-[40px] lg:ml-[30px] md:ml-[20px] sm:ml-[10px] md:w-[40px] hover:scale-105 transition-all"
        />
      </Link>
      <ul className="w-full flex justify-evenly">
        {navItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <li
              key={index}
              className="smallCaps text-[30px] md:text-[27.5px] sm:text-[20px] mont hover:scale-105 transition-all"
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
