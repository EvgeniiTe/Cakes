import React from 'react';

export const HeaderNav = () => {

    const navMain = [
        {
            navMainWord: 'Начало',
            navMainRef: '#'
        },
        
        {
            navMainWord: 'Ассортимент',
            navMainRef: '#'
        },

        {
            navMainWord: 'Заказать',
            navMainRef: '#'
        },

        {
            navMainWord: 'Отзывы',
            navMainRef: '#'
        },
    ];

    const navMainMap = navMain.map(({navMainWord, navMainRef}) => {
        return <li key={navMainWord}><a href={navMainRef}>{navMainWord}</a></li>
    });

    return(
        <nav>
            <ul>
                {navMainMap}
            </ul>
        </nav>
    );
};