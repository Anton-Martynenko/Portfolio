import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div className={s.contacts}>
                    <form action={''} className={s.form}>
                        <input className={s.input}/>
                    </form>
                    <form action={''} className={s.form}>
                        <input className={s.input}/>
                    </form>
                    <textarea className={s.textarea}></textarea>
                </div>
                <div className={s.send}>
                    <a href="">Send</a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
