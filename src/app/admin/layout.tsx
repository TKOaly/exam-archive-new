import React from 'react'

import ListingNavigation from '@components/Navigation'

export const metadata = {
  title: 'Admin tools - Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-container bg-gray-50 shadow-lg">
      <ListingNavigation title="Objects in database" backButtonHref='/' label="Back to course listing" />
      {children}
    </div>
  )
}

export default Layout
