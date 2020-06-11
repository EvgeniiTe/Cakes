import React from 'react';

import './header.css';
import { SocialLinks } from '../social-links';
import { Logo } from '../logo';
import { HeaderNav } from '../header-nav'

export const Header = () => {

    return(
        <header id="Header">
            <div className="header-footer-container header-container">
                <div className="name flex-item">
                    <p>Bohemian Cakes</p>
                </div>
                <div className="logo flex-item">
                    <Logo height="280rem"/>
                </div>
                <div className="flex-item">
                    <SocialLinks />
                </div>
            </div> 
        
            <HeaderNav />
        </header>
        
    );
};
