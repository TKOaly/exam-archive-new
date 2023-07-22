import { Suspense } from 'react'
import { redirect } from 'next/navigation'

import { DocumentIcon } from '@heroicons/react/24/solid'

import config from '@lib/config'
import { getSession } from '@lib/sessions'
import { adminGetS3Objects, sortByPrefixThenObjNameAsc } from '@services/admin'

import Footer from '@components/Footer'
import ListingNavigation from '@components/Navigation'

export const metadata = {
  title: 'Admin - Tärpistö - TKO-äly ry',
  viewport: 'width=device-width',
  robots: {
    index: false
  }
}

const Page = async () => {
  if (config.NODE_ENV !== 'development') {
    redirect('/')
  }

  const { rights } = await getSession()

  if (!rights.rename && !rights.remove) {
    redirect('/')
  }

  const s3Objects = await adminGetS3Objects()
  const objects = s3Objects.sort(sortByPrefixThenObjNameAsc)

  return (
    <>
      <ListingNavigation title="Admin tools" backButtonHref="/" />
      <div className="page-container">
        <main>
          <h3 className="font-serif text-xl font-bold leading-tight">Objects in database</h3>
          <div role="table" aria-label="Courses" className="divide-y pb-5 table-auto">
            <div role="row" className="flex flex-row items-center px-1">
              <div role="columnheader" className="m-2 box-border">
                <div className="h-6 w-6" />
              </div>
              <div
                role="columnheader"
                className="mx-1 my-2 w-10 font-serif font-bold lowercase"
              >
                Id
              </div>
              <div
                role="columnheader"
                className="px-2 font-serif me-auto font-bold lowercase"
              >
                Filename
              </div>
              <div
                role="columnheader"
                className="px-2 font-serif font-bold lowercase"
              >
                File path / Object key
              </div>
            </div>

            {objects.map(({ id, fileName, filePath }) => (
              <div
                role="row"
                className="flex flex-row items-center px-1 hover:bg-slate-100"
                key={[id, fileName, filePath].join('-')}
              >
                <div role="cell" className="m-2 shrink-0">
                  <DocumentIcon className="h-6 w-6 fill-cyan-500" />
                </div>
                <div
                  role="cell"
                  className="mx-1 my-2 w-10"
                >
                  {id}
                </div>
                <div className="mx-2 me-auto overflow-hidden text-ellipsis" role="cell">
                  {fileName}
                </div>
                <div role="cell" className="m-2 shrink-0">
                  {filePath}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Page
