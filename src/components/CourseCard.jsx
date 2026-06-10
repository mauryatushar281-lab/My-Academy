import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.thumbnail} alt={course.title} />
      </div>

      <div className="course-content">
        <span className="course-badge">Bestseller</span>

        <h2 className="course-title">{course.title}</h2>

        <p className="course-instructor">👨‍🏫 {course.instructor}</p>

        <p className="course-duration">⏱️ {course.duration}</p>

        <div className="course-rating">⭐ 4.9 (500+ Reviews)</div>

        <div className="course-footer">
          <p className="course-price">₹{course.price}</p>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
