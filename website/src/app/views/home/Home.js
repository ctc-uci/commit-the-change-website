import React, { useState } from 'react';
import './Home.css';
import ReactPageScroller from 'react-page-scroller';
import { animated, useSpring, useTrail } from 'react-spring';
import Navbar from '../../components/Navbar/Nav';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../animationConstants';
import Timeline from '../../components/Timeline/Timeline';
import homeLandingPic from '../../../images/home/home-top-panel.svg';
import ctcShadowedLogo from '../../../images/home/ctc-logo-yellow-shadowed.svg';
import fblogo from '../../../images/home/facebooklogo.svg';
import instagramlogo from '../../../images/home/instagramlogo.svg';
import mediumlogo from '../../../images/home/mediumlogo.svg';
import linkedinlogo from '../../../images/home/linkedinlogo.svg';

function Home() {
  const [middleViewCount, setMiddleVisible] = useState(0);
  const [bottomViewCount, setBottomVisible] = useState(0);
  const [bottomButtonViewCount, setBottomButtonVisible] = useState(0);
  
  // Playing around with react-page-scroller
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = pageNum => setCurrentPage(pageNum);

  // todo: make these into components
  const socialMediaList = [
    <a
      href="https://www.facebook.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={fblogo} alt="facebook logo" className="social-logo" />
      <p id="link-name">Facebook</p>
    </a>,
    <a
      href="https://www.instagram.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramlogo} alt="instagram logo" className="social-logo" />
      <p id="link-name">Instagram</p>
    </a>,
    <a
      href="https://www.linkedin.com/company/commit-the-change-uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinlogo} alt="linkedin logo" className="social-logo" />
      <p id="link-name">Linkedin</p>
    </a>,
    <a
      href="https://medium.com/@committhechange.uci"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={mediumlogo} alt="medium logo" className="medium-logo social-logo" />
      <p id="link-name">Medium</p>
    </a>,
  ];

  const slideUp = useSpring(animationConfig.slideUp(true));
  const slideInLeft = useSpring(animationConfig.slideInLeft(true));
  const fadeInMiddle = useSpring(animationConfig.fadeIn(middleViewCount > 0));
  const fadeInBottom = useSpring(animationConfig.fadeIn(bottomViewCount > 0));
  const trail = useTrail(
    socialMediaList.length,
    animationConfig.trail(middleViewCount > 0),
  );
  const popButtons = useSpring(
    animationConfig.slideUp(bottomButtonViewCount > 0),
  );

  const socialMediaLinks = trail.map((props, index) => (
    <animated.a className="social-media-link" style={props}>
      {socialMediaList[index]}
    </animated.a>
  ));
  
  return (
    <main>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <div className="ctc-home-1-bg">
          <Navbar />
          <div className="ctc-home-1-container">
            <animated.div className="ctc-home-1-left" style={slideUp}>
              <p className="ctc-home-1-header">Commit the Change</p>
              <p className="ctc-home-1-subhead">Tech with Purpose</p>
              <p className="ctc-home-1-desc">
                We help non-profit organizations maximize their social impact with better tools and technologies, by giving opportunities to UC Irvine students to design and develop high-quality software projects.
              </p>
              <a onClick={() => handlePageChange(1)} className="no-text-decoration">
                <div className="ctc-home-1-button">
                  Learn More
                </div>  
              </a>
            </animated.div>
            <animated.div className="ctc-home-1-right" style={slideInLeft}>
              <img className="ctc-home-1-shadowed-logo" src={ctcShadowedLogo} />
            </animated.div>
          </div>
        </div>
        {/* Placeholder pages go here */}
        <div className="ctc-home-1-bg" />
        <div className="ctc-home-1-bg" />
      </ReactPageScroller>
    </main>
  );
}

export default Home;
