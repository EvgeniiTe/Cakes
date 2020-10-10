import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as S from "./styled";
import { popupClose } from "../../actions";

import { DrawImage } from "../draw-image";

export const PopupImgRender = ({ selectedItem: { picture }, display, closeImg }) => {
  return (
    <S.TransparentContainer display={display}>
      <S.PopupImgContainer>
        <S.CloseButtonContainer onClick={() => closeImg()}>
          <DrawImage
            src="./pic/close.svg"
            width="100%"
          />
        </S.CloseButtonContainer>
        <S.Image>
          <DrawImage
            src={picture}
            width="100%"
          />
        </S.Image>
      </S.PopupImgContainer>

    </S.TransparentContainer>
  );
};

const mapStateToProps = ({ productSelected: { selectedItem }, popupImgDisplay: { display } }) => {
  return { selectedItem, display };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { closeImg: popupClose },
    dispatch
  );
};

export const PopupImg = connect(mapStateToProps, mapDispatchToProps)(PopupImgRender);
