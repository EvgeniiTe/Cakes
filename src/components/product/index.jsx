import React, { Component } from 'react';

import './product.css';

import { getCake } from '../../services/service'

export class Product extends Component {

    state={
        selectedItem: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
          this.updateItem();
        }
    }

    updateItem() {
        const { itemId } = this.props;

        if (!itemId) {
            return;
        };

        getCake(itemId)
            .then((item) => {                
                this.setState({
                    selectedItem: item,
                });
            });
    }

    render() {

        const { selectedItem } = this.state;

        if (!selectedItem) {
            return null;
        };

        const { name, description, picture } = selectedItem;

        // const nameUpper = name.toUpperCase();

        return(
            <article className="product">
                <div className="product-container">
                    <h2 className="product-name">{name}</h2>
                    <p className="product-info">{description}</p>
                </div>
                <img className="product-img" src={picture} alt="Торт1" width="600px" />
            </article>
        );
    }
}