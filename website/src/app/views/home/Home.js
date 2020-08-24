import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import homeLandingPic from '../../../images/home-pic.svg';

function Home() {
  return (
    <main>
      <div className="top-panel">
        <div className="top-left">
          <div className="inner-top-left">
            <img src={homeLandingPic} alt="Person" />
          </div>
        </div>
        <div className="top-right">
          <div className="text">
            <h1>
              What is
              {' '}
              <b>Commit the Change?</b>
            </h1>
            <p>
              We are a student organization at UC Irvine focused on delivering
              high quality software for nonprofit organizations free of charge
              and promoting technology for social good in our community.
            </p>
            <button id="learn-more" type="button">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="middle-panel">
        <h2>STUDENTS</h2>
        <p className="join-team">Want to join the team?</p>
        <p className="interested">
          Interested in using your skills in
          {' '}
          {' '}
          <b>programming</b>
          {' '}
          or
          {' '}
          {' '}
          <b>design</b>
          {' '}
          on projects
          that help non-profit organizations?
          <br />
          Join Commit the Change!
        </p>
        <div className="buttons">
          <button className="btn" id="projects-button" type="button">
            <Link to="/projects">Projects</Link>
          </button>
          <button className="btn" id="apply-button" type="button">
            <Link to="/contact-us">Apply Now!</Link>
          </button>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="bottom-content">
          <h2>Connect With Us!</h2>
          <p>
            Stay in the loop with us on our mission to create
            <br />
            <b>Tech With Purpose.</b>
          </p>
          <div className="social-media">
            <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-square fa-3x" />
            </a>
            <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-3x" />
            </a>
            <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square fa-3x" />
            </a>
            <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-medium fa-3x" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
