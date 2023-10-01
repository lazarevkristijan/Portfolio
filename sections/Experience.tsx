import { Heading, ExperienceCard } from "@/components"
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  workExperiences,
} from "@/constants"
import React from "react"

const Experience = () => {
  return (
    // pb-[20px], default is 50px, but we have 30px margin from the experiences
    <div
      className={`mont smallCaps ${sectionTopDivStyles} pb-[20px]`}
      id="experience"
    >
      <div className={` ${sectionMediaQueries}`}>
        <Heading title="EXPERIENCE" />
        <div className="mt-[50px] text-[20px] xl:text-[18px] sm:text-[16px] flex flex-wrap">
          {workExperiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              imgSrc={exp.imgSrc}
              company={exp.company}
              periodFrom={exp.periodFrom}
              periodTo={exp.periodTo}
              employmentType={exp.employmentType}
              location={exp.location}
              locationType={exp.locationType}
              skills={exp.skills}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
