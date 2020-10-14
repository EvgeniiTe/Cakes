export const updatePopupConfRes = (state, action) => {
  if (state === undefined) {
    return {
      display: false,
      order: null
    };
  }

  switch (action.type) {
    case "CREATE_ORDER":
      return {
        display: true,
        order: action.payload
      };
    case "CLOSE_POPUP_ORDER":
      return {
        display: false,
        order: null
      };

    default:
      return state.popupConfRes;
  }
};
