import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";

import experienceData from "./experienceData";
import questionData from "../contact-us/faq";

import "./Apply.css";
import designGraphic from "../../../images/apply/designer_graphic.svg";
import devGraphic from "../../../images/apply/dev_graphic.svg";
import timelineValues from "./TimelineValues";
import useViewport from "../../../util/useViewport";
import VerticalTimeline from "../../components/VerticalTimeline/VerticalTimeline";
import Question from "../../components/Question/Question";
import Footer from "../../components/Footer/Footer";

const Apply = () => {
  const [loaded, setLoaded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { width } = useViewport();
  const handleClick = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);
  const applicationLink = "https://tinyurl.com/ctc-app-2021";
  const contactEmail = "ctc@uci.edu";
  const inlineEmail = (
    <a href={`mailto:${contactEmail}`} className="ctc-apply-email-link">
      {contactEmail}
    </a>
  );

  const experiences = experienceData.map(e => (
    <motion.div
      className="t-card"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1,
        duration: 0.75,
        type: "spring",
        damping: 15,
      }}
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
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
          }}
        >
          <div className="ctc-apply-1-container">
            <motion.p
              className="ctc-apply-1-header"
              initial={{
                opacity: 0,
                y: "-100%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "-100%",
              }}
              transition={{
                duration: 0.5,
                delay: loaded ? 0 : 0.5,
              }}
            >
              Hey future CTC-er!
            </motion.p>
            <motion.p
              className="ctc-apply-1-subhead"
              initial={{
                opacity: 0,
                y: "-200%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "-200%",
              }}
              transition={{
                duration: 0.5,
                delay: loaded ? 0 : 0.5,
              }}
            >
              Want to Join Our Team?
            </motion.p>
            <motion.p
              className="ctc-apply-1-p"
              initial={{
                opacity: 0,
                y: "200%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "200%",
              }}
              transition={{
                duration: 0.5,
                delay: loaded ? 0 : 0.9,
              }}
            >
              Apply to join our team as a designer or developer for the
              &apos;22-23 school year! Applications open around late September
              and close mid-October.
            </motion.p>
            <motion.div
              className="ctc-apply-1-buttons"
              initial={{
                opacity: 0,
                y: "200%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "200%",
              }}
              transition={{
                duration: 0.5,
                delay: loaded ? 0 : 0.9,
              }}
            >
              <a
                href={null}
                // href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                // className="ctc-apply-1-applink"
                className="ctc-apply-1-applink-disabled"
              >
                {/* <div className="ctc-apply-1-apply">Apply Now</div> */}
                <div className="ctc-apply-1-apply-disabled">
                  {width > 850
                    ? "The 2022-23 application opens in late September!"
                    : "Check back in late September!"}
                </div>
              </a>
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
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
          }}
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
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: loaded ? 0.5 : 0.75,
                delay: loaded ? 0 : 0.5,
                type: "spring",
                damping: 15,
              }}
              exit={{
                opacity: 0,
                y: -50,
              }}
            >
              Our Experiences
            </motion.p>
          </div>
          <motion.div
            className="ctc-apply-3-t"
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 0.75,
              delay: loaded ? 0 : 0.5,
              type: "spring",
              damping: 15,
              staggerChildren: 0.5,
            }}
            exit={{
              opacity: 0,
              y: -50,
            }}
          >
            {experiences}
          </motion.div>
        </div>
        <motion.div
          className="ctc-apply-4-bg"
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: loaded ? 0.5 : 0.75,
            delay: loaded ? 0 : 0.5,
            type: "spring",
            damping: 15,
          }}
        >
          <motion.p
            className="ctc-apply-4-header"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 200,
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 0.75,
              delay: loaded ? 0 : 0.5,
              type: "spring",
              damping: 15,
            }}
          >
            Application Timeline
          </motion.p>
          <motion.p
            className="ctc-apply-4-p"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 200,
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 0.75,
              delay: loaded ? 0 : 0.5,
              type: "spring",
              damping: 15,
            }}
          >
            All applicants will go through the same process, regardless of the
            role they&apos;re applying for. Keep reading for a brief timeline of
            our application process.
            <span className="ctc-apply-4-bold"> Have any questions? </span>
            Reach out to us on any of our social platforms or email us at{" "}
            {inlineEmail}.
          </motion.p>
          <motion.div
            className="ctc-apply-4-timeline-container"
            initial={{
              height: 0,
              opacity: 0,
            }}
            whileInView={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 1,
              type: "spring",
              damping: 15,
            }}
          >
            <VerticalTimeline timelineValues={timelineValues} />
          </motion.div>
          <div className="ctc-apply-4-buttons">
            <a
              href={null}
              // href={applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              // className="ctc-apply-4-applink"
              className="ctc-apply-4-applink-disabled"
            >
              {/* <div className="ctc-apply-4-apply">Apply Now</div> */}
              <div className="ctc-apply-4-apply-disabled">
                {width > 850
                  ? "The 2022-23 application opens in late September!"
                  : "Check back in late September!"}
              </div>
            </a>
          </div>
        </motion.div>
        <div className="ctc-apply-5-bg">
          <motion.div
            className="ctc-apply-5-top"
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              scaleY: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 0.75,
              delay: loaded ? 0 : 0.5,
            }}
          >
            <p className="ctc-apply-5-header">Got Questions?</p>
          </motion.div>
          <motion.div
            className="ctc-apply-5-faq-container"
            initial={{
              opacity: 0,
              y: "20%",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-20%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: loaded ? 0.5 : 0.75,
              delay: loaded ? 0 : 0.5,
              type: "spring",
              damping: 15,
            }}
          >
            <div className="ctc-apply-5-q-container">
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
            </div>
          </motion.div>
        </div>
        <Footer className="ctc-apply-footer" />
      </div>
    </main>
  );
};

export default Apply;
