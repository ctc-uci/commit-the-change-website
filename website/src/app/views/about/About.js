import React, { useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import aboutUsGraphic from '../../../images/about/about-us.svg';
import whiteCtcLogo from '../../../images/logo/cropped-white-ctc.svg';
import membersData from './members';
import values from './values';
import animationConfig from '../animationConstants';
import './About.css';

function About() {
  const [teamViewCount, setTeamVisible] = useState(0);
  const [valuesViewCount, setValuesVisible] = useState(0);
  const slideUp = useSpring(animationConfig.slideUp(true));
  const slideUpValuesHeader = useSpring(
    animationConfig.slideUp(valuesViewCount > 0),
  );

  // TEAM ***********************
  const grid = useTrail(
    membersData.info.length,
    animationConfig.fadeInStiff(teamViewCount > 0),
  );

  const profileImages = grid.map((props, index) => {
    const person = membersData.info[index];
    return (
      <animated.div className="card" style={props}>
        <ProfileCard
          name={person.name}
          position={person.position}
          linkedinURL={person.linkedinURL}
          imageURL={person.imageURL}
        />
      </animated.div>
    );
  });

  // VALUES ***********************
  const valuesAnimationTopRow = useTrail(
    values.top.length,
    animationConfig.trail(valuesViewCount > 0),
  );
  const valuesAnimationBottomRow = useTrail(
    values.bottom.length,
    animationConfig.trail(valuesViewCount > 0),
  );

  const topRow = valuesAnimationTopRow.map((props, index) => {
    const value = values.top[index];
    return (
      <animated.div style={props} className="value">
        <h2>{value.title}</h2>
        <img src={value.src} alt={value.alt} />
        <p>{value.description}</p>
      </animated.div>
    );
  });

  const bottomRow = valuesAnimationBottomRow.map((props, index) => {
    const value = values.bottom[index];
    return (
      <animated.div style={props} className="value">
        <h2>{value.title}</h2>
        <img src={value.src} alt={value.alt} />
        <p>{value.description}</p>
      </animated.div>
    );
  });
  // ***********************

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">About Us</h1>
            <p className="top-panel-description">
              Founded in 2020, Commit the Change started as a small group of
              undergraduate students with a shared love for coding and
              volunteering for causes in their communities. Today, Commit the
              Change is an established student organization at UC Irvine with a
              team of skilled designers and developers.
            </p>
            <a href="#mission" className="common-pink-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={aboutUsGraphic}
            className="about-top-panel-img"
            alt="About the Commit the Change team"
          />
        </div>
      </animated.div>
      <div className="links-div">
        <div className="links">
          <a href="#mission">
            <h2>
              Our Mission &#62;
              <span className="off">&#62;</span>
            </h2>
          </a>
          <a href="#values">
            <h2>
              Our Values &#62;
              <span className="off">&#62;</span>
            </h2>
          </a>
          <a href="#team">
            <h2>
              The Team &#62;
              <span className="off">&#62;</span>
            </h2>
          </a>
        </div>
      </div>
      <div className="our-mission-panel .tint" id="mission">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p className="mission-text-description">
            At Commit the Change, our mission is to develop high quality
            software for non-profit organizations while giving students at UC
            Irvine opportunities to develop tech, with purpose.
          </p>
          <br />
          <p className="mission-text-description">
            We believe in the talent of our members and provide countless
            opportunities for growth. Many of our alumni continue to spread
            their influence within large companies across the world.
          </p>
        </div>
        <div className="ctc-logo">
          <img src={whiteCtcLogo} alt="Commit the Change white heart logo" />
        </div>
      </div>
      <div className="our-values-panel" id="values">
        <animated.div style={slideUpValuesHeader}>
          <h1>Our Values &#38; Culture</h1>
          <p className="values-description">
            Commit the Change understands the importance of culture and is
            committed to standing for these common values. These are not just
            hollow sayings, we will hold ourselves accountable to constantly
            improving and challenging ourselves through our actions and words.
          </p>
        </animated.div>
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            if (isVisible) setValuesVisible(valuesViewCount + 1);
          }}
        >
          <div className="value-row-1">{topRow}</div>
        </VisibilitySensor>
        <div className="value-row-2">{bottomRow}</div>
      </div>
      <div className="our-team-panel" id="team">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setTeamVisible(teamViewCount + 1);
          }}
        >
          <h1>Our Team</h1>
        </VisibilitySensor>
        <p className="our-team-description">
          Meet our team of hard-working designers and developers!
        </p>
        <div className="team-photos">{profileImages}</div>
      </div>
    </main>
  );
}

export default About;
