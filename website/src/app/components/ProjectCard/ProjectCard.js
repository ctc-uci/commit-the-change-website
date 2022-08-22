import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import { animated } from "react-spring";
import { ArrowUpRight } from "react-feather";

function ProjectCard(props) {
  const {
    start,
    end,
    src,
    alt,
    projectName,
    description,
    // projectURL,
    npoURL,
    isAnimated,
    animationProps = {},
  } = props;
  return (
    <animated.div
      style={isAnimated ? animationProps : null}
      className="project-card"
    >
      <div
        className="project-card-image-div"
        style={{ backgroundImage: `url(${src})` }}
        alt={{alt}}
      />
      <div className="project-card-text">
        <a
          href={npoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-name"
        >
          {projectName}
          <ArrowUpRight className="project-card-arrow-up-right" />
        </a>
        <p className="project-timeline">
          {start} - {end}
        </p>
        <p className="description">{description}</p>
      </div>
    </animated.div>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {};

export default ProjectCard;
