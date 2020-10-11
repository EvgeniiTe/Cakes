import styled from "styled-components";
import { Link } from "react-router-dom";

import { whiteDivWithBorder } from "../app/styled";

export const SlickSlides = styled(whiteDivWithBorder)`
  text-align: justify;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;
