import React, { useState } from 'react';
import './ContactUs.css';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../animationConstants';
import ContactUsData from './ContactUs.json';
import QuestionData from './faq';
import Question from '../../components/Question/Question';
import contactUsImage from '../../../images/contactUs/contact-us-header.svg';
import purpleLogo from '../../../images/contactUs/purple_ctc 2.svg';

function ContactUs() {
  const slideUp = useSpring(animationConfig.slideUp(true));
  const [middleViewCount, setMiddleVisible] = useState(0);
  const slideUpInactiveNpo = useSpring(
    animationConfig.fadeIn(middleViewCount > 0),
  );

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const inlineEmail = <a href={`mailto:${ContactUsData.contactEmail}`}>{ContactUsData.contactEmail}</a>;

  return (
    <div className="contact-us-page">
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text contact-mobile">
          <div className="inside-top-panel-text">
            <h3 className="contact-us-students">STUDENTS</h3>
            <h1 className="top-panel-title">
              {ContactUsData.topThird.titleText}
            </h1>
            <p className="top-panel-description">
              {ContactUsData.topThird.description}
            </p>
            <a
              href="#faq-section"
              className="common-pink-button"
            >
              Read FAQ
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScraPyuZDOV2WQZXacd2QHPqf3qBFN9SpBT09z2VULVuJRaCg/viewform"
              className="common-pink-button"
            >
              Interest Form
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={contactUsImage}
            alt="Join the Commit the Change team"
            className="contact-us-top-panel-img"
          />
        </div>
      </animated.div>

      <div className="contact-us-middle-third">
        <div className="contact-us-middle-items">
          <img src={purpleLogo} alt="Commit the Change purple heart logo" className="heart-logo" />
          <animated.div
            style={slideUpInactiveNpo}
            className="middle-third-info"
          >
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) setMiddleVisible(middleViewCount + 1);
              }}
            >
              <h3 className="middle-contact-header">
                {ContactUsData.middleThird.header}
              </h3>
            </VisibilitySensor>
            <h1 className="middle-contact-title">
              {ContactUsData.middleThird.topTitle}
            </h1>
            <p>{ContactUsData.middleThird.topDescription}</p>
            <p>
              {ContactUsData.middleThird.bottomDescription}
              {inlineEmail}
              !
            </p>
            <a
              href="mailto:ctc@uci.edu"
              className="common-pink-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </animated.div>
        </div>
      </div>

      <div className="contact-us-bottom-third" id="faq-section">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="contact-us-bottom-third-items">
          {QuestionData.current.map((el, index) => (
            <Question
              index={index}
              key={index.toString()}
              questionText={el.question}
              answerText={el.answer}
              expanded={index === expandedIndex}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
