import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hellige Hallvard ortodokse menighet',
  description: 'Erkebispedømmet av menigheter med russisk tradisjon i Vesteuropa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_25.gif" sizes="32x32" />
        <link rel="icon" href="/favicon_142.gif" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon_151.gif" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
