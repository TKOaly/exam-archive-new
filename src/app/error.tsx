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
    <main>
      <div className="flex flex-col gap-4 items-center bg-white py-10">
        <h2 className="mx-1 my-2 shrink font-serif text-3xl font-extrabold leading-tight">Something went wrong!</h2>
        <button className="bg-gray-800 hover:bg-gray-600 focus:ring focus:ring-gray-400 ring-inset text-white font-serif lowercase p-3 box-border shadow-lg" onClick={() => reset()}>Try again</button>
      </div>
    </main>
  )
}

export default Error
