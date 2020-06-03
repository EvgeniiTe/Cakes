import React from 'react';

import './products.css';

import ProductsList from '../products-list/products-list';
import Product from '../product/product';

const Products = () => {

    return(
        <section className="products">
            <ProductsList />
            <Product />
        </section>
    );
};

export default Products;