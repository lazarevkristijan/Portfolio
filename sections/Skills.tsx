'use client'

import React from 'react'
import { Heading, SkillCard, CertificationCard } from '../components/index'
import {
  frontEndSkills,
  backEndSkills,
  designSkills,
  certifications,
} from '@/constants'
import Image from 'next/image'
import { sectionMediaQueries } from '@/constants'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

const Skills = () => {
  return (
    <div
      className="mont mainBackgroundPattern pb-[100px]  shadow-2xl "
      id="skills"
    >
      {/* <div className={`${sectionMediaQueries} my-0 mx-auto`}> */}
      <div
        className={`text-center w-[1100px] xl:w-[900px] lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[90%] my-0 mx-auto`}
      >
        <Heading title="SKILLS" />
        <div className="flex flex-wrap mt-[80px]">
          <div className="w-1/3 h-fit lg:w-1/2 md:w-full">
            <p className="smallCaps text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-center">
              FRONT END
            </p>
            <div className="mt-[30px]">
              {frontEndSkills.map((skill, index) => (
                <SkillCard name={skill.name} level={skill.level} key={index} />
              ))}
            </div>
          </div>
          <div className="w-1/3 h-fit lg:w-1/2 md:w-full md:mt-[75px]">
            <p className="smallCaps text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-center">
              BACK END
            </p>
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
              className="mt-[130px] lg:mt-[90px]"
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
          <div className="w-1/3 h-fit lg:w-full lg:mt-[75px] lg:flex lg:flex-wrap">
            <div className="block lg:w-1/2 md:w-full">
              <p className="smallCaps text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-center">
                DESIGN
              </p>
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
            <div className="h-fit text-right mt-[50px] lg:mt-[0px] flex flex-wrap lg:w-1/2 md:w-full">
              <div className="w-full text-center md:mt-[75px]">
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
