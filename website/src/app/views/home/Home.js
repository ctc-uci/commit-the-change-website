import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ReactPageScroller from "react-page-scroller";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { animated, useSpring, useTrail } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import animationConfig from "../animationConstants";
import Timeline from "../../components/Timeline/Timeline";
import homeLandingPic from "../../../images/home/home-top-panel.svg";
import Footer from "../../components/Footer/Footer";
import ctcShadowedLogo from "../../../images/home/ctc-logo-yellow-shadowed.svg";
import fblogo from "../../../images/home/facebooklogo.svg";
import instagramlogo from "../../../images/home/instagramlogo.svg";
import mediumlogo from "../../../images/home/mediumlogo.svg";
import linkedinlogo from "../../../images/home/linkedinlogo.svg";

const Home = () => {
  const [middleViewCount, setMiddleVisible] = useState(0);
  const [bottomViewCount, setBottomVisible] = useState(0);
  const [bottomButtonViewCount, setBottomButtonVisible] = useState(0);

  // Playing around with react-page-scroller
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (pageNum) => setCurrentPage(pageNum);

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
      <img
        src={mediumlogo}
        alt="medium logo"
        className="medium-logo social-logo"
      />
      <p id="link-name">Medium</p>
    </a>,
  ];

  const slideUp = useSpring(animationConfig.slideUp(true));
  const slideInLeft = useSpring(animationConfig.slideInLeft(true));
  const fadeInMiddle = useSpring(animationConfig.fadeIn(middleViewCount > 0));
  const fadeInBottom = useSpring(animationConfig.fadeIn(bottomViewCount > 0));
  const trail = useTrail(
    socialMediaList.length,
    animationConfig.trail(middleViewCount > 0)
  );
  const popButtons = useSpring(
    animationConfig.slideUp(bottomButtonViewCount > 0)
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
        <motion.div
          className="ctc-home-1-bg"
          initial={{ width: 0, height: 0 }}
          animate={{ width: "100%", height: "100%" }}
          exit={{ x: "100%", y: "100%" }}
          transition={{ duration: 1 }}
        >
          <div className="ctc-home-1-container">
            <div className="ctc-home-1-left" style={slideUp}>
              <motion.p
                className="ctc-home-1-header"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.75 }}
              >
                Commit the Change
              </motion.p>
              <motion.p
                className="ctc-home-1-subhead"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.75 }}
              >
                Tech with Purpose
              </motion.p>
              <motion.p
                className="ctc-home-1-desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.75 }}
              >
                We help non-profit organizations maximize their social impact
                with better tools and technologies, by providing opportunities
                to UC Irvine students to design and develop high-quality
                software projects.
              </motion.p>
              <a
                onClick={() => handlePageChange(1)}
                className="no-text-decoration"
              >
                <motion.div
                  className="ctc-home-1-button common-button"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Learn More
                </motion.div>
              </a>
            </div>
            {/* <animated.div className="ctc-home-1-left" style={slideUp}>
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
            </animated.div> */}
            {/* <animated.div className="ctc-home-1-right" style={slideInLeft}>
              <img className="ctc-home-1-shadowed-logo" src={ctcShadowedLogo} />
            </animated.div> */}
            <div className="ctc-home-1-right">
              <motion.img
                className="ctc-home-1-shadowed-logo"
                src={ctcShadowedLogo}
                initial={{ opacity: 0, x: -100, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  bounce: 0.4,
                }}
                drag
                dragSnapToOrigin
                dragConstraints={{
                  left: 50,
                  right: -100,
                  top: 100,
                  bottom: 80,
                }}
                dragElastic={0.45}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              />
            </div>
          </div>
        </motion.div>
        {/* Placeholder pages go here */}
        <motion.div
          className="ctc-home-2-bg"
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "100%", height: "100%" }}
          exit={{ x: "100%", y: "100%" }}
          transition={{ duration: 1 }}
        >
          <div className="ctc-home-2-container">
            <div className="ctc-home-2-left" style={slideUp}>
              <motion.img
                className="ctc-home-2-shadowed-logo"
                src={ctcShadowedLogo}
                initial={{ opacity: 0, x: -100, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  bounce: 0.4,
                }}
                drag
                dragSnapToOrigin
                dragConstraints={{
                  left: 50,
                  right: -100,
                  top: 100,
                  bottom: 80,
                }}
                dragElastic={0.45}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
              />
            </div>
            <div className="ctc-home-2-right">
              <motion.p
                className="ctc-home-2-header"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.75 }}
              >
                Who are we?
              </motion.p>
              {/* <motion.p
                className="ctc-home-2-subhead"
                initial={{height: 0, opacity: 0}}
                animate={{height: "auto", opacity: 1}}
                transition={{delay: 0.65, duration: 0.75}}
              >
                Tech with Purpose
              </motion.p> */}
              <motion.p
                className="ctc-home-2-desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.75 }}
              >
                Commit the Change is a student organization based at the
                University of California, Irvine and affiliated with the Donald
                Bren School of Information and Computer Sciences.
              </motion.p>
              <motion.p
                className="ctc-home-2-desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.75 }}
              >
                We&apos;re focused on improving workflows and general quality of
                life for our partner nonprofits and the ICS community, by
                creating meaningful technology and hosting unique events which
                connect us closer to our communities and the causes that
                we&apos;re passionate about.
              </motion.p>
              <div className="flexbox">
                <Link to="/apply" className="no-text-decoration">
                  <motion.div
                    className="ctc-home-2-button common-button"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="ctc-home-2-button-top-line">Students</p>
                    <p className="ctc-home-2-button-bottom-line">
                      Join the Club!
                    </p>
                  </motion.div>
                </Link>
                <Link to="/contact" className="no-text-decoration">
                  <motion.div
                    className="ctc-home-2-button common-button"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="ctc-home-2-button-top-line">Nonprofits</p>
                    <p className="ctc-home-2-button-bottom-line">
                      Get in Touch!
                    </p>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <Footer className="home-footer" />
        </motion.div>
      </ReactPageScroller>
    </main>
  );
};

export default Home;
