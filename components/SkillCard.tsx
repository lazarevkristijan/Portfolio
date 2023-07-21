import React from 'react'

const SkillCard = ({ name, level }: { name: string; level: string }) => {
  const skillLevel = level
  return (
    <div className="mt-[25px] text flex justify-center">
      <div>
        <p>{name}</p>
        <div className="w-[280px] h-[35px] bg-white mt-[15px] rounded-[15px] flex items-center">
          <div
            className={`${skillLevel} h-[27px] ml-[4px] mr-[4px] bg-[#59747b] rounded-[15px]`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
