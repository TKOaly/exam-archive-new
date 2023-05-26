import CourseListHeader from '@components/CourseList/CourseListHeader'
import LoadingItem from '@components/CourseList/Loading'

const Loading = () => {
  return (
    <div
      role="alert"
      aria-label="Loading courses..."
      className="course-list-container"
    >
      <div aria-label="Courses" className="course-list" role="table">
        <CourseListHeader />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </div>
    </div>
  )
}

export default Loading
