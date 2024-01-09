"use client"

import React from "react"
import { Heading, ProjectCard } from "../components/index"
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  projects,
  hoverStyles,
} from "@/constants"

const Projects = () => (
  // xl:pb-[30px] - usually 50px now 30, because projects have 20px margin bottom
  <div
    className={`text-right mont ${sectionTopDivStyles} xl:pb-[30px]`}
    id="projects"
  >
    <div className={`${sectionMediaQueries}`}>
      <Heading title="PROJECTS" />

      <div className="flex flex-wrap justify-evenly mt-[50px]">
        {/* Mapping over all projects */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${hoverStyles} cursor-default`}
          >
            <ProjectCard
              name={project.name}
              tools={project.tools}
              imgUrl={project.imgUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Projects
