import { PropsWithChildren } from 'react'

import { Header } from '@/components/header'

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
      <Header />

      {children}
    </div>
  )
}
