import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General inquiries",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p>
          <span role="img" aria-label="email">
            📧
          </span>{" "}
          abelink2119@gmail.com
        </p>

        <p>
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          Addis Ababa, Ethiopia
        </p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/" aria-label="GitHub">
          <span role="img" aria-label="github">
            🐙
          </span>
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <span role="img" aria-label="linkedin">
            in
          </span>
        </a>
        <a href="mailto:abelink2119@gmail.com" aria-label="Email">
          <span role="img" aria-label="email">
            📧
          </span>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
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
        <select name="subject" value={formData.subject} onChange={handleChange}>
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
  );
};

export default Contact;
