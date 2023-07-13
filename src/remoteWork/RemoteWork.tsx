import React from 'react';
import s from './RemoteWork.module.css';
import sContainer from '../common/styles/Container.module.css'


function RemoteWork() {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${sContainer.container} ${s.remoteWorkContainer}`}>
                <h2>I am considering options for remote work</h2>
                <div className={s.remoteWork}>
                    <a href="">Hire me</a>
                </div>
            </div>
        </div>
    );
}

export default RemoteWork;
