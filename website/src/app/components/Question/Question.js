import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = ({
  index, questionText, answerText, expanded, handleClick,
}) => (
  <div className="question-card">
    <div
      onClick={() => handleClick(index)}
      onKeyDown={() => handleClick(index)}
      role="tab"
      tabIndex={0}
      className="top-half"
    >
      <div className="symbol">
        <span className={`expand-symbol ${expanded ? 'expand-symbol-hidden' : 'expand-symbol-shown'}`}>+</span>
        <span className={`expand-symbol ${expanded ? 'expand-symbol-shown' : 'expand-symbol-hidden'}`}>-</span>
      </div>
      <h2
        style={expanded ? { color: '#ed315d' } : null}
        className="question-text"
      >
        {questionText}
      </h2>
    </div>
    <div className={`bottom-half ${expanded ? 'expand-text-shown' : 'expand-text-hidden'}`}>
      <p className="bottom-text">{answerText}</p>
    </div>
  </div>
);

Question.propTypes = {
  index: PropTypes.number.isRequired,
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  expanded: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Question.defaultProps = {
  expanded: false,
};

export default Question;
