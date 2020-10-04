import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./styled";

import { DrawImage } from "../draw-image";

export const SocialLinks = () => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 3, offset: 9 }} sm={{ span: 3, offset: 3 }} xs={{ span: 3, offset: 3 }}>
          <S.SocialLink>
            <a
              href="https://www.instagram.com/bohemian_cakes/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <DrawImage
                src="./pic/inst.png"
                height="40px"
                width="40px"
                alt="Instagram"
                title="Instagram"
              />
            </a>
          </S.SocialLink>
        </Col>

        <Col lg={{ span: 3, offset: 9 }} sm={{ span: 3, offset: 0 }} xs={{ span: 3, offset: 0 }}>
          <S.SocialLink>
            <a
              href="https://t.me/Bohemian_cakes"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <DrawImage
                src=".\pic\Telegram_2019_Logo.svg"
                height="40px"
                alt="Telegram"
                title="Telegram"
              />
            </a>
          </S.SocialLink>
        </Col>

      </Row>
    </Container>
  );
};
