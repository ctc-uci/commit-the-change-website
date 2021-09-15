import React from 'react';
import { animated, useSpring } from 'react-spring';
import applyGraphic from '../../../images/apply/apply.svg';
import animationConfig from '../animationConstants';
import './Apply.css';
import VerticalTimeline from '../../components/VerticalTimeline/VeritcalTimeline';

function Apply() {
  const slideUp = useSpring(animationConfig.slideUp(true));

  const contactEmail = 'ctc@uci.edu';
  const inlineEmail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

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

      {/* TODO: Add animations using VisibilitySensor */}
      <div className="application-steps-panel" id="application-steps">
        <animated.div style={slideUp}>
          <h1>Application Process</h1>
          <p className="application-description">
            All applicants will go through the same process, regardless of the role they’re applying for.
            Keep reading for a brief timeline of our application process. Have any questions?
            Reach out to us on any of our social platforms or email us at
            {' '}
            {inlineEmail}
            .
          </p>
        </animated.div>
        <VerticalTimeline />
      </div>
    </main>
  );
}

export default Apply;
