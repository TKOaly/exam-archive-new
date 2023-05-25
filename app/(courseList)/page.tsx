import CourseList from '@components/CourseList'

export const metadata = {
  title: 'Tärpistö - TKO-äly ry',
  viewport: 'width=device-width'
}

const Page = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <CourseList />
    </>
  )
}

export default Page
