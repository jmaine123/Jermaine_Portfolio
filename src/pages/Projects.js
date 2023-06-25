import React from 'react';
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";


function Projects() {
    console.log(ProjectList);
    return (
      <div className="projects-grid">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} project={project} />
            );
          })}
      </div>
    );
  }



export default Projects;