import styled from "styled-components";
import { Link } from "react-router-dom";

import { whiteDivWithBorder } from "../app/styled";

export const ProductsCarousel = styled(whiteDivWithBorder)`
  text-align: justify;
  padding-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  :hover {
    text-decoration: none;
  }

  /* xs-размер (<=575px) */
  @media (max-width: 575px) {
    width: 100%;
  }
`;
