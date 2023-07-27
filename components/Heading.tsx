import React from 'react'

const Heading = ({ title }: { title: string }) => (
  <>
    <hr className="border-black mont my-0 mx-auto w-[1070px] xl:w-[870px] lg:w-[670px] md:w-[470px] sm:w-[270px]" />
    <p className="pt-[100px] md:pt-[75px] text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[35px]">
      {title}
    </p>
  </>
)

export default Heading
