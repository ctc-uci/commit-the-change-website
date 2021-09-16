import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import applyGraphic from '../../../images/apply/apply.svg';
import animationConfig from '../animationConstants';
import './Apply.css';
import VerticalTimeline from '../../components/VerticalTimeline/VeritcalTimeline';
import timelineValues from './TimelineValues';

function Apply() {
  const applicationLink = 'https://tinyurl.com/ctc-app-2021';
  const contactEmail = 'ctc@uci.edu';
  const inlineEmail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

  const [appProcessViewCount, setAppProcessViewCount] = useState(0);
  const [timelineViewCount, setTimelineViewCount] = useState(0);

  const slideUp = useSpring(animationConfig.slideUp(true));
  const slideUpAppProcess = useSpring(
    animationConfig.slideUp(appProcessViewCount > 0),
  );
  const slideUpTimeline = useSpring(
    animationConfig.slideUp(timelineViewCount > 0),
  );

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
            <a href="#application-steps" className="common-pink-button">
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

      <div id="application-steps">
        <div className="application-steps-panel">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) setAppProcessViewCount(appProcessViewCount + 1);
            }}
          >
            <h1>Application Process</h1>
          </VisibilitySensor>
          <animated.div style={slideUpAppProcess}>
            <p className="application-description">
              All applicants will go through the same process, regardless of the role they’re applying for.
              Keep reading for a brief timeline of our application process. Have any questions?
              Reach out to us on any of our social platforms or email us at
              {' '}
              {inlineEmail}
              .
            </p>
          </animated.div>
          <VisibilitySensor
            partialVisibility
            minTopValue={50}
            onChange={(isVisible) => {
              if (isVisible) setTimelineViewCount(timelineViewCount + 1);
            }}
          >
            <animated.div style={slideUpTimeline}>
              <VerticalTimeline timelineValues={timelineValues} />
            </animated.div>
          </VisibilitySensor>
          <div className="apply-button-wrapper">
            <a href={applicationLink} className="apply-here-button common-pink-button">
              Apply Here!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Apply;
