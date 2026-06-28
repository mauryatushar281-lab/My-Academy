import { useState, useEffect } from "react";
import Search from "./Search/Search";
import { GraduationCap, Menu, X, Bell } from "lucide-react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem("user");

      setUser(data ? JSON.parse(data) : null);
    };

    loadUser();

    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const courses = [
    "Class 11 Maths",
    "Class 12 Physics",
    "React Development",
    "SSC CGL",
    "JEE Mathematics",
  ];

  const filteredCourses = courses.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <GraduationCap size={40} />
          <span>My-Academy</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <div className="dropdown">
            <button className="dropdown-btn">Categories</button>

            <div className="dropdown-menu">
              <NavLink to="/courses/class11">Class 11</NavLink>

              <NavLink to="/courses/class12">Class 12</NavLink>

              <NavLink to="/courses/jee">JEE</NavLink>

              <NavLink to="/courses/ssc">SSC</NavLink>
            </div>
          </div>

          <NavLink to="/courses">Courses</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          {!user && (
            <NavLink
              to="/login"
              className="mobile-login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="right-section">
          <div className="search-wrapper">
            <Search
              value={search}
              onChange={setSearch}
              placeholder="Search Courses"
              onClear={() => setSearch("")}
            />

            {search && filteredCourses.length > 0 && (
              <div className="suggestions">
                {filteredCourses.map((course) => (
                  <div
                    key={course}
                    className="suggestion-item"
                    onClick={() => {
                      setSearch("");

                      navigate("/courses");
                    }}
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>

          {user && (
            <div className="notification-box">
              <Bell size={22} />

              <span className="notification-count">3</span>
            </div>
          )}

          {user ? (
            <img
              src={
                user.photo ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user.name || "User",
                )}`
              }
              className="navbar-profile"
              onClick={() => navigate("/student-dashboard")}
              alt="profile"
            />
          ) : (
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          )}

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import { useState, useEffect } from "react";
// import { Search, GraduationCap, Menu, X, Bell, Moon, Sun } from "lucide-react";

// import { Link, NavLink, useNavigate } from "react-router-dom";

// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);

//   const [menuOpen, setMenuOpen] = useState(false);

//   const [darkMode, setDarkMode] = useState(false);

//   const [search, setSearch] = useState("");

//   // LOAD USER
//   useEffect(() => {
//     const loadUser = () => {
//       const data = JSON.parse(localStorage.getItem("user"));

//       setUser(data);
//     };

//     loadUser();

//     // update after login/logout
//     window.addEventListener("storage", loadUser);

//     return () => {
//       window.removeEventListener("storage", loadUser);
//     };
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const courses = [
//     "Class 11 Maths",
//     "Class 12 Physics",
//     "React Development",
//     "SSC CGL",
//     "JEE Mathematics",
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* LOGO */}

//         <Link to="/" className="logo">
//           <GraduationCap size={34} />

//           <span>My-Academy</span>
//         </Link>

//         {/* LINKS */}

//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <NavLink to="/">Home</NavLink>

//           <div className="dropdown">
//             <button className="dropdown-btn">Categories</button>

//             <div className="dropdown-menu">
//               <NavLink to="/courses/class11">Class 11</NavLink>

//               <NavLink to="/courses/class12">Class 12</NavLink>

//               <NavLink to="/courses/jee">JEE</NavLink>

//               <NavLink to="/courses/ssc">SSC</NavLink>
//             </div>
//           </div>

//           <NavLink to="/courses">Courses</NavLink>

//           <NavLink to="/about">About</NavLink>

//           <NavLink to="/contact">Contact</NavLink>
//           {!user && (
//             <NavLink
//               to="/login"
//               className="mobile-login-btn"
//               onClick={() => setMenuOpen(false)}
//             >
//               Login
//             </NavLink>
//           )}
//         </div>

//         <div className="right-section">
//           {/* SEARCH */}

//           <div className="search-wrapper">
//             <Search size={18} />

//             <input
//               className="search-box"
//               placeholder="Search Courses"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//             {search && (
//               <div className="suggestions">
//                 {courses
//                   .filter((c) => c.toLowerCase().includes(search.toLowerCase()))
//                   .map((c) => (
//                     <div key={c}>{c}</div>
//                   ))}
//               </div>
//             )}
//           </div>

//           {/* THEME */}

//           <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           </button>

//           {/* ONLY LOGIN USER */}

//           {user && (
//             <div className="notification-box">
//               <Bell size={22} />

//               <span className="notification-count">3</span>
//             </div>
//           )}

//           {/* PROFILE / LOGIN */}

//           {user ? (
//             <img
//               src={
//                 user.photo ||
//                 `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                   user.name,
//                 )}`
//               }
//               className="navbar-profile"
//               alt="profile"
//               onClick={() => navigate("/student-dashboard")}
//             />
//           ) : (
//             <NavLink to="/login" className="login-btn">
//               Login
//             </NavLink>
//           )}

//           <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";

// import { Search, GraduationCap, Menu, X, Bell, Moon, Sun } from "lucide-react";

// import { Link, NavLink, useNavigate } from "react-router-dom";

// import "./Navbar.css";

// function Navbar() {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const [menuOpen, setMenuOpen] = useState(false);

//   const [darkMode, setDarkMode] = useState(false);

//   const [search, setSearch] = useState("");

//   const courses = [
//     "Class 11 Maths",
//     "Class 12 Physics",
//     "React Development",
//     "SSC CGL",
//     "JEE Mathematics",
//   ];

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           <GraduationCap size={34} />
//           <span>My-Academy</span>
//         </Link>

//         {/* Navigation */}
//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <NavLink to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </NavLink>

//           {/* Categories Dropdown */}
//           <div className="dropdown">
//             <button className="dropdown-btn">Categories</button>

//             <div className="dropdown-menu">
//               <NavLink to="/courses/class11">Class 11</NavLink>

//               <NavLink to="/courses/class12">Class 12</NavLink>

//               <NavLink to="/courses/jee">JEE</NavLink>

//               <NavLink to="/courses/ssc">SSC</NavLink>

//               <NavLink to="/courses/react">React</NavLink>
//             </div>
//           </div>

//           <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
//             Courses
//           </NavLink>

//           <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </NavLink>

//           <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </NavLink>
//         </div>

//         {/* Right Section */}
//         <div className="right-section">
//           {/* Search */}
//           <div className="search-wrapper">
//             <Search size={18} />

//             <input
//               type="text"
//               placeholder="Search Courses..."
//               className="search-box"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//             {search && (
//               <div className="suggestions">
//                 {courses
//                   .filter((course) =>
//                     course.toLowerCase().includes(search.toLowerCase()),
//                   )
//                   .map((course) => (
//                     <div key={course}>{course}</div>
//                   ))}
//               </div>
//             )}
//           </div>

//           {/* Dark Mode */}
//           <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           </button>

//           {/* Notification */}
//           <div className="notification-box">
//             <Bell size={22} />

//             <span className="notification-count">3</span>
//           </div>

//           {/* User Profile */}
//           {user ? (
//             <img
//               src={
//                 user.photo ||
//                 `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                   user.name,
//                 )}`
//               }
//               alt={user.name}
//               className="navbar-profile"
//               onClick={() => navigate("/student-dashboard")}
//             />
//           ) : (
//             <NavLink to="/login" className="login-btn">
//               Login
//             </NavLink>
//           )}

//           {/* Mobile Toggle */}
//           <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { Link , NavLink} from "react-router-dom";

// import { Search, GraduationCap, Menu, X } from "lucide-react";

// import "./Navbar.css";

// function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           <GraduationCap size={34} />
//           <span>My-Academy</span>
//         </Link>

//         {/* Desktop Links */}
//         <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>

//           <Link to="/courses" onClick={() => setMenuOpen(false)}>
//             Courses
//           </Link>

//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </Link>

//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>

//           <Link
//             to="/login"
//             className="mobile-login"
//             onClick={() => setMenuOpen(false)}
//           >
//             {
//   user ? (
//     <img
//       src={
//         user.photo ||
//         `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
//       }
//       alt={user.name}
//       className="navbar-profile"
//     />
//   ) : (
//     <NavLink to="/login" className="login-btn">
//       Login
//     </NavLink>
//   );
// }
//           </Link>
//         </div>

//         {/* Right Side */}
//         <div className="right-section">
//           <div className="search-wrapper">
//             <Search size={18} />

//             <input
//               type="text"
//               placeholder="Search Courses..."
//               className="search-box"
//             />
//           </div>

//           <Link to="/login" className="login-btn">
//             Login
//           </Link>

//           {/* Mobile Menu Button */}
//           <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo">
//           <span>My-Academy</span>
//         </div>

//         {/* Navigation */}
//         <div className="nav-links">
//           <Link to="/">Home</Link>

//           <Link to="/courses">Courses</Link>

//           <Link to="/about">About</Link>

//           <Link to="/contact">Contact</Link>

//           {/* <Link to="/login" className="login-btn">
//             Login
//           </Link> */}
//         </div>

//         <div className="right-section">
//           <input
//             type="text"
//             placeholder="Search Courses..."
//             className="search-box"
//           />

//           <Link
//             to="/login"
//             className="login-btn"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
