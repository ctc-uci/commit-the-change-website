import React from "react";
import "./Question.css";
import { animated, useSpring, useTransition } from "react-spring";
import animationConfigs from "../../views/animationConstants";

function Question(styleProps) {
  const { index, questionText, answerText, expanded, handleClick } = styleProps;

  const slideDown = useSpring(animationConfigs.openQuestion(expanded));

  const transitions = useTransition(expanded, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const x = transitions.map(({ item, props }) =>
    item ? (
      <animated.div className="minus" style={props}>
        -
      </animated.div>
    ) : (
      <animated.div style={props}>+</animated.div>
    )
  );

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
          style={expanded ? { color: "#ed315d" } : null}
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
}

export default Question;
