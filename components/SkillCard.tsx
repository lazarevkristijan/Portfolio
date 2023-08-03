// Skill Card is used in the skills section to make consistent looking skill bars
// Includes default styles which can be slightly overriden to fit the specific needs

import Image from 'next/image'
import React from 'react'

const SkillCard = ({ name, level }: { name: string; level: string }) => {
  const skillLevel = level
  return (
    // Rectangle - progress bar
    <div className="text-[20px] smallCaps mt-[20px] flex justify-center">
      <div>
        {/* Skill name */}
        <p>
          {name}

          {/* Skill logo */}
          <Image
            src={`/skillIcons/${name}.svg`}
            alt={`${name} icon`}
            width={20}
            height={20}
            // duplicate w & h, because console warnings apperently
            className="ml-1 inline w-[20px] h-[20px]"
          />
        </p>
        <div className="bg-white mt-[15px] w-[280px] h-[35px] rounded-[15px] flex items-center">
          {/* Skill level represented by width of this div on top how long it stretches across the progress bar going from bad to good (NOT to perfect as it usually is used as) */}
          <div
            className={`bg-[#59747b] ml-[4px] mr-[4px] ${skillLevel} h-[27px] rounded-[15px]`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
