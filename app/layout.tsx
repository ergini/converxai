import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Converx AI - AI Customer Service',
  description: 'We take your business to another horizon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body
        className={inter.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
