import React from 'react'
import { Heading, ProjectCard } from '../components/index'
import { projects } from '../constants/'

const Projects = () => {
  return (
    <div className="mont text-right">
      <Heading title="PROJECTS" />
      <p className="mt-[77px] mb-[138px]">
        PROJECT EXAMPLES TO SHOW SOME OF WHAT I KNOW
      </p>
      <div className="flex flex-wrap justify-evenly">
        {projects.map((project, index) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            tools={project.tools}
            imgUrl={project.imgUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
