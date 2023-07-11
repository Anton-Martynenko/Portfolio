import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum natus nobis odio odit pariatur perferendis quam saepe sit voluptate! Deserunt eos quia sint?'} />
                    <Skill title={'CSS'} description={'Super'} />
                    <Skill title={'JS'} description={'Great!!!'} />
                    <Skill title={'React'} description={'WOW!'} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
