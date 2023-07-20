import React from 'react'

import ListingNavigation from '@components/Navigation'

export const metadata = {
  title: `Create new course - Tärpistö - TKO-äly ry`,
  description: 'The TKO-äly ry exam archive'
}

const Layout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  return (
    <>
      <ListingNavigation
        title="Create new course"
        backButtonHref="/"
      ></ListingNavigation>
      <div className="page-container">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
