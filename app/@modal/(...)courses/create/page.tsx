import { redirect } from 'next/navigation'

import { getSession } from '@lib/sessions'

import Modal from '@components/Modal'
import CreateCourse from '@components/tools/CreateCourse'

const Page = async () => {
  const { rights } = await getSession()

  if (!rights.upload) {
    redirect('/')
  }

  return (
    <Modal title="Create new course">
      <div className="flex flex-col gap-8">
        <CreateCourse />
      </div>
    </Modal>
  )
}

export default Page
