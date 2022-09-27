import React, { useState } from 'react';
import './Timeline.css';
import { animated, config, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const scale = (state) => ({
  config: config.stiff,
  from: {
    opacity: 0,
    transform: 'scale(0)',
  },
  opacity: state ? 1 : 0,
  transform: state ? 'scale(1)' : 'scale(0)',
});

const Timeline = () => {
  const [viewCount, set] = useState(0);

  const timeline = [
    <div>
      <p className="number">01</p>
      <div className="detail">
        <p className="event-title">APPLICATION</p>
        <p className="event-date">Sep. 19</p>
      </div>
    </div>,
    <div>
      <p className="number">02</p>
      <div className="detail">
        <p className="event-title">COFFEE CHAT</p>
        <p className="event-date">Oct 4 - Oct 8.</p>
      </div>
    </div>,
    <div>
      <p className="number">03</p>
      <div className="detail">
        <p className="event-title">DECISION</p>
        <p className="event-date">Oct. 10</p>
      </div>
    </div>,
  ];

  const trailAnimation = useTrail(
    timeline.length,
    scale(viewCount > 0),
  );

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) set(viewCount + 1);
      }}
    >
      <div className="timeline">
        {trailAnimation.map((props, index) => (
          <animated.div className="event" style={props}>
            {timeline[index]}
          </animated.div>
        ))}
      </div>
    </VisibilitySensor>
  );
};

export default Timeline;
