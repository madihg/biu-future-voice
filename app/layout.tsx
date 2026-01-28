import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Future Voice — Berlin International University",
  description:
    "A collective AI voice trained on our shared visions of the future. Created during a futuring workshop at Berlin International University by Halim Madi."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
