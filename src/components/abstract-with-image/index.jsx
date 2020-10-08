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
          <Col xs="3">
            <DrawImage src={image} />
          </Col>
          <Col xs="9">
            <Row>
              <CreateHeading h="h5" text={heading} />
            </Row>
            <Row>
              <p style={{ textAlign: "left" }}>{text}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </S.AbstractWithImage>
  );
};
