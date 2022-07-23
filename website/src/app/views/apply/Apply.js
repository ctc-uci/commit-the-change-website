import React, { useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import ReactPageScroller from 'react-page-scroller';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

import applyGraphic from '../../../images/apply/apply.svg';
import animationConfig from '../animationConstants';

import TeamExperience from '../../components/TeamExperience/TeamExperience';
import experienceData from './experienceData';

import './Apply.css';
import VerticalTimeline from '../../components/VerticalTimeline/VeritcalTimeline';
import timelineValues from './TimelineValues';

function Apply() {
  const headerText = "Hello world!"
  const subheadText = "We're excited that you're interested in joining CTC this upcoming year."
  const applicationLink = 'https://tinyurl.com/ctc-app-2021';
  const contactEmail = 'ctc@uci.edu';
  const inlineEmail = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

  const [appProcessViewCount, setAppProcessViewCount] = useState(0);
  const [timelineViewCount, setTimelineViewCount] = useState(0);

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

  const slideUpAppProcess = useSpring(
    animationConfig.slideUp(appProcessViewCount > 0),
  );
  const slideUpTimeline = useSpring(
    animationConfig.slideUp(timelineViewCount > 0),
  );

  // Playing around with react-page-scroller
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = pageNum => setCurrentPage(pageNum);

  return (
    <main>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <motion.div
          className="ctc-apply-bg"
          initial={{height: 0, y: "-100%"}}
          animate={{height: "100%", y: 0}}
          exit={{y: "100%"}}
          transition={{duration: 1.8, type: "spring", bounce: 0.22}}
        >
          <div className="ctc-apply-1-container">
            <motion.h2
              className="ctc-apply-1-header"
              variants={{
                hidden: {opacity: 1},
                visible: {opacity: 1, transition: {delay: 2, staggerChildren: 0.125}},
              }}
              initial="hidden"
              animate="visible"
            >
              {headerText.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y: 0},
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              // variants={{
              //   hidden: {opacity: 1},
              //   visible: {opacity: 1, transition: {delay: 2.5, staggerChildren: 0.06}},
              // }}
              // initial="hidden"
              // animate="visible"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 2.2}}
            >
              We're excited that you're interested in joining CTC this upcoming year.
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              // variants={{
              //   hidden: {opacity: 1},
              //   visible: {opacity: 1, transition: {delay: 2.5, staggerChildren: 0.06}},
              // }}
              // initial="hidden"
              // animate="visible"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4.7}}
            >
              While it is true that we aren't able to accept every applicant to our club, we do
              encourage you to fill out our application even if you're a beginner to the basics
              of design or development!
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              // variants={{
              //   hidden: {opacity: 1},
              //   visible: {opacity: 1, transition: {delay: 2.5, staggerChildren: 0.06}},
              // }}
              // initial="hidden"
              // animate="visible"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4.7}}
            > 
              We're looking for people who <b>take initiative, are eager to learn, and are passionate about
              service and giving back to their community.</b>
            </motion.h2>
          </div>
        </motion.div>
        <motion.div
          className="ctc-apply-bg"
          initial={{y: "-100%"}}
          animate={{y: 0}}
          exit={{y: "100%"}}
          transition={{delay: 0.7, type: "spring", bounce: 0.22}}
        >
          <div className="ctc-apply-1-container">
            <motion.h2
              className="ctc-apply-1-header"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 2.2, duration: 1}}
              viewport={{once: true}}
            >
              These are our projects for the 2022-23 school year:
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4.7}}
            >
              NPO 1
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4.7}}
            >
              NPO 2
            </motion.h2>
            <motion.h2
              className="ctc-apply-1-subhead"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4.7}}
            >
              NPO 3
            </motion.h2>
          </div>
        </motion.div>
      </ReactPageScroller>
      {/* <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Why join CTC?</h1>
            <p className="top-panel-description">
              Commit the Change is devoted to contributing to the community
              by creating software that will help non-profits reach more people and do better work.
              As part of this, our developers and designers learn how to work both within their
              teams and across cross-functional teams in an Agile environment.
              Applying to CTC is a great opportunity to be part of an organization
              that values innovative technology being created and used for social good!
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
      <div id="our-team-experiences-panel">
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
                Here, we showcase our past designers&apos; and developers&apos; experiences in
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
      </div>
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
      </div> */}
    </main>
  );
}

export default Apply;
