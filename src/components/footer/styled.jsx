import styled from "styled-components";
import { HeaderFooterContainer } from "../app/styled";
import { FlexItem } from "../header/styled";

export const Footer = styled.footer`
  padding: 20px 0;
  background-color: #c2c3d5;
  margin: 0;
  text-align: center;
`;

export const FooterContainer = styled(HeaderFooterContainer)`
  align-items: center;
`;

export const FooterLogo = styled(FlexItem)`
  text-align: start;
`;

export const FooterName = styled(FlexItem)`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const Copyright = styled.p`
  color: #ffffff;
  margin: -1rem 0;
`;
