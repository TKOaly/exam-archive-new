import CreateCourse from '@components/tools/CreateCourse'
import { validateUserRights } from '@services/tkoUserService'

const Page = async () => {
  await validateUserRights('upload')

  return (
    <div className="content-container flex flex-col gap-8 pb-5">
      <CreateCourse />
    </div>
  )
}

export default Page
