import React from 'react';

import './header.css';
import SocialLinks from '../social-links/social-links';
import Logo from '../logo/logo';

const Header = () => {

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

            <nav>
                <ul>
                    <li><a href="#">Начало</a></li>
                    <li><a href="#">Ассортимент</a></li>
                    <li><a href="#">Заказать</a></li>
                    <li><a href="#">Отзывы</a></li>
                </ul>
            </nav>  
        </header>
        
    );
};

export default Header;