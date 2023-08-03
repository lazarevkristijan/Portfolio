// Reusable card component for for the certifications part of the project

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { hoverStyles } from '@/constants'

const CertificationCard = ({
  name,
  issuer,
  issueDate,
  skillsLearnt,
  issuerLogo,
  linkToCertification,
}: {
  name: string
  issuer: string
  issueDate: string
  skillsLearnt: string
  issuerLogo: string
  linkToCertification: string
}) => (
  // Link to certification
  <Link href={linkToCertification} target="_blank">
    <div
      className={`text-[18px] mont smallCaps flex justify-end md:justify-center items-center ${hoverStyles}`}
    >
      <div className="md:text-center md:mb-[20px]">
        <div className="bg-white my-0 mx-auto w-[200px] hidden md:block">
          <div className="my-auto mx-auto w-[50px] h-[50px]">
            {/* Div containing the issuer logo for < MEDIUM screens */}
            <Image
              src={issuerLogo}
              alt={`${issuer} logo`}
              width={100}
              height={100}
              className="scale-150"
            />
          </div>
        </div>

        {/* Name issuer date and skills learnt */}
        <p>{name}</p>
        <p>
          {issuer} - {issueDate}
        </p>
        <p>{skillsLearnt}</p>
      </div>

      {/* Div containing the issuer logo for > MEDIUM screens */}
      <div className="bg-white ml-2 block md:hidden">
        <div className="w-[50px]">
          <Image
            src={issuerLogo}
            alt={`${issuer} logo`}
            width={60}
            height={60}
            className="scale-150"
          />
        </div>
      </div>
    </div>
  </Link>
)

export default CertificationCard
