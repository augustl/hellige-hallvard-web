import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hellige Hallvard ortodokse menighet',
  description: 'Erkebispedømmet av menigheter med russisk tradisjon i Vesteuropa',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const wpPagesData: any[] = await (await fetch(`https://public-api.wordpress.com/wp/v2/sites/${process.env.NEXT_PUBLIC_WORDPRESS_URL}/pages?context=embed&per_page=100&orderby=menu_order&order=asc&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}`)).json()

  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon_25.gif" sizes="32x32" />
        <link rel="icon" href="/favicon_142.gif" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon_151.gif" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col items-center`}>
        <nav className='flex flex-col gap-10 items-center my-10 px-5' role="navigation">
          <a href="/">
            <Image
                src="/orthodox_cross_logo_red.gif"
                alt=""
                width={120}
                height={152.283}
                priority
            />
          </a>

          <a href="/" className='font-bold text-3xl font-serif text-center'>Hellige Hallvard ortodokse menighet</a>

          <Menu wpPagesData={wpPagesData} />
        </nav>
        <main className='w-full px-5'>
          {children}
        </main>
        <footer className="mt-40 w-full px-5 bg-gray-600">
          <div className="mx-auto max-w-6xl py-20 text-white">
            <p>Hellige Hallvard ortdokse menighet</p>
            <p>Myrerveien 4, 0494 Oslo</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
