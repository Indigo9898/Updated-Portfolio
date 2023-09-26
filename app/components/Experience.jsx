import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const Experience = () => {
  return (
    <div id="Experience" className="mb-32 p-6">
      <ExperienceInfo
        title="Sam Houston State University"
        startDate="2019"
        endDate="2023"
        text="During my studies at Sam Houston State University, I earned a Bachelor of Science degree in Computer Science. This program provided a strong foundation in computer science principles, programming languages, and problem-solving techniques. I gained proficiency in Java, C++, and Python, and developed critical thinking and analytical skills. Collaborative group projects and extracurricular activities enhanced my teamwork, communication, and exposure to industry trends. My education at Sam Houston State University fuels my passion for continuous learning and drives my career as a web developer."
        skills={{
          1: "Java",
          2: "Python",
          3: "C++",
          4: "Database Management",
          5: "Data Structures and Algorithms",
          6: "Object-Oriented Design",
          7: "Software Development",
          8: "Computer Networks",
          9: "Operating Systems"
        }}
      />

      <ExperienceInfo
        title="Sam Houston State University Web Developer"
        startDate="2022"
        endDate="2023"
        text="During my time as a web developer at Sam Houston State University, I played a crucial role in maintaining and enhancing the Sam Houston website, while also contributing to the creation of new web content. Working with a diverse team of professionals, I utilized my skills in web development to develop numerous web systems that elevated the functionality and user experience of the site. Through my time at Sam Houston State University, I not only refined my technical abilities but also developed a keen eye for design and user-centric solutions."
        skills={{
          1: "HTML",
          2: "JavaScript",
          3: "Jquery",
          4: "Vue.js",
          5: "Content Management Systems",
          6: "Collaboration",
          7: "Time Management",
          8: "Version Control"
        }}
      />
    </div>
  );
};

export default Experience;
