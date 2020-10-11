import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";
import * as S from "./styled";
import { compose } from "../../utils";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { fetchCakes, fetchCake } from "../../actions";

import { DrawImage } from "../draw-image";
import { Loader } from "../loader";
import { ErrorIndicator } from "../error-indicator";

const ProductsCarouselRender = ({ data, selectItem, sliderSettings }) => {
  const items = data.map((item) => {
    const { id, name, picture } = item;
    return (
      <div>

        <S.StyledLink key={name} to="/products" onClick={() => selectItem(id)}>
          <DrawImage src={picture} width="100%" height="100px" alt={name} />
        </S.StyledLink>
      </div>
    );
  });

  return (
  // <S.Items>
    <Slider {...sliderSettings}>{items}</Slider>
  // </S.Items>
  );
};
class ProductsCarouselContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCakes();
  }

  render() {
    const { products, loading, error, selectItem } = this.props;

    const sliderSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return (
      <ProductsCarouselRender
        data={products}
        selectItem={selectItem}
        sliderSettings={sliderSettings}
      />
    );
  }
}

const mapStateToProps = ({ productsList: { products, loading, error } }) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    {
      fetchCakes: fetchCakes(serviceFunctions),
      selectItem: fetchCake(serviceFunctions),
    },
    dispatch
  );
};

export const ProductsCarousel = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductsCarouselContainer);
