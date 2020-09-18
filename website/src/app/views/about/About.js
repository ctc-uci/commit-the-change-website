import React from 'react';
import { animated, useSpring } from 'react-spring';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import aboutUsGraphic from '../../../images/about-us.svg';
import whiteCtcLogo from '../../../images/logo/cropped-white-ctc.svg';
import teamData from './data.json';
import animationConfig from '../animationConstants';
import './About.css';

function About() {
  const slideUp = useSpring(animationConfig);
  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="panel-left">
          <h1>About Us</h1>
          <p>
            Founded in 2019, Commit the Change started as a small group of
            undergraduate students with a shared love for coding and volunteering
            for causes in their communities. Today, Commit the Change is a student
            organization at UC Irvine with a team of skilled designers and coders.
            We design websites for nonprofit organizations and build them from start to finish.
          </p>
        </div>
        <div className="panel-right">
          <img src={aboutUsGraphic} alt="people collaborating" />
        </div>
      </animated.div>
      <div className="links">
        <a href="#mission">
          <h2>
            Mission &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
        <a href="#values">
          <h2>
            Values &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
        <a href="#team">
          <h2>
            Team &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
      </div>
      <div className="our-mission-panel .tint" id="mission">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            <span className="chevron">&#8250;</span>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <p>
            <span className="chevron">&#8250;</span>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <p>
            <span className="chevron">&#8250;</span>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div className="ctc-logo">
          <img src={whiteCtcLogo} alt="logo" />
        </div>
      </div>
      <div className="our-values-panel" id="values">
        <h1>Our Values &#38; Culture</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <div className="value-row-1">
          <div className="value">
            <span role="img" aria-label="emoji">🤝</span>
            <h2>Develop Community</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">🛠️</span>
            <h2>Build Enduring Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">💗</span>
            <h2>Be Authentic</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
        <div className="value-row-2">
          <div className="value">
            <span role="img" aria-label="emoji">🚀</span>
            <h2>Take Initiative</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">👍</span>
            <h2>Strive for Social Impact</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="our-team-panel" id="team">
        <h1>Our Team</h1>
        <div className="team-photos">
          {
            teamData.map((person) => (
              <div className="person">
                <ProfileCard
                  name={person.name}
                  position={person.position}
                  linkedinURL={person.linkedinURL}
                  imageURL={person.imageURL}
                />
              </div>
            ))
          }

        </div>
      </div>

    </main>
  );
}

export default About;
