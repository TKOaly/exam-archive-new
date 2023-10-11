import CreateCourse from '@components/tools/CreateCourse'
import { validateRights } from '@services/tkoUserService'
import { redirect } from 'next/navigation'

const Page = async () => {
  const isRights = await validateRights('upload')

  if (!isRights) {
    redirect('/')
  }

  return (
    <div className="content-container flex flex-col gap-8 pb-5">
      <CreateCourse />
    </div>
  )
}

export default Page
