import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import { animated } from 'react-spring';

function ProjectCard(props) {
  const {
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
      <div className="project-card-image-div">
        <a href={npoURL} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={alt}
            className="upcoming-project-card-image"
          />
        </a>
      </div>
      <div className="project-card-text">
        <h1 className="project-name">{projectName}</h1>
        <p className="description">{description}</p>
      </div>
      {/* <a
        href={projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-more"
      >
        <p className="read-more">
          Read More &#62;
          <span className="project-off">&#62;</span>
        </p>
      </a> */}
    </animated.div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // projectURL: PropTypes.string.isRequired,
  npoURL: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  animationProps: PropTypes.shape,
};

ProjectCard.defaultProps = {
  animationProps: {},
};

export default ProjectCard;
