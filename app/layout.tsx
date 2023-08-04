import './globals.css'
import type { Metadata } from 'next'
import { CustomHead } from '@/components'

export const metadata: Metadata = {
  title: 'Kristijan | Portfolio',
  description: `Kristijan Lazarev's Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CustomHead />
      <body>{children}</body>
    </html>
  )
}
