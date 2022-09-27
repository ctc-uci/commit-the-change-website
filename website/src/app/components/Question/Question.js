import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import {
  animated, config, useSpring, useTransition,
} from 'react-spring';

const openQuestion = (state) => ({
  config: config.default,
  opacity: state ? 1 : 0,
  maxHeight: state ? '2000px' : '0px',
  display: 'block',
  from: { opacity: 0, maxHeight: '0px' },
});

const Question = ({
  index, questionText, answerText, expanded, handleClick,
}) => {
  const slideDown = useSpring(openQuestion(expanded));

  const transitions = useTransition(expanded, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const x = transitions.map(({ item, props }, i) => (item ? (
    <animated.div className="minus" key={i} style={props}>
      -
    </animated.div>
  ) : (
    <animated.div key={index} style={props}>+</animated.div>
  )));

  return (
    <div className="question-card">
      <div
        onClick={() => handleClick(index)}
        onKeyDown={() => handleClick(index)}
        role="tab"
        tabIndex={index}
        className="top-half"
      >
        <div className="symbol">
          <span className="expand-symbol">{x}</span>
        </div>
        <h2
          style={expanded ? { color: '#ed315d' } : null}
          className="question-text"
        >
          {questionText}
        </h2>
      </div>
      {expanded && (
        <animated.div style={slideDown} className="bottom-half">
          <p className="bottom-text">{answerText}</p>
        </animated.div>
      )}
    </div>
  );
};

Question.propTypes = {
  index: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Question.defaultProps = {
  expanded: false,
};

export default Question;
