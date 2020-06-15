import React from "react";
import { CreateDiv } from "../create-div";
import { headerElements } from "../header-footer-elements";

export const HeaderTop = () => {
  const headerElementsMap = headerElements.map(
    ({ element, className, props }) => (
      <CreateDiv key={element} childEl={element(props)} className={className} />
    )
  );
  return (
    <div className="header-footer-container header-container">
      {headerElementsMap}
    </div>
  );
};
