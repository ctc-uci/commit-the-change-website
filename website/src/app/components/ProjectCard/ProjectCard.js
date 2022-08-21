import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-feather';
import FYAlogo from '../../../images/home/FYAlogo.png';

function ProjectCard(props) {
  const { link, name, description } = props;
  return (
    <div className="card-wrapper">
      <img className="project-image" alt="NPO project logo" src={FYAlogo} />
      <div className="project-info">
        <Link className="project-name" to={{ pathname: link }} target="_blank">
          {name}
          {'   '}
          <ArrowUpRight />
        </Link>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
};

export default ProjectCard;
