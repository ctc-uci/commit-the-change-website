import React, { useState } from 'react';
import './OurWork.css';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../animationConstants';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectCardPurple from '../../components/ProjectCardPurple/ProjectCardPurple';
import ourWorkPic from '../../../images/ourWork/our-work.svg';
import projects from './projectsData';

function OurWork() {
  const [middleViewCount, setMiddleVisible] = useState(0);
  const [bottomViewCount, setBottomVisible] = useState(0);

  const slideUpTop = useSpring(animationConfig.slideUp(true));
  const slideUpMiddle = useSpring(animationConfig.slideUp(middleViewCount > 0));
  const activeProjectsTrail = useTrail(projects.active.length, animationConfig.trail(middleViewCount > 0));
  const slideUpInactiveProjects = useSpring(animationConfig.slideUp(bottomViewCount > 0, 500));
  const slideInBottomText = useSpring(animationConfig.slideInLeft(bottomViewCount > 0));

  const activeProjectsAnimation = activeProjectsTrail.map((props, index) => {
    const project = projects.active[index];
    return (
      <ProjectCard
        imageURL={project.imageURL}
        projectName={project.projectName}
        description={project.description}
        projectURL={project.projectURL}
        animationProps={props}
        isAnimated
      />
    );
  });

  return (
    <main>
      <animated.div style={slideUpTop} className="top-panel">
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
          </div>
        </div>
        <div className="top-panel-pic">
          <img src={ourWorkPic} alt="our-work" className="our-work-panel-img" />
        </div>
      </animated.div>
      <div id="middle-our-work">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setMiddleVisible(middleViewCount + 1); }}>
          <animated.div style={slideUpMiddle} className="project-text">
            <h1 className="upcoming-projects">Our Upcoming Projects</h1>
            <p className="upcoming-projects-description">
              We are proud to present the below projects for the 2020-2021
              academic year!
            </p>
          </animated.div>
        </VisibilitySensor>
        <div className="projects">{activeProjectsAnimation}</div>
      </div>

      <div className="past-project-section">
        <VisibilitySensor onChange={(isVisible) => { if (isVisible) setBottomVisible(bottomViewCount + 1); }}>
          <div className="past-project-div">
            <animated.div style={slideInBottomText} className="past-project-content">
              <h1 className="past-project-title">Our Past Project</h1>
              <p className="past-project-description">
                Commit the Change started its first project in April 2020 with the
                nonprofit Crime Survivors. This organization wanted a way to put
                their paper pamplets online, so that the information can be more
                accessible and to decrease the printing cost of the pamplets.
              </p>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="common-pink-button"
              >
                View Project
              </a>
            </animated.div>
          </div>
        </VisibilitySensor>

        <div className="bottom-card-div">
          <animated.div style={slideUpInactiveProjects} className="bottom-card">
            <ProjectCardPurple
              projectName={projects.inactive[0].projectName}
              imageURL={projects.inactive[0].imageURL}
              description={projects.inactive[0].description}
              projectURL={projects.inactive[0].projectURL}
            />
          </animated.div>
        </div>
      </div>
    </main>
  );
}
export default OurWork;
