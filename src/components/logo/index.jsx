import React from 'react';

import { DrawImage } from '../draw-image';

export const Logo = ({ height }) => {

    return(
        <DrawImage 
            className="" 
            src="./pic/logo.png" 
            height={height}
            alt="logo" />
    );
};
