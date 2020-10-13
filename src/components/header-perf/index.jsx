import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreateDiv } from "../create-div";
import { headerElements } from "../header-footer-elements";
import * as S from "../header/styled";

export const HeaderPerf = () => {
  const headerElementsMap = headerElements.map(
    ({ element, className, props }) => (
      <Col key={element} lg="4" sm="12"><CreateDiv childEl={element(props)} className={className} /></Col>

    )
  );
  return (
    <S.HeaderContainer>
      <Container fluid>
        <Row>
          {headerElementsMap}
        </Row>
      </Container>
    </S.HeaderContainer>
  );
};
