import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="Projects" className="p-6">
      <ProjectItem
        imgSrc="/pixeltees.PNG"
        title="PixelTees"
        description="I developed a dynamic e-commerce platform for a startup selling pixel art t-shirts. Using Next.js, React, Tailwind CSS, and Sanity CMS, I created an engaging online store with server-side rendering for fast browsing. The responsive design showcased vibrant pixel art designs, while interactive components improved the shopping experience. Sanity CMS facilitated efficient product management and order handling."
        srcCode={true}
        gitSrc = "https://github.com/Indigo9898/Pixeltees"
        skills = {{
            1: "React.js",
            2: "Next.js",
            3: "Tailwind",
            4: "Sanity CMS",
            5: "E-commerce Development",
            6: "UX Design",
        }}
        key="pixeltees"
        linkhref="https://pixeltees.vercel.app/home"
      />
      
      <ProjectItem
      imgSrc="/tuition.PNG"
      title="Sam Houston State Tuition Calculator"
      description="During my web developer internship, I led the complete remodeling of the Sam Houston State University Tuition and Fees Calculator. I developed all the HTML and JavaScript systems from scratch, creating a user-friendly interface that streamlined the tuition calculation process. Through meticulous coding and problem-solving, I ensured accuracy and responsiveness across devices and browsers. This project showcased my proficiency in web development, attention to detail, and ability to deliver impactful solutions. It was a valuable opportunity to demonstrate my skills and make a tangible impact on a real-world application."
      skills ={{
        1:"Web Accessibility",
        2:"Clean Code Habits",
        3:"Debugging",
        4: "Project Management"
      }}
      key="tuition"
      linkhref="https://www.shsu.edu/dept/cashiers/tuition-fees"
      />
      
    </div>
  );
};

export default Projects;
