import React from 'react';

import './header.css';
import {SocialLinks} from '../social-links';
import {Logo} from '../logo';

export const Header = () => {

    const navInfo = [
        {
            word: 'Начало',
            ref: '#'
        },
        
        {
            word: 'Ассортимент',
            ref: '#'
        },

        {
            word: 'Заказать',
            ref: '#'
        },

        {
            word: 'Отзывы',
            ref: '#'
        },
    ];

    const navInfoMap = navInfo.map(({word, ref}) => {
        return <li><a href={ref}>{word}</a></li>
    });

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
                    {navInfoMap}
                </ul>
            </nav>  
        </header>
        
    );
};
