import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import { GraduationCap,BadgeCheck , MonitorPlay } from "lucide-react";

import "./Home.css";

function Home() {
  const courses = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      title: "Class 11 Mathematics",
      instructor: "Tushar Maurya",
      duration: "120 Hours",
      price: "999",
    },

    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
      title: "Class 12 Mathematics",
      instructor: "Tushar Maurya",
      duration: "150 Hours",
      price: "1499",
    },

    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      title: "MERN Stack Development",
      instructor: "Tushar Maurya",
      duration: "45 Hours",
      price: "2999",
    },

    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      title: "React Complete Course",
      instructor: "Tushar Maurya",
      duration: "30 Hours",
      price: "1999",
    },

    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      title: "Node.js Backend Mastery",
      instructor: "Tushar Maurya",
      duration: "35 Hours",
      price: "2499",
    },

    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
      title: "JavaScript From Beginner to Advanced",
      instructor: "Tushar Maurya",
      duration: "40 Hours",
      price: "1799",
    },
  ];

  return (
    <>
      <Navbar />

      <Hero />

      {/* Featured Courses */}
      <section className="featured-section">
        <h2 className="section-title">Featured Courses</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>👨‍🏫 Expert Instructors</h3>
            <p>Learn from experienced educators and industry professionals.</p>
          </div>

          <div className="why-card">
            <h3>🎥 Lifetime Access</h3>
            <p>Access your purchased courses anytime, anywhere.</p>
          </div>

          <div className="why-card">
            <h3>📝 Assignments & Tests</h3>
            <p>Practice with quizzes, assignments, and projects.</p>
          </div>
        </div>
      </section> */}
      {/* <section className="why-us">
  <h2 className="section-title">Why Choose Us?</h2>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">
        <GraduationCap size={34} />
      </div>

      <h3>Expert Instructors</h3>

      <p>
        Learn from experienced educators and industry professionals.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <MonitorPlay size={34} />
      </div>

      <h3>Lifetime Access</h3>

      <p>
        Access your purchased courses anytime, anywhere.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <ClipboardCheck size={34} />
      </div>

      <h3>Assignments & Tests</h3>

      <p>
        Practice with quizzes, assignments, and projects.
      </p>
    </div>

  </div>
</section> */}

      <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <GraduationCap size={40} />
            </div>

            <h3>Expert Instructors</h3>

            <p>Learn from experienced educators and industry professionals.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <MonitorPlay size={40} />
            </div>

            <h3>Lifetime Access</h3>

            <p>Access your purchased courses anytime from any device.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <BadgeCheck size={40} />
            </div>

            <h3>Assignments & Tests</h3>

            <p>Practice with quizzes, assignments and real-world projects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2 className="section-title">Student Reviews</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              Best platform for learning MERN Stack. Everything is explained
              clearly.
            </p>

            <h4>- Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <h3>⭐⭐⭐⭐⭐</h3>

            <p>Amazing courses and practical projects. Highly recommended.</p>

            <h4>- Priya Singh</h4>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Start Learning Today</h2>

        <p>
          Join thousands of students and build your future with expert-led
          courses.
        </p>

        <button>Browse Courses</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;
