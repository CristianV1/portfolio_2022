import React from "react";
import Card from "./Card";
import ProjectsData from "../variables/ProjectsData";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div>
      <p className={styles.title}>My projects</p>
      <div className={styles.grid}>
        {ProjectsData.map((project, index) => (
          <Card
            key={index}
            aditionalStyles={project.aditionalStyles}
            title={project.title}
            link={project.Link}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
