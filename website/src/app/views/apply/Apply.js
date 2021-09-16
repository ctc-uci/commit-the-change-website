import React from 'react';
import { animated, useSpring } from 'react-spring';
import applyGraphic from '../../../images/apply/apply.svg';
import animationConfig from '../animationConstants';
import './Apply.css';

function Apply() {
  const slideUp = useSpring(animationConfig.slideUp(true));
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
    </main>
  );
}

export default Apply;
