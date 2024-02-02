import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectData from '../../../data/projectsData';
import ctcLogo from '../../../images/logo/white-ctc.svg';
import { animationConfigs, animationStates, transitionConfigs } from '../../views/animationConstants';

import styles from './CurrentProjectSection.module.css';

const CurrentProjectSection = ({
  background, title, footer, className,
}) => {
  const test = (
    <div className="ctc-ourwork-comingsoon-box">
      <img className="ctc-ourwork-comingsoon-logo" src={ctcLogo} alt="" />
      <p className="ctc-ourwork-comingsoon-p">Check back this Fall to see our upcoming projects!</p>
    </div>
  );
  return (
    <section style={{ background }} className={`${styles['current-project-section']} ${className}`}>
      <motion.h1
        className="ctc-home-3-header"
        variants={animationConfigs.transformY('-100%', '-100%')}
        transition={transitionConfigs.simple(0.75)}
        {...animationStates.whileInView(true)}
      >
        {title}
      </motion.h1>
      <div className={styles["ctc-home-3-projects-container"]}>
        {(projectData.active.length === 0) ? (
          test
        )
          : projectData.active.map((p) => <ProjectCard key={p.projectName} {...p} />)}
      </div>
      <div className={styles['current-project-footer']}>
        {footer}
      </div>
    </section>
  );
};

CurrentProjectSection.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
  footer: PropTypes.element,
  className: PropTypes.string,
};

CurrentProjectSection.defaultProps = {
  background: 'rgba(0,0,0,0)',
  footer: null,
  className: '',
};

export default CurrentProjectSection;
