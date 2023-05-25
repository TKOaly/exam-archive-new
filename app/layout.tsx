import React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import '@styles/main.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header className="layout__header" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
