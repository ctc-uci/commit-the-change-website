import React from 'react';
import PropTypes from 'prop-types';

const Timeline = (timelineValues) => {
  console.log(timelineValues);

  return (
    <div>
      <pre>{JSON.stringify(timelineValues, null, 2) }</pre>
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */

Timeline.propTypes = {
  timelineValues: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default Timeline;
