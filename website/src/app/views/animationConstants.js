import { config } from "react-spring";

// these animations take in a state and produce a config that relies on that state to animate
const animationConfigs = {
  slideUp: (state, delay = 0) => ({
    config: config.gentle,
    delay,
    opacity: state ? 1 : 0,
    transform: state ? "translate(0)" : "translateY(30px)",
    from: { opacity: 0, transform: "translateY(30px)" },
  }),
  slideInLeft: (state) => ({
    config: config.wobbly,
    opacity: state ? 1 : 0,
    transform: state ? "translate(0)" : "translateX(-50px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
  }),
  slideInRight: (state) => ({
    config: config.wobbly,
    opacity: state ? 1 : 0,
    transform: state ? "translateX(0)" : "translateX(100%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "tranlateX(0)" },
  }),
  trail: (state) => ({
    config: config.wobbly,
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    opacity: state ? 1 : 0,
    transform: state ? "translateY(0px)" : "translateY(50px)",
  }),
  scale: (state) => ({
    config: config.stiff,
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    opacity: state ? 1 : 0,
    transform: state ? "scale(1)" : "scale(0)",
  }),
  fadeIn: (state) => ({
    config: config.default,
    opacity: state ? 1 : 0,
    from: { opacity: 0 },
  }),
  fadeInStiff: (state) => ({
    config: config.stiff,
    opacity: state ? 1 : 0,
    from: { opacity: 0 },
  }),
  openQuestion: (state) => ({
    config: config.default,
    opacity: state ? 1 : 0,
    "max-height": state ? "2000px" : "0px",
    display: "block",
    from: { opacity: 0, "max-height": "0px" },
  }),
  slideDownNav: (state) => ({
    config: config.default,
    opacity: state ? 1 : 0,
    transform: state ? "translate(0)" : "translateY(-500px)",
    display: state ? "block" : "none",
    from: { opacity: 0, transform: "translateY(-500px)", display: "none" },
  }),
};

export default animationConfigs;
