import React from 'react';
import './Footer.css';
import ctcLogo from '../../../images/logo/white-ctc.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="left-column">
          <div className="inner-left">
            Copyright Commit the Change
            <br />
            Illustrations from ___
            <br />
            Created in Irvine, CA
            <br />
            Est. 2020
          </div>
        </div>
        <div className="middle-column">
          <img className="footer-logo" src={ctcLogo} alt="ctc logo" />
          <h2>Tech with Purpose.</h2>
          <a href="mailto:committhechange.uci@gmail.com" target="_top">
            <i className="fa fa-envelope fa-lg" />
          </a>
          <a href="https://www.facebook.com/ctc.uci/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square fa-lg" />
          </a>
          <a href="https://www.instagram.com/ctc.uci/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-lg" />
          </a>
          <a href="https://www.linkedin.com/company/commit-the-change-uci/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-lg" />
          </a>
          <a href="https://medium.com/@committhechange.uci" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-medium fa-lg" />
          </a>
        </div>
        <div className="right-column">
          <div className="inner-right">
            <a href="/">Home</a>
            <br />
            <a href="/about">About</a>
            <br />
            <a href="/projects">Our Work</a>
            <br />
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
