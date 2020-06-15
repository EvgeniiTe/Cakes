import React from 'react';

export const CreateDiv = ({
  className,
  childEl,
}) => (
  <div className={className}>
    {childEl}
  </div>
);
