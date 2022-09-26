import React from "react";
import PropTypes from "prop-types";

import "./VerticalTimeline.css";

const VerticalTimeline = ({ timelineValues }) => {
  const timeline = timelineValues.slice(1).map((value) => (
    <tr className="tl-row" key={value.date}>
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
        <span className="tl-description">{value.description}</span>
      </td>
    </tr>
  ));

  return (
    <div className="vert-tl-wrapper">
      <div className="tl-vert-line" />
      <table className="timeline-table" role="presentation">
        <thead>
          <tr className="tl-row" key={timelineValues[0].date}>
            <td className="tl-left-text">
              <h4>{timelineValues[0].leftText}</h4>
            </td>
            <td className="dot-cell">
              <div className="dot" />
            </td>
            <td className="right-cell">
              <div className="tl-header">
                <h2 className="header-text">{timelineValues[0].header}</h2>
                <p className="date-text">{timelineValues[0].date}</p>
              </div>
              <span className="tl-description">{timelineValues[0].description}</span>
            </td>
          </tr>
        </thead>
        <tbody>{timeline}</tbody>
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
      description: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default VerticalTimeline;
