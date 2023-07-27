import Image from 'next/image'
import React from 'react'

const SkillCard = ({ name, level }: { name: string; level: string }) => {
  const skillLevel = level
  return (
    <div className="text-[20px] smallCaps mt-[25px] flex justify-center">
      <div>
        <p>
          {name}
          <Image
            src={`${name}.svg`}
            alt={`${name} icon`}
            width={20}
            height={20}
            className="ml-1 inline"
          />
        </p>
        <div className="bg-white mt-[15px] w-[280px] h-[35px] rounded-[15px] flex items-center">
          <div
            className={`bg-[#59747b] ml-[4px] mr-[4px] ${skillLevel} h-[27px] rounded-[15px]`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
