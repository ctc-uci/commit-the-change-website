import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { ArrowUpRight } from 'react-feather';
import './OurWork.css';
// import Portfolio from "../../../CTC_Portfolio_2022_2023.pdf";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';

import projects from './projectsData';
import { animationConfigs, animationStates, transitionConfigs } from '../animationConstants';

const pastProjects = projects.inactive.map((project) => (
  <motion.div
    className="ctc-ourwork-past-projects-card"
    key={project.projectName}
    variants={animationConfigs.opacity(0, 0)}
    transition={{ ...transitionConfigs.spring(0.75, 0.1), damping: 15 }}
    {...animationStates.whileInView(true)}
  >
    <div className="ctc-ourwork-past-projects-card-img-container">
      <div
        className="ctc-ourwork-past-projects-card-img"
        style={{ backgroundImage: `url(${project.src})` }}
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
        {project.start}
        {' '}
        -
        {' '}
        {project.end}
      </p>
      <p className="ctc-ourwork-past-projects-card-description">
        {project.description}
      </p>
      <div className="ctc-ourwork-past-projects-card-buttons-div">
        <a href={project.projectURL} target="_blank" rel="noopener noreferrer">
          <div className="ctc-ourwork-past-projects-card-github-button">
            Github
          </div>
        </a>
        {/* <div className="ctc-ourwork-past-projects-card-case-study-button">
          Case Study
        </div> */}
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
          variants={animationConfigs.transformY(-50, -50)}
          transition={{
            ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
            damping: 15,
            staggerChildren: 0.5,
          }}
          {...animationStates.whileInView(true)}
        >
          2022-2023 Projects
        </motion.p>
        <div className="ctc-ourwork-centered-container">
          <motion.div
            className="ctc-ourwork-current-projects"
            variants={animationConfigs.transformY(50, 50)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
              staggerChildren: 0.5,
            }}
            {...animationStates.whileInView(true)}
          >
            {projects.active.map((project) => <ProjectCard key={project.projectName} {...project} />)}
          </motion.div>
        </div>
        <motion.p
          className="ctc-ourwork-past-projects-header"
          variants={animationConfigs.transformY(-50, -50)}
          transition={{
            ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
            damping: 15,
            staggerChildren: 0.5,
          }}
          {...animationStates.whileInView(true)}
        >
          Past Projects
        </motion.p>
        <div className="ctc-ourwork-centered-container">
          <motion.div
            className="ctc-ourwork-past-projects"
            variants={animationConfigs.transformY(-50, -50)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
              staggerChildren: 0.5,
            }}
            {...animationStates.whileInView(true)}
          >
            {pastProjects}
          </motion.div>
        </div>
        <Footer className="ourwork-footer" />
      </div>
    </main>
  );
};

export default OurWork;
