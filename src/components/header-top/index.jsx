import React from 'react';

import { SocialLinks } from '../social-links';
import { Logo } from '../logo';
import { CreateDiv } from '../create-div';

export const HeaderTop = () => {

    const HeaderEl = [
        {
            HeaderElClass: "name flex-item",
            HeaderElChild: <p>Bohemian Cakes</p>
        },

        {
            HeaderElClass: "logo flex-item",
            HeaderElChild: <Logo height="280rem"/>
        },

        {
            HeaderElClass: "flex-item",
            HeaderElChild: <SocialLinks />
        },
        
    ];

    const HeaderElMap = HeaderEl.map(({HeaderElClass, HeaderElChild}) => {
        return <CreateDiv
                    key={`${HeaderElClass}+${HeaderElChild}`}
                    className={HeaderElClass}
                    childEl={HeaderElChild} />
    });
    
    return(
        <div className="header-footer-container header-container">
            {HeaderElMap}
        </div> 
    );
};