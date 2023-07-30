// Contact detail is used in the Contact section to reduce code repetition

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
