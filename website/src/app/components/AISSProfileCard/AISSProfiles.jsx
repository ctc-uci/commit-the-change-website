import React from "react";
import "./AISSProfiles.css";

import PropTypes from "prop-types";

const AISSProfiles = (props) => {
  const {
    name, major, role,
  } = props;

  return (
    <div className="profile">
      <h4>{name}</h4>
      <h6>Major: {major}</h6>
      <h6>Role: {role}</h6>
    </div>
  );
};

AISSProfiles.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default AISSProfiles;
