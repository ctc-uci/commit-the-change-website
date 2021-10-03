import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import ctcLogo from '../../../images/logo/purple-ctc.svg';
import closeIcon from '../../../images/navbar/close.svg';
import animationConfigs from '../../views/animationConstants';
import './Nav.css';

function Nav() {
  const [open, toggleVisibility] = useState(false);
  const slideDown = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: 'translate(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  const slideDownMobileNav = useSpring(animationConfigs.slideDownNav(open));

  return (
    <nav>
      <div>
        <animated.div
          style={slideDownMobileNav}
          className="mobile-nav-links-container"
        >
          <div className="mobile-nav-content">
            <div className="mobile-nav-links">
              <Link
                onClick={() => {
                  toggleVisibility(false);
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  toggleVisibility(false);
                }}
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => {
                  toggleVisibility(false);
                }}
                to="/projects"
              >
                Our Work
              </Link>
              <Link
                onClick={() => {
                  toggleVisibility(false);
                }}
                to="/contact"
              >
                Contact Us
              </Link>
              {/* <Link
                onClick={() => {
                  toggleVisibility(false);
                }}
                to="/apply"
              >
                Apply Now
              </Link> */}
            </div>
            <button
              type="button"
              className="mobile-nav"
              onClick={() => {
                toggleVisibility(!open);
              }}
              onKeyDown={() => {
                toggleVisibility(!open);
              }}
            >
              <img
                className="mobile-nav-close-icon"
                src={closeIcon}
                alt="Close Button"
              />
            </button>
          </div>
        </animated.div>
        <animated.div style={slideDown} className="nav-bar">
          <div>
            <Link to="/">
              <img className="logo" src={ctcLogo} alt="Commit the Change logo" />
            </Link>
          </div>
          <ul className="navigation">
            <li>
              <Link to="/about" className="elem">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="elem">
                Our Work
              </Link>
            </li>
            <li>
              <button type="button" className="elem apply-button">
                <Link to="/contact" id="apply-link">
                  Contact Us
                </Link>
              </button>
            </li>
            {/* <li>
              <button type="button" className="elem apply-button">
                <Link to="/apply" id="apply-link">
                  Apply
                </Link>
              </button>
            </li> */}
          </ul>
          <button
            type="button"
            className="mobile-nav"
            onClick={() => {
              toggleVisibility(!open);
            }}
            onKeyDown={() => {
              toggleVisibility(!open);
            }}
          >
            <i className="fa fa-3x fa-bars hamburger" />
          </button>
        </animated.div>
      </div>
    </nav>
  );
}

export default Nav;
