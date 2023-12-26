import { redirect } from 'next/navigation'

import { validateRights } from '@services/tkoUserService'

import Modal from '@components/Modal'
import CreateCourse from '@components/tools/CreateCourse'

const Page = async () => {
  const isRights = await validateRights('upload')

  if (!isRights) {
    redirect('/')
  }

  return (
    <Modal title="Create new course">
      <div aria-label="Create new course" className="flex flex-col gap-8">
        <CreateCourse />
      </div>
    </Modal>
  )
}

export default Page
