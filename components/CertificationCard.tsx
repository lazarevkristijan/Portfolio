import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
}) => {
  return (
    <Link href={linkToCertification} target="_blank">
      <div className="flex justify-end md:justify-center mont text-[18px] smallCaps items-center mt-[10px]">
        <div className="md:text-center md:mb-[30px]">
          <div className="hidden md:block w-[200px] my-0 mx-auto bg-[#fff] ">
            <div className="w-[50px] h-[50px] my-auto mx-auto">
              <Image
                src={issuerLogo}
                alt={`${issuer} logo`}
                width={100}
                height={100}
                className="scale-150"
              />
            </div>
          </div>

          <p>{name}</p>
          <p>
            {issuer} - {issueDate}
          </p>
          <p>{skillsLearnt}</p>
        </div>
        <div className="block md:hidden bg-[#fff] ml-2">
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
}

export default CertificationCard
