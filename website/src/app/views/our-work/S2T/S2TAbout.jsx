import React from 'react';

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import './S2TAbout.css';
import Footer from '../../../components/Footer/Footer';
import s2tImage from '../../../../images/nonprofits/Stand-Up-To-Trash.png';
// import purpleCtcLogo from "../../../../images/logo/purple-ctc.svg";
import whiteCtcLogo from '../../../../images/logo/white-ctc.svg';
// import s2tOtter from "../../../../images/nonprofits/Accent.png";

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const S2TAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <main className="about-us-main">
      {/* header */}
      <div className="about-us-lol">
        <section className="about-us-title">
          <img src={s2tImage} alt="Stand Up to Trash Logo" />
          <div className="about-us-title-sub">
            <div className="title-text">
              <h2>Stand Up to Trash</h2>

              <div className="about-us-title-buttons">
                <a href="https://github.com/ctc-uci/commit-the-change-website/tree/s2t-about">
                  <button type="button" className="primary-button">
                    Github
                  </button>
                </a>
                <a href="https://www.standuptotrash.com/">
                  <button type="button" className="secondary-button">
                    Official Website
                  </button>
                </a>
              </div>

              <h3 className="title-subtext">Fall 2023 - Spring 2024</h3>
            </div>
            {/* for your convenience, some styles defined elsewhere */}
          </div>
        </section>
      </div>

      {/* end of header */}
      <div className="about-us-content-container">
        <div className="about-us-content-border">
          <div className="about-us-content">
            <section>
              <h2 className="body-header-text">Mission</h2>
              <p className="body-text">
                Stand Up to Trash&apos;s Mission is to protect and conserve our
                ocean by raising awareness of the negative effects caused by
                plastic pollution through environmental education for future
                generations.
              </p>
            </section>
            <section>
              <h2 className="body-header-text">Problem</h2>
              <p className="body-text">
                Stand Up to Trash needs help streamlining their volunteer
                registration and trash collection. There is no centralized way
                for NPO&apos;s to view and export all events and trash data
                collected. The current process is done on paper and takes
                roughly 5 hours to complete.
              </p>
            </section>
            <section>
              <div className="body-header">
                <img src={whiteCtcLogo} alt="CTC Logo" className="body-logo" />
                <h2 className="body-header-text">CTC&#39;s Solution</h2>
              </div>
              <p className="body-text">
                A volunteer dashboard and management system where volunteers can
                sign up for events with accounts they can consistently use to
                keep track of their trash collected from each event. At these
                events, admins will check in volunteers and, once volunteers
                collect all their trash, record volunteer collected trash data.
                This data would move into an internal database where admins can
                edit and interact with to keep track of registered volunteers,
                how many checked-in, edit trash data, and potentially look at
                metrics in accordance with trash levels and track different
                events and see trash collected trends.
              </p>
            </section>
          </div>
          {/* <div className="about-us-image">
          <img className="otter-image" src={s2tOtter} alt="test" />
        </div> */}
        </div>
      </div>
    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default S2TAbout;
