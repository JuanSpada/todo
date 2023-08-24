import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo by Juanzi',
  description: 'Todo list app in next.js and Supabase'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
