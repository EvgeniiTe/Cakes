import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreateDiv } from "../create-div";
import { footerElements } from "../header-footer-elements";
import * as S from "../footer/styled";

export const FooterBottom = () => {
  const footerElementsMap = footerElements.map(
    ({ element, className, props }) => (
      <Col lg="4" sm="12"><CreateDiv key={element} childEl={element(props)} className={className} /></Col>
    )
  );

  return (
    <S.FooterContainer>
      <Container fluid>
        <Row style={{ alignItems: "center" }}>
          {footerElementsMap}
        </Row>
      </Container>
    </S.FooterContainer>
  );
};
