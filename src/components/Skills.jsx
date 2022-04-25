import React from "react";
import styles from "./Skills.module.css";
import data from "../variables/skillsData";
const Skills = () => {
  return (
    <div className={styles.skills__holder}>
      <p className={styles.title}>My skills</p>

      <div className={styles.flex}>
        {data.map((skill, index) => (
          <p key={index} className={styles.tag}>
            {skill.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
