import React from 'react';

import './logo.css';

const Logo = (props) => {
    const { height } = props;

    return(
        <img src="./pic/logo.png" height={height} alt="logo" />
    );
};

export default Logo;