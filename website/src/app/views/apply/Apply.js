import React, { useState, useEffect } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

import experienceData from './experienceData';
import questionData from '../contact-us/faq';

import './Apply.css';
import { animationConfigs, animationStates, transitionConfigs } from '../animationConstants';
import designGraphic from '../../../images/apply/designer_graphic.svg';
import devGraphic from '../../../images/apply/dev_graphic.svg';
import timelineValues from './TimelineValues';
import useViewport from '../../../util/useViewport';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import Question from '../../components/Question/Question';
import Footer from '../../components/Footer/Footer';

const Apply = () => {
  const [loaded, setLoaded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { width } = useViewport();
  const handleClick = (index) => setExpandedIndex(expandedIndex === index ? null : index);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);
  // const applicationLink = 'https://tinyurl.com/ctc-app-22';
  const contactEmail = 'ctc@uci.edu';
  const inlineEmail = (
    <a href={`mailto:${contactEmail}`} className="ctc-apply-email-link">
      {contactEmail}
    </a>
  );

  const experiences = experienceData.map((e) => (
    <motion.div
      className="t-card"
      key={e.name}
      variants={animationConfigs.opacity(0, 0)}
      transition={{ ...transitionConfigs.spring(0.75, 0.1), damping: 15 }}
      {...animationStates.whileInView(true)}
    >
      <div className="t-card-img-container">
        <img src={e.src} className="t-card-img" alt={`${e.name}'s CTC experience`} />
      </div>
      <p className="t-card-name">{e.name}</p>
      <p className="t-card-pos">{e.position}</p>
      <p className="t-card-p">{e.experience}</p>
    </motion.div>
  ));

  return (
    <main>
      <div className="ctc-apply-bg">
        <motion.div
          className="ctc-apply-1-bg"
          variants={animationConfigs.transformY('-100%', '-100%')}
          transition={transitionConfigs.simple(loaded ? 0.5 : 0.75)}
          {...animationStates.animate}
        >
          { /*
            Hacky solution for alt-text, but a good option given that the backgroud image is on the parent:
            see http://www.davidmacd.com/blog/alternate-text-for-css-background-images.html
          */}
          <span role="img" aria-label="Groupshot of our amazing team. " />

          <div className="ctc-apply-1-container">
            <motion.p
              className="ctc-apply-1-header"
              variants={animationConfigs.transformY('-100%', '-100%')}
              transition={transitionConfigs.simple(0.5, loaded ? 0 : 0.5)}
              {...animationStates.animate}
            >
              Hey future CTC-er!
            </motion.p>
            <motion.p
              className="ctc-apply-1-subhead"
              variants={animationConfigs.transformY('-200%', '-200%')}
              transition={transitionConfigs.simple(0.5, loaded ? 0 : 0.5)}
              {...animationStates.animate}
            >
              Want to Join Our Team?
            </motion.p>
            <motion.p
              className="ctc-apply-1-p"
              variants={animationConfigs.transformY('200%', '200%')}
              transition={transitionConfigs.simple(0.5, loaded ? 0 : 0.8)}
              {...animationStates.animate}
            >
              We recruit new developers and designers at the beginning of every year!
              Apply to join our team for the
              &apos;23-24 school year- applications open <b>early September</b>.
            </motion.p>
            <motion.div
              className="ctc-apply-1-buttons"
              variants={animationConfigs.transformY('200%', '200%')}
              transition={transitionConfigs.simple(0.5, loaded ? 0 : 0.8)}
              {...animationStates.animate}
            >
              {/* <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ctc-apply-1-applink"
              > */}
              {/* <span className="ctc-apply-1-applink-disabled">
                <div className="ctc-apply-1-apply">Apply Now</div>
                <div className="ctc-apply-1-apply-disabled">
                  {width > 850
                    ? 'The 2022-23 application closed September 30th!'
                    : 'Check back at a later date!'}
                </div>
              </span> */}
              {/* </a> */}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="ctc-apply-2-bg"
          initial={{
            opacity: 0,
            rotate: 45,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5), damping: 15 }}
          exit={{
            opacity: 0,
            rotate: -45,
            scale: 0.7,
          }}
        >
          <p className="ctc-apply-2-header" id="roles">
            Choose Between...
          </p>
          <div className="ctc-apply-2-columns">
            <div className="ctc-apply-2-leftcolumn">
              <motion.img
                src={designGraphic}
                className="ctc-apply-2-column-image"
                drag
                dragSnapToOrigin
                dragConstraints={{
                  left: -50,
                  right: -50,
                  top: 20,
                  bottom: -10,
                }}
                dragElastic={0.4}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                alt={"" /* I believe that the content of this image is already expressed in the content below, so empty alt-text is appropriate here. (Andrew) */}
              />
              <p className="ctc-apply-2-column-title">Designer</p>
              <p className="ctc-apply-2-column-p">
                As a designer, you&apos;ll learn about the UI/UX design process
                (research, wireframing, prototyping, usability testing, and
                more) as you create designs for the software your team is
                building.
              </p>
              <p className="ctc-apply-2-column-p">Additionally you will:</p>
              <ul>
                <li className="ctc-apply-2-list-item">
                  Consolidate your design process into a case study at the end
                  of the year
                </li>
                <li className="ctc-apply-2-list-item">
                  Learn about working in a cross-functional team
                </li>
                <li className="ctc-apply-2-list-item">
                  Use Figma to create your designs
                </li>
              </ul>
            </div>
            <div className="ctc-apply-2-rightcolumn">
              <motion.img
                src={devGraphic}
                className="ctc-apply-2-column-image"
                drag
                dragSnapToOrigin
                dragConstraints={{
                  left: -50,
                  right: -50,
                  top: 20,
                  bottom: -10,
                }}
                dragElastic={0.4}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                alt={"" /* I believe that the content of this image is already expressed in the content below, so empty alt-text is appropriate here. (Andrew) */}
              />
              <p className="ctc-apply-2-column-title">Developer</p>
              <p className="ctc-apply-2-column-p">
                {width > 850
                  ? `As a developer, you’ll learn several frontend
                  technologies including HTML, CSS/SASS, JavaScript
                  and React, as well as backend technologies including
                  working with APIs, databases, and middleware as you work
                  to implement designs in code for real-life applications.`
                  : `As a developer, you’ll learn languages such as
                  HTML, CSS/SASS, JavaScript and React, as well as concepts
                  including APIs, databases, and middleware as you work
                  to implement designs in code for real-life applications.`}
              </p>
              <p className="ctc-apply-2-column-p">Additionally you will:</p>
              <ul>
                <li className="ctc-apply-2-list-item">
                  Learn about version control using Git
                </li>
                <li className="ctc-apply-2-list-item">
                  Participate in code reviews with your leads and team members
                </li>
                <li className="ctc-apply-2-list-item">
                  Follow industry best practices to write high-quality,
                  sustainable code
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="ctc-apply-3-bg">
          <div className="ctc-apply-3-container">
            <motion.p
              className="ctc-apply-3-header"
              variants={animationConfigs.transformY(-50, -50)}
              transition={{ ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5), damping: 15 }}
              {...animationStates.whileInView(true)}
            >
              Our Experiences
            </motion.p>
          </div>
          <motion.div
            className="ctc-apply-3-t"
            variants={animationConfigs.transformY(-50, -50)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
              staggerChildren: 0.5,
            }}
            {...animationStates.whileInView(true)}
          >
            {experiences}
          </motion.div>
        </div>
        <motion.div
          style={{ display: 'none' }}
          className="ctc-apply-4-bg"
          variants={animationConfigs.opacity(1, 0)}
          transition={{
            ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
            damping: 15,
          }}
          {...animationStates.animate}
        >
          <motion.p
            className="ctc-apply-4-header"
            variants={animationConfigs.transformX(-200, 200)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
            }}
            {...animationStates.whileInView(true)}
          >
            Application Timeline
          </motion.p>
          <motion.p
            className="ctc-apply-4-p"
            variants={animationConfigs.transformX(200, 200)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
            }}
            {...animationStates.whileInView(true)}
          >
            All applicants will go through the same process, regardless of the
            role they&apos;re applying for. Keep reading for a brief timeline of
            our application process.
            <span className="ctc-apply-4-bold"> Have any questions? </span>
            Reach out to us on any of our social platforms or email us at
            {' '}
            {inlineEmail}
            .
          </motion.p>
          <motion.div
            className="ctc-apply-4-timeline-container"
            variants={animationConfigs.height(0, 'auto', 0)}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 1),
              damping: 15,
            }}
            {...animationStates.whileInView(true)}
          >
            <VerticalTimeline timelineValues={timelineValues} />
          </motion.div>
          <div className="ctc-apply-4-buttons">
            {/* <a
              href={applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ctc-apply-4-applink"
            > */}
            <span className="ctc-apply-4-applink-disabled">
              {/* <div className="ctc-apply-4-apply">Apply Now</div> */}
              <div className="ctc-apply-4-apply-disabled">
                {width > 850
                  ? 'The 2022-23 application closed September 30th!'
                  : 'Check back at a later date!'}
              </div>
            </span>
            {/* </a> */}
          </div>
        </motion.div>
        <div className="ctc-apply-5-bg">
          <motion.div
            className="ctc-apply-5-top"
            variants={animationConfigs.scaleY(0, 0)}
            transition={transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5)}
            {...animationStates.whileInView(true)}
          >
            <p className="ctc-apply-5-header">Got Questions?</p>
          </motion.div>
          <motion.div
            className="ctc-apply-5-faq-container"
            variants={animationConfigs.transformY('20%', '-20%')}
            transition={{
              ...transitionConfigs.spring(loaded ? 0.5 : 0.75, loaded ? 0 : 0.5),
              damping: 15,
            }}
            {...animationStates.whileInView(true)}
          >
            {/* (TODO): general weirdness with the questions components: investigate & fix */}
            <div className="ctc-apply-5-q-container">
              <LayoutGroup>
                {questionData.current.map((q, index) => (
                  <Question
                    index={index}
                    key={index}
                    questionText={q.question}
                    answerText={q.answer}
                    expanded={index === expandedIndex}
                    handleClick={handleClick}
                  />
                ))}
              </LayoutGroup>
            </div>
          </motion.div>
        </div>
        <Footer className="ctc-apply-footer" />
      </div>
    </main>
  );
};

export default Apply;
