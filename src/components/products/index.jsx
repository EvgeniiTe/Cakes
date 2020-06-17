import React, { Component } from "react";

import "./products.css";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import { getAllCakes } from "../../services/service";
import { withData } from "../hoc-helpers/with-data";

export class Temp extends Component {
  state = { itemId: null };

  selectItem = (itemId) => {
    this.setState({ itemId });
  };

  render() {
    const { itemId } = this.state;
    const { data } = this.props;

    return (
      <section id="Products" className="products">
        <ProductsList data={data} selectItem={this.selectItem} />
        <Product itemId={itemId} />
      </section>
    );
  }
}

export const Products = withData(getAllCakes, Temp);
