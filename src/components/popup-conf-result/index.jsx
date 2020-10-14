import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as S from "./styled";
import { popupOrderClose } from "../../actions";

import { DrawImage } from "../draw-image";
import { CreateHeading } from "../create-heading";

const PopupConfResultRender = ({ order, display, closeRes }) => {
  return (
    <S.TransparentContainer display={display.toString()}>
      <S.PopupResContainer>
        <S.CloseButtonContainer onClick={() => closeRes()}>
          <DrawImage
            src="./pic/close.svg"
            width="100%"
          />
        </S.CloseButtonContainer>
        <S.Message>
          <CreateHeading h="h3" text="Ваш заказ:" />
          <p>{order}</p>
          <p>
            В данный момент наша команда работает над автоматическим отправлением заказов.
            А пока, скопируйте информацию из этого окна и отправьте нам в Телеграм.
          </p>
        </S.Message>
      </S.PopupResContainer>

    </S.TransparentContainer>
  );
};

const mapStateToProps = ({ popupConfRes: { display, order } }) => {
  return { display, order };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { closeRes: popupOrderClose },
    dispatch
  );
};

export const PopupConfResult = connect(mapStateToProps, mapDispatchToProps)(PopupConfResultRender);
