import React from 'react';
import s from './Projects.module.css';
import sContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2>My projects</h2>
                <div className={s.projects}>
                    <Project title={'First project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur.'} />
                    <Project title={'Second project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor sit amet, consectetur adipisicing elit. Accusantium'} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
