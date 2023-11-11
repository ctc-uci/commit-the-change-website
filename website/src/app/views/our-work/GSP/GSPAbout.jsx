import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import Footer from "../../../components/Footer/Footer";
import gspImage from '../../../../images/nonprofits/Get-Inspired.png';
import gspAccent from './gsp-accent.svg';
import styles from "./GSPAbout.module.css";

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const GSPAbout = () => (
  <div className={styles["about-us-page-container"]}>
    {/* your HTML starts here! */}

    <main className={styles["about-us-main"]}>
      <div>
        <section className={styles["about-us-header"]}>

          {/* for your convenience, the npo logo */}
          <img src={gspImage} alt="Get Inspired Logo" className={styles['gsp-logo']} />

          <div>
            <div className={styles['project-title-and-links']}>
              <h1>Get Inspired</h1>
              <a href="https://github.com/ctc-uci/get-inspired/" className="primary-button">GitHub</a>
              <a href="https://getinspiredinc.org/" className="secondary-button">Official Website</a>
            </div>
            <p className={styles["project-timeline"]}>Fall 2022- Spring 2023</p>
          </div>
        </section>
        <div>
          <div className={styles["about-us-content"]}>
            <section>
              <h2>Mission</h2>
              <p>Get Inspired promotes ocean restoration awareness and education among youths through engaging the community in environmental stewardship. They host programs that educate students on marine life and provide volunteer opportunities to restore and preserve marine ecosystems.</p>
            </section>
            <section>
              <h2>Problem</h2>
              <p>Nancy, the director of Get Inspired, has been maintaining Pismo clam data using spreadsheets. However, as the volume of data grows, efficiently collecting and displaying the information has become increasingly challenging.</p>
            </section>
            <section>
              <h2>CTC&#39;s Solution</h2>
              <p>We built a web application and database to store and display a variety of information about Pismo clams, including their color, location, date and time of survey, and other key characteristics. Our interface allows Nancy to easily input, view, and query the data as necessary. The dashboard shows each survey&#39;s automatically calculated statistics, which will be used to identify ways to restore the clam population.</p>
            </section>
          </div>
        </div>
      </div>
      <img className={styles['accent-image']} src={gspAccent} alt="" />

    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default GSPAbout;
