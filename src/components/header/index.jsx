import React from "react";

import * as S from "./styled";

import { HeaderPerf } from "../header-perf";
import { HeaderNav } from "../header-nav";

export const Header = () => (
  <S.Header>
    <HeaderNav />
    <HeaderPerf />
  </S.Header>
);
