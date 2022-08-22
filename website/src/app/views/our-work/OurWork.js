import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { ArrowUpRight } from "react-feather";
import "./OurWork.css";
import animationConfig from "../animationConstants";
import Portfolio from "../../../CTC_Portfolio_2022_2023.pdf";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectCardPurple from "../../components/ProjectCard/ProjectCardPurple";
import projects from "./projectsData";

const pastProjects = projects.inactive.map(project => (
  <motion.div
    className="ctc-ourwork-past-projects-card"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{
      delay: 0.1,
      duration: 0.75,
      type: "spring",
      damping: 15,
    }}
  >
    <div className="ctc-ourwork-past-projects-card-img-container">
      <div
        className="ctc-ourwork-past-projects-card-img"
        style={{ backgroundImage: `url(${project.src})`}}
      />
    </div>
    <div className="ctc-ourwork-past-projects-card-text">
      <a
        href={project.npoURL}
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-ourwork-past-projects-card-name"
      >
        {project.projectName}
        <ArrowUpRight className="project-card-arrow-up-right" />
      </a>
      <p className="ctc-ourwork-past-projects-card-timeline">
        {project.start} - {project.end}
      </p>
      <p className="ctc-ourwork-past-projects-card-description">
        {project.description}
      </p>
      <div className="ctc-ourwork-past-projects-card-buttons-div">
        <a href={project.projectURL} target="_blank" rel="noopener noreferrer">
          <button className="ctc-ourwork-past-projects-card-github-button">
            Github
          </button>
        </a>
        {/* <button className="ctc-ourwork-past-projects-card-case-study-button">
          Case Study
        </button> */}
      </div>
    </div>
  </motion.div>
));

const OurWork = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(load);
  }, []);
  return (
    <main>
      <div className="ctc-ourwork-bg">
        <motion.p
          className="ctc-ourwork-header"
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
            staggerChildren: 0.5,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
        >
          2022-2023 Projects
        </motion.p>
        <motion.div
          className="ctc-ourwork-current-projects"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
            staggerChildren: 0.5,
          }}
          exit={{
            opacity: 0,
            y: 50,
          }}
        >
          {projects.active.map(project => <ProjectCard {...project} />)}
        </motion.div>
        <motion.p
          className="ctc-ourwork-past-projects-header"
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
            staggerChildren: 0.5,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
        >
          Past Projects
        </motion.p>
        <motion.div
          className="ctc-ourwork-past-projects"
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
            staggerChildren: 0.5,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
        >
          {pastProjects}
        </motion.div>
      </div>
    </main>
  );
};

export default OurWork;
