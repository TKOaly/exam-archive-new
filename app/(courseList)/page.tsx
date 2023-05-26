import CourseList from '@components/CourseList'

const Page = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <CourseList />
    </>
  )
}

export default Page
