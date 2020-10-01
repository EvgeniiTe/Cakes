import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

import * as S from "./styled";

const HeaderNavRender = (props) => {
  const { response } = props;

  const navMainMap = response.map(({ navMainWord, navMainRef }) => {
    return (
      <Nav.Link key={navMainWord}>
        <S.StyledLink to={navMainRef}>{navMainWord}</S.StyledLink>
      </Nav.Link>
    );
  });

  return (
    <S.Nav>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">Bohemian Cakes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{navMainMap}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </S.Nav>
  );
};

export const HeaderNav = compose(
  withApiRequest(),
  withWebsiteContent("getNavMain")
)(HeaderNavRender);
