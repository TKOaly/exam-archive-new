import React from 'react'
import { redirect } from 'next/navigation'
import { Anybody, Josefin_Sans } from 'next/font/google'

import { validateRights } from '@services/tkoUserService'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Providers from './Providers'

import '@styles/main.scss'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefinSans'
})

const anybody = Anybody({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anybody'
})

const RootLayout = async ({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) => {
  const isAccess = await validateRights('access')

  if (!isAccess) {
    redirect('/auth/signin')
  }

  return (
    <html lang="en" className={`${anybody.variable} ${josefinSans.variable}`}>
      <body className="bg-gray-800">
        <Providers>
          <Header />
          <div className="bg-yellow-500 pb-5">
            <div className="container mx-auto box-border max-w-screen-lg bg-gray-50 px-5 shadow-xl">
              {modal}
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
