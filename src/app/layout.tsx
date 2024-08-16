import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'devstore',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={inter.variable} lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
