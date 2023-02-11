const React = require('react')

const CreateCourseForm = () => {
  return (
    <form className="create-course-form" method="post">
      <h3>Add a new course:</h3>
      <input
        className="create-course-form__name"
        required
        aria-label="Course name"
        placeholder="Course name"
        type="text"
        name="courseName"
      ></input>
      <input
        className="create-course-form__submit"
        type="submit"
        name="create"
        value="Create course"
      />
    </form>
  )
}

module.exports = CreateCourseForm
