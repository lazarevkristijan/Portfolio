// Heading component is used on the top of each section to make all section headers look the same
// Includes default styles which can be slightly overriden to fit the specific needs

import React from 'react'

const Heading = ({ title }: { title: string }) => (
  <>
    <br className="xs:block hidden" />
    <hr className="border-black mont mx-auto w-[1070px] xl:w-[870px] lg:w-[670px] md:w-[470px] sm:w-[270px]" />
    <p className="pt-[50px] text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[35px]">
      {title}
    </p>
  </>
)

export default Heading
