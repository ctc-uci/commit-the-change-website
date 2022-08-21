import React from 'react';
import { Link } from 'react-router-dom';

import maillogo from '../../../images/home/mail-new.svg';
import fblogo from '../../../images/home/fb-icon-purple.svg';
import instagramlogo from '../../../images/home/ig-icon-purple.svg';
import mediumlogo from '../../../images/home/medium-new.svg';
import linkedinlogo from '../../../images/home/linkedin-icon-purple.svg';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import whiteLogo from '../../../images/home/ctc-logo-white-transparent.svg';
import ochHikePicture from '../../../images/home/OCH-hike-photo.jpg';
import projectData from '../../projects-data.json';
import './Home.css';

const Home = () => {
  // todo: make these into components
  const socialMediaList = [
    <a
      href="mailto:ctc@uci.edu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={maillogo} alt="mail logo" className="social-logo" />
      <p id="link-name">Email</p>
    </a>,
    <a
      href="https://www.facebook.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={fblogo} alt="facebook logo" className="social-logo" />
      <p id="link-name">Facebook</p>
    </a>,
    <a
      href="https://www.instagram.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramlogo} alt="instagram logo" className="social-logo" />
      <p id="link-name">Instagram</p>
    </a>,
    <a
      href="https://www.linkedin.com/company/commit-the-change-uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinlogo} alt="linkedin logo" className="social-logo" />
      <p id="link-name">Linkedin</p>
    </a>,
    <a
      href="https://medium.com/@committhechange.uci"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={mediumlogo}
        alt="medium logo"
        className="medium-logo social-logo"
      />
      <p id="link-name">Medium</p>
    </a>,
  ];

  return (
    <div className="page">
      <div className="home-panel-1">
        <div className="home-1-left">
          <div className="home-1-left-body">
            <h1 className="home-1-heading-left">Commit the Change</h1>
            <h3 className="home-1-subheading-left">Tech with Purpose</h3>
            <p className="home-1-paragraph-left">Delivering high quality software for non-profit organizations while providing meaningful opportunities for UCI students</p>
            <button className="apply-button" type="button">Apply Now</button>
          </div>
        </div>
        <div className="home-1-right">
          <img className="home-1-right-logo" src={whiteLogo} alt="white CTC logo" />
        </div>
      </div>
      <div className="home-panel-2">
        <div className="home-2-left">
          <img className="home-2-left-image" src={ochHikePicture} alt="CTC members on a coastline hike with a nonprofit partner" />
        </div>
        <div className="home-2-right">
          <div className="home-2-left-body">
            <h1 className="home-2-heading-right">Who Are We?</h1>
            <p className="home-2-paragraph-1-right">
              Established in 2020, Commit the Change is a student
              <br />
              {' '}
              organization at UC Irvine committed to building high
              <br />
              {' '}
              quality tools & technologies completely free of charge.
            </p>
            <p className="home-2-paragraph-2-right">
              Each year we partner with nonprofits in Southern
              <br />
              {' '}
              California to design & develop mobile and web applications
              <br />
              {' '}
              to better support them in aiding our communities.
            </p>
            <Link to="/about"><button className="learn-more-button" type="button">Learn More</button></Link>
          </div>
        </div>
      </div>
      <div className="home-panel-3">
        <h1 className="current-projects-header">Current Projects</h1>
        <div className="current-projects-container">
          {
        projectData.map((p) => <ProjectCard link={p.link} name={p.name} description={p.description} />)
      }
        </div>
        <Link to="/projects"><button className="view-all-button" type="button">View All</button></Link>
      </div>
      <div className="home-panel-4">
        <h1 className="social-panel-header">Let&apos;s Keep In Touch!</h1>
        <p className="social-panel-paragraph">Want to stay in the loop? Got a question or an awesome project idea? Here’s where to find us:</p>
        <div className="social-icons-container">
          {socialMediaList}
          {/* <div className="icon-div">
            <img className="social-icon" src={mailIcon} alt="mail icon" />
            <p className="social-name">Email</p>
          </div>
          <div className="icon-div">
            <img className="social-icon" src={fbIcon} alt="facebook icon" />
            <p className="social-name">Facebook</p>
          </div>
          <div className="icon-div">
            <img className="social-icon" src={instagramIcon} alt="instagram icon" />
            <p className="social-name">Instagram</p>
          </div>
          <div className="icon-div">
            <img className="social-icon" src={mediumIcon} alt="medium icon" />
            <p className="social-name">Medium</p>
          </div>
          <div className="icon-div">
            <img className="social-icon" src={linkedinIcon} alt="linkedin icon" />
            <p className="social-name">LinkedIn</p>
          </div> */}
        </div>
        <div className='bottom-section'>
          <div className='students-section'>
            <div className='students-section-body'>
              <p className='students-header'>Students</p>
              <p><b>Ready to make a difference?</b> Want to learn valuable skills to build professional products with positive real world impacts? Send in your application today -<br />We&apos;re so excited to meet you!</p>
              <Link to='/apply' href='/#'><button className='students-button' type='button'>Apply Now</button></Link>
            </div>
          </div>
          <div className='non-profits-section'>
            <div className='nonprofits-section-body'>
              <p className='nonprofits-header'>Non Profits</p>
              <p><b>Got a project idea in mind?</b> Shoot it our way! Our dedicated team of hard working designers & developers are ready to assist you through the process!<br />Did we mention it&apos;s free?</p>
              <Link><button className='nonprofits-button' type='button' to='/contact' href='/#'>Contact us</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
