import { updateProductsList } from "./updateProductsList";
import { updateProduct } from "./updateProduct";
import { updatePopupImgDisplay } from "./updatePopupImgDisplay";

export const reducer = (state, action) => {
  return {
    productsList: updateProductsList(state, action),
    productSelected: updateProduct(state, action),
    popupImgDisplay: updatePopupImgDisplay(state, action),
  };
};
