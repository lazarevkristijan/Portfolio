import React from 'react'
import Image from 'next/image'

const ProjectCard = ({
  name,
  description,
  tools,
  imgUrl,
}: {
  name: string
  description: string
  tools: string
  imgUrl: string
}) => {
  return (
    <div className="mont text w-[301px] text-left mb-[100px]">
      <Image src={imgUrl} width={300} height={300} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <p>{tools}</p>
    </div>
  )
}

export default ProjectCard
