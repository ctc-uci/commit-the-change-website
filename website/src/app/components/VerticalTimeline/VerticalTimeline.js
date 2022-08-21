import React from "react";
import PropTypes from "prop-types";

import "./VerticalTimeline.css";

const VerticalTimeline = ({ timelineValues }) => {
  const timeline = timelineValues.map((value) => (
    <tr className="tl-row">
      <td className="tl-left-text">
        <h4>{value.leftText}</h4>
      </td>
      <td className="dot-cell">
        <div className="dot" />
      </td>
      <td className="right-cell">
        <div className="tl-header">
          <h2 className="header-text">{value.header}</h2>
          <p className="date-text">{value.date}</p>
        </div>
        <p className="tl-description">{value.description}</p>
      </td>
    </tr>
  ));

  return (
    <div className="vert-tl-wrapper">
      <div className="tl-vert-line" />
      <table className="timeline-table" role="presentation">
        {timeline}
      </table>
    </div>
  );
};

VerticalTimeline.propTypes = {
  timelineValues: PropTypes.arrayOf(
    PropTypes.shape({
      leftText: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VerticalTimeline;
