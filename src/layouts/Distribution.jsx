import React, { useEffect, useRef } from "react";
import styles from "./Distribution.module.css";

import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import navStyles from "../components/Navbar.module.css";
import { BsWindowSidebar } from "react-icons/bs";
import Contact from "../components/Contact";

export const Distribution = (props) => {
  const home = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  const homeSect = useRef(null);
  const projectsSect = useRef(null);
  const skillsSect = useRef(null);
  const contactSect = useRef(null);

  useEffect(() => {
    activeLink();
  }, []);

  const links = {
    home: home,
    projects: projects,
    skills: skills,
    contact: contact,
  };

  const sections = {
    home: homeSect,
    projects: projectsSect,
    skills: skillsSect,
    contact: contactSect,
  };

  //const sections = document.querySelectorAll("section");
  //const navLinks = document.querySelectorAll(" .nav-link");

  function activeLink() {
    var current = "";
    let yOfset = window.scrollY;
    for (const key in sections) {
      let currentSection = sections[key]?.current;
      const sectionTop = currentSection?.offsetTop;
      if (yOfset >= sectionTop - 250) {
        current = currentSection.getAttribute("id");
      }
    }

    for (const key in links) {
      let currentLink = links[key]?.current;
      currentLink?.classList.remove(navStyles.active);
      if (currentLink?.href.includes(current)) {
        currentLink?.classList.add(navStyles.active);
      }
    }
  }

  window.onscroll = () => {
    activeLink();
    /*
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      //pageYOffset
      // if (pageYOffset >= sectionTop - 60) {
      //   current = section.getAttribute("id");
      //}
    });
*/
    /*
    navLinks.forEach((link) => {
      //   console.log(link);
      link.classList.remove("active");
      if (link.href.includes(current)) {
        link.classList.add("active");
      }
    });*/
  };
  /*
  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };*/

  return (
    <div className={styles.distribution}>
      <Navbar refs={links} />
      <SectionHolder>
        <section ref={sections.home} id="home">
          <Section>
            <Home />
          </Section>
        </section>
        <section ref={sections.projects} id="projects">
          <Section>
            <Projects />
          </Section>
        </section>
        <section ref={sections.skills} id="skills">
          <Section>
            <Skills />
          </Section>
        </section>

        <section ref={sections.contact} id="contact">
          <Section>
            <Contact />
          </Section>
        </section>
      </SectionHolder>
    </div>
  );
};

const SectionHolder = (props) => {
  return <div className={styles.section__holder}>{props.children}</div>;
};
