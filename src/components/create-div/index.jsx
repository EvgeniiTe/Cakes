import React from "react";
import { withStyle } from "../hoc-helpers/withStyled";
import { HeaderName, HeaderLogo, FlexItem } from "../header/styled";
import { FooterName, FooterLogo } from "../footer/styled";

const CreateSimpleDiv = ({ childEl }) => (
  <>{typeof childEl === "function" ? childEl({}) : childEl}</>
);

const styledComponents = {
  HeaderName,
  HeaderLogo,
  FlexItem,
  FooterName,
  FooterLogo,
};

export const CreateDiv = ({ className, ...passThroughProps }) => {
  const Styled = styledComponents[`${className}`];

  const CreateDivWithStyled = withStyle(Styled, CreateSimpleDiv);

  return <CreateDivWithStyled {...passThroughProps} />;
};
