import React from 'react';

import './footer.css';

import Logo from '../logo/logo'

import SocialLinks from '../social-links/social-links';

const Footer = () => {

    return(
        <footer>
            <div className="header-footer-container footer-container">
                <div className="logo flex-item">
                    <Logo height="100rem"/>
                </div>
                <div className="name flex-item">
                    <p>Bohemian Cakes</p>
                </div>
                <div className="flex-item">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;