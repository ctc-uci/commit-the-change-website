import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import values from './values';
import Footer from '../../components/Footer/Footer';
import useViewport from '../../../util/useViewport';
import { animationConfigs, animationStates, transitionConfigs } from '../animationConstants';

import './About.css';
import yellowSemicircle from '../../../images/about/ourmission-design.svg';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  const { width } = useViewport();
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(load);
  }, []);

  return (
    <div className="ctc-about-bg">
      <motion.div
        className="about-panel-1"
        variants={animationConfigs.opacity(0, 0)}
        transition={transitionConfigs.simple(loaded ? 0.25 : 0.8)}
        {...animationStates.animate}
      >
        <div className="about-1-left">
          <div className="about-1-left-body">
            <motion.p
              className="about-1-left-heading"
              variants={animationConfigs.transformY(-100, -100)}
              transition={transitionConfigs.simple(0.75, loaded ? 0.5 : 0)}
              {...animationStates.whileInView(true)}
            >
              About Us
            </motion.p>
            <motion.p
              className="about-1-left-paragraph"
              variants={animationConfigs.transformX(100, 100)}
              transition={transitionConfigs.simple(0.75, loaded ? 0.5 : 0)}
              {...animationStates.animate}
            >
              Founded in 2020, Commit the Change started as a small group
              of undergraduate students with a shared love for coding and
              volunteering for causes in their communities.
              After merging with Blueprint in 2021, Commit the Change is
              now an established student organization at UC Irvine with a
              team of skilled designers and developers.
            </motion.p>
          </div>
          {/* <motion.div
            className="ctc-about-1-photo"
            initial={{ x: 500, y: 300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{opacity: 0}}
            transition={transitionConfigs.spring(loaded ? 0.5 : 1.5, 0, 0.05)}
          /> */}
        </div>
      </motion.div>
      <div className="about-panel-2">
        <div className="about-2-text">
          <motion.p
            className="about-2-header"
            variants={animationConfigs.transformY(-50, -50)}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            Our Mission
          </motion.p>
          <motion.p
            className="about-2-paragraph-1"
            variants={animationConfigs.transformX(-50, -50)}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            At Commit the Change, our mission is to
            {' '}
            <b>
              develop high quality software for non-profit organizations
              while giving students at UC Irvine opportunities to develop
              tech with purpose.
            </b>
          </motion.p>
          <motion.p
            className="about-2-paragraph-2"
            variants={animationConfigs.transformX(50, 50)}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            We believe in the talent of our members and provide countless
            opportunities for growth. Many of our alumni continue to spread
            their influence within large companies throughout the world.
          </motion.p>
        </div>
        <motion.img
          src={yellowSemicircle}
          className="yellow-semicircle"
          alt="yellow semicircle"
          variants={animationConfigs.transformY(200, 200)}
          transition={transitionConfigs.spring(loaded ? 0.25 : 1, 0, 0.15)}
          {...animationStates.whileInView(true)}
        />
      </div>
      <motion.div
        className="about-panel-3"
        variants={animationConfigs.opacity(0, 0)}
        transition={transitionConfigs.simple(0.3)}
        {...animationStates.whileInView(true)}

      >
        <div className="header-top-margin" />
        <motion.p
          className="about-3-header"
          initial={{
            opacity: 0,
            rotate: 15,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            y: 0,
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            rotate: 15,
            y: -50,
          }}
          transition={transitionConfigs.simple(0.5)}
        >
          Our Values &amp; Culture
        </motion.p>
        {width > 850 ? (
          <motion.div
            variants={animationConfigs.transformX(-100, 100)}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            <div className="values-row-1">
              {values.top.map((v) => (
                <div className="value-container" key={v.title}>
                  <div className="value-info">
                    <img src={v.src} alt={v.alt} className="value-icon" />
                    <p className="value-name">{v.title}</p>
                    <p className="value-desc">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="values-row-2">
              {values.bottom.map((v) => (
                <div className="value-container" key={v.title}>
                  <div className="value-info">
                    <img src={v.src} alt={v.alt} className="value-icon" />
                    <p className="value-name">{v.title}</p>
                    <p className="value-desc">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="mobile-values"
            variants={animationConfigs.transformX(-100, 100)}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            {values.top.map((v) => (
              <div className="value-container">
                <div className="value-info">
                  <img src={v.src} alt={v.alt} className="value-icon" />
                  <p className="value-name">{v.title}</p>
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>
            ))}
            {values.bottom.map((v) => (
              <div className="value-container">
                <div className="value-info">
                  <img src={v.src} alt={v.alt} className="value-icon" />
                  <p className="value-name">{v.title}</p>
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
      <div className="about-panel-4">
        <motion.p
          className="about-4-header"
          variants={animationConfigs.transformY(-50, -50)}
          transition={transitionConfigs.simple(loaded ? 0.25 : 0.5)}
          {...animationStates.whileInView(true)}
        >
          What are our alumni up to?
        </motion.p>
        <motion.p
          className="about-4-p"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            rotate: -15,
            scale: 0.8,
          }}
          transition={transitionConfigs.simple(loaded ? 0.25 : 0.5)}
        >
          After graduating from UC Irvine, alumni of Commit the Change
          go on to pursue careers in a variety of tech-related fields,
          including software engineering, computer science, UI/UX design,
          product design, and product management.
          {' '}
          <b>Take a look at where our alumni have landed below!</b>
        </motion.p>
        <motion.div
          className="about-4-alumni-container"
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            y: 100,
            scale: 0.8,
          }}
          transition={transitionConfigs.simple(loaded ? 0.25 : 0.4)}
        >
          <div className="about-4-alumni-img" />
        </motion.div>
      </div>
      <Footer className="about-footer" />
    </div>
  );
};

export default About;
