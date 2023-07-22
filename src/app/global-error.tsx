'use client'
import { useEffect } from 'react'

import Header from '@components/Header'

export const metadata = {
  title: 'Error - Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error('Error: ', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header className="layout__header" />
          <div className="page-container">
            <main>
              <h2>Something went wrong!</h2>
              <button onClick={() => reset()}>Try again</button>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

export default GlobalError
