import React from "react";
import { AbstractWithImage } from "../abstract-with-image";
import * as S from "./styled";

export const AbstractsLineByLine = ({ data }) => {
  const abstracts = data.map(({ storyInfoHead, storyInfoText, storyImageRef }, index) => {
    return (

      <AbstractWithImage
        id={storyInfoHead.length + index}
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
