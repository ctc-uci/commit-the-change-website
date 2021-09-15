import React from 'react';
import PropTypes from 'prop-types';

import timelineValues from './TimelineValues';

import './VerticalTimeline.css';

const VerticalTimeline = () => {
  const timeline = timelineValues.map((value) => (
    <div key={value.header} className="timeline-step">
      <div className="step-left ">
        <h4 className="step-left-text">{value.leftText}</h4>
        <div className="dot" />
      </div>
      <div className="step-right">
        <div className="right-header">
          <h2 className="step-name">{value.header}</h2>
          <p className="step-date">{value.date}</p>
        </div>
        <p className="step-description">
          {value.description}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="timeline-wrapper">
      {timeline}
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */

VerticalTimeline.propTypes = {
  timelineValues: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default VerticalTimeline;
