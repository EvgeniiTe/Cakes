import React from "react";
import * as S from "./styled";

import { MainInfo } from "../main-info";
import { ProductsCarousel } from "../products-carousel";
import { MyStory } from "../my-story";

export const HomePage = () => {
  return (
    <main>
      <S.MainContainer>
        <MainInfo />
        <ProductsCarousel />
        <MyStory />
      </S.MainContainer>
    </main>
  );
};
