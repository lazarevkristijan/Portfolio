import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { aboutTextStyles, hoverStyles } from '@/constants'

const PortfolioDownloader = () => {
  return (
    <Link
      className="flex"
      href="https://dl.dropboxusercontent.com/scl/fi/zbkkh2qhxml55ip4ti65u/Kristijan-Lazarev-CV-ENG.pdf?rlkey=4q793zfc99jhqzontj02lijxf&dl=0"
    >
      {/* PDF DOWNLOAD */}
      <p
        className={`${aboutTextStyles} bg-[#1F1F2D] px-2 rounded-md ${hoverStyles}`}
      >
        pdf portfolio
        <Image
          src="/download-button.svg"
          width={15}
          height={15}
          alt="download button"
          className="inline ml-2"
        />
      </p>
    </Link>
  )
}

export default PortfolioDownloader
