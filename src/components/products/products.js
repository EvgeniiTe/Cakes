import React, { Component } from 'react';

import './products.css';

import ProductsList from '../products-list/products-list';
import Product from '../product/product';
import Service from '../../services/service';

export default class Products extends Component {

    state ={
        itemId: null,
    };

    service = new Service();

    itemSelected = (itemId) => {
        this.setState({ itemId });
    }


    render() {   
    
        return(
            <section id="Products" className="products">
                <ProductsList 
                    data={this.service.getAllCakes()}
                    itemSelected={this.itemSelected} />
                <Product itemId={this.state.itemId}/>
            </section>
        );
    }
};
