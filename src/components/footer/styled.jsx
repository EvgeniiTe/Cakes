import styled from "styled-components";
import { fontLightColor, HeaderFooterContainer, backgroundStressColor } from "../app/styled";

import { FlexItem } from "../header/styled";

export const Footer = styled.footer`
  padding: 20px 0;
  background-color: ${backgroundStressColor};
  margin: 0;
  text-align: center;
`;

export const FooterContainer = styled(HeaderFooterContainer)`
  
`;

export const FooterLogo = styled(FlexItem)`
  text-align: start;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const FooterName = styled(FlexItem)`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const Copyright = styled.p`
  color: ${fontLightColor};
  margin: -1rem 0;
`;
