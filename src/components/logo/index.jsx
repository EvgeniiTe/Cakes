import React from 'react';

export const Logo = (props) => {
    const { height } = props;

    return(
        <img src="./pic/logo.png" height={height} alt="logo" />
    );
};
