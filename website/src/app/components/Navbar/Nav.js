import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

import useViewport from "../../../util/useViewport";
import { Menu, X } from "react-feather";
import "./Nav.css";
import ctcLogo from "../../../images/logo/white-ctc.svg";
import iglogo from "../../../images/nav/ig.svg";
import fblogo from "../../../images/nav/fb.svg";
import mediumlogo from "../../../images/nav/md.svg";
import linkedinlogo from "../../../images/nav/li.svg";
import maillogo from "../../../images/nav/mail.svg";

const Nav = () => {
  const { width } = useViewport();
  const [open, toggleVisibility] = useState(false);
  const location = useLocation();
  const isActiveLink = (pathname) =>
    location.pathname === pathname
      ? "navbar-active-link navbar-link"
      : "navbar-link";
  const isActiveMobileLink = (pathname) =>
    location.pathname === pathname
      ? "mobile-nav-active-link mobile-nav-link"
      : "mobile-nav-link";
  return (
    <motion.nav
      className="nav-bar"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 60, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      <Link to="/">
        <div className="navbar-logo" />
      </Link>
      {width > 850 ? (
        <motion.div
          className="navbar-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link className={isActiveLink("/about")} to="/about">
            About Us
          </Link>
          <Link className={isActiveLink("/projects")} to="/projects">
            Projects
          </Link>
          <Link className={isActiveLink("/team")} to="/team">
            Our Team
          </Link>
          <Link className={isActiveLink("/contact")} to="/contact">
            Contact
          </Link>
          <Link className="navbar-link" to="/apply">
            <div className="navbar-apply-button">Apply</div>
          </Link>
        </motion.div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav"
            onClick={() => toggleVisibility(!open)}
            onKeyDown={() => toggleVisibility(!open)}
          >
            <Menu color="#000000" size={30} />
          </motion.button>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.75 }}
              className="mobile-nav-links-container"
              key={open}
            >
              <motion.div
                className="mobile-nav-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <div className="mobile-nav-links">
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className={isActiveMobileLink("/")}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className={isActiveMobileLink("/about")}
                    to="/about"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className={isActiveMobileLink("/projects")}
                    to="/projects"
                  >
                    Projects
                  </Link>
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className={isActiveMobileLink("/contact")}
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className={isActiveMobileLink("/team")}
                    to="/team"
                  >
                    Our Team
                  </Link>
                  <Link
                    onClick={() => toggleVisibility(false)}
                    className="mobile-nav-link"
                    to="/apply"
                  >
                    <div className="navbar-apply-button">Apply</div>
                  </Link>
                </div>
                <button
                  type="button"
                  className="mobile-nav"
                  onClick={() => toggleVisibility(!open)}
                  onKeyDown={() => toggleVisibility(!open)}
                >
                  <X color="#ffffff" size={30} />
                </button>
                <div className="mobile-nav-footer">
                  <div className="mobile-nav-footer-container">
                    <Link
                      to="/"
                      onClick={() => toggleVisibility(!open)}
                      onKeyDown={() => toggleVisibility(!open)}
                    >
                      <img
                        className="mobile-nav-footer-logo"
                        src={ctcLogo}
                        alt="ctc logo"
                      />
                    </Link>
                  </div>
                  <h2 className="mobile-nav-twp">Tech with Purpose.</h2>
                  <div className="mobile-nav-social-icons">
                    <a href="mailto:ctc@uci.edu" target="_top">
                      <img
                        src={maillogo}
                        alt="email icon"
                        className="mobile-nav-mail-icon mobile-nav-social-icon"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/ctc.uci/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={fblogo}
                        alt="facebook logo"
                        className="mobile-nav-social-icon"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/ctc.uci/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={iglogo}
                        alt="instagram logo"
                        className="mobile-nav-social-icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/commit-the-change-uci/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedinlogo}
                        alt="linkedin logo"
                        className="mobile-nav-social-icon"
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
                        className="mobile-nav-medium-icon mobile-nav-social-icon"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Nav;
