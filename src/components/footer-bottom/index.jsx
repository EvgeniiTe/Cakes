import React from 'react';

import { Logo } from '../logo'
import { SocialLinks } from '../social-links';
import { CreateDiv } from '../create-div';


export const FooterBottom = () => {

    const FooterEl = [
        {
            FooterElClass: "logo flex-item",
            FooterElChild: <Logo height="100rem"/>
        },

        {
            FooterElClass: "name flex-item",
            FooterElChild: <p>Bohemian Cakes</p>
        },

        {
            FooterElClass: "flex-item",
            FooterElChild: <SocialLinks />
        },
        
    ];

    const FooterElMap = FooterEl.map(({FooterElClass, FooterElChild}) => {
        return <CreateDiv
                    key={`${FooterElClass}+${FooterElChild}`}
                    className={FooterElClass}
                    childEl={FooterElChild} />
    });

    return(
        <div className="header-footer-container footer-container">
            {FooterElMap}
        </div>
    );
};
