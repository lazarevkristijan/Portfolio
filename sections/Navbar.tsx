'use client'

import React from 'react'
import Link from 'next/link'
import { navItems } from '../constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-[1200px] flex items-center h-[50px]">
      <Link href="#hero">
        <Image
          src="/Klogo.svg"
          width={45}
          height={45}
          alt="logo"
          className="ml-[50px]  hover:scale-105 transition-all"
        />
      </Link>
      <ul className="w-full flex justify-evenly">
        {navItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <li
              key={index}
              className="navText mont hover:scale-105 transition-all"
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
