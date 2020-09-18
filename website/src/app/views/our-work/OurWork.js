import React from 'react';
import './OurWork.css';
import { animated, useSpring } from 'react-spring';
import animationConfig from '../animationConstants';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectCardPurple from '../../components/ProjectCardPurple/ProjectCardPurple';
import ourWorkPic from '../../../images/our-work.svg';
import scroll from '../../../images/scroll.svg';
import crimeSurvivors from '../../../images/our-work-crime-survivors.svg';
import * as projectData from './ProjectCard.json';

function OurWork() {
  const slideUp = useSpring(animationConfig);

  return (
    <main>
      <animated.div style={slideUp} className="top-our-work">
        <div className="title-div">
          <h1 className="title-header">Our Work</h1>
          <p className="title-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
          <a href="#middle-our-work" className="read-more-button">Learn More</a>
        </div>
        <img src={ourWorkPic} alt="our-work" className="our-work-img" />
      </animated.div>
      <div id="middle-our-work">
        <h1 className="upcoming-projects">Our Upcoming Projects</h1>
        <div className="projects">
          <ProjectCard className="projectcard" imageURL={projectData.project1.imageURL} projectName={projectData.project1.projectName} description={projectData.project1.description} projectURL={projectData.project1.projectURL} />
          <ProjectCard className="projectcard" imageURL={projectData.project2.imageURL} projectName={projectData.project2.projectName} description={projectData.project2.description} projectURL={projectData.project2.projectURL} />
          <ProjectCard className="projectcard" imageURL={projectData.project3.imageURL} projectName={projectData.project3.projectName} description={projectData.project3.description} projectURL={projectData.project3.projectURL} />
        </div>
        <a href="#bottom-our-work" className="scroll-button-element">
          <img src={scroll} alt="scroll-button" />
        </a>
      </div>
      <div id="bottom-our-work">
        <div className="bottom-card">
          <ProjectCardPurple projectName={projectData.project4.projectName} imageURL={crimeSurvivors} description={projectData.project4.description} projectURL={projectData.project4.projectURL} />
        </div>
        <div className="title-div">
          <h1 className="title-header">Our Past Projects</h1>
          <p className="title-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
        </div>
      </div>
    </main>
  );
}
export default OurWork;
