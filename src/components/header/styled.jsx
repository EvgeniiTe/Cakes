import styled from "styled-components";
import { HeaderFooterContainer } from "../app/styled";

export const Header = styled.header`
  background-color: #4da699;
  margin: 0;
`;

export const HeaderContainer = styled(HeaderFooterContainer)``;

export const FlexItem = styled.div`
  padding: 0 0 1rem 0;
`;

export const HeaderLogo = styled(FlexItem)`
  text-align: center;
`;

export const HeaderName = styled(FlexItem)`
  font-weight: bold;
  font-size: 45px;
  cursor: pointer;
  text-align: start;
  @media (max-width: 992px) {
    text-align: center;
  }
`;
