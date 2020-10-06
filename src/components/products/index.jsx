import React from "react";
import { Element as ScrollToEl } from "react-scroll";
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
      <ScrollToEl name="products">
        <CreateHeading h="h2" text="Ассортимент" />
      </ScrollToEl>
      <ParagraphsLineByLine data={response} />
      <ProductsList />
      <ScrollToEl name="product">
        <Product />
      </ScrollToEl>
    </S.Products>
  );
};

export const Products = compose(
  withApiRequest(),
  withWebsiteContent("getProductsInfoFill")
)(ProductsRender);
