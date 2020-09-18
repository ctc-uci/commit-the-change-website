import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import ctcLogo from '../../../images/logo/purple-ctc.svg';
import closeIcon from '../../../images/close.svg';
import './Nav.css';

function Nav() {
  const [open, toggleVisibility] = useState(false);
  const slideDown = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: 'translate(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });
  return (
    <animated.nav style={slideDown}>
      <div>
        <div
          className={`mobile-nav-links-container ${open ? 'open' : 'hidden'}`}
        >
          <div className="mobile-nav-content">
            <div className="mobile-nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Our Work</Link>
              <Link to="/contact">Apply Now</Link>
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
              <img className="mobile-nav-close-icon" src={closeIcon} alt="Close Button" />
            </button>
          </div>
        </div>
        <div className="nav-bar">
          <div clasName="left">
            <Link to="/">
              <img className="logo" src={ctcLogo} alt="ctc logo" />
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
                <Link to="/contact" className="apply-link">
                  Apply Now
                </Link>
              </button>
            </li>
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
        </div>
      </div>
    </animated.nav>
  );
}

export default Nav;
