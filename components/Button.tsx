import React from 'react'

const Button = ({
  title,
  inline,
  margin,
  overridePadding,
}: {
  title: string
  inline?: boolean
  margin?: string
  overridePadding?: string
}) => {
  return (
    <div
      className={` bg-[#1F1F2D] 
      max-w-fit rounded-full
      hover:scale-105 transition-all cursor-pointer selection:bg-transparent
      ${margin || ''} 
      ${overridePadding || 'px-5 py-3'}
        ${inline ? 'inline-block' : ''}
         `}
    >
      {title}
    </div>
  )
}

export default Button
