'use client'
import { useEffect } from 'react'

export const metadata = {
  title: 'Error - Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="page-container">
      <main>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </main>
    </div>
  )
}

export default Error
