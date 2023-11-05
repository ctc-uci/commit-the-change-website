import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./FPHAbout.css";
import Footer from "../../../components/Footer/Footer";
import fphImage from '../../../../images/nonprofits/Feeding-Pets-Of-The-Homeless.png';

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const FPHAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <main className="about-us-main">
      <div>
        <section>
          {/* for your convenience, the npo logo */}
          <div className="header-container">
            <div className="header-image-container">
              <img src={fphImage} className="header-image" alt="Feeding Pets of the Homeless Logo" />
            </div>
            <div className="header-text-container">
              <div className="header-title-container">
                <h1 className="header-title">Feeding Pets of the Homeless</h1>
                {/* for your convenience, some basic styles defined elsewhere */}
                <a href="https://www.github.com">
                  <button type="button" className="primary-button">
                    GitHub
                  </button>
                </a>
                <a href="https://petsofthehomeless.org/">
                  <button type="button" className="secondary-button">
                    Official Site
                  </button>
                </a>
              </div>
              <h5 className="header-subtext">Fall 2023 - Spring 2024</h5>
            </div>
          </div>
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

export default FPHAbout;
