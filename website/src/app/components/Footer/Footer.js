import React from 'react';
import './Footer.css';
import ctcLogo from '../../../images/logo/white-ctc.svg';
import iglogo from '../../../images/home/instagramlogo.svg';
import fblogo from '../../../images/home/facebooklogo.svg';
import mediumlogo from '../../../images/home/mediumlogo.svg';
import linkedinlogo from '../../../images/home/linkedinlogo.svg';
import maillogo from '../../../images/home/envelope-solid.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="left-column">
          <div className="inner-left">
            © Commit the Change
            {/* <br />
            Icons by
            {' '}
            <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons" style={{ color: 'white' }}>Flat Icons</a> */}
            <br />
            Created in Irvine, CA
            <br />
            Est. 2020
          </div>
        </div>
        <div className="middle-column">
          <img className="footer-logo" src={ctcLogo} alt="ctc logo" />
          <h2>Tech with Purpose.</h2>
          <a href="mailto:ctc@uci.edu" target="_top">
            <img src={maillogo} alt="email icon" className="social-logos-mail social-logos" />
          </a>
          <a href="https://www.facebook.com/ctc.uci/" target="_blank" rel="noopener noreferrer">
            <img src={fblogo} alt="facebook logo" className="social-logos" />
          </a>
          <a href="https://www.instagram.com/ctc.uci/" target="_blank" rel="noopener noreferrer">
            <img src={iglogo} alt="instagram logo" className="social-logos" />
          </a>
          <a href="https://www.linkedin.com/company/commit-the-change-uci/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="linkedin logo" className="social-logos" />
          </a>
          <a href="https://medium.com/@committhechange.uci" target="_blank" rel="noopener noreferrer">
            <img src={mediumlogo} alt="medium logo" className="social-logos-medium social-logos" />
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
