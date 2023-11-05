import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./FPHAbout.css";
import Footer from "../../../components/Footer/Footer";
import fphImage from '../../../../images/nonprofits/Feeding-Pets-Of-The-Homeless.png';
import ctcImage from '../../../../images/logo/purple-ctc.svg';
import fphDog from './fph-dog.svg';
import fphUpperTriangle from './fph-upper-triangle.svg';
import fphLowerTriangle from './fph-lower-triangle.svg';

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const FPHAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <main className="about-us-main">
      <div>
        <section>
          <h1>Feeding Pets of the Homeless</h1>

          {/* for your convenience, the npo logo */}
          <img src={fphImage} alt="Feeding Pets of the Homeless Logo" />
          {/* for your convenience, some basic styles defined elsewhere */}
          <button type="button" className="primary-button">Primary Button</button>
          <button type="button" className="secondary-button">Secondary Button</button>
        </section>
        <div className="fph-body-container">
          <div className="about-us-content">
            <section>
              <h2>Mission</h2>
              <p>Feeding Pets of the Homeless supports people experiencing homeless by <strong>feeding and providing basic emergency veterinary care </strong> to their pets to help relieve homeless guardians who cannot provide for them. They partner with volunteer donation sites who collect pet food and resources to donate to local food banks for those experience homelessness to access.</p>
            </section>
            <section>
              <h2>Problem</h2>
              <p>Currently, donation sites are not reporting their donation totals and Feeding Pets of the Homeless is having to manually call donation sites to check their status. Once the donation metrics are sent, Feeding Pets of the Homeless also has to manually upload the data into their database. This process is <strong>very inefficient and can lead to miscommunication</strong>.</p>
            </section>
            <section>
              <h2><img src={ctcImage} className="logo" alt="CTC logo" /> CTC&#39;s Solution</h2>
              <p>We are creating a <strong> dashboard to expedite the onboarding and donation reporting processes for donation sites. </strong> This platform will serve as a central hub where donation sites can register themselves and subsequently submit their donation totals. Using this data, donation sites can track their contributions with ease. Furthermore, Feeding Pets of the Homeless can access a view of all participating donation sites, monitor their onboarding status, and review their latest donation submissions.</p>
            </section>
          </div>
          <div>
            <img className="fph-dog fph-images" src={fphDog} alt="blue dog" />
            <img className="fph-lower-triangle fph-images" src={fphLowerTriangle} alt="blue triangle around blue dog" />
            <img className="fph-upper-triangle fph-images" src={fphUpperTriangle} alt="larger blue triangle aroung dog" />
          </div>
        </div>
      </div>
    </main>
    {/* your HTML ends here! */}
    <Footer />
  </div>
);

export default FPHAbout;
