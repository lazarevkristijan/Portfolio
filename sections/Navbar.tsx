import React from 'react'
import Link from 'next/link'
import { navItems } from '../constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-[1200px] flex h-[50px]">
      <Image
        src="/Klogo.svg"
        width={45}
        height={45}
        alt="logo"
        className="ml-[50px]"
      />
      <ul className="w-full flex justify-evenly">
        {navItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <li className="navText mont">{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
