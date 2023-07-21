import Image from 'next/image'
import React from 'react'

const CertificationCard = ({
  name,
  issuer,
  issueDate,
  skillsLearnt,
  issuerLogo,
}: {
  name: string
  issuer: string
  issueDate: string
  skillsLearnt: string
  issuerLogo: string
}) => {
  return (
    <div className="flex justify-end mont text-[18px] smallCaps items-center">
      <div>
        <p>{name}</p>
        <p>
          {issuer} - {issueDate}
        </p>
        <p>{skillsLearnt}</p>
      </div>
      <div className="bg-[#D9D9D9] w-[60px] h-[60px] ml-2">
        <div>
          <Image
            src={issuerLogo}
            alt={`${issuer} logo`}
            width={100}
            height={100}
            className="scale-125"
          />
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
