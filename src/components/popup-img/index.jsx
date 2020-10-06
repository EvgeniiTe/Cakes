import React from "react";

import { connect } from "react-redux";
import * as S from "./styled";

import { DrawImage } from "../draw-image";

export const PopupImgRender = ({ selectedItem: { picture } }) => {
    return (
        <S.TransparentContainer>
            <S.PopupImgContainer>
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

const mapStateToProps = ({ productSelected }) => {
    const { selectedItem, loading, error } = productSelected;
    return { selectedItem, loading, error };
};

export const PopupImg = connect(mapStateToProps)(PopupImgRender);
