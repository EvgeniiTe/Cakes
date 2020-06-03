import React from 'react';

import './header.css';
import SocialLinks from '../social-links/social-links';

const Header = () => {

    return(
        <header>
            <div className="header-footer-container">
                <div className="name">
                    <p>Bohemian Cakes</p>
                </div>
                <div className="logo">
                    <img src="#" alt="logo" />
                </div>
                <SocialLinks />
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