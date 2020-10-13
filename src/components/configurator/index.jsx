import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withApiRequest } from "../hoc-helpers/withApiRequest";
import { compose } from "../../utils";
import { fetchCakes } from "../../actions";
import * as S from "./styled";
import { ConfiguratorForm } from "../configurator-form";

class ConfiguratorContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchCakes();
  }

  render() {
    const { products } = this.props;

    const listCakes = products.map((item) => {
      const { name } = item;
      return <option key={name}>{name}</option>;
    });

    return (
      <S.Configurator>
        <ConfiguratorForm listCakes={listCakes} />
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
    { fetchCakes: fetchCakes(serviceFunctions) },
    dispatch
  );
};

export const Configurator = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(ConfiguratorContainer);
