import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'AKR Restaurant',
  description: 'Created by NI9Logic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
