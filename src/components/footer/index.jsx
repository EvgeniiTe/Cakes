import React from "react";

import * as S from "./styled";

import { FooterBottom } from "../footer-bottom";

export const Footer = () => (
  <S.Footer>
    <FooterBottom />
    <S.Copyright>
      <Copyright />
    </S.Copyright>
  </S.Footer>
);

const Copyright = () => {
  return <p>Copyright © Евгений Тельнов 2020 Все права защищены</p>;
};
