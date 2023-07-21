import React from 'react'
import { Heading, SkillCard, CertificationCard } from '../components/index'
import {
  frontEndSkills,
  backEndSkills,
  designSkills,
  certifications,
} from '@/constants'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="mont pb-[100px]  shadow-2xl" id="skills">
      <div className="w-[1100px] my-0 mx-auto">
        <Heading title="SKILLS" />
        <div className="flex flex-wrap pt-[80px]">
          <div className="w-1/3 h-fit">
            <p className="subSectionHeader text-center">FRONT END</p>
            <div className="pt-[30px]">
              {frontEndSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
          </div>
          <div className="w-1/3 h-fit">
            <p className="subSectionHeader text-center">BACK END</p>
            <div className="pt-[30px]">
              {backEndSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
            <div className="mt-[130px]">
              <Image
                src="/businessImage.png"
                width={300}
                height={250}
                alt="business thumbnail"
                className="my-0 mx-auto"
              />
            </div>
          </div>
          <div className="w-1/3 h-fit">
            <p className="subSectionHeader text-center">DESIGN</p>
            <div className="pt-[30px]">
              {designSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
            <div className="h-fit text-right mt-[50px] flex flex-wrap">
              <div className="w-full text-center">
                <p className="text-[35px]">CERTIFICATES</p>
              </div>
              <div>
                {certifications.map((certification, index) => (
                  <CertificationCard
                    name={certification.name}
                    issuer={certification.issuer}
                    issueDate={certification.issueDate}
                    skillsLearnt={certification.skillsLearnt}
                    issuerLogo={certification.issuerLogo}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
