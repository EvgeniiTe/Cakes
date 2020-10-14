import React from "react";
import { AbstractWithImage } from "../abstract-with-image";
import * as S from "./styled";

export const AbstractsLineByLine = ({ data }) => {
  const abstracts = data.map(({ storyInfoHead, storyInfoText, storyImageRef }) => {
    return (

      <AbstractWithImage
        key={storyInfoHead}
        heading={storyInfoHead}
        text={storyInfoText}
        image={storyImageRef}
      />
    );
  });

  return (
    <S.AbstractsContainer>
      {abstracts}
    </S.AbstractsContainer>
  );
};
