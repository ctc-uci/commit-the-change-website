import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Footer from "../../components/Footer/Footer";

import Portfolio from "../../../CTC_Portfolio_2022_2023.pdf";
// import QuestionData from "./faq";
// import Question from "../../components/Question/Question";
import iglogo from "../../../images/contactUs/instagramlogo.svg";
import fblogo from "../../../images/contactUs/facebooklogo.svg";
import mediumlogo from "../../../images/contactUs/mediumlogo.svg";
import linkedinlogo from "../../../images/contactUs/linkedinlogo.svg";
import maillogo from "../../../images/contactUs/envelope-solid.svg";

import "./ContactUs.css";

const SocialMediaIcons = () => {
  const cards = [
    {
      name: "Email",
      image: maillogo,
      link: "mailto:ctc@uci.edu",
      special: "ctc-contact-2-email-img",
    },
    {
      name: "Facebook",
      image: fblogo,
      link: "https://www.facebook.com/ctc.uci/",
      special: false,
    },
    {
      name: "Instagram",
      image: iglogo,
      link: "https://www.instagram.com/ctc.uci/",
      special: false,
    },
    {
      name: "Medium",
      image: mediumlogo,
      link: "https://medium.com/@committhechange.uci",
      special: "ctc-contact-2-medium-img",
    },
    {
      name: "LinkedIn",
      image: linkedinlogo,
      link: "https://www.linkedin.com/company/commit-the-change-uci/",
      special: false,
    },
  ];
  return (
    <div className="ctc-contact-2-socials">
      {cards.map((card) => (
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ctc-contact-2-social-link"
        >
          <div className="ctc-contact-2-social-card">
            <img
              src={card.image}
              alt={`CTC ${card.name}`}
              className={
                card.special ? card.special : "ctc-contact-2-social-img"
              }
            />
            <div className="ctc-contact-2-social-text">{card.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

const ContactUs = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoaded(true);
    }, 750);
    return () => clearTimeout(load);
  }, []);

  const inlineEmail = (
    <a href="mailto:ctc@uci.edu" className="ctc-contact-1-email-link">
      ctc@uci.edu
    </a>
  );

  return (
    <main>
      <motion.div
        className="ctc-contact-bg"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: loaded ? 0.5 : 0.75 }}
      >
        <div className="ctc-contact-container">
          <div className="ctc-contact-1-container">
            <motion.div
              className="ctc-contact-1-leftcolumn"
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{ duration: loaded ? 0.5 : 1 }}
            />
            <div className="ctc-contact-1-rightcolumn">
              <motion.p
                className="ctc-contact-1-heading"
                initial={{
                  y: "-100%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                }}
                transition={{
                  delay: loaded ? 0 : 0.75,
                  duration: loaded ? 0.5 : 0.4,
                }}
              >
                Hey Nonprofits!
              </motion.p>
              <motion.p
                className="ctc-contact-1-subhead"
                initial={{
                  y: "-100%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                }}
                transition={{
                  delay: loaded ? 0 : 0.75,
                  duration: loaded ? 0.5 : 0.4,
                }}
              >
                Ready to work with us?
              </motion.p>
              <motion.p
                className="ctc-contact-1-p"
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "100%",
                  opacity: 0,
                }}
                transition={{
                  delay: loaded ? 0 : 1.1,
                  duration: 0.5,
                }}
              >
                We work with non-profit organizations throughout the school year
                (September 2022 - June 2023) on software projects that will have
                a meaningful, positive impact and will be a good learning
                experience for our team.
              </motion.p>
              <motion.p
                className="ctc-contact-1-p"
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "100%",
                  opacity: 0,
                }}
                transition={{
                  delay: loaded ? 0 : 1.1,
                  duration: 0.5,
                }}
              >
                If you would like to learn more about our organization or talk
                about how we can partner together in the future, please email us
                at {inlineEmail}!
              </motion.p>
              <motion.div
                className="ctc-contact-1-buttons"
                initial={{
                  y: "500%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "500%",
                  opacity: 0,
                }}
                transition={{
                  delay: loaded ? 0 : 1.1,
                  duration: 0.5,
                }}
              >
                <a
                  href={Portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctc-contact-1-link"
                >
                  <div className="ctc-contact-1-portfolio">
                    View our portfolio
                  </div>
                </a>
                <a
                  href="mailto:ctc@uci.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ctc-contact-1-link"
                >
                  <div className="ctc-contact-1-getintouch">Get in touch</div>
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="ctc-contact-2-container"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "-100%",
              opacity: 0,
            }}
            transition={{
              delay: loaded ? 0 : 0.75,
              duration: loaded ? 0.5 : 0.5,
            }}
          >
            <p className="ctc-contact-2-heading">Contact Us</p>
            <p className="ctc-contact-2-subhead">
              Want to stay in the loop? Got a question or an awesome project
              idea? Here&apos;s where to find us!
            </p>
            <SocialMediaIcons />
          </motion.div>
        </div>
        <Footer className="contact-footer" />
      </motion.div>
    </main>
  );

  // return (
  //   <div className="contact-us-page">
  //     <animated.div style={slideUp} className="top-panel">
  //       <div className="top-panel-text contact-mobile">
  //         <div className="inside-top-panel-text">
  //           <h3 className="contact-us-students">STUDENTS</h3>
  //           <h1 className="top-panel-title">
  //             {ContactUsData.topThird.titleText}
  //           </h1>
  //           <p className="top-panel-description">
  //             {ContactUsData.topThird.description}
  //           </p>
  //           <a href="#faq-section" className="common-pink-button">
  //             Read FAQ
  //           </a>
  //           <a
  //             href="https://docs.google.com/forms/d/e/1FAIpQLSeP9T6ov7Q8Q6C6LSuvpHWy4Q_SIfATvWhkbMy6nzgsLaDOMQ/viewform"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="common-pink-button"
  //           >
  //             Interest Form
  //           </a>
  //         </div>
  //       </div>
  //       <div className="top-panel-pic">
  //         <img
  //           src={contactUsImage}
  //           alt="Join the Commit the Change team"
  //           className="contact-us-top-panel-img"
  //         />
  //       </div>
  //     </animated.div>

  //     <div className="contact-us-middle-third">
  //       <div className="contact-us-middle-items">
  //         <img
  //           src={purpleLogo}
  //           alt="Commit the Change purple heart logo"
  //           className="heart-logo"
  //         />
  //         <animated.div
  //           style={slideUpInactiveNpo}
  //           className="middle-third-info"
  //         >
  //           <VisibilitySensor
  //             onChange={(isVisible) => {
  //               if (isVisible) setMiddleVisible(middleViewCount + 1);
  //             }}
  //           >
  //             <h3 className="middle-contact-header">
  //               {ContactUsData.middleThird.header}
  //             </h3>
  //           </VisibilitySensor>
  //           <h1 className="middle-contact-title">
  //             {ContactUsData.middleThird.topTitle}
  //           </h1>
  //           <p>{ContactUsData.middleThird.topDescription}</p>
  //           <p>
  //             {ContactUsData.middleThird.bottomDescription}
  //             {inlineEmail}!
  //           </p>
  //           <a
  //             href={Portfolio}
  //             className="common-pink-button"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             View our Portfolio
  //           </a>
  //           <a
  //             href="mailto:ctc@uci.edu"
  //             className="common-pink-button"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Get in Touch
  //           </a>
  //         </animated.div>
  //       </div>
  //     </div>

  //     <div className="contact-us-bottom-third" id="faq-section">
  //       <h1 className="faq-title">Frequently Asked Questions</h1>
  //       <div className="contact-us-bottom-third-items">
  //         {QuestionData.current.map((el, index) => (
  //           <Question
  //             index={index}
  //             key={index.toString()}
  //             questionText={el.question}
  //             answerText={el.answer}
  //             expanded={index === expandedIndex}
  //             handleClick={handleClick}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ContactUs;
