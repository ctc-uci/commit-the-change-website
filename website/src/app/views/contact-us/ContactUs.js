import React from 'react';
import './ContactUs.css';
import { animated, useSpring } from 'react-spring';
import animationConfig from '../animationConstants';
import ContactUsData from './ContactUs.json';
import placeholder from '../../../images/undraw_placeholder.png';
import contactUsImage from '../../../images/contactUs/contact-us-header.svg';
import purpleLogo from '../../../images/contactUs/purple_ctc 2.svg';

function ContactUs() {
  const slideUp = useSpring(animationConfig);

  return (
    <div className="contact-us-page">
      <animated.div style={slideUp} className="contact-us-upper-third">
        <div className="contact-us-upper-third-items">
          <div className="contact-us-info">
            <h3 className="contact-us-students">STUDENTS</h3>
            <h1 className="contact-us-title-text">{ContactUsData.topThird.titleText}</h1>
            <p>{ContactUsData.topThird.description}</p>
            <a href="https://google.com" className="apply-now-button">Apply Now!</a>
          </div>
          <img src={contactUsImage} alt="undraw" className="contact-us-img" />
        </div>
      </animated.div>
      <div id="contact-us-middle-third">
        <div className="contact-us-middle-items">
          <img src={purpleLogo} alt="undraw" className="heart-logo" />
          <div className="middle-third-info">
            <h3 className="middle-contact-header">{ContactUsData.middleThird.header}</h3>
            <h1 className="middle-contact-title">{ContactUsData.middleThird.topTitle}</h1>
            <p>{ContactUsData.middleThird.topDescription}</p>
            <p>{ContactUsData.middleThird.bottomDescription}</p>
            <a href="mailto:committhechange.uci@gmail.com" className="get-in-touch-button" target="_blank" rel="noopener noreferrer">Get in Touch</a>
          </div>
        </div>
      </div>
      <div id="contact-us-bottom-third">
        <div className="contact-us-bottom-third-items">
          <img src={placeholder} alt="undraw" className="contact-us-img" />
          <div className="bottom-third-info">
            <h3>{ContactUsData.bottomThird.header}</h3>
            <h1>{ContactUsData.bottomThird.titleText}</h1>
            <p>{ContactUsData.bottomThird.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
