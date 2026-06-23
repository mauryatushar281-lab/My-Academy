import { Edit, Trash2 } from "lucide-react";
import "../pages/dashboard/admin/AdminLearning.css";

function CourseCard({ course, editCourse, deleteCourse }) {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.title} />

      <div className="course-info">
        <h2>{course.title}</h2>

        <p>{course.description}</p>

        <span>{course.instructor}</span>

        <p className="price">₹{course.price}</p>

        <p className="category">{course.category}</p>

        <div className="actions">
          <button className="edit" onClick={() => editCourse(course)}>
            <Edit size={18} />
          </button>

          <button className="delete" onClick={() => deleteCourse(course._id)}>
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
