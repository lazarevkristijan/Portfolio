import './globals.css'
import type { Metadata } from 'next'

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
