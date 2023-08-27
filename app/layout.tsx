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
      <meta name="google-site-verification" content="xGaVyTW-r0PGDBYOxdL25Ev8NuSQFn4milwybHfsiig" />
      <body>{children}</body>
    </html>
  )
}
