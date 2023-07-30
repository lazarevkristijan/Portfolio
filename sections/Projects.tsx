'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heading, ProjectCard } from '../components/index'
import { sectionMediaQueries, sectionTopDivStyles, projects } from '@/constants'

const Projects = () => {
  return (
    // pb - usually 100px, here we make it xl:80 cos we have 20px mb on the projectcards, so now we have combined 100px spacing below the section, so 20 + 80 = 100
    // pb - medium usually 75px, here we make it md:pb-[25px] because on medium the project cards have 50px mb, so 25 + 50 = 75
    <div
      className={`text-right mont md:pb-[50px] ${sectionTopDivStyles} xl:pb-[80px] md:pb-[25px]`}
      id="projects"
    >
      <div className={`xs:text-center ${sectionMediaQueries}`}>
        <Heading title="PROJECTS" />
        <p className="text-[30px] xl:text-[27.5px] lg:text-[25px] md:text-[22.5px] sm:text-[20px] smallCaps mt-[80px] md:mt-[60px] mb-[80px] md:mb-[60px]">
          demonstrating my skills: <br className="md:inline hidden" /> a
          selection of projects
        </p>

        {/* Mapping over all projects */}
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
