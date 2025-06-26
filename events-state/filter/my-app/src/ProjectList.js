
import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(({ img, category }, index) => (
        <img key={index} src={img} alt={category} />
      ))}
    </div>
  );
}

export default ProjectList;
