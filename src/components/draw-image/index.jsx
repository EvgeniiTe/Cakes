import React from 'react';

export const DrawImage = ({
    className,
    src,
    height,
    width,
    alt,
    title
    }) => {
    
    return(
        <img className={className} src={src} height={height} width={width} alt={alt} title={title} />
    );
};