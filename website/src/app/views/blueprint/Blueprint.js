import React from 'react';
import Projects from './Blueprint.json';

import './Blueprint.css';

function BlueprintProjectCard(project) {
  const { name, url } = project;

  return (
    <div className="blueprint-project-card">
      <h2>{name}</h2>
      <div className="blueprint-project-container">
        <iframe src={url} className="blueprint-project-iframe" allow="autoplay" title={name} allowFullScreen />
      </div>
    </div>
  );
}

function Blueprint() {
  const projectCards = Projects.map((project) => BlueprintProjectCard(project));

  return (
    <div className="blueprint-page">
      <h1>Blueprint Winter Quarter Awards</h1>
      <div className="blueprint-projects">
        {projectCards}
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXUic4Ybo18ekf5zEgpUMBp84i0IS6oji7A4QgBWN8vVaf7g/viewform?embedded=true" width="90%" height="1000" frameBorder="0" marginHeight="0" marginWidth="0" title="Voting Form">Loading…</iframe>
    </div>
  );
}

export default Blueprint;
