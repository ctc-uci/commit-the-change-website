import React, { useEffect, useState } from "react";
import { animated, useSpring, useTrail } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import ReactPageScroller from "react-page-scroller";
import { motion } from "framer-motion/dist/framer-motion";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import aboutUsGraphic from "../../../images/about/about-us.svg";
import whiteCtcLogo from "../../../images/logo/cropped-white-ctc.svg";
import Footer from "../../components/Footer/Footer";
// import membersData from './members';
import values from "./values";
import animationConfig from "../animationConstants";
import "./About.css";

const About = () => {
  const [teamViewCount, setTeamVisible] = useState(0);
  const [valuesViewCount, setValuesVisible] = useState(0);
  const slideUp = useSpring(animationConfig.slideUp(true));
  const slideUpValuesHeader = useSpring(
    animationConfig.slideUp(valuesViewCount > 0)
  );
  const slideInLeft = useSpring(animationConfig.slideInLeft(true));

  // Playing around with react-page-scroller and framer-motion
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (pageNum) => setCurrentPage(pageNum);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  // TEAM ***********************
  // const grid = useTrail(
  //   membersData.info.length,
  //   animationConfig.fadeInStiff(teamViewCount > 0),
  // );

  // const profileImages = grid.map((props, index) => {
  //   const person = membersData.info[index];
  //   return (
  //     <animated.div className="card" style={props}>
  //       <ProfileCard
  //         name={person.name}
  //         position={person.position}
  //         linkedinURL={person.linkedinURL}
  //         imageURL={person.imageURL}
  //       />
  //     </animated.div>`
  //   );
  // });
  // const profileImages = membersData.info.map((memberInfo) => (
  //   <div className="card">
  //     <ProfileCard
  //       name={memberInfo.name}
  //       position={memberInfo.position}
  //       linkedinURL={memberInfo.linkedinURL}
  //       imageURL={memberInfo.imageURL}
  //     />
  //   </div>
  // ));

  // VALUES ***********************
  const valuesAnimationTopRow = useTrail(
    values.top.length,
    animationConfig.trail(valuesViewCount > 0)
  );
  const valuesAnimationBottomRow = useTrail(
    values.bottom.length,
    animationConfig.trail(valuesViewCount > 0)
  );

  const topRow = valuesAnimationTopRow.map((props, index) => {
    const value = values.top[index];
    return (
      <animated.div style={props} className="value">
        <h1 className="emoji">{value.emoji}</h1>
        <h2>{value.title}</h2>
        <p>{value.description}</p>
      </animated.div>
    );
  });

  const bottomRow = valuesAnimationBottomRow.map((props, index) => {
    const value = values.bottom[index];
    return (
      <animated.div style={props} className="value">
        <h1>{value.emoji}</h1>
        <h2>{value.title}</h2>
        <p>{value.description}</p>
      </animated.div>
    );
  });
  // ***********************

  return (
    <main>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <div className="ctc-about-1-bg">
          <div className="ctc-about-1-text">
            <motion.p
              className="ctc-about-1-header"
              initial={{ x: -50, y: -30, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: loaded ? 0 : 0.25,
                duration: loaded ? 0.5 : 0.75,
              }}
            >
              About Us
            </motion.p>
            <motion.p
              className="ctc-about-1-desc"
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: loaded ? 0 : 0.4,
                duration: loaded ? 0.5 : 0.75,
              }}
            >
              Founded in 2020, Commit the Change started as a small group of
              undergraduate students with a shared love for coding and
              volunteering for causes in their communities. After merging with
              Blueprint in 2021, Commit the Change is now an established student
              organization at UC Irvine with a team of skilled designers and
              developers.
            </motion.p>
            <a
              onClick={() => handlePageChange(1)}
              className="no-text-decoration"
            >
              <motion.div
                className="ctc-about-1-button common-button"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: loaded ? 0 : 0.75, duration: 0.5 }}
              >
                Learn More
              </motion.div>
            </a>
          </div>
          <motion.div
            className="ctc-about-1-photo"
            initial={{ x: 500, y: 300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: loaded ? 0.5 : 1.5,
              type: "spring",
              bounce: 0.05,
            }}
          />
        </div>
        <div className="ctc-about-2-bg">
          <Footer className="about-footer" />
        </div>
      </ReactPageScroller>
    </main>
  );
};

export default About;
