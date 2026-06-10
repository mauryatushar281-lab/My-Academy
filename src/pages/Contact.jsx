import "./Contact.css";
import { Phone, Mail, Clock, Rocket, MapPin } from "lucide-react";
import {
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      {/* Hero */}

      <section className="contact-hero">
        <span className="contact-badge">
          <Phone size={25} />
          Contact Us
        </span>

        <h1>
          We'd Love To
          <span> Hear From You</span>
        </h1>

        <p>
          Have questions about courses, enrollments, payments, or career
          guidance? Reach out anytime.
        </p>
      </section>

      {/* Contact Info */}

      <section className="contact-info">
        <div className="info-card">
          <h3>
            <MapPin size={20} /> <span>Address</span>
          </h3>
          <p>Lucknow, Uttar Pradesh, India</p>
        </div>

        <div className="info-card">
          <h3>
            <Mail size={20} /> <span>Email</span>
          </h3>
          <p>support@my-academy.com</p>
        </div>

        <div className="info-card">
          <h3>
            <Phone size={20} /> <span>Phone</span>
          </h3>
          <p>+91 7084287787</p>
        </div>

        <div className="info-card">
          <h3>
            <Clock size={20} /> <span>Support Hours</span>
          </h3>
          <p>Mon - Sat : 9 AM - 8 PM</p>
        </div>
      </section>

      {/* Contact Form */}

      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-left">
            <h2>Send Us A Message</h2>

            <p>Fill out the form and our team will contact you shortly.</p>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />

              <input type="email" placeholder="Your Email" />

              <input type="text" placeholder="Subject" />

              <textarea rows="6" placeholder="Write Your Message..."></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-right">
            <div className="support-card">
              <h3>
                <Rocket size={35} /> <span>Quick Support</span>
              </h3>

              <p>Get instant help through WhatsApp and Email.</p>

              <a
                href="https://wa.me/917084287787"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">
          <div className="faq-card">
            <h3>How do I enroll?</h3>
            <p>Choose a course and complete payment through Razorpay.</p>
          </div>

          <div className="faq-card">
            <h3>Do I get lifetime access?</h3>
            <p>Yes, all premium courses include lifetime access.</p>
          </div>

          <div className="faq-card">
            <h3>Do you provide certificates?</h3>
            <p>Yes, certificates are provided after course completion.</p>
          </div>
        </div>
      </section>

      {/* Social */}

      {/* <section className="social-section">
        <h2>Connect With Us</h2>

        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section> */}

      <section className="social-section">
        <h2>Connect With Us</h2>

        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer">
            <FaYoutube />
            <span>YouTube</span>
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </section>

      {/* CTA */}

      <section className="contact-cta">
        <h2>Join 1000+ Students Today</h2>

        <p>Learn Mathematics, Coding, MERN Stack and more.</p>

        <button>Explore Courses</button>
      </section>
    </div>
  );
}

export default Contact;
