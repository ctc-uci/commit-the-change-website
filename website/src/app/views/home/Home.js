import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import maillogo from '../../../images/home/mail.svg';
import fblogo from '../../../images/home/fb.svg';
import instagramlogo from '../../../images/home/ig.svg';
import linkedinlogo from '../../../images/home/li.svg';
// import ctcLogo from '../../../images/logo/white-ctc.svg';

// import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';
import whiteLogo from '../../../images/home/ctc-logo-white-transparent.svg';
import ochHikePicture from '../../../images/home/OCH-hike-photo.jpg';
// import projectData from '../our-work/projectsData';
import { animationConfigs, animationStates, transitionConfigs } from '../animationConstants';
import './Home.css';
import CurrentProjectSection from '../../components/CurrentProjectSection/CurrentProjectSection';

const Home = () => {
  // todo: make these into components
  const socialMediaList = [
    <div className="ctc-home-4-social-container" key="email">
      <a
        href="mailto:ctc@uci.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={maillogo} alt="Send an Email to CTC" className="ctc-home-4-mail-logo" />
        </div>
        <p className="ctc-home-4-social-title">Email</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container" key="facebook">
      <a
        href="https://www.facebook.com/ctc.uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={fblogo} alt="Visit CTC's Facebook" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Facebook</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container" key="instagram">
      <a
        href="https://www.instagram.com/ctc.uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={instagramlogo} alt="Visit CTC's Instagram" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Instagram</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container" key="linkedin">
      <a
        href="https://www.linkedin.com/company/commit-the-change-uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={linkedinlogo} alt="Visit CTC's LinkedIn" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Linkedin</p>
      </a>
    </div>,
  ];

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  return (
    <main>
      <div className="ctc-home-bg">
        <motion.div
          className="ctc-home-1-bg"
          variants={animationConfigs.scale(0.5, 0.6)}
          transition={transitionConfigs.spring(1, 0, 0.2)}
          {...animationStates.animate}
        >
          { /*
          Hacky solution for alt-text, but a good option given that the backgroud image is on the parent:
          see http://www.davidmacd.com/blog/alternate-text-for-css-background-images.html
        */}
          <span role="img" aria-label="Successful CTC graduates." />

          <div className="ctc-home-1-left">
            <motion.p
              className="ctc-home-1-heading-left"
              variants={animationConfigs.transformX('-100%', '-100%')}
              transition={transitionConfigs.simple(loaded ? 0.3 : 1)}
              {...animationStates.animate}
            >
              Commit the Change
            </motion.p>
            <motion.p
              className="ctc-home-1-subheading-left"
              variants={animationConfigs.transformX('-100%', '-100%')}
              transition={transitionConfigs.simple(loaded ? 0.3 : 1)}
              {...animationStates.animate}
            >
              Tech with Purpose
            </motion.p>
            <motion.p
              className="ctc-home-1-paragraph-left"
              variants={animationConfigs.transformX('-100%', '-100%')}
              transition={transitionConfigs.simple(loaded ? 0.3 : 1)}
              {...animationStates.animate}
            >
              Delivering high quality software for non-profit organizations
              while providing meaningful opportunities for UCI student developers
              and designers.
            </motion.p>
            <div className="ctc-home-1-buttons">
              <Link to="/apply" className="ctc-home-1-apply-link">
                <motion.div
                  className="ctc-home-1-apply-button"
                  variants={animationConfigs.transformY('1000%', '1000%')}
                  transition={transitionConfigs.simple(loaded ? 0.25 : 1, loaded ? 0 : 0.5)}
                  {...animationStates.animate}
                >
                  Apply Now
                </motion.div>
              </Link>
            </div>
          </div>
          <motion.div
            className="ctc-home-1-right"
            variants={animationConfigs.transformX('100%', '100%')}
            transition={transitionConfigs.simple(loaded ? 0.3 : 1)}
            {...animationStates.animate}
          >
            <img
              className="ctc-home-1-right-logo"
              src={whiteLogo}
              alt=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="ctc-home-2-bg"
          variants={animationConfigs.opacity(0, 0)}
          transition={transitionConfigs.simple(0.25)}
          {...animationStates.whileInView(true)}
        >
          <motion.div
            className="ctc-home-2-left"
            initial={{
              opacity: 0,
              x: '-100%',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              rotate: 45,
            }}
            transition={transitionConfigs.simple(0.75)}
          >
            <img
              className="ctc-home-2-left-image"
              src={ochHikePicture}
              alt="CTC members on a coastline hike with OC Habitats, our 2021-22 partner"
            />
          </motion.div>
          <motion.div
            className="ctc-home-2-right"
            initial={{
              opacity: 0,
              rotate: 45,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              rotate: -45,
            }}
            transition={transitionConfigs.simple(0.75)}
          >
            <h1 className="ctc-home-2-heading-right">Who Are We?</h1>
            <p className="ctc-home-2-paragraph-1-right">
              Established in 2020, Commit the Change is a student
              organization at UC Irvine committed to building high
              quality tools &amp; technologies completely free of charge.
            </p>
            <p className="ctc-home-2-paragraph-2-right">
              Each year, we partner with nonprofits in Southern California to
              design &amp; develop new tools and apps to better support them in
              aiding our communities.
            </p>
            <Link to="/about" className="ctc-home-2-button-link">
              <div className="ctc-home-2-learn-more-button">
                Learn More
              </div>
            </Link>
          </motion.div>
        </motion.div>
        <CurrentProjectSection
          title="Current Projects"
          background="#ffeff3"
          footer={(
            <motion.div
              className="ctc-home-3-buttons"
              variants={animationConfigs.transformY('100%', '100%')}
              transition={transitionConfigs.simple(0.5)}
              {...animationStates.whileInView(true)}
            >
              <Link to="/projects" className="ctc-home-3-button-link">
                <div className="ctc-home-3-button">View All</div>
              </Link>
            </motion.div>
          )}
        />
        {/* <motion.div
          className="ctc-home-3-bg"
          variants={animationConfigs.opacity(1, 0)}
          transition={transitionConfigs.simple(0.2)}
          {...animationStates.animate}
        >
          <motion.h1
            className="ctc-home-3-header"
            variants={animationConfigs.transformY('-100%', '-100%')}
            transition={transitionConfigs.simple(0.75)}
            {...animationStates.whileInView(true)}
          >
            Current Projects
          </motion.h1>
          <div className="ctc-home-3-projects-container">
            {(projectData.active.length === 0) ? (
              <div className="ctc-ourwork-comingsoon-box">
                <img className="ctc-ourwork-comingsoon-logo" src={ctcLogo} alt="" />
                <p className="ctc-ourwork-comingsoon-p">Check back this Fall to see our upcoming projects!</p>
              </div>
            )
              : projectData.active.map((p) => <ProjectCard key={p.projectName} {...p} />)}
          </div>
          <motion.div
            className="ctc-home-3-buttons"
            variants={animationConfigs.transformY('100%', '100%')}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            <Link to="/projects" className="ctc-home-3-button-link">
              <div className="ctc-home-3-button">View All</div>
            </Link>
          </motion.div>
        </motion.div> */}
        <motion.div
          className="ctc-home-4-bg"
          variants={animationConfigs.opacity(1, 0)}
          transition={transitionConfigs.simple(0.2)}
          {...animationStates.animate}
        >
          <motion.h1
            className="ctc-home-4-header"
            variants={animationConfigs.rotate(-20, -20)}
            transition={transitionConfigs.simple(loaded ? 0.4 : 0.25)}
            {...animationStates.whileInView(true)}
          >
            Let&apos;s Keep In Touch!
          </motion.h1>
          <motion.p
            className="ctc-home-4-p"
            variants={animationConfigs.rotate(20, 45)}
            transition={transitionConfigs.simple(loaded ? 0.5 : 0.25)}
            {...animationStates.whileInView(true)}
          >
            <span className="ctc-home-4-bold">Want to stay in the loop?</span>
            {' '}
            Got a question or an awesome project idea?
            Here’s where to find us:
          </motion.p>
          <motion.div
            className="ctc-home-4-socials-container"
            variants={animationConfigs.transformY('100%', '100%')}
            transition={transitionConfigs.simple(0.5)}
            {...animationStates.whileInView(true)}
          >
            {socialMediaList}
          </motion.div>
          <motion.div
            className="ctc-home-4-options-container"
            variants={animationConfigs.transformY('100%', '100%')}
            transition={transitionConfigs.simple(0.25)}
            {...animationStates.whileInView(true)}
          >
            <div className="ctc-home-4-left">
              <p className="ctc-home-4-column-header">Students</p>
              <p className="ctc-home-4-column-p">
                <b>Ready to make a difference?</b>
                {' '}
                Want to learn valuable skills
                to build professional products with positive real world impacts?
                Send in your application today - we&apos;re excited to meet you!
              </p>
              <Link to="/apply" className="ctc-home-4-button-link">
                <div className="ctc-home-4-column-button">
                  Apply Now
                </div>
              </Link>
            </div>
            <div className="ctc-home-4-right">
              <p className="ctc-home-4-column-header">Non-Profits</p>
              <p className="ctc-home-4-column-p">
                <b>Got a project idea in mind?</b>
                {' '}
                Shoot it our way! Our
                dedicated team of hard-working designers &amp; developers
                are ready to assist you through the process!
                Did we mention it&apos;s free?
              </p>
              <Link to="/contact" className="ctc-home-4-button-link">
                <div className="ctc-home-4-column-button">
                  Contact us
                </div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <Footer className="home-footer" />
      </div>
    </main>
  );
};

export default Home;
