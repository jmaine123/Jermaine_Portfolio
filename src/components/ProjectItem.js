import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({project, id}) {
    const { name, image, description, link} = project;
    const navigate = useNavigate();
    return (
        <div className="project"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <img src={image} alt='' />
            <div className='overlay'>
                <h2 className='project-title'>{name}</h2>
                <p className='project-text'>{description}</p>
                <button className='project-button'>
                    <a href={link}>Go to Project</a>
                </button>
            </div>
        </div>
    );
}

export default ProjectItem;