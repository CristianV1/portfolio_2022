import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.holder}>
      <p className={styles.resalt__text}>Cristian Vera</p>
      <p className={styles.title__text}>Full Stack Developer</p>
      <p className={styles.common__text}>
        Welcome to my portfolio, take a look around
      </p>

      <a
        className={styles.button}
        href="https://drive.google.com/file/d/1oSf90eJNzFPKxc5bhgk2RFm2LUYVcmMq/view?usp=sharing"
        target="_blank"
      >
        My CV
      </a>
    </div>
  );
};

export default Home;
