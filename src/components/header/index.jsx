import React from 'react';

import './header.css';

import { HeaderTop } from '../header-top'
import { HeaderNav } from '../header-nav';

export const Header = () => {

    return(
        <header id="Header">
            <HeaderTop />       
            <HeaderNav />
        </header>
        
    );
};
