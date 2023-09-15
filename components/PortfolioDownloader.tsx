import React from "react"
import Image from "next/image"
import Link from "next/link"
import { aboutTextStyles, hoverStyles } from "@/constants"

const PortfolioDownloader = () => {
  return (
    // Link that will redirect and directly download the CV
    <Link
      className="flex"
      href="https://www.dropbox.com/scl/fi/3vjnhsdux8ax21ytaa2ox/Kristijan-Lazarev-CV.pdf?rlkey=uk35vu3ft3smlvm36bsk6cig2&dl=0"
      target="_blank"
    >
      <p
        className={`${aboutTextStyles} bg-[#1F1F2D] px-2 rounded-md ${hoverStyles}`}
      >
        pdf portfolio
        {/* Download Icon */}
        <Image
          src="/mediaIcons/eye.svg"
          width={15}
          height={15}
          alt="download button"
          className="inline ml-1"
        />
      </p>
    </Link>
  )
}

export default PortfolioDownloader
