import React from "react";
import "./AISSProfiles.css";

import PropTypes from "prop-types";

const AISSProfiles = (props) => {
  const {
    name, major, quote, photo,
  } = props;

  return (
    <div className="profile">
      <img src={photo} alt={`Portrait of ${name}`} />
      <h5>{name}</h5>
      <h6>{major}</h6>
      <p>{quote}</p>
    </div>
  );
};

AISSProfiles.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default AISSProfiles;
