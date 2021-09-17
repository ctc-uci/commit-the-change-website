import React, { useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import applyGraphic from '../../../images/apply/apply.svg';
import animationConfig from '../animationConstants';

import TeamExperience from '../../components/TeamExperience/TeamExperience';
import experienceData from './experienceData';

import './Apply.css';

function Apply() {
  const slideUp = useSpring(animationConfig.slideUp(true));

  const [experienceHeaderCount, setExperienceHeaderVisible] = useState(0);
  const [experienceViewCount, setExperienceViewVisible] = useState(0);

  const slideUpExperienceHeader = useSpring(
    animationConfig.slideUp(experienceHeaderCount > 0),
  );

  // EXPERIENCES *****************
  const experiencesAnimation = useTrail(
    experienceData.length,
    animationConfig.slideUp(experienceViewCount > 0),
  );

  const experiences = experiencesAnimation.map((animationProps, index) => {
    const value = experienceData[index];
    return (
      <TeamExperience
        src={value.src}
        alt={value.alt}
        name={value.name}
        position={value.position}
        experience={value.experience}
        index={index}
        animationProps={animationProps}
        isAnimated
      />
    );
  });

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Why join CTC?</h1>
            <p className="top-panel-description">
              Commit the Change is devoted to contributing to the community
              by creating software products for non-profits. As part of this,
              our developers and designers learn how to work both within their
              teams and across cross-functional teams in an Agile-like environment.
              Applying to CTC is a great opportunity to be part of an organization
              that values innovative technology being used for social good!
            </p>
            <a href="#bottom" className="common-pink-button">
              Apply
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={applyGraphic}
            className="apply-top-panel-img"
            alt="Apply to Commit the Change!"
          />
        </div>
      </animated.div>

      <div className="our-team-experiences-panel">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setExperienceHeaderVisible(experienceHeaderCount + 1);
          }}
        >
          <h1 className="experiences-title">Our Team&#39;s Experiences</h1>
        </VisibilitySensor>
        <animated.div style={slideUpExperienceHeader}>
          <div className="team-experiences-text">
            <p className="experiences-description">
              At Commit the Change, we are dedicated to building competent software
              for non-profits while exploring and solving new technical challenges.
              Here, we showcase Sydney’s, Sonali’s,  and Rostam’s experiences in
              their respective CTC projects during the 2020-2021 year.
            </p>
          </div>
        </animated.div>
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) setExperienceViewVisible(experienceViewCount + 1);
          }}
        >
          <div className="experiences">
            {experiences}
          </div>
        </VisibilitySensor>
      </div>
    </main>
  );
}

export default Apply;
