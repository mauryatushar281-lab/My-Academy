import "./StudentDashboard.css";

import {
  GraduationCap,
  BookOpen,
  Trophy,
  Clock3,
  PlayCircle,
  User,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome Back, {user?.name || "Student"} 👋</h1>

          <p>Continue your learning journey and track your progress.</p>
        </div>

        <div className="header-right">
          <div
            className="profile-box"
            onClick={() => navigate("/dashboard/profile")}
          >
            <User size={26} />
          </div>

          <button className="logout-btn" onClick={logout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen size={32} />
          <h2>4</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <Clock3 size={32} />
          <h2>58 hrs</h2>
          <p>Learning Time</p>
        </div>

        <div className="stat-card">
          <Trophy size={32} />
          <h2>3</h2>
          <p>Certificates</p>
        </div>

        <div className="stat-card">
          <GraduationCap size={32} />
          <h2>82%</h2>
          <p>Course Progress</p>
        </div>
      </div>

      {/* Courses */}
      <div className="dashboard-section">
        <h2>My Courses</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Class 11 Mathematics</h3>

            <p>Complete Algebra, Trigonometry, Calculus & Statistics.</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: "70%",
                }}
              ></div>
            </div>

            <span>70% Completed</span>

            <button>Continue Learning</button>
          </div>

          <div className="course-card">
            <h3>React Development</h3>

            <p>Build modern frontend applications using React.</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: "45%",
                }}
              ></div>
            </div>

            <span>45% Completed</span>

            <button>Continue Learning</button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-section">
        <h2>Recent Activity</h2>

        <div className="activity-card">
          <PlayCircle size={22} />

          <div>
            <h4>React Hooks Lecture Completed</h4>

            <p>Today • 2 Hours Ago</p>
          </div>
        </div>

        <div className="activity-card">
          <PlayCircle size={22} />

          <div>
            <h4>Assignment Submitted</h4>

            <p>Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
