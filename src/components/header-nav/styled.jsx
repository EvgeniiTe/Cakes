import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 0 0 4rem 0;
  margin: 0 0 0 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;

  :hover {
    text-decoration: none;
    color: black;
  }
`;
