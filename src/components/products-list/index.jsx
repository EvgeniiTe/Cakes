import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link as ScrollLink } from "react-scroll";
import * as S from "./styled";
import { compose } from "../../utils";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { fetchCakes, fetchCake } from "../../actions";

import { DrawImage } from "../draw-image";
import { Loader } from "../loader";
import { ErrorIndicator } from "../error-indicator";

const ProductsListRender = ({ data, selectItem }) => {
  const items = data.map((item) => {
    const { id, name, picture } = item;
    return (
      <Col lg="auto" md="4" xs="12">
        <ScrollLink to="product" smooth offset={-100} duration={500}>
          <S.Item key={name} onClick={() => selectItem(id)}>
            <DrawImage src={picture} width="180px" alt={name} />
            <S.ItemName>{name}</S.ItemName>
          </S.Item>
        </ScrollLink>
      </Col>
    );
  });

  return (
    <S.Items>
      <Container fluid>
        <Row>{items}</Row>
      </Container>
    </S.Items>
  );
};
class ProductsListContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCakes();
  }

  render() {
    const { products, loading, error, selectItem } = this.props;
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return <ProductsListRender data={products} selectItem={selectItem} />;
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

export const ProductsList = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductsListContainer);
