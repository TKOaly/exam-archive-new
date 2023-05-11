import '@styles/main.scss'
import React from 'react'
import Header from '@components/Header'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header className="layout__header" />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
