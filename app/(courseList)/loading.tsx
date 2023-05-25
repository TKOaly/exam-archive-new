import CourseListHeader from '@components/CourseList/CourseListHeader'
import LoadingItem from '@components/CourseList/Loading'

const Loading = () => {
  return (
    <div className="course-list-container">
      <div role="table" aria-label="Courses" className="course-list">
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
