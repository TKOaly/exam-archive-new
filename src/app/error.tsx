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

  if (error.message === 'NEXT_NOT_FOUND') {
    return <></>
  }

  return (
    <main>
      <div
        role="alert"
        className="m-5 flex flex-col items-center gap-4 bg-gray-50 px-20 py-10"
      >
        <h2 className="mx-1 my-2 shrink font-serif text-3xl font-extrabold leading-tight">
          Something went wrong!
        </h2>
        <button
          className="box-border bg-gray-800 p-3 font-serif lowercase text-white shadow-lg ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  )
}

export default Error
