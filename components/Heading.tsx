import React from 'react'

const Heading = ({ title }: { title: string }) => (
  <>
    <hr className="pt-[100px] my-0 mx-auto w-[1070px] border-black mont" />
    <p className="sectionHeader">{title}</p>
  </>
)

export default Heading
