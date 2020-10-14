import React from "react";
import { CreateHeading } from "../create-heading";
import * as S from "./styled";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";
import { AbstractsLineByLine } from "../abstracts-line-by-line";

const MyStoryRender = ({ response }) => {
  return (
    <S.Story>
      <CreateHeading h="h2" text="ПОДРОБНЕЕ О КОНДИТЕРСКОЙ" />
      <AbstractsLineByLine data={response} />
    </S.Story>
  );
};

export const MyStory = compose(
  withApiRequest(),
  withWebsiteContent("getStoryInfoFill")
)(MyStoryRender);
