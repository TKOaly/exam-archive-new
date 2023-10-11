import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { urlForCourse } from '@lib/courses'
import { getExamFileNameById } from '@services/archive'

import ListingNavigation from '@components/Navigation'

export const generateMetadata = async ({
  params
}: {
  params: { examId: string; fileName: string }
}): Promise<Metadata> => {
  const examId = parseInt(params.examId, 10)

  const exam = await getExamFileNameById(parseInt(params.examId))

  if (!exam) {
    notFound()
  }

  return {
    title: `Manage exam ${exam.fileName} - Tärpistö - TKO-äly ry`,
    description: 'The TKO-äly ry exam archive'
  }
}

const Layout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: { examId: string; fileName: string }
}) => {
  const examId = parseInt(params.examId, 10)

  const exam = await getExamFileNameById(examId)

  if (!exam) {
    notFound()
  }

  return (
    <div className="page-container bg-gray-50 shadow-lg">
      <ListingNavigation
        title={`Manage exam ${exam.fileName.replace(/_/g, '_\u200b')}`}
        label={`Back to course "${exam.courseName}"`}
        backButtonHref={urlForCourse(exam.courseId, exam.courseName)}
      ></ListingNavigation>
      {children}
    </div>
  )
}

export default Layout
