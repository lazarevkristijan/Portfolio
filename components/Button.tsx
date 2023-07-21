import React from 'react'

const Button = ({
  title,
  inline,
  margin,
}: {
  title: string
  inline?: boolean
  margin?: string
}) => {
  return (
    <div
      className={`px-5 py-3 bg-[#1F1F2D] max-w-fit rounded-full hover:scale-105 transition-all ${
        inline ? 'inline-block' : ''
      } ${margin} `}
    >
      {title}
    </div>
  )
}

export default Button
