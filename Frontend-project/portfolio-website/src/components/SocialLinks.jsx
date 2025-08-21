import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      href: "https://linkedin.com",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub />,
      label: "GitHub",
      external: true,
    },
    {
      href: "mailto:abelink2119@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
    {
      href: "tel:+251948102787",
      icon: <FaPhone />,
      label: "Phone",
    },
  ];
  <div className="social-icons">
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
  </div>;

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.external ? "_blank" : "_self"}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className="social-link"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
