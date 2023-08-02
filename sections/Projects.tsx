'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heading, ProjectCard } from '../components/index'
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  projects,
  hoverStyles,
} from '@/constants'

const Projects = () => {
  return (
    // xl:pb-[30px] - usually 50px now 30, because projects have 20px margin bottom 20 + 30 = 50
    <div
      className={`text-right mont ${sectionTopDivStyles} xl:pb-[30px]`}
      id="projects"
    >
      <div className={`xs:text-center ${sectionMediaQueries}`}>
        <Heading title="PROJECTS" />

        {/* Mapping over all projects */}
        <div className="flex flex-wrap justify-evenly mt-[50px]">
          {projects.map((project, index) => (
            <motion.div key={index} className={`${hoverStyles} cursor-auto`}>
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
