import React from 'react';
import PropTypes from 'prop-types';

import './ProjectCard.css';
import { animated } from 'react-spring';
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';

const ProjectCard = ({
  start,
  end,
  src,
  alt,
  projectName,
  description,
  npoURL,
  isAnimated,
  animationProps,
  backgroundColor,
}) => (
  <animated.div
    style={isAnimated ? animationProps : null}
    className="project-card"
  >
    <div
      className="project-card-image-div"
      style={{ backgroundColor }}
    >
      <img className="project-card-image" src={src} alt={alt} />
    </div>
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
        {start}
        {' '}
        -
        {' '}
        {end}
      </p>
      <p className="description">{description}</p>
      <Link to="/projects"><button type="button" className="primary-button">Learn More</button></Link>
    </div>
  </animated.div>
);

ProjectCard.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string,
  npoURL: PropTypes.string,
  isAnimated: PropTypes.bool,
  animationProps: PropTypes.instanceOf(Object),
  backgroundColor: PropTypes.string,
};

ProjectCard.defaultProps = {
  description: '',
  npoURL: 'https://ctc-uci.com',
  isAnimated: false,
  animationProps: {},
  backgroundColor: "#fff",
};

export default ProjectCard;
