import React from 'react'

const ContactDetail = ({ media, link }: { media: string; link: string }) => {
  return (
    <>
      <p className="mt-1">
        {media}: {link}
      </p>
    </>
  )
}

export default ContactDetail
