'use client'

import React from 'react'
import { Heading, ProjectCard } from '../components/index'
import { projects } from '../constants/'
import { motion } from 'framer-motion'
import { sectionMediaQueries, sectionTopDivStyles } from '@/constants'

const Projects = () => {
  return (
    <div
      className={`${sectionTopDivStyles} mont md:pb-[50px] text-right`}
      id="projects"
    >
      <div className={`${sectionMediaQueries} xs:text-center`}>
        <Heading title="PROJECTS" />
        <p className="mt-[80px] mb-[138px] xl:mb-[118px] lg:mb-[98px] lg:mt-[47px] md:mb-[78px] smallCaps text-[30px] xl:text-[27.5px] lg:text-[25px] md:text-[22.5px] sm:text-[20px]">
          demonstrating my skills: <br className="md:inline hidden" /> a
          selection of projects
        </p>
        <div className="flex flex-wrap justify-evenly">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, borderRadius: '100%' }}
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                tools={project.tools}
                imgUrl={project.imgUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
