import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "react-bootstrap";
import * as S from "./styled";
import { popupOpen } from "../../actions";
import { DrawImage } from "../draw-image";
import { Loader } from "../loader";
import { ErrorIndicator } from "../error-indicator";
import { PopupImg } from "../popup-img";

// const ProductImg = { marginLeft: "auto" };

const ProductRender = ({ selectedItem: { name, description, picture }, openImg }) => {
  const upperName = name.toUpperCase();
  return (
    <>
      <S.Product>
        <Container fluid style={{ padding: "0" }}>
          <Row style={{ alignItems: "center" }}>
            <Col xl="6" lg="12">
              <S.ProductTextContainer>
                <S.ProductName>{upperName}</S.ProductName>
                <S.ProductInfo>{description}</S.ProductInfo>
              </S.ProductTextContainer>
            </Col>

            <Col xl="6" lg="12">
              <S.ProductImg onClick={() => openImg()}>
                <DrawImage
                  src={picture}
                  width="100%"
                  alt={name}
                />
              </S.ProductImg>
            </Col>

          </Row>
        </Container>
      </S.Product>
      <PopupImg />
    </>
  );
};

export const ProductContainer = ({ selectedItem, loading, error, openImg }) => {
  if (selectedItem === null && loading === false && error === null) {
    return null;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <ProductRender selectedItem={selectedItem} openImg={openImg} />;
};

const mapStateToProps = ({ productSelected }) => {
  const { selectedItem, loading, error } = productSelected;
  return { selectedItem, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { openImg: popupOpen },
    dispatch
  );
};

export const Product = connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
