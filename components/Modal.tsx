"use client"
import React from 'react'

import { useRouter } from 'next/navigation'
import { XCircleIcon } from '@heroicons/react/24/outline'

const Modal = ({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) => {
  const router = useRouter()

  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 top-0 h-screen w-screen overflow-y-auto overflow-x-hidden bg-black/40">
      <div className="pointer-events-none relative mx-auto mt-36 w-full">
        <div className="z-20 pointer-events-auto flex w-full flex-col bg-white bg-clip-padding">
          <div className="flex flex-shrink-0 items-center justify-between px-20 py-5">
            <h3 className="font-serif text-4xl font-extrabold text-gray-800">
              {title}
            </h3>
            <button onClick={() => router.back()}>
              <XCircleIcon className="h-8 w-8 flex-shrink-0" />
              <p className="sr-only">Close</p>
            </button>
          </div>
          <div className="px-20 py-5">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
