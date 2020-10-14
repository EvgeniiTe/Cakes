export const updatePopupImgDisplay = (state, action) => {
  if (state === undefined) {
    return { display: false };
  }

  switch (action.type) {
    case "OPEN_POPUP_IMG":
      return { display: true };
    case "CLOSE_POPUP_IMG":
      return { display: false };

    default:
      return state.popupImgDisplay;
  }
};
