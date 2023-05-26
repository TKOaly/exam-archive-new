import '@styles/main.scss'
import React from 'react'
import ListingNavigation from '@components/Navigation'
import { ControlsBox, Logout } from '@components/Controls'
import CreateCourse from '@components/tools/CreateCourse'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ListingNavigation title="Courses" />
      <div className="page-container">
        <main>
          {children}
          <ControlsBox>
            {/* @ts-expect-error Server Component */}
            <CreateCourse />
            {/* @ts-expect-error Server Component */}
            <Logout />
          </ControlsBox>
        </main>
      </div>
    </>
  )
}

export default Layout
