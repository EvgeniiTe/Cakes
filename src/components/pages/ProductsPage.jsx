import React from "react";
import * as S from "./styled";

import { Products } from "../products";

export const ProductsPage = () => {
  return (
    <main>
      <S.MainContainer>
        <Products />
      </S.MainContainer>
    </main>
  );
};
