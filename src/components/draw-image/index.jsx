import React from 'react';

export const DrawImage = (props) => {

    const {
        className,
        src,
        height,
        width,
        alt,
        title
    } = props;
    
    return(
        <img className={className} src={src} height={height} width={width} alt={alt} title={title} />
    );
};