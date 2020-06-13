import React from 'react';

import { DrawImage } from '../draw-image';

export const Logo = ({ height = '280rem' }) => {

    return(
        <DrawImage
            src="./pic/logo.png"
            height={height}
            alt="logo" />
    );
};
