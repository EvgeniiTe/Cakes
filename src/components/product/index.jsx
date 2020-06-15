import React, { Component } from "react";

import "./product.css";

import { getCake } from "../../services/service";
import { DrawImage } from "../draw-image";

export class Product extends Component {
  state = { selectedItem: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;

    if (typeof itemId !== "number") {
      return;
    }

    getCake(itemId).then((item) => {
      this.setState({ selectedItem: item });
    });
  }

  render() {
    const { selectedItem } = this.state;

    if (!selectedItem) {
      return null;
    }

    const { name, description, picture } = selectedItem;

    return (
      <article className="product">
        <div className="product-container">
          <h2 className="product-name">{name}</h2>
          <p className="product-info">{description}</p>
        </div>
        <DrawImage
          className="product-img"
          src={picture}
          width="600px"
          alt={name}
        />
      </article>
    );
  }
}
