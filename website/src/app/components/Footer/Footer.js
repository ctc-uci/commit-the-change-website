import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import ctcLogo from '../../../images/logo/white-ctc.svg';
import iglogo from '../../../images/nav/ig.svg';
import fblogo from '../../../images/nav/fb.svg';
import mediumlogo from '../../../images/nav/md.svg';
import linkedinlogo from '../../../images/nav/li.svg';
import maillogo from '../../../images/nav/mail.svg';

import useViewport from '../../../util/useViewport';
import { transitionConfigs } from '../../views/animationConstants';
import './Footer.css';

const Footer = ({ className }) => {
  const { width } = useViewport();

  return (
    width > 850 && (
      <motion.footer
        className={`${className ?? ''} footer`}
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ opacity: 0 }}
        transition={transitionConfigs.simple(0.5)}
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
                <Link to="/">Home</Link>
              </div>
              <div className="footer-right-link">
                <Link to="/about">About Us</Link>
              </div>
              <div className="footer-right-link">
                <Link to="/projects">Projects</Link>
              </div>
              <div className="footer-right-link">
                <Link to="/team">Our Team</Link>
              </div>
              <div className="footer-right-link">
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer-right-link">
                <Link to="/apply">Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    )
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
