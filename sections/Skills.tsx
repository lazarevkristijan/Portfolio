'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading, SkillCard, CertificationCard } from '../components/index'
import {
  frontEndSkills,
  backEndSkills,
  designSkills,
  certifications,
  skillsSubHeaderStyles,
  sectionMediaQueries,
  sectionTopDivStyles,
} from '@/constants'
import { slideIn } from '@/utils/motion'

const Skills = () => {
  return (
    // pb - medium usually 75px, now 45px cos certification cards have 30px margin bottom, so 30 + 45 = 75
    <div className={`mont ${sectionTopDivStyles} md:pb-[45px]`} id="skills">
      <div className={`${sectionMediaQueries} xs:w-[90%]`}>
        <Heading title="SKILLS" />
        <div className="mt-[80px] md:mt-[60px] flex flex-wrap">
          <div className="w-1/3 h-fit lg:w-1/2 md:w-full">
            <p className={`${skillsSubHeaderStyles}`}>FRONT END</p>
            <div className="mt-[30px]">
              {frontEndSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
          </div>
          <div className="md:mt-[60px] w-1/3 h-fit lg:w-1/2 md:w-full">
            <p className={`${skillsSubHeaderStyles}`}>BACK END</p>
            <div className="mt-[30px]">
              {backEndSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
            <motion.div
              variants={slideIn('up', 'spring', 0, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-[130px] lg:mt-[60px]"
            >
              <Image
                src="/businessImage.png"
                width={300}
                height={250}
                alt="business thumbnail"
                className="my-0 mx-auto"
              />
            </motion.div>
          </div>
          <div className="lg:mt-[60px] w-1/3 h-fit lg:w-full lg:flex lg:flex-wrap">
            <div className="lg:w-1/2 md:w-full block">
              <p className={`${skillsSubHeaderStyles}`}>DESIGN</p>
              <div className="mt-[30px]">
                {designSkills.map((skill, index) => (
                  <SkillCard
                    name={skill.name}
                    level={skill.level}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="text-right mt-[50px] lg:mt-[0px] lg:w-1/2 md:w-full h-fit flex flex-wrap">
              <div className="text-center md:mt-[60px] w-full">
                <p className="text-[35px] lg:text-[40px]">CERTIFICATES</p>
              </div>

              <div className="lg:mt-[30px] md:w-full">
                {certifications.map((certification, index) => (
                  <CertificationCard
                    name={certification.name}
                    issuer={certification.issuer}
                    issueDate={certification.issueDate}
                    skillsLearnt={certification.skillsLearnt}
                    issuerLogo={certification.issuerLogo}
                    linkToCertification={certification.linkToCertification}
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
