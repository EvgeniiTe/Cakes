import React from "react";
import * as S from "./styled";

import { Configurator } from "../configurator";
import { OrderInfo } from "../order-info";

export const ConfiguratorPage = () => {
  return (
    <main>
      <S.MainContainer>
        <OrderInfo />
        <Configurator />
      </S.MainContainer>
    </main>
  );
};
