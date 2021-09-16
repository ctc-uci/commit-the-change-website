import React from 'react';

import timelineValues from './TimelineValues';

import './VerticalTimeline.css';

const VerticalTimeline = () => {
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
      <table className="timeline-table">
        {timeline}
      </table>
    </div>
  );
};

export default VerticalTimeline;
