import React from "react";
import * as S from "./styled";

export const CreateHeading = ({ h, text }) => {
  switch (h) {
    case "h1":
      return <S.Heading><h1>{text}</h1></S.Heading>;
    case "h2":
      return <S.Heading><h2>{text}</h2></S.Heading>;
    case "h3":
      return <S.Heading><h3>{text}</h3></S.Heading>;
    case "h4":
      return <S.Heading><h4>{text}</h4></S.Heading>;
    case "h5":
      return <S.Heading><h5>{text}</h5></S.Heading>;

    default:
      return null;
  }
};
