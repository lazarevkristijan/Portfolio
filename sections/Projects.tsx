'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heading, ProjectCard } from '../components/index'
import { sectionMediaQueries, sectionTopDivStyles, projects } from '@/constants'

const Projects = () => {
  return (
    <div
      className={`text-right mont md:pb-[50px] ${sectionTopDivStyles}`}
      id="projects"
    >
      <div className={`xs:text-center ${sectionMediaQueries}`}>
        <Heading title="PROJECTS" />
        <p className="text-[30px] xl:text-[27.5px] lg:text-[25px] md:text-[22.5px] sm:text-[20px] smallCaps mt-[80px] mb-[138px] xl:mb-[118px] lg:mb-[98px] lg:mt-[47px] md:mb-[78px]">
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
