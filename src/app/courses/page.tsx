import { redirect } from 'next/navigation'

import { urlForCourseListing } from '@lib/courses'

const Page = async ({ params }: any) => {
  redirect(urlForCourseListing())
}

export default Page
