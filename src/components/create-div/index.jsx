import React from 'react';

export const CreateDiv = (props) => {

    const {
        className,
        childEl
    } = props;

    return(
        <div className={className}>
            {typeof childEl ==='function'?childEl({}):childEl}
        </div>
    );
};