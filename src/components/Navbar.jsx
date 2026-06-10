import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span>My-Academy</span>
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          {/* <Link to="/login" className="login-btn">
            Login
          </Link> */}
        </div>

        <div className="right-section">
          <input
            type="text"
            placeholder="Search Courses..."
            className="search-box"
          />

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
