import styled from "styled-components";
import { Link } from "react-router-dom";

import { DivWithBorder, WhiteDivWithBorder, backgroundMainColor } from "../app/styled";

export const ProductsCarousel = styled(WhiteDivWithBorder)`
  text-align: justify;
  padding-bottom: 40px;
`;

export const ProductImage = styled(DivWithBorder)`
  background-color: ${backgroundMainColor};
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  
  /* xs-размер (<=575px) */
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }

`;
