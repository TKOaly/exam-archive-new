'use client'
import React from 'react'

import { Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const MainMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover className="relative" data-test-id="menu">
      {({ open }) => (
        <>
          <Popover.Button
            className="rounded-full p-2 hover:bg-white/20 active:bg-white/50"
            title={'Open menu'}
            aria-label={'Open menu'}
          >
            {open ? (
              <XMarkIcon className="h-10 w-10 stroke-gray-800" />
            ) : (
              <Bars3Icon className="h-10 w-10 stroke-gray-800" />
            )}
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />

          <Popover.Panel className="absolute right-2 z-10 mt-4 w-64 bg-white p-5 shadow-lg ring ring-inset ring-gray-800">
            {children}
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default MainMenu
