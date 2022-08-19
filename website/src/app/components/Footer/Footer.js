import React from "react";
import ctcLogo from "../../../images/logo/white-ctc.svg";
import iglogo from "../../../images/home/instagramlogo.svg";
import fblogo from "../../../images/home/facebooklogo.svg";
import mediumlogo from "../../../images/home/mediumlogo.svg";
import linkedinlogo from "../../../images/home/linkedinlogo.svg";
import maillogo from "../../../images/home/envelope-solid.svg";
import { motion } from "framer-motion/dist/framer-motion";

import useViewport from "../../../util/useViewport";
import "./Footer.css";

const Footer = ({ className }) => {
  const { width } = useViewport();

  return (
    width > 850 && (
      <motion.footer
        className={`${className ?? ""} footer`}
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{ duration: 0.5 }}
      >
        <div className="columns">
          <div className="left-column">
            <div className="inner-left">
              <p className="footer-left-text">© Commit the Change</p>
              <p className="footer-left-text">Created in Irvine, CA</p>
              <p className="footer-left-text">Est. 2020</p>
            </div>
          </div>
          <div className="middle-column">
            <img className="footer-logo" src={ctcLogo} alt="ctc logo" />
            <h2>Tech with Purpose.</h2>
            <a href="mailto:ctc@uci.edu" target="_top">
              <img
                src={maillogo}
                alt="email icon"
                className="social-logos-mail social-logos"
              />
            </a>
            <a
              href="https://www.facebook.com/ctc.uci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fblogo} alt="facebook logo" className="social-logos" />
            </a>
            <a
              href="https://www.instagram.com/ctc.uci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iglogo} alt="instagram logo" className="social-logos" />
            </a>
            <a
              href="https://www.linkedin.com/company/commit-the-change-uci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinlogo}
                alt="linkedin logo"
                className="social-logos"
              />
            </a>
            <a
              href="https://medium.com/@committhechange.uci"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mediumlogo}
                alt="medium logo"
                className="social-logos-medium social-logos"
              />
            </a>
          </div>
          <div className="right-column">
            <div className="inner-right">
              <div className="footer-right-link">
                <a href="/">Home</a>
              </div>
              <div className="footer-right-link">
                <a href="/about">About Us</a>
              </div>
              <div className="footer-right-link">
                <a href="/projects">Projects</a>
              </div>
              <div className="footer-right-link">
                <a href="/team">Our Team</a>
              </div>
              <div className="footer-right-link">
                <a href="/contact">Contact</a>
              </div>
              <div className="footer-right-link">
                <a href="/apply">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    )
  );
};

export default Footer;
