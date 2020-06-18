import React, { Component } from "react";

import "./products.css";

import { ProductsList } from "../products-list";
import { Product } from "../product";
import { withApiRequest } from "../hoc-helpers/withApiRequest";

class Products extends Component {
  state = { itemId: null };

  selectItem = (itemId) => {
    this.setState({ itemId });
  };

  render() {
    const { itemId } = this.state;
    const { response } = this.props;

    return (
      <section id="Products" className="products">
        <ProductsList data={response} selectItem={this.selectItem} />
        <Product itemId={itemId} />
      </section>
    );
  }
}

export const ProductsWithApiRequest = withApiRequest("getAllCakes", Products);
