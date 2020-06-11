import React from 'react';

export const CreateDiv = (props) => {

    const {
        className,
        childEl
    } = props;

    return(
        <div className={className}>
            {childEl}
        </div>
    );
};