import React from 'react'

const ContactDetail = ({ media, link }: { media: string; link: string }) => {
  return (
    <>
      <p>
        {media}: {link}
      </p>
    </>
  )
}

export default ContactDetail
