import React from "react"
import Image from "next/image"

const ExperienceCard = ({
  title,
  imgSrc,
  company,
  periodFrom,
  periodTo,
  employmentType,
  location,
  locationType,
  description,
  skills,
}: {
  title: string
  imgSrc: string
  company: string
  periodFrom: string
  periodTo: string
  employmentType: string
  location: string
  locationType: string
  description: string
  skills: string
}) => {
  return (
    <div className="mb-[30px] mx-auto w-[300px] xl:w-[301px] md:w-[240px] xs:w-[80%]">
      <div className="flex items-center mb-[5px]">
        <Image
          src={`/experienceIcons/${imgSrc}`}
          alt={`${company} logo`}
          width={50}
          height={50}
          className="mr-[10px]"
        />
        <h3 className="text-[30px] lg:text-[25px] md:text-[23px]">{title}</h3>
      </div>
      <h4>
        {company} | {employmentType} - {locationType}
      </h4>

      <h4>
        {periodFrom} - {periodTo}
      </h4>
      <h4 className="mb-[5px]">{location}</h4>
      <p className="mb-[5px]">{description}</p>
      <p>{skills}</p>
    </div>
  )
}

export default ExperienceCard
