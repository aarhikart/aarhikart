import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Aarhi Kart',
  description: 'Premium Mobile Store UI',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}