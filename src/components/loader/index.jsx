import React from "react";
import { CircularProgress } from "@material-ui/core";
import * as S from "./styled.jsx";

export const Loader = () => {
  return (
    <S.Center>
      <CircularProgress color="secondary" />
    </S.Center>
  );
};
