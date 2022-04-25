import React, { useRef } from "react";
import { BiHomeAlt, BiBriefcase } from "react-icons/bi";
import { AiOutlineMail, AiOutlineThunderbolt } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ refs }) => {
  const { home, projects, skills, contact } = refs;

  return (
    <div className={styles.navbar_holder_holder}>
      <div className={styles.navbar_holder}>
        <div className={styles.navbar}>
          <a href="#home" ref={home}>
            <BiHomeAlt className={styles.navbar_item} />
          </a>
          <a href="#projects" ref={projects}>
            <BiBriefcase className={styles.navbar_item} />
          </a>
          <a href="#skills" ref={skills}>
            <AiOutlineThunderbolt className={styles.navbar_item} />
          </a>
          <a href="#contact" ref={contact}>
            <AiOutlineMail className={styles.navbar_item} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
