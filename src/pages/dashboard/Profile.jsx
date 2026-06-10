import "./Profile.css";
import {
  User,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  Trophy,
  Award,
} from "lucide-react";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Profile Cover */}
        <div className="profile-cover">
          <div className="profile-avatar">
            <User size={60} />
          </div>

          <div className="profile-content">
            <h1>Tushar Maurya</h1>
            <p>Class 11 Mathematics Student</p>

            <button className="cover-btn">Edit Profile</button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="profile-details">
          <h3>Personal Information</h3>

          <div className="detail-item">
            <Mail size={18} />
            <span>tushar@example.com</span>
          </div>

          <div className="detail-item">
            <Phone size={18} />
            <span>+91 9876543210</span>
          </div>

          <div className="detail-item">
            <Calendar size={18} />
            <span>Joined June 2026</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <BookOpen size={28} />
            <h2>12</h2>
            <span>Courses</span>
          </div>

          <div className="stat-card">
            <Trophy size={28} />
            <h2>8</h2>
            <span>Certificates</span>
          </div>

          <div className="stat-card">
            <Award size={28} />
            <h2>85%</h2>
            <span>Progress</span>
          </div>

          <div className="stat-card">
            <User size={28} />
            <h2>#24</h2>
            <span>Rank</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <h3>Recent Activity</h3>

          <div className="activity-item">✅ Completed Calculus Quiz</div>

          <div className="activity-item">📄 Downloaded Chapter Notes</div>

          <div className="activity-item">
            🎯 Purchased JEE Foundation Course
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>

          <button className="password-btn">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
