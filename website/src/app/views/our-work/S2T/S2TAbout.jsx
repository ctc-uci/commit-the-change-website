import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./S2TAbout.css";
import Footer from "../../../components/Footer/Footer";
import s2tImage from '../../../../images/nonprofits/Stand-Up-To-Trash.png';

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const S2TAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <main className="about-us-main">
      <div>
        <section>
          <h1>Stand Up to Trash</h1>

          <img src={s2tImage} alt="Stand Up to Trash Logo" />

          {/* for your convenience, some styles defined elsewhere */}
          <button type="button" className="primary-button">Primary Button</button>
          <button type="button" className="secondary-button">Secondary Button</button>
        </section>
        <div className="about-us-content">
          <section>
            <h2>Mission</h2>
          </section>
          <section>
            <h2>Problem</h2>
          </section>
          <section>
            <h2>CTC&#39;s Solution</h2>
          </section>
        </div>
      </div>

    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default S2TAbout;
