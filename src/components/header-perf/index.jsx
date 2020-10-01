import React from "react";
import { CreateDiv } from "../create-div";
import { headerElements } from "../header-footer-elements";
import * as S from "../header/styled";

export const HeaderPerf = () => {
  const headerElementsMap = headerElements.map(
    ({ element, className, props }) => (
      <CreateDiv key={element} childEl={element(props)} className={className} />
    )
  );
  return <S.HeaderContainer>{headerElementsMap}</S.HeaderContainer>;
};
