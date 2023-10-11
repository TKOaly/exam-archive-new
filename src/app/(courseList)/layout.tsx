import React from 'react'

import Link from 'next/link'

import ListingNavigation from '@components/Navigation'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-container bg-gray-50 shadow-lg">
      <ListingNavigation title="Courses">
        <Link
          href={'/courses/create'}
          className="box-border bg-transparent p-3 font-serif lowercase text-gray-800 shadow-lg ring ring-inset ring-gray-800 hover:bg-gray-600 hover:text-white focus:ring-gray-400"
        >
          create
        </Link>
      </ListingNavigation>
      {children}
    </div>
  )
}

export default Layout
