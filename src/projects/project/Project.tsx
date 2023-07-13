import React from 'react';
import s from './Project.module.css';
import LinkButton from "./LinkButton";

export type ProjectPropsType = {
    title: string
    description: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <LinkButton />
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;
