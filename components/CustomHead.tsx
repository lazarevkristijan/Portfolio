import React from 'react'
import Head from 'next/head'
import favicon from '../public/favicon.ico'

type Props = {
  title?: string
}

const CustomHead = ({ title = 'Kristijan | Portfolio' }: Props) => (
  <Head>
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    <title>{title}</title>
  </Head>
)

export default CustomHead
