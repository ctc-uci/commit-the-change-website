import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

import values from "./values";
import Footer from '../../components/Footer/Footer';
import useViewport from '../../../util/useViewport';

import "./About.css";
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: loaded ? 0.2 : 0.8,
        }}
      >
        <div className="about-1-left">
          <div className="about-1-left-body">
            <motion.p
              className="about-1-left-heading"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              exit={{
                opacity: 0,
                y: -100,
              }}
              transition={{
                duration: 0.75,
                delay: loaded ? 0.5 : 0,
              }}
            >
              About Us
            </motion.p>
            <motion.p
              className="about-1-left-paragraph"
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.75,
                delay: loaded ? 0.5 : 0,
              }}
            >
              Founded in 2020, Commit the Change started as a small group
              of undergraduate students with a shared love for coding and 
              volunteering for causes in their communities.
              After merging with Blueprint in 2021, Commit the Change is
              now an established student organization at UC Irvine with a
              team of skilled designers and developers.
            </motion.p>
          </div>
          <motion.div
            className="ctc-about-1-photo"
            initial={{ x: 500, y: 300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{opacity: 0}}
            transition={{ duration: loaded ? 0.5 : 1.5, type: "spring", bounce: 0.05 }}
          />
        </div>
      </motion.div>
      <div className="about-panel-2">
        <div className="about-2-text">
          <motion.p
            className="about-2-header"
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              y: -50,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Our Mission
          </motion.p>
          <motion.p
            className="about-2-paragraph-1"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            At Commit the Change, our mission is to{' '}
            <b>
              develop high quality software for non-profit organizations
              while giving students at UC Irvine opportunities to develop
              tech with purpose.
            </b>
          </motion.p>
          <motion.p
            className="about-2-paragraph-2"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              x: 50,
            }}
            transition={{
              duration: 0.5,
            }}
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
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            y: 200,
          }}
          transition={{
            duration: loaded ? 0.25 : 1,
            type: "spring",
            bounce: 0.15,
          }}
        />
      </div>
      <motion.div
        className="about-panel-3"
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
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
          transition={{
            duration: 0.5,
          }}
        >
          Our Values &amp; Culture
        </motion.p>
        {width > 850 ? (
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            x: 100,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="values-row-1">
            {values.top.map(v => (
              <div className="value-container">
                <div className="value-info">
                  <img src={v.src} alt={v.alt} className="value-icon" />
                  <p className="value-name">{v.title}</p>
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>  
            ))}
          </div>
          <div className="values-row-2">
            {values.bottom.map(v => (
              <div className="value-container">
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
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            exit={{
              opacity: 0,
              x: 100,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {values.top.map(v => (
              <div className="value-container">
                <div className="value-info">
                  <img src={v.src} alt={v.alt} className="value-icon" />
                  <p className="value-name">{v.title}</p>
                  <p className="value-desc">{v.description}</p>
                </div>
              </div>  
            ))}
            {values.bottom.map(v => (
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
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          exit={{
            opacity: 0,
            y: -50,
          }}
          transition={{
            duration: 0.5,
          }}
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
          transition={{
            duration: 0.5,
          }}
        >
          After graduating from UC Irvine, alumni of Commit the Change
          go on to pursue careers in a variety of tech-related fields,
          including software engineering, computer science, UI/UX design,
          product design, and product management.{' '}
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
          transition={{
            duration: 0.4,
          }}
        >
          <div className="about-4-alumni-img" />
        </motion.div>
      </div>
      <Footer className="about-footer" />
    </div>
  );
};

export default About;
