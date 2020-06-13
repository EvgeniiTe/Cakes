import React from 'react';
import { CreateDiv } from '../create-div';
import { headerElements } from './headerElements';

export const HeaderTop=  () => {
        return(
            <div className="header-footer-container header-container">
                {
                    headerElements.map(
                        ({element ,className }, index) => <CreateDiv  key={index} childEl={element} className={className} />
                        )
                }
            </div>
        );
    };