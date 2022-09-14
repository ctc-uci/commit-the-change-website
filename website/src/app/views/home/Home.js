import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";

import maillogo from "../../../images/home/mail.svg";
import fblogo from "../../../images/home/fb.svg";
import instagramlogo from "../../../images/home/ig.svg";
import mediumlogo from "../../../images/home/md.svg";
import linkedinlogo from "../../../images/home/li.svg";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Footer from '../../components/Footer/Footer';
import whiteLogo from "../../../images/home/ctc-logo-white-transparent.svg";
import ochHikePicture from "../../../images/home/OCH-hike-photo.jpg";
import projectData from "../our-work/projectsData";
import "./Home.css";

const Home = () => {
  // todo: make these into components
  const socialMediaList = [
    <div className="ctc-home-4-social-container">
      <a
        href="mailto:ctc@uci.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={maillogo} alt="mail logo" className="ctc-home-4-mail-logo" />
        </div>
        <p className="ctc-home-4-social-title">Email</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container">
      <a
        href="https://www.facebook.com/ctc.uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={fblogo} alt="facebook logo" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Facebook</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container">
      <a
        href="https://www.instagram.com/ctc.uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={instagramlogo} alt="instagram logo" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Instagram</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container">
      <a
        href="https://www.linkedin.com/company/commit-the-change-uci/"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img src={linkedinlogo} alt="linkedin logo" className="ctc-home-4-social-logo" />
        </div>
        <p className="ctc-home-4-social-title">Linkedin</p>
      </a>
    </div>,
    <div className="ctc-home-4-social-container">
      <a
        href="https://medium.com/@committhechange.uci"
        target="_blank"
        rel="noopener noreferrer"
        className="ctc-home-4-social-link"
      >
        <div className="ctc-home-4-social-img-container">
          <img
            src={mediumlogo}
            alt="medium logo"
            className="ctc-home-4-medium-logo"
          />
        </div>
        <p className="ctc-home-4-social-title">Medium</p>
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
  <div className="ctc-home-bg">
    <motion.div
      className="ctc-home-1-bg"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.2,
      }}
    >
      <div className="ctc-home-1-left">
        <motion.p
          className="ctc-home-1-heading-left"
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "-100%",
          }}
          transition={{
            duration: loaded ? 0.3 : 1,
          }}
        >
          Commit the Change
        </motion.p>
        <motion.p
          className="ctc-home-1-subheading-left"
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "-100%",
          }}
          transition={{
            duration: loaded ? 0.3 : 1,
          }}
        >
          Tech with Purpose
        </motion.p>
        <motion.p
          className="ctc-home-1-paragraph-left"
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "-100%",
          }}
          transition={{
            duration: loaded ? 0.3 : 1,
          }}
        >
          Delivering high quality software for non-profit organizations
          while providing meaningful opportunities for UCI student developers
          and designers.
        </motion.p>
        <div className="ctc-home-1-buttons">
          <a href="/apply" className="ctc-home-1-apply-link">
            <motion.div
              className="ctc-home-1-apply-button"
              initial={{
                opacity: 0,
                y: "1000%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "1000%",
              }}
              transition={{
                duration: loaded ? 0.25 : 1,
                delay: loaded ? 0 : 0.5,
              }}
            >
              Apply Now
            </motion.div>
          </a>
        </div>
      </div>
      <motion.div
        className="ctc-home-1-right"
        initial={{
          opacity: 0,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: "100%",
        }}
        transition={{
          duration: loaded ? 0.5 : 1,
        }}
      >
        <img
          className="ctc-home-1-right-logo"
          src={whiteLogo}
          alt="white CTC logo"
        />
      </motion.div>
    </motion.div>
    <motion.div
      className="ctc-home-2-bg"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.div
        className="ctc-home-2-left"
        initial={{
          opacity: 0,
          x: "-100%",
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
        transition={{
          duration: 0.75,
        }}
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
        transition={{
          duration: 0.75,
        }}
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
        <a href="/about" className="ctc-home-2-button-link">
          <div className="ctc-home-2-learn-more-button">
            Learn More
          </div>
        </a>
      </motion.div>
    </motion.div>
    <motion.div
      className="ctc-home-3-bg"
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.h1
        className="ctc-home-3-header"
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          y: "-100%",
        }}
        transition={{
          duration: 0.75,
        }}
      >
        Current Projects
      </motion.h1>
      <div className="ctc-home-3-projects-container">
        {projectData.active.map(p => <ProjectCard {...p} />)}
      </div>
      <motion.div
        className="ctc-home-3-buttons"
        initial={{
          opacity: 0,
          y: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          y: "100%",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <a href="/projects" className="ctc-home-3-button-link">
          <div className="ctc-home-3-button">View All</div>
        </a>
      </motion.div>
    </motion.div>
    <motion.div
      className="ctc-home-4-bg"
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <motion.h1
        className="ctc-home-4-header"
        initial={{
          opacity: 0,
          rotate: -20,
        }}
        whileInView={{
          opacity: 1,
          rotate: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          rotate: -20,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        Let&apos;s Keep In Touch!
      </motion.h1>
      <motion.p
        className="ctc-home-4-p"
        initial={{
          opacity: 0,
          rotate: 20,
        }}
        whileInView={{
          opacity: 1,
          rotate: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          rotate: 45,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <span className="ctc-home-4-bold">Want to stay in the loop?</span>
        {' '}Got a question or an awesome project idea?
        Here’s where to find us:
      </motion.p>
      <motion.div
        className="ctc-home-4-socials-container"
        initial={{
          opacity: 0,
          y: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          y: "100%",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {socialMediaList}
      </motion.div>
      <motion.div
        className="ctc-home-4-options-container"
        initial={{
          opacity: 0,
          y: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
          y: "100%",
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <div className="ctc-home-4-left">
          <p className="ctc-home-4-column-header">Students</p>
          <p className="ctc-home-4-column-p">
            <b>Ready to make a difference?</b> Want to learn valuable skills
            to build professional products with positive real world impacts?
            Send in your application today - we&apos;re excited to meet you!
          </p>
          <a href="/apply" className="ctc-home-4-button-link">
            <div className="ctc-home-4-column-button">
              Apply Now
            </div>
          </a>
        </div>
        <div className="ctc-home-4-right">
          <p className="ctc-home-4-column-header">Non-Profits</p>
          <p className="ctc-home-4-column-p">
            <b>Got a project idea in mind?</b> Shoot it our way! Our
            dedicated team of hard-working designers &amp; developers
            are ready to assist you through the process!
            Did we mention it&apos;s free?
          </p>
          <a href="/contact" className="ctc-home-4-button-link">
            <div className="ctc-home-4-column-button">
              Contact us
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
    <Footer className="home-footer" />
  </div>
  );
};

export default Home;
