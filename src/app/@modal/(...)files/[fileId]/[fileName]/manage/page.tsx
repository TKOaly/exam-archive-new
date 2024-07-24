import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { getFileNameById } from '@services/archive'

import Modal from '@components/Modal'
import DeleteFile from '@components/tools/DeleteFile'
import UpdateFile from '@components/tools/UpdateFile'
import { validateUserRights } from '@services/tkoUserService'

export const generateMetadata = async ({
  params
}: {
  params: { fileId: string; fileName: string }
}): Promise<Metadata> => {
  const fileId = parseInt(params.fileId, 10)

  const file = await getFileNameById(fileId)

  if (!file) {
    notFound()
  }

  return {
    title: `Manage file ${file.fileName} - Tärpistö - TKO-äly ry`,
    description: 'The TKO-äly ry exam archive'
  }
}

const Page = async ({
  params
}: {
  params: { fileId: string; fileName: string }
}) => {
  await validateUserRights('rename', 'remove')

  const fileId = parseInt(params.fileId, 10)

  const file = await getFileNameById(fileId)

  if (!file) {
    notFound()
  }

  return (
    <Modal title={`Manage file "${file.fileName}"`}>
      <div
        aria-label={`Manage file "${file.fileName}"`}
        className="flex flex-col gap-8"
      >
        <UpdateFile
          fileId={fileId}
          currentType={file.type}
          currentName={file.fileName}
        />
        <DeleteFile fileId={fileId} fileName={file.fileName} />
      </div>
    </Modal>
  )
}

export default Page
