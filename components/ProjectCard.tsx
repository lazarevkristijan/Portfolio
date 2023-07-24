import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="mont smallCaps text-[20px] md:text-[18px] w-[301px] text-left mb-[100px] md:mb-[50px] relative">
      <Image
        src={imgUrl}
        width={350}
        height={300}
        alt={name}
        className="shadow-2xl imageBorder"
      />
      <Link
        href={githubUrl}
        target="_blank"
        className="absolute top-1 right-10 bg-white rounded-[15px] p-[3px]"
      >
        <Image src="/githubLogo.svg" width={25} height={25} alt="github logo" />
      </Link>
      <Link
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
      </Link>
      <p>{name}</p>
      <p>{description}</p>
      <p>{tools}</p>
    </div>
  )
}

export default ProjectCard
