import React from "react";
import { Element as ScrollToEl } from "react-scroll";
import * as S from "./styled";

import { HeaderPerf } from "../header-perf";
import { HeaderNav } from "../header-nav";

export const Header = () => (
  <S.Header>
    <ScrollToEl name="start">
      <HeaderNav />
    </ScrollToEl>
    <HeaderPerf />
  </S.Header>
);
