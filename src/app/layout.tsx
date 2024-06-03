import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import MetaThemeColor from '@/components/MetaThemeColor'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 3600

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PAGE_TITLE,
  description: 'Erkebispedømmet av menigheter med russisk tradisjon i Vesteuropa',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#23231E' },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const wpPagesData: any[] = await (await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?context=embed&per_page=100&orderby=menu_order&order=asc&exclude=${process.env.NEXT_PUBLIC_HOME_PAGE_ID}&parent=0`, {next: {tags: ["wp-pages"]}})).json()

  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon_25.gif" sizes="32x32" />
        <link rel="icon" href="/favicon_142.gif" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon_151.gif" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col items-center text-base`}>
        <nav className='flex flex-col gap-5 md:gap-10 items-center mt-10 mb-10 md:mb-20 px-5 print:hidden' role="navigation">
          <Link href="/" aria-hidden="true" tabIndex={-1}>
            <Image
                className="max-h-[100px] md:max-h-none object-contain"
                src="/orthodox_cross_logo_red.gif"
                alt=""
                width={120}
                height={152.283}
                tabIndex={-1}
                priority
            />
          </Link>

          <Link href="/" title="Hellige Halvard ortodokse menighet - forsiden" className='font-bold text-xl md:text-3xl font-serif text-center'>Hellige Hallvard ortodokse menighet</Link>

          <Menu wpPagesData={wpPagesData} />
        </nav>
        <main className='w-full px-5'>
          {children}
        </main>
        <footer className="mt-40 w-full px-5 bg-gray-600 dark:bg-black print:hidden">
          <div className="mx-auto max-w-6xl py-20 text-white">
            <p>Hellige Hallvard ortdokse menighet</p>
            <p>Myrerveien 4, 0494 Oslo</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
