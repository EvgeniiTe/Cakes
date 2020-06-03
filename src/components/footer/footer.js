import React from 'react';

import './footer.css';

import SocialLinks from '../social-links/social-links';

const Footer = () => {

    return(
        <footer>
            <div className="header-footer-container footer-container">
                <div className="logo-small">
                    <img src="#" alt="logo" />
                </div>
                <div className="name">
                    <p>Bohemian Cakes</p>
                </div>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;