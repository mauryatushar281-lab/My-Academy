import "./Courses.css";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import {
  Calculator,
  Globe,
  Atom,
  Layers3,
  Server,
  Briefcase,
} from "lucide-react";
function Courses() {
  const courses = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      title: "MERN Stack Development",
      instructor: "Tushar Maurya",
      duration: "45 Hours",
      price: "2999",
    },

    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      title: "React Complete Course",
      instructor: "Tushar Maurya",
      duration: "30 Hours",
      price: "1999",
    },

    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      title: "Node.js Backend Mastery",
      instructor: "Tushar Maurya",
      duration: "35 Hours",
      price: "2499",
    },

    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      title: "Class 11 Mathematics",
      instructor: "Tushar Maurya",
      duration: "120 Hours",
      price: "999",
    },
  ];

  return (
    <div className="courses-page">
      <Navbar />
      {/* Hero */}
      <section className="courses-hero">
        <div className="hero-left">
          <span className="hero-badge">🚀 1000+ Students Enrolled</span>

          <h1>
            Upgrade Your Skills With
            <span> Premium Courses</span>
          </h1>

          <p>
            Learn Mathematics, Programming, MERN Stack, React, Node.js and
            industry-focused skills.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search Courses..." />

            <button>Search</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Students"
          />
        </div>
      </section>

      {/* Filter */}
      <section className="filter-section">
        <div className="filter-bar">
          <button className="active">All Courses</button>

          <button>Mathematics</button>

          <button>Programming</button>

          <button>React</button>

          <button>MERN Stack</button>

          <button>Node.js</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-header">
          <h2>Popular Categories</h2>

          <p>Explore learning paths designed for students and professionals.</p>
        </div>

        {/* <div className="category-grid">
          <div className="category-card">📚 Mathematics</div>

          <div className="category-card">💻 Web Development</div>

          <div className="category-card">⚛ React</div>

          <div className="category-card">🚀 MERN Stack</div>

          <div className="category-card">🟢 Node.js</div>

          <div className="category-card">🎯 Interview Prep</div>
        </div> */}

        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon">
              <Calculator size={40} />
            </div>
            <h3>Mathematics</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Globe size={40} />
            </div>
            <h3>Web Development</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Atom size={40} />
            </div>
            <h3>React</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Layers3 size={40} />
            </div>
            <h3>MERN Stack</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Server size={40} />
            </div>
            <h3>Node.js</h3>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Briefcase size={40} />
            </div>
            <h3>Interview Prep</h3>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="course-stats">
        <div className="stat">
          <h2>1000+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <h2>25+</h2>
          <p>Courses</p>
        </div>

        <div className="stat">
          <h2>4.9★</h2>
          <p>Rating</p>
        </div>

        <div className="stat">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      {/* Courses */}
      <section className="courses-section">
        <div className="section-header">
          <h2>Featured Courses</h2>

          <p>{courses.length} Courses Available</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Testimonials */}

      <section className="testimonial-section">
        <h2>What Students Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Best platform for learning web development.</p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Clear explanations and practical projects.</p>
            <h4>- Priya</h4>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="courses-cta">
        <h2>Start Learning Today</h2>

        <p>Join thousands of students building successful careers.</p>

        <button>Browse Courses</button>
      </section>
    </div>
  );
}

export default Courses;
