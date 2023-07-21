import React from 'react'
import Image from 'next/image'

const ProjectCard = ({
  name,
  description,
  tools,
  imgUrl,
  liveUrl,
  githubUrl,
}: {
  name: string
  description: string
  tools: string
  imgUrl: string
  liveUrl: string
  githubUrl: string
}) => {
  return (
    <div className="mont text w-[301px] text-left mb-[100px] relative">
      <Image
        src={imgUrl}
        width={300}
        height={300}
        alt={name}
        className="shadow-2xl imageBorder"
      />
      <a
        href={githubUrl}
        target="_blank"
        className="absolute top-1 right-10 bg-white rounded-[15px] p-[3px]"
      >
        <Image src="/githubLogo.svg" width={25} height={25} alt="github logo" />
      </a>
      <a
        href={liveUrl}
        target="_blank"
        className="absolute top-1 right-1 bg-white rounded-[15px] p-[3px]"
      >
        <Image
          src="/liveUrlButton.svg"
          width={25}
          height={25}
          alt="live logo"
        />
      </a>
      <p>{name}</p>
      <p>{description}</p>
      <p>{tools}</p>
    </div>
  )
}

export default ProjectCard
