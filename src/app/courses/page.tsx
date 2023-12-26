import { redirect } from 'next/navigation'

import { urlForCourseListing } from '@lib/courses'

const Page = async () => {
  redirect(urlForCourseListing())
}

export default Page
