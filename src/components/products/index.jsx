import React from "react";
import * as S from "./styled";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import { CreateHeading } from "../create-heading";
import { ParagraphsLineByLine } from "../paragraphs-line-by-line";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { withWebsiteContent } from "../hoc-helpers/withWebsiteContent";
import { compose } from "../../utils";

const ProductsRender = (props) => {
  const { response } = props;

  return (
    <S.Products>
      <CreateHeading h="h2" text="Ассортимент" />
      <ParagraphsLineByLine data={response} />
      <ProductsList />
      <Product />
    </S.Products>
  );
};

export const Products = compose(
  withApiRequest(),
  withWebsiteContent("getProductsInfoFill")
)(ProductsRender);
