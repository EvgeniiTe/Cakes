import { updateProductsList } from "./updateProductsList";
import { updateProduct } from "./updateProduct";
import { updatePopupImgDisplay } from "./updatePopupImgDisplay";
import { updatePopupConfRes } from "./updatePopupConfRes";

export const reducer = (state, action) => {
  return {
    productsList: updateProductsList(state, action),
    productSelected: updateProduct(state, action),
    popupImgDisplay: updatePopupImgDisplay(state, action),
    popupConfRes: updatePopupConfRes(state, action),
  };
};
