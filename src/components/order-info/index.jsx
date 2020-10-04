import React from "react";
import * as S from "./styled";

import { CreateHeading } from "../create-heading";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

const OrderInfoRender = (props) => {
  const { response } = props;

  return (
    <S.OrderInfo>
      <CreateHeading h="h1" text="Заказ торта" />
      <ParagraphsLineByLine data={response} />
    </S.OrderInfo>
  );
};

export const OrderInfo = compose(
  withApiRequest(),
  withWebsiteContent("getOrderInfoFill")
)(OrderInfoRender);
