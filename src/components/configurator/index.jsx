import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { compose } from "../../utils";
import { fetchCakes, orderCreated } from "../../actions";
import * as S from "./styled";
import { ConfiguratorForm } from "../configurator-form";
import { PopupConfResult } from "../popup-conf-result";

class ConfiguratorContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCakes();
  }

  render() {
    const { products, createOrder } = this.props;

    const listCakes = products.map((item) => {
      const { name } = item;
      return <option key={name}>{name}</option>;
    });

    return (
      <S.Configurator>
        <ConfiguratorForm listCakes={listCakes} onOrderCreated={(order) => createOrder(order)} />
        <PopupConfResult />
      </S.Configurator>
    );
  }
}

const mapStateToProps = ({ productsList: { products } }) => {
  return { products };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    {
      fetchCakes: fetchCakes(serviceFunctions),
      createOrder: orderCreated
    },
    dispatch
  );
};

export const Configurator = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(ConfiguratorContainer);
