import React from 'react'

import ListingNavigation from '@components/Navigation'

export const metadata = {
  title: `Create new course - Tärpistö - TKO-äly ry`,
  description: 'The TKO-äly ry exam archive'
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-container bg-gray-50 shadow-lg">
      <ListingNavigation
        title="Create new course"
        backButtonHref="/"
        label="Back to course listing"
      ></ListingNavigation>
      <main>{children}</main>
    </div>
  )
}

export default Layout
