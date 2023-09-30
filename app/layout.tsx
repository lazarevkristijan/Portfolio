import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Kristijan Lazarev",
  description: `Kristijan Lazarev's Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="xGaVyTW-r0PGDBYOxdL25Ev8NuSQFn4milwybHfsiig"
      />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
