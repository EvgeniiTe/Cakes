import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./styled";

import { CreateHeading } from "../create-heading";
import { DrawImage } from "../draw-image";

export const AbstractWithImage = ({ heading, text, image }) => {
  return (
    <S.AbstractWithImage>
      <Container>
        <Row>
          <Col sm="3" xs="12">
            <DrawImage src={image} width="60px" />
          </Col>
          <Col sm="9" xs="12">
            <Row style={{ justifyContent: "center" }}>
              <CreateHeading h="h5" text={heading} />
            </Row>
            <Row>
              <p style={{ textAlign: "justify" }}>{text}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </S.AbstractWithImage>
  );
};
