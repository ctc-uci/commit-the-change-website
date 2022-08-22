import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { ArrowUpRight } from "react-feather";
import "./OurWork.css";
import animationConfig from "../animationConstants";
import Portfolio from "../../../CTC_Portfolio_2022_2023.pdf";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectCardPurple from "../../components/ProjectCard/ProjectCardPurple";
import projects from "./projectsData";

const pastProjects = projects.inactive.map((project) => (
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
    <div className="ctc-ourwork-past-projects-card-img-container" />
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
        <button className="ctc-ourwork-past-projects-card-case-study-button">
          Case Study
        </button>
      </div>
    </div>
  </motion.div>
));

const OurWork = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <main>
      <div className="ctc-ourwork-bg">
        <p className="ctc-ourwork-header">2022-2023 Projects</p>
        <div className="ctc-ourwork-current-projects">
          {projects.active.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <p className="ctc-ourwork-past-projects-header">Past Projects</p>
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
      {/* <animated.div style={slideUpTop} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Our Work</h1>
            <p className="top-panel-description">
              Each academic school year, Commit the Change partners with new
              non-profit organizations to work on an impactful project free of
              charge. With the non-profit, we assess problems, ideate solutions,
              and create software to address an operational bottleneck.
            </p>
            <a href="#middle-our-work" className="common-pink-button">
              Learn More
            </a>
            <a
              href={Portfolio}
              className="common-pink-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our Portfolio
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={ourWorkPic}
            alt="Commit the Change team working on projects"
            className="our-work-panel-img"
          />
        </div>
      </animated.div>

      <div id="middle-our-work">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setMiddleVisible(middleViewCount + 1);
          }}
        >
          <animated.div style={slideUpMiddle} className="project-text">
            <h1 className="upcoming-projects-title">Our 2021-22 Projects</h1>
            <p className="upcoming-projects-description">
              Here are the projects that we worked on for the 2021-22 school
              year!
            </p>
          </animated.div>
        </VisibilitySensor>
        <div className="projects">{activeProjectsAnimation}</div>
      </div>

      <div className="past-projects-section">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setBottomVisible(bottomViewCount + 1);
          }}
        >
          <animated.div style={slideInBottomText} className="project-text">
            <h1 className="past-projects-title">Our Past Projects</h1>
            <p className="past-project-description">
              Commit the Change started its first project in April 2020 with the
              nonprofit Crime Survivors. This organization wanted a way to put
              their paper pamplets online, so that the information can be more
              accessible and to decrease the printing cost of the pamplets.
            </p>
          </animated.div>
        </VisibilitySensor>
        <div className="projects">{pastProjectsAnimation}</div>
        <div className="bottom-card-div">
          <animated.div style={fadeInProjects} className="bottom-card">
            <ProjectCardPurple
              projectName={projects.inactive[0].projectName}
              src={projects.inactive[0].src}
              alt={projects.inactive[0].alt}
              description={projects.inactive[0].description}
              projectURL={projects.inactive[0].projectURL}
            />
          </animated.div>
        </div>
      </div> */}
    </main>
  );
};

export default OurWork;
