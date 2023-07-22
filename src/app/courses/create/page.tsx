import { getSession } from '@lib/sessions'

import CreateCourse from '@components/tools/CreateCourse'

const Page = async ({ params }: any) => {
  const { rights } = await getSession()

  if (!rights.upload) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 pb-5">
      <CreateCourse />
    </div>
  )
}

export default Page
