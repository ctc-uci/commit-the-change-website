import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./FPHAbout.css";
import Footer from "../../../components/Footer/Footer";
import fphImage from '../../../../images/nonprofits/Feeding-Pets-Of-The-Homeless.png';
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
            </section>
            <section>
              <h2>Problem</h2>
            </section>
            <section>
              <h2>CTC&#39;s Solution</h2>
            </section>
          </div>
          <div>
            <img className="fph-dog" src={fphDog} alt="blue dog" />
            <img className="fph-lower-triangle" src={fphLowerTriangle} alt="lower triangle" />
            <img className="fph_upper_triangle" src={fphUpperTriangle} alt="upper triangle" />
          </div>
        </div>
      </div>
    </main>
    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default FPHAbout;
