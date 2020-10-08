import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

import * as S from "./styled";

const HeaderNavRender = (props) => {
  const { response } = props;

  const navMainMap = response.map(({ navMainWord, navMainRef, navPageRef }) => {
    return (
      <Nav.Link key={navMainWord}>
        <ScrollLink to={navPageRef} smooth offset={-100} duration={500}>
          <S.StyledLink to={navMainRef}>
            {navMainWord}
          </S.StyledLink>
        </ScrollLink>
      </Nav.Link>
    );
  });

  return (
    <S.Nav>
      <Navbar bg="light" variant="light" expand="lg" fixed="top" style={{ "box-shadow": "0 1px 7px #909090" }}>
        <Navbar.Brand href="/">BOHEMIAN CAKES</Navbar.Brand>
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
