import React, { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General inquiries",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="home-page">
      <section id="home" className="hero" data-aos="fade-up">
        <div className="hero-text">
          <h1 data-aos="fade-right">
            Hi, I'm <span className="highlight">Abel Assefa</span>
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="200">
            Software Engineering Student | Junior Web & Mobile App Developer
          </h2>
          <p data-aos="fade-right" data-aos-delay="400">
            Passionate about creating modern, user-friendly digital solutions.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <button className="btn primary">View My Work →</button>
            <button className="btn secondary">⬇ Resume</button>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-img" data-aos="fade-left">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
        </div>
      </section>

      <section id="about" className="page section-container" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <p>
            I am a passionate software engineering student dedicated to building
            modern web and mobile applications. I strive to design and develop
            user-friendly, efficient, and scalable digital solutions that solve
            real-world problems. I am deeply interested in exploring emerging
            technologies, writing clean and maintainable code, and continuously
            learning best practices in software development. My goal is to
            create applications that not only meet technical standards but also
            provide meaningful experiences for users, making a positive impact
            in their daily lives. I thrive in collaborative environments, enjoy
            tackling challenging problems, and am committed to contributing to
            innovative projects that drive progress in the tech world.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="page section-container"
        data-aos="fade-up"
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            {
              name: "HTML",
              icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            },
            {
              name: "CSS",
              icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            },
            {
              name: "JavaScript",
              icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            },
            {
              name: "React.js",
              icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            },
            {
              name: "React Native",
              icon: "https://reactnative.dev/img/header_logo.svg",
            },
            {
              name: "Java",
              icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            },
            {
              name: "Spring Boot",
              icon: "https://spring.io/images/projects/spring-boot.svg",
            },
            {
              name: "MSSQL",
              icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MS_SQL_Server_Logo.png",
            },
            {
              name: "PHP",
              icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            },
            {
              name: "Git/GitHub",
              icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="skill-icon"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="page section-container"
        data-aos="fade-up"
      >
        <h2>Experience</h2>

        <div className="experience-card">
          <h3>Software Engineer | Junior Web & Mobile App Developer</h3>
          <h4>Personal Project – Payment System Application</h4>
          <p>• Developed backend APIs for content and user management.</p>
          <p>
            • Implemented Elasticsearch for fast and optimized search of music
            titles.
          </p>
          <p>
            • Managed deployment using Docker for scalability and reliability.
          </p>
          <p>• Integrated CDN for media optimization and AWS S3 for storage.</p>
          <span className="tech-stack">
            Tech Stack: AWS Cloud | Docker | PostgreSQL | Node.js | Express.js |
            PHP | API
          </span>
          <span className="location">
            Addis Ababa, Ethiopia | Full-time | May 2023 – Present
          </span>
        </div>

        <div className="experience-card">
          <h3>Internship Developer – Digital Equb</h3>
          <p>
            • Implemented and operated an audio recognition API to detect and
            prevent audio content fraud.
          </p>
          <span className="tech-stack">
            Tech Stack: React | Spring Boot | MS SQL
          </span>
          <span className="location">
            Addis Ababa, Ethiopia | Full-time | March 2025 – June 2025
          </span>
        </div>
      </section>

      <section
        id="projects"
        className="page section-container"
        data-aos="fade-up"
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            "Portfolio Website",
            "CRUD Dashboard",
            "Payment System",
            "Calculator App",
            "User Registration Form",
          ].map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {project}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="page section-container"
        data-aos="fade-up"
      >
        <h2>Contact Me</h2>
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <p>
              <FaEnvelope /> abelink2119@gmail.com
            </p>
            <p>📍 Addis Ababa, Ethiopia</p>
            <div className="social-icons">
              <a href="https://github.com/" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:abelink2119@gmail.com" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            data-aos="fade-left"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="General inquiries">General inquiries</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Job Opportunities">Job Opportunities</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer className="footer" data-aos="fade-up">
        <div className="footer-content">
          <p>© 2025 Abel Assefa. All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:abelink2119@gmail.com" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
