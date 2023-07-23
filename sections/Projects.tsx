'use client'

import React from 'react'
import { Heading, ProjectCard } from '../components/index'
import { projects } from '../constants/'
import { motion } from 'framer-motion'
import { sectionMediaQueries } from '@/constants'

const Projects = () => {
  return (
    <div className="mont text-right  shadow-2xl" id="projects">
      <div className={`${sectionMediaQueries} my-0 mx-auto`}>
        <Heading title="PROJECTS" />
        <p className="mt-[77px] mb-[138px] smallCaps text-[30px] xl:text-[27.5px] lg:text-[25px] md:text-[22.5px] sm:text-[20px]">
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
