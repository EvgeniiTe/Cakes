import React from "react";

export const CreateDiv = ({ className, childEl }) => (
  <div className={className}>
    {typeof childEl === "function" ? childEl({}) : childEl}
  </div>
);
