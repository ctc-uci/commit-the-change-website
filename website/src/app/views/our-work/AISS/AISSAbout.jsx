import React from "react";
// import Profile from "./profile.jsx";
// import Profile from "../../../components/AISSProfileCard/AISSProfiles";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./AISSAbout.css";
import AISSProfiles from "../../../components/AISSProfileCard/AISSProfiles";
import Footer from "../../../components/Footer/Footer";
import aissAccent1Image from "./Accent1.png";
import aissAccent2Image from "./Accent2.png";
import aissVectorImage from "./Vector.png";
import aissImage from '../../../../images/nonprofits/Achievement-Institute-Of-STEM-Scholars.png';
import ctcLogo from '../../../../images/logo/purple-ctc.svg';
import teamProfiles from "./teamProfiles";

const showAISSProfiles = (profileData) => (
  profileData.map((profile) => <AISSProfiles name={profile.name} major={profile.major} role={profile.role} />)
);

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const AISSAbout = () => (
  <div className="about-us-page-container">
    <main className="about-us-main">
      <div>
        <section className="about-header">
          {/* for your convenience, the npo logo */}
          <div className="logo-wrapper">
            <img src={aissImage} alt="Achievement Institute of Stem Scholars Logo" className="logo-image" />
          </div>
          <div className="header-content">
            <h1 className="header-title">Achievement Institute of STEM Scholars</h1>
            <div className="aiss-buttons-div">
              <a
                href="https://github.com/ctc-uci/commit-the-change-website"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Github
              </a>
              <a
                href="https://www.aissfoundation.org/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Official Site
              </a>
              <a
                href="#aiss-members"
                rel="noreferrer"
                className="secondary-button"
              >
                Our Team
              </a>
            </div>
            <p className="header-timerange">Fall 2023 - Spring 2024</p>
          </div>
        </section>
        <div className="about-us-column-container">
          <div className="about-us-content">
            <section className="paragraph-container">
              <h2 className="subheader">Mission</h2>
              <p className="paragraph-text">
                Achievement Institute for STEM Scholars is a college-readiness program catered towards high-achieving, economically disadvantaged high school students interested in pursuing a career in STEM. Their program takes on a cohort of students and spans through their junior and senior year of high school. Their aim is to provide students with a clear college-to-career pathway in the STEM fields by hosting STEM guest speakers, teach networking and communication skills, create student excursions to college campuses and STEM career facilities, hands-on STEM projects, and more.
              </p>
            </section>
            <section className="paragraph-container">
              <h2 className="subheader">Problem</h2>
              <p className="paragraph-text">
                Currently, AISS’s program only recruits every other year due to scheduling difficulties. They aspire to double their outreach by effectively handling two cohorts of students instead of solely one, but their current scheduling process is prone to errors such as overlapping schedules, lack of distinction in events, and inability to view previous events and guests.
              </p>
            </section>
            <section className="paragraph-container">
              <h2 className="subheader">
                <img src={ctcLogo} alt="Purple CTC logo" width="28.3rem" /> CTC&#39;s Solution
              </h2>
              <p className="paragraph-text">
                We’re creating a forward-looking event catalog that will streamline AISS’s planning and scheduling process, allowing them to manage cohorts with far greater ease. The system will provide admins with the capability to build a catalog of events, publish schedules, improve scheduling communication with notifications and tentative events, and offer students and staff access to the schedule.
              </p>
            </section>
            <section className="paragraph-container">
              <h2 className="subheader">About Our Team</h2>
              <p className="paragraph-text">
                We are a team of undergraduate Information and Computer Sciences students from UC Irvine, with various team members of project managers, full stack web developers, to UX designers working in a cross-functional team. We are passionate about helping students from underserved communities to access STEM education, as coming from STEM majors ourselves, we understand how vital its role is in assisting students to pursue a career in today’s technology-centered society. Our cooperative team is composed of students who are not only passionate about the social good, but are also enthusiastic about enriching and applying development and design skills to achieve this in our undergraduate career.
              </p>
            </section>
            <section id="aiss-members" className="paragraph-container">
              <h2 className="subheader">Members</h2>
              <div className="developers">
                {showAISSProfiles(teamProfiles)}
              </div>
            </section>
          </div>
          <div className="about-us-images">
            <img src={aissAccent1Image} alt="ctc-accent1" width="33%" />
            <img src={aissVectorImage} alt="ctc-vector-img" width="75%" />
            <img src={aissAccent2Image} alt="ctc-accent2" className="ctc-accent2" width="45%" />
          </div>
        </div>
      </div>
    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default AISSAbout;
