import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCardPurple.css';
import { animated } from 'react-spring';

function ProjectCardPurple(props) {
  const {
    src,
    alt,
    projectName,
    description,
    mediumURL,
    projectURL,
    npoURL,
    isAnimated,
    animationProps = {},
  } = props;
  return (
    <animated.div
      style={isAnimated ? animationProps : null}
      className="project-card-purple"
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
        <h1 className="project-name-purple">{projectName}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="project-card-more-purple">
        <a
          href={mediumURL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-more-purple-link"
        >
          <div className="read-more-button">
            View Project
          </div>
        </a>
        <a
          href={projectURL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-more-purple-link"
        >
          <div className="read-more-button">
            View Code
          </div>
        </a>
      </div>
    </animated.div>
  );
}

// function ProjectCardPurple(props) {
//   const {
//     src, alt, projectName, description,
//   } = props;
//   return (
//     <div className="project-card-purple">
//       <img src={src} alt={alt} className="project-card-image" />
//       <h1 className="project-name-purple">{projectName}</h1>
//       <p className="description-purple">{description}</p>
//     </div>
//   );
// }

ProjectCardPurple.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mediumURL: PropTypes.string.isRequired,
  projectURL: PropTypes.string.isRequired,
  npoURL: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  animationProps: PropTypes.shape,
};

ProjectCardPurple.defaultProps = {
  animationProps: {},
};

export default ProjectCardPurple;
