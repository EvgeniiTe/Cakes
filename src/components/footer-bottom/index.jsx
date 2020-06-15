import React from "react";
import { CreateDiv } from "../create-div";
import { footerElements } from "../header-footer-elements";

export const FooterBottom = () => {
  const footerElementsMap = footerElements.map(
    ({ element, className, props }) => (
      <CreateDiv key={element} childEl={element(props)} className={className} />
    )
  );

  return (
    <div className="header-footer-container footer-container">
      {footerElementsMap}
    </div>
  );
};
