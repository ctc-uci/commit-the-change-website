import React from "react";
import PropTypes from "prop-types";
import "./TeamExperience.css";
import { animated } from "react-spring";

const TeamExperience = ({
  src,
  alt,
  name,
  position,
  experience,
  index,
  isAnimated,
  animationProps = {},
}) => (
  <animated.div
    style={isAnimated ? animationProps : null}
    className="team-experience-container"
  >
    <div
      className={`image-container ${index % 2 === 0 ? "padding-class" : ""}`}
    >
      <img src={src} alt={alt} className="member-image" />
    </div>
    <div className={`member-details ${index % 2 === 1 ? "padding-class" : ""}`}>
      <div className="member-section-1">
        <h2 className="member-name">{name}</h2>
        <h3 className="member-position">{position}</h3>
      </div>
      <p className="member-experience">{experience}</p>
    </div>
  </animated.div>
);

TeamExperience.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  animationProps: PropTypes.objectOf(PropTypes.any),
};

TeamExperience.defaultProps = {
  animationProps: {},
};

export default TeamExperience;
