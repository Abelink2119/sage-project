import React from "react";

const Skills = () => {
  const skills = [
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
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
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
      name: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
      name: "React Native",
      icon: "https://reactnative.dev/img/header_logo.svg",
    },
  ];

  return (
    <div className="page grid grid-cols-4 gap-4 p-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-green-500 text-white p-4 rounded flex flex-col items-center"
        >
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className="w-16 h-16 mb-2"
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
