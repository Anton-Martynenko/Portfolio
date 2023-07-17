import React from 'react';
import s from './Footer.module.css';
import sContainer from '../common/styles/Container.module.css'
import FooterBlock from "./footerBlock/FooterBlock";


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Anton Martynenko</h2>
                <div className={s.centralBlock}>
                    <FooterBlock />
                    <FooterBlock />
                    <FooterBlock />
                    <FooterBlock />
                </div>
                <div className={s.rights}>
                    <h3>© 2023 All rights reserved</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
