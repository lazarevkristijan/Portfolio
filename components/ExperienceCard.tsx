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
  skills: string
}) => {
  return (
    <div className="xl:mb-[30px] mx-auto w-[320px] xl:w-[301px] md:w-[240px] sm:w-[260px] xs:w-[90%]">
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
      <div className="flex sm:flex md:hidden">
        <Image
          src="/experienceIcons/company.svg"
          alt="company icon"
          width={10}
          height={10}
          className="mr-[5px]"
        />
        <h4>
          {company} | {employmentType} - {locationType}
        </h4>
      </div>
      <div className="hidden sm:hidden md:block">
        <div className="flex">
          <Image
            src="/experienceIcons/company.svg"
            alt="company icon"
            width={10}
            height={10}
            className="mr-[5px]"
          />
          <h4>{company}</h4>
        </div>
        <div className="flex">
          <Image
            src="/experienceicons/workType.svg"
            alt="work type icon"
            width={15}
            height={15}
            className="mr-[5px]"
          />
          <h4>
            {employmentType} - {locationType}
          </h4>
        </div>
      </div>

      <div className="flex">
        <Image
          src="/experienceIcons/duration.svg"
          alt="duration icon"
          width={10}
          height={10}
          className="mr-[5px]"
        />
        <h4>
          {periodFrom} - {periodTo}
        </h4>
      </div>
      <div className="flex">
        <Image
          src="/experienceIcons/location.svg"
          alt="location icon"
          width={10}
          height={15}
          className="mr-[5px]"
        />
        <h4>{location}</h4>
      </div>
      <div>
        <Image
          src="/experienceIcons/skillsUsed.svg"
          alt="skills icon"
          width={15}
          height={15}
          className="float-left mt-[10px] xl:mt-[8px] sm:mt-[6px] mr-[5px]"
        />
        <p>{skills}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
