import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsMoon, BsSun } from "react-icons/bs";
import "./../App.css";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AM" : "EN"));
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">abelink</h1>

      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} spy={true} offset={-70}>
            {language === "EN" ? "Home" : "መነሻ"}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} spy={true} offset={-70}>
            {language === "EN" ? "About" : "ስለኔ"}
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            {language === "EN" ? "Skills" : "ክህሎቶች"}
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            {language === "EN" ? "Experience" : "ልምድ"}
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            {language === "EN" ? "Projects" : "ፕሮጀክቶች"}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            {language === "EN" ? "Contact" : "አግኙኝ"}
          </Link>
        </li>
      </ul>

      <div className="navbar-icons">
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language}
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
