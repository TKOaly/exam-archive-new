import { validateUserRights } from '@services/tkoUserService'

import Modal from '@components/Modal'
import CreateCourse from '@components/tools/CreateCourse'

const Page = async () => {
  await validateUserRights('upload')

  return (
    <Modal title="Create new course">
      <div aria-label="Create new course" className="flex flex-col gap-8">
        <CreateCourse />
      </div>
    </Modal>
  )
}

export default Page
